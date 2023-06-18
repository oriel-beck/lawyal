import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../../components/search/search.module';
import { CardModule } from "../../components/card/card.module";
import { ForecastModule } from "../../components/forceast/forecast.module";
import { FooterModule } from "../../components/footer/footer.module";
import { AutocompleteModule } from "../../components/autocomplete/autocomplete.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    CardModule,
    ForecastModule,
    AutocompleteModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
  ]
})
export class HomeModule {

}
