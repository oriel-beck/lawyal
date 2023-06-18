import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentMode, CurrentPage } from '../../constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string | null = '';
  @Input() icon: CurrentPage | null = CurrentPage.Favorites;
  @Input() mode: CurrentMode = CurrentMode.Light;

  @Output() clicked = new EventEmitter<CurrentPage>();
}
