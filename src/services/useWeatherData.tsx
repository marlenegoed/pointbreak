import { useEffect, useState } from "react";
import { fetchWeatherData, measurements } from "./openMeteo";

type Measurement<T> = {
  value: T;
  unit: string;
};

type DailyForecast = {
  [K in (typeof measurements)[keyof typeof measurements]]: Measurement<
    K extends "time" | "sunrise" | "sunset" ? string : number
  >;
};

export type WeatherData =
  | { status: "pending" }
  | { status: "success"; data: DailyForecast[] }
  | { status: "error"; message: string };

export const useWeatherData = (lat: number, lon: number) => {
  const [responseData, setResponseData] = useState<WeatherData>({
    status: "pending",
  });
  useEffect(() => {
    async function fetchWeather(lat: number, lon: number) {
      try {
        const response = await fetchWeatherData(lat, lon);
        const data: DailyForecast[] = [];
        const days = response?.daily?.time?.length || 0;

        for (let i = 0; i < days; i++) {
          if (!response?.daily || !response?.daily_units) break;
          const day: Partial<DailyForecast> = {};

          for (const [apiMeasurement, measurement] of Object.entries(
            measurements,
          )) {
            const apiKey = apiMeasurement as keyof typeof measurements;
            const dailyData = response.daily[apiKey];
            const unitValue = response.daily_units[apiKey];

            const value = dailyData[i];
            (day as Record<string, Measurement<string | number>>)[measurement] =
              {
                value,
                unit: unitValue,
              };
          }

          data.push(day as DailyForecast);
        }

        setResponseData({
          data,
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
    fetchWeather(lat, lon);
  }, [lat, lon]);

  return responseData;
};
