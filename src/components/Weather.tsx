import { useWeatherData } from "../services/useWeatherData";
import {
  CircleGauge,
  Compass,
  Droplets,
  Thermometer,
  Wind,
} from "lucide-react";
import {
  WeatherTile,
  WeatherTileHeader,
  WeatherTileTitle,
  WeatherTileContent,
  WeatherTileMeasurement,
  WeatherTileMeasurementLabel,
  WeatherTileMeasurementContent,
} from "./WeatherTile";

export const Weather = ({ lat, lon }: { lat: number; lon: number }) => {
  const weatherData = useWeatherData(lat, lon);

  if (weatherData.status !== "success" || weatherData.data.length < 1) return;

  return (
    <ol className="flex flex-col gap-4 w-full max-w-214 mt-6 overflow-auto">
      {weatherData.data.map((el) => {
        return (
          <WeatherTile key={el.time.value}>
            <WeatherTileHeader>
              <WeatherTileTitle>
                {new Intl.DateTimeFormat("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(el.time.value))}
              </WeatherTileTitle>

              <WeatherTileMeasurement>
                <WeatherTileMeasurementContent>
                  <Thermometer size={16} />
                  {`${el.temperatureMin.value.toFixed()} / ${el.temperatureMax.value.toFixed()} ${el.temperatureMax.unit}`}
                </WeatherTileMeasurementContent>
              </WeatherTileMeasurement>
            </WeatherTileHeader>

            <WeatherTileContent>
              <WeatherTileMeasurement>
                <WeatherTileMeasurementLabel>
                  Windrichtung
                </WeatherTileMeasurementLabel>
                <WeatherTileMeasurementContent>
                  <Compass size={16} />
                  {`${el.windDirection.value} ${el.windDirection.unit}`}
                </WeatherTileMeasurementContent>
              </WeatherTileMeasurement>

              <WeatherTileMeasurement>
                <WeatherTileMeasurementLabel>
                  Windgeschwindigkeit
                </WeatherTileMeasurementLabel>
                <WeatherTileMeasurementContent>
                  <CircleGauge size={16} />
                  {`${el.windSpeedMin.value} / ${el.windSpeedMax.value} ${el.windSpeedMax.unit}`}
                </WeatherTileMeasurementContent>
              </WeatherTileMeasurement>

              <WeatherTileMeasurement>
                <WeatherTileMeasurementLabel>
                  Windböen (max)
                </WeatherTileMeasurementLabel>
                <WeatherTileMeasurementContent>
                  <Wind size={16} />
                  {`${el.windGustsMax.value} ${el.windGustsMax.unit}`}
                </WeatherTileMeasurementContent>
              </WeatherTileMeasurement>

              <WeatherTileMeasurement>
                <WeatherTileMeasurementLabel>
                  Niederschlag
                </WeatherTileMeasurementLabel>
                <WeatherTileMeasurementContent>
                  <Droplets size={16} />
                  {`${el.precipitation.value} ${el.precipitation.unit}`}
                </WeatherTileMeasurementContent>
              </WeatherTileMeasurement>
            </WeatherTileContent>
          </WeatherTile>
        );
      })}
    </ol>
  );
};
