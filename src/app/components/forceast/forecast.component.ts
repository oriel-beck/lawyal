import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentTemp, CurrentMode } from '../../constants';
import { getWeatherImage } from '../../utils/utils';
import type { DailyForecast, Forecast } from '../../types/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent {
  @Input() mode: CurrentMode | null = CurrentMode.Light;
  @Input() forecast?: Forecast | null;
  @Input() temp: CurrentTemp | null = CurrentTemp.Celcius;

  getDay(timestamp: string) {
    return new Date(timestamp).toLocaleDateString('en-US', { weekday: 'long' });
  }

  getImage(state: number) {
    return getWeatherImage(state)
  }

  getMinTemp(forecast: DailyForecast) {
    return Math.round(this.temp === CurrentTemp.Celcius ? (forecast.Temperature.Minimum.Value - 32) * (5 / 9) : forecast.Temperature.Minimum.Value);
  }

  getMaxTemp(forecast: DailyForecast) {
    return Math.round(this.temp === CurrentTemp.Celcius ? (forecast.Temperature.Maximum.Value - 32) * (5 / 9) : forecast.Temperature.Maximum.Value);
  }
}
