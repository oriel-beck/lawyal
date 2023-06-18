import { createReducer, on } from "@ngrx/store";
import { weatherActions } from "./weather.actions";
import type { WeatherState } from "./weather.types";

export const initialState: WeatherState = {};

export const weatherReducer = createReducer(initialState,
    on(weatherActions.startGetWeather, (state, { result }) => ({ ...state, result })),
    on(weatherActions.endGetWeather, (state, { weather, forecast }) => ({
        ...state,
        current: weather,
        forecast
    })),
    on(weatherActions.endGetWeatherByLocation, (_, newState) => newState)
);