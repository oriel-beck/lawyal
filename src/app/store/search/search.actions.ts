import { createActionGroup, emptyProps, props } from "@ngrx/store";
import type { SearchResult } from "./search.types";

export const searchActions = createActionGroup({
    source: 'Search',
    events: {
        'Start autocomplete': props<{ q: string }>(),
        'End autocomplete': props<{ locations: SearchResult[] }>(),
        'Empty Search state': emptyProps()
    }
})