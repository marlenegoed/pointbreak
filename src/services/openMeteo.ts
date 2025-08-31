type LocationResponse = {
  id: number;
  name: string;
  admin1: string;
  latitude: number;
  longitude: number;
};

export async function fetchLocationCoordinates(
  city: string,
  state?: string,
): Promise<{
  results: LocationResponse[] | undefined;
}> {
  const basePath = `https://geocoding-api.open-meteo.com/v1/search`;
  let queryParams = `?name=${encodeURIComponent(city)}&language=de&countryCode=DE`;
  if (state && state !== "") {
    queryParams += `&admin1=${state}`;
  }

  const response = await fetch(basePath + queryParams);

  if (!response) throw new Error("Fehler beim Abrufen der Ortskoordinaten");

  return await response.json();
}

export const measurements = {
  time: "time",
  precipitation_sum: "precipitation",
  temperature_2m_max: "temperatureMax",
  temperature_2m_min: "temperatureMin",
  wind_direction_10m_dominant: "windDirection",
  wind_gusts_10m_max: "windGustsMax",
  wind_speed_10m_max: "windSpeedMax",
  wind_speed_10m_min: "windSpeedMin",
} as const;

type WeatherResponse = {
  daily: {
    [K in keyof typeof measurements]: K extends "time" | "sunrise" | "sunset"
      ? string[]
      : number[];
  };
  daily_units: {
    [K in keyof typeof measurements]: string;
  };
};

export async function fetchWeatherData(
  lat: number,
  lon: number,
): Promise<WeatherResponse | undefined> {
  const basePath = `https://api.open-meteo.com/v1/forecast`;
  const weatherParams = Object.keys(measurements)
    .filter((measurement) => measurement !== "time")
    .join(",");
  const queryParams = `?latitude=${lat}&longitude=${lon}&daily=${weatherParams}&timezone=Europe%2FBerlin`;

  const response = await fetch(basePath + queryParams);

  if (!response) throw new Error("Fehler beim Abrufen der Wetterdaten");

  return await response.json();
}
