import { createSelector } from "@ngrx/store";
import type { AppState } from "../types";

export const selectWeather = (state: AppState) => state.weather;
export const selectForecast = createSelector(selectWeather, (state) => state?.forecast);
export const selectResult = createSelector(selectWeather, (state) => state?.result)