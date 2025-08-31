import { MoveRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

export const SearchBar = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className="flex gap-3 shrink-0 max-w-150 w-full h-12 border border-gray-50 rounded-lg bg-white drop-shadow-sm items-center px-3 mb-4"
      {...props}
    >
      {children}
    </div>
  );
};

export const SearchBarInput = ({
  onInput,
  value,
}: ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      className="placeholder:text-black/60 flex-1 outline-none focus-visible:ring-[3px] focus-visible:border-white focus-visible:ring-white/50 ring-inset aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
      name="search"
      type="text"
      value={value}
      placeholder="Ort oder Adresse eingeben"
      autoComplete="off"
      onInput={onInput}
    />
  );
};

export const SearchBarArrowBtn = ({
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={
        "w-fit cursor-pointer hover:text-[#ad95ad] transition-colors duration-250 ease-out mr-1 outline-none focus-visible:ring-[3px] focus-visible:border-white focus-visible:ring-white/50 ring-inset"
      }
      {...props}
    >
      <MoveRight size={20} />
    </button>
  );
};
