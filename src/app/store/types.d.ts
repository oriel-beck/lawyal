import type { SearchState } from "./search/search.types";
import type { UserState } from "./user/user.types";
import type { WeatherState } from "./weather/weather.types";

export interface AppState {
    search: SearchState;
    weather: WeatherState;
    user: UserState;
}