import { useState } from "react";
import { useLocationData } from "../services/useWeatherData";
import { SearchBar } from "./SearchBar";

export const Search = () => {
  const [value, setValue] = useState("");
  const result = useLocationData(value);

  return (
    <>
      <SearchBar onInput={(e) => setValue(e.currentTarget.value)} />
      {result.status === "success" && (
        <ul className="flex flex-col gap-4">
          {result.data.map((entry) => (
            <li key={entry.id}>
              <button className="rounded-full bg-white p-4 cursor-pointer">{`${entry.name}, ${entry.state}`}</button>
            </li>
          ))}
        </ul>
      )}
      {result.status === "error" && <p>{result.message}</p>}
    </>
  );
};
