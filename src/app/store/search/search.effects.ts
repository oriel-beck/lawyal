import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { searchActions } from "./search.actions";
import { map, mergeMap, of, switchMap, tap, toArray } from "rxjs";
import { WeatherService } from "src/app/services/weather/weather.service";
import type { SearchResult } from "./search.types";

@Injectable()
export class SearchEffects {
    constructor(private actions$: Actions, private weather: WeatherService) { }

    search$ = createEffect(() => this.actions$.pipe(
        ofType(searchActions.startAutocomplete),
        switchMap(({ q }) => this.weather.autocomplete(q).pipe(
            mergeMap((loaction) => of(...loaction)),
            map((location) => ({
                location: location.LocalizedName,
                key: location.Key
            })),
            toArray<SearchResult>(),
        )),
        map((locations) => searchActions.endAutocomplete({ locations }))
    ))

}