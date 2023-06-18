import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentMode, CurrentTemp } from '../../constants';
import { WeatherState } from '../../store/weather/weather.types';
import { getWeatherImage } from '../../utils/utils';
import { SearchResult } from 'src/app/store/search/search.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() weatherState?: WeatherState | null;
  @Input() temp: CurrentTemp | null = CurrentTemp.Celcius;
  @Input() mode: CurrentMode | null = CurrentMode.Light;
  @Input() favorite: boolean | null = false;

  @Output() toggleFavorite = new EventEmitter<SearchResult>();

  getImage() {
    return getWeatherImage(this.weatherState?.weather?.WeatherIcon!);
  }

  getTemp() {
    return this.temp === CurrentTemp.Celcius ? this.weatherState?.weather?.Temperature.Metric.Value : this.weatherState?.weather?.Temperature.Imperial.Value;
  }
}
