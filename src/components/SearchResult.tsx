import type { ComponentPropsWithoutRef } from "react";

export const SearchResult = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"ul">) => {
  return (
    <ul
      className="flex flex-col gap-2 bg-white w-full max-w-150 max-h-[20rem] overflow-auto rounded-lg drop-shadow-sm p-2"
      {...props}
    >
      {children}
    </ul>
  );
};

export const SearchResultItem = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <li>
      <button
        className="w-full rounded-lg cursor-pointer text-left hover:bg-gray-100 transition-colors duration-250 ease-out p-3"
        {...props}
      >
        {children}
      </button>
    </li>
  );
};

export const SearchMessage = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"p">) => {
  return (
    <p className="data-[state='error']:text-red-500" {...props}>
      {children}
    </p>
  );
};
