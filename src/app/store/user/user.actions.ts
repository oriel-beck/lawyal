import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { SearchResult } from "../search/search.types";

export const userActions = createActionGroup({
    source: 'User',
    events: {
        'Toggle mode': emptyProps(),
        'Toggle temp': emptyProps(),
        'Toggle favorite': props<{ favorite: SearchResult }>(),
    }
})