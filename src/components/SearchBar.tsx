import { Search as SearchIcon } from "lucide-react";
import cn from "../lib/utils";

type SearchBarProps = {
  onInput: React.FormEventHandler<HTMLInputElement>;
};

export const SearchBar = ({ onInput }: SearchBarProps) => {
  const handleSubmit = (formData: FormData) => {
    console.log("submit", formData);
  };

  return (
    <form className={cn("flex w-[80vmin]")} action={handleSubmit}>
      <input
        className={cn(
          "flex-1 border border-white rounded-tl-full rounded-bl-full py-2 px-4 placeholder:text-black/60",
          "outline-none focus-visible:ring-[3px] focus-visible:border-white focus-visible:ring-white/50 ring-inset",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        )}
        name="search"
        type="text"
        placeholder="Ort oder Adresse eingeben"
        autoComplete="off"
        onInput={onInput}
      />
      <button
        className={cn(
          "w-fit bg-white border border-white rounded-br-full rounded-tr-full pr-4 pl-3 cursor-pointer hover:bg-teal-400  hover:border-teal-400 hover:text-white transition-colors duration-250 ease-out",
          "outline-none focus-visible:ring-[3px] focus-visible:border-white focus-visible:ring-white/50 ring-inset",
        )}
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};
