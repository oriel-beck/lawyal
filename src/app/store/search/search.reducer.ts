import { createReducer, on } from "@ngrx/store";
import { searchActions } from "./search.actions";
import type { SearchState } from "./search.types";

export const initialState: Partial<SearchState> = {
    loading: true
};

export const searchReducer = createReducer(initialState,
    on(searchActions.emptySearchState, () => initialState),
    on(searchActions.startAutocomplete, () => initialState),
    on(searchActions.endAutocomplete, (_, { locations }) => ({
        results: locations,
        loading: false
    }))
);