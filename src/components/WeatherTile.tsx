import type { ComponentPropsWithoutRef } from "react";

export const WeatherTile = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"li">) => {
  return (
    <li
      className=" text-white border border-white backdrop-blur-xl rounded-lg w-full p-4 last:mb-16"
      {...props}
    >
      {children}
    </li>
  );
};

export const WeatherTileHeader = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex justify-between font-bold mb-4" {...props}>
      {children}
    </div>
  );
};

export const WeatherTileTitle = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2 className="text-xl" {...props}>
      {children}
    </h2>
  );
};

export const WeatherTileContent = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex justify-between" {...props}>
      {children}
    </div>
  );
};

export const WeatherTileMeasurement = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <span className="flex flex-col gap-2" {...props}>
      {children}
    </span>
  );
};

export const WeatherTileMeasurementLabel = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"p">) => {
  return (
    <p
      className="text-xs text-bold text-white/70 uppercase tracking-wide"
      {...props}
    >
      {children}
    </p>
  );
};

export const WeatherTileMeasurementContent = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex gap-2 items-center" {...props}>
      {children}
    </div>
  );
};
