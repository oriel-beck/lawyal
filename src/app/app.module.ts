import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { searchReducer } from './store/search/search.reducer';
import { SearchEffects } from './store/search/search.effects';
import { WeatherModule } from './services/weather/weather.module';
import { weatherReducer } from './store/weather/weather.reducer';
import { userReducer } from './store/user/user.reducer';
import { WeatherEffects } from './store/weather/weather.effects';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { NavbarModule } from "./components/navbar/navbar.module";
import { FooterModule } from "./components/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    WeatherModule,
    NavbarModule,
    FooterModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      search: searchReducer,
      weather: weatherReducer,
      user: userReducer
    }, {}),
    EffectsModule.forRoot([SearchEffects, WeatherEffects]),
  ]
})
export class AppModule { }
