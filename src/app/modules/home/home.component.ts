import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, merge, withLatestFrom } from 'rxjs';
import { SearchComponent } from '../../components/search/search.component';
import { searchActions } from '../../store/search/search.actions';
import { selectSearch } from '../../store/search/search.selectors';
import type { SearchResult } from '../../store/search/search.types';
import { AppState } from '../../store/types';
import { userActions } from '../../store/user/user.actions';
import { selectFavorites, selectMode, selectTemp } from '../../store/user/user.selectors';
import { weatherActions } from '../../store/weather/weather.actions';
import { selectForecast, selectResult, selectWeather } from '../../store/weather/weather.selectors';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent

  // search
  searchState$ = this.store.select(selectSearch);
  selectedResult$ = this.store.select(selectResult);

  // weather
  weatherState$ = this.store.select(selectWeather);
  forecast$ = this.store.select(selectForecast);

  // user
  temp$ = this.store.select(selectTemp);
  mode$ = this.store.select(selectMode);
  favorites$ = this.store.select(selectFavorites);
  currentFavorite$ = combineLatest([this.store.select(selectFavorites), this.store.select(selectResult)]).pipe(
    map(([favorites, current]) => favorites.findIndex((fav) => fav.key === current?.key) != -1)
  );

  constructor(private store: Store<AppState>, private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (!this.weatherService.geolocationUsed) {
      navigator.geolocation.getCurrentPosition((position) =>
        this.store.dispatch(weatherActions.startGetWeatherByLocation({ lat: position.coords.latitude, lon: position.coords.longitude })),
        ((_error) => this.store.dispatch(weatherActions.startGetWeather({
          result: {
            key: "215854",
            location: "Tel Aviv"
          }
        })))
      );
    }

  }

  search(q: string) {
    if (!!q) {
      this.store.dispatch(searchActions.startAutocomplete({ q }));
    } else {
      this.store.dispatch(searchActions.emptySearchState());
    }
  }

  selected(result: SearchResult) {
    this.searchComponent.clear();
    this.store.dispatch(searchActions.emptySearchState());
    this.store.dispatch(weatherActions.startGetWeather({ result: result }));
  }

  toggleFavorite(favorite: SearchResult) {
    this.store.dispatch(userActions.toggleFavorite({ favorite }))
  }
}
