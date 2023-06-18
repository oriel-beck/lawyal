import type { CurrentTemp, CurrentMode } from "src/app/constants";
import type { SearchResult } from "../search/search.types";

export interface UserState {
    mode: CurrentMode;
    temp: CurrentTemp;
    favorites?: SearchResult[];
}