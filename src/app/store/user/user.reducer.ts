import { createReducer, on } from "@ngrx/store";
import { CurrentTemp, CurrentMode } from "src/app/constants";
import { UserState } from "./user.types";
import { userActions } from "./user.actions";

export const initialState: UserState = {
    temp: CurrentTemp.Celcius,
    mode: CurrentMode.Light
}

export const userReducer = createReducer(initialState,
    on(userActions.toggleMode, (state) => ({
        ...state,
        mode: state.mode === CurrentMode.Light ? CurrentMode.Dark : CurrentMode.Light
    })),
    on(userActions.toggleTemp, (state) => ({
        ...state,
        temp: state.temp === CurrentTemp.Celcius ? CurrentTemp.Fahrenheit : CurrentTemp.Celcius
    })),
    on(userActions.toggleFavorite, (state, { favorite }) => {
        let favorites = [...(state.favorites || [])];
        const index = state.favorites?.findIndex((fav) => fav.key === favorite.key);
        if (isNaN(Number(index)) || index === -1) {
            favorites.push(favorite);
        } else {
            favorites = favorites.filter((fav) => fav.key !== favorite.key);
        }
        return {
            ...state,
            favorites
        }
    })
);