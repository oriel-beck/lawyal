import { createSelector } from "@ngrx/store";
import type { AppState } from "../types";

export const selectUser = (state: AppState) => state.user;
export const selectMode = createSelector(selectUser, (state) => state.mode);
export const selectTemp = createSelector(selectUser, (state) => state.temp);
export const selectFavorites = createSelector(selectUser, (state) => state.favorites || []);