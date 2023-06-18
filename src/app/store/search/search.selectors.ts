import { createSelector } from "@ngrx/store";
import { AppState } from "../types";

export const selectSearch = (state: AppState) => state.search;