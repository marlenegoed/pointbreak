import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useLocationData, type Location } from "../services/useLocationData";
import { SearchBar, SearchBarArrowBtn, SearchBarInput } from "./SearchBar";
import { SearchResult, SearchResultItem } from "./SearchResult";
import { Weather } from "./Weather";
import { Spinner } from "./Spinner";

export const Search = () => {
  const [value, setValue] = useState("");
  const [searching, setSearching] = useState(true);

  const location = parseLocation(value);
  const result = useLocationData(location.city, location.state);

  const setInputValue = (entry: Location) => {
    setValue(`${entry.name}, ${entry.state}`);
  };

  const selectFirstLocation = () => {
    setSearching(false);
    if (result.status === "success" && result.data.length) {
      setInputValue(result.data[0]);
      return;
    }
  };

  let message = "";
  if (result.status === "error") {
    message = result.message;
  } else if (
    !searching &&
    result.status === "success" &&
    result.data.length === 0
  ) {
    message =
      "Der eingegebene Ort konnte nicht gefunden werden. Bitte gebe einen Ort in Deutschland ein.";
  }

  return (
    <form
      className="w-full flex flex-col items-center h-[calc(100dvh_-_12.75rem)]"
      action={selectFirstLocation}
    >
      <SearchBar>
        <SearchIcon size={18} />
        <SearchBarInput
          onInput={(e) => {
            setValue(e.currentTarget.value);
            setSearching(true);
          }}
          value={value}
          name="location"
        />
        <SearchBarArrowBtn type="submit" />
      </SearchBar>

      {value !== "" &&
        result.status === "success" &&
        result.data.length > 0 && (
          <>
            {searching && (
              <SearchResult>
                {result.data.map((entry) => (
                  <SearchResultItem
                    key={entry.id}
                    onClick={() => {
                      setInputValue(entry);
                      setSearching(false);
                    }}
                  >
                    {`${entry.name}, ${entry.state}`}
                  </SearchResultItem>
                ))}
              </SearchResult>
            )}

            {!searching && (
              <Weather lat={result.data[0].lat} lon={result.data[0].lon} />
            )}
          </>
        )}
      {message && (
        <p className="max-w-150 text-center text-white mt-4">{message}</p>
      )}
      {result.status === "pending" && <Spinner />}
    </form>
  );
};

function parseLocation(value: string) {
  const [city, state] = value.split(",");

  return {
    city,
    state: state ? state.trim() : undefined,
  };
}
