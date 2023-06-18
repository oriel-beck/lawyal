import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, map, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { CurrentPage } from 'src/app/constants';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { SearchResult } from 'src/app/store/search/search.types';
import { AppState } from 'src/app/store/types';
import { userActions } from 'src/app/store/user/user.actions';
import { selectFavorites, selectMode, selectTemp } from 'src/app/store/user/user.selectors';
import { weatherActions } from 'src/app/store/weather/weather.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  temp$ = this.store.select(selectTemp);
  mode$ = this.store.select(selectMode);
  favorites$ = this.store.select(selectFavorites).pipe(
    mergeMap((results) => from(results).pipe(
      map((favorite) => this.fetchWeather(favorite)),
      toArray()
    )),
  );

  constructor(private store: Store<AppState>, private weatherService: WeatherService, private router: Router) { }

  toggleFavorite(favorite: SearchResult) {
    this.store.dispatch(userActions.toggleFavorite({ favorite }));
  }

  fetchWeather(result: SearchResult) {
    return this.weatherService.getCurrentWeather(result.key).pipe(
      tap((d) => console.log(d)),
      map((weather) => ({
        weather: weather[0],
        result
      })),
      tap((d) => console.log(d)),
    )
  }

  showWeather(favorite: SearchResult) {
    this.store.dispatch(weatherActions.startGetWeather({ result: favorite }));
    this.router.navigate([CurrentPage.Home])
  }
}
