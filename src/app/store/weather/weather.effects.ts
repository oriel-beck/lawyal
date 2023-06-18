import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherService } from "src/app/services/weather/weather.service";
import { weatherActions } from "./weather.actions";
import { forkJoin, map, switchMap } from "rxjs";

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weather: WeatherService) { }

    getWeather$ = createEffect(() => this.actions$.pipe(
        ofType(weatherActions.startGetWeather),
        switchMap(({ result }) => forkJoin([this.weather.getCurrentWeather(result.key), this.weather.getForcast(result.key)]).pipe(
            map(([weather, forecast]) => weatherActions.endGetWeather({ weather: weather[0], forecast }))
        ))
    ))

    getWeatherByLocation$ = createEffect(() => this.actions$.pipe(
        ofType(weatherActions.startGetWeatherByLocation),
        switchMap(({ lat, lon }) => this.weather.geolocation(lat, lon).pipe(
            switchMap((geolocation) => forkJoin([this.weather.getCurrentWeather(geolocation.Key), this.weather.getForcast(geolocation.Key)]).pipe(
                map(([weather, forecast]) => {
                    return weatherActions.endGetWeatherByLocation({
                        weather: weather[0],
                        forecast,
                        result: {
                            location: geolocation.LocalizedName,
                            key: geolocation.Key
                        }
                    })
                }
                )
            ))
        ))
    ))
}