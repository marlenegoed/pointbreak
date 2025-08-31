import { useState, useEffect } from "react";
import { fetchLocationCoordinates } from "./openMeteo";
import { useDebouncedCallback } from "use-debounce";

export type Location = {
  id: number;
  name: string;
  state: string;
  lat: number;
  lon: number;
};

export type LocationData =
  | { status: "pending" }
  | { status: "success"; data: Location[] }
  | { status: "error"; message: string };

export const useLocationData = (city: string, state?: string) => {
  const [responseData, setResponseData] = useState<LocationData>({
    status: "success",
    data: [],
  });
  const fetchCoordinates = useDebouncedCallback(
    async (city: string, state?: string) => {
      if (city === "") return;

      setResponseData({ status: "pending" });

      try {
        const response = await fetchLocationCoordinates(city, state);
        const data = response.results?.map((result) => {
          return {
            id: result.id,
            name: result.name,
            state: result.admin1,
            lat: result.latitude,
            lon: result.longitude,
          };
        });
        setResponseData({
          data: data || [],
          status: "success",
        });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Es ist ein unbekannter Fehler aufgetreten";
        setResponseData((prev) => {
          return { ...prev, status: "error", message: message };
        });
      }
    },
    300,
  );

  useEffect(() => {
    fetchCoordinates(city, state);
  }, [fetchCoordinates, city, state]);
  return responseData;
};
