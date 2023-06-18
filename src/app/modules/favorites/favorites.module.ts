import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { CardModule } from "../../components/card/card.module";
import { WeatherModule } from 'src/app/services/weather/weather.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    WeatherModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoritesComponent
      }
    ]),
  ]
})
export class FavoritesModule { }
