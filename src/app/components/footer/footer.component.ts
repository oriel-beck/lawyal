import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentMode } from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() mode: CurrentMode | null = CurrentMode.Light;
}
