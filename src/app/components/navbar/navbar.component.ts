import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { CurrentMode, CurrentPage, CurrentTemp } from '../../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnChanges {
  modeTitle = '';
  degreeTitle = '';
  @Input() mode: CurrentMode | null = CurrentMode.Light;
  @Input() buttonLabel: string | null = '';
  @Input() buttonIcon: CurrentPage | null = CurrentPage.Favorites;
  @Input() temp: CurrentTemp | null = CurrentTemp.Celcius;

  @Output() toggleMode = new EventEmitter<void>();
  @Output() toggleTemp = new EventEmitter<void>();
  @Output() navigateTo = new EventEmitter<CurrentPage>();

  ngOnInit(): void {
    this.updateTitles();
  }

  ngOnChanges(): void {
    this.updateTitles();
  }

  private updateTitles(): void {
    this.modeTitle = `toggle ${this.mode === 'light' ? 'dark' : 'light'} mode`;
    this.degreeTitle = `change degree display to ${this.temp === 'C' ? 'fahrenheit' : 'celcius'}`;
  }
}
