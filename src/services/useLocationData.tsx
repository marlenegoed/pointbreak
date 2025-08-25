import { useState, useEffect } from "react";

type Location = {
  id: number;
  name: string;
  state: string;
  lat: string;
  long: string;
};

export type LocationData =
  | { status: "pending" }
  | { status: "success"; data: Location[] }
  | { status: "error"; message: string };

export const useLocationData = (city: string) => {
  const [responseData, setResponseData] = useState<LocationData>({
    status: "pending",
  });

  useEffect(() => {
    async function fetchCoordinates(city: string) {
      try {
        const response = await fetchLocationCoordinates(city);
        const data = response.results?.map((result) => {
          return {
            id: result.id,
            name: result.name,
            state: result.admin1,
            lat: result.latitute,
            long: result.longitute,
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
    }
    fetchCoordinates(city);
  }, [city]);

  return responseData;
};

type LocationResponse = {
  id: number;
  name: string;
  admin1: string;
  latitute: string;
  longitute: string;
};

async function fetchLocationCoordinates(city: string): Promise<{
  results: LocationResponse[] | undefined;
}> {
  const basePath = "https://geocoding-api.open-meteo.com/v1/search";
  const queryParams = `?name=${encodeURIComponent(city)}&language=de&countryCode=DE`;

  const response = await fetch(basePath + queryParams);

  if (!response) throw new Error("Fehler beim Abrufen der Ortskoordinaten");

  return await response.json();
}
