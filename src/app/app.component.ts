import { Component } from '@angular/core';
import { AppState } from './store/types';
import { Store } from '@ngrx/store';
import { selectMode, selectTemp } from './store/user/user.selectors';
import { CurrentPage } from './constants';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { userActions } from './store/user/user.actions';
import type { SearchResult } from './store/search/search.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonLabel$ = this.getCurrentRoute();
  buttonIcon$ = this.getCurrentRoute();

  temp$ = this.store.select(selectTemp);
  mode$ = this.store.select(selectMode);
  constructor(private store: Store<AppState>, private router: Router) { }

  navigateTo(route: CurrentPage) {
    this.router.navigate([route]);
  }

  toggleMode() {
    this.store.dispatch(userActions.toggleMode());
  }

  toggleTemp() {
    this.store.dispatch(userActions.toggleTemp());
  }

  toggleFavorite(favorite: SearchResult) {
    this.store.dispatch(userActions.toggleFavorite({ favorite }))
  }

  getCurrentRoute() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).url.replace('/', '') === CurrentPage.Favorites ? CurrentPage.Home : CurrentPage.Favorites)
    )
  }
}
