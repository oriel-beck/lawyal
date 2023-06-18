import { createActionGroup, props } from "@ngrx/store";
import type { CurrentWeather } from "src/app/types/current-weather";
import type { Forecast } from "src/app/types/forecast";
import type { SearchResult } from "../search/search.types";

export const weatherActions = createActionGroup({
    source: 'Weather',
    events: {
        'Start get weather': props<{ result: SearchResult }>(),
        'End get weather': props<{ weather: CurrentWeather, forecast: Forecast }>(),
        'Start get weather by location': props<{ lat: number, lon: number }>(),
        'End get weather by location': props<{ weather: CurrentWeather, forecast: Forecast, result: SearchResult }>()
    }
}) 