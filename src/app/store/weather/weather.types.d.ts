import type { CurrentWeather } from "src/app/types/current-weather";
import type { Forecast } from "src/app/types/forecast";
import type { SearchResult } from "../search/search.types";

export interface WeatherState {
    weather?: CurrentWeather;
    forecast?: Forecast;
    result?: SearchResult;
}