import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { HttpModule } from '../http/http.module';



@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
