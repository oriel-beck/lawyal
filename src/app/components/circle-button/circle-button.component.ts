import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentMode } from '../../constants';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleButtonComponent {
  @Input() mode: CurrentMode = CurrentMode.Light;
  @Input() letter?: string;
  @Input() title: string = '';

  @Output() clicked = new EventEmitter<void>();
}
