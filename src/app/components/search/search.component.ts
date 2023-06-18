import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentMode } from '../../constants';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input() mode: CurrentMode | null = CurrentMode.Light;
  searchControl = new FormControl('', [Validators.pattern("[a-zA-Z ]*")])

  @Output() search = new EventEmitter<string>();
  @Output() forceSearch = new EventEmitter<void>();

  inputChanged() {
    this.search.emit(this.searchControl.value!)
  }

  clear() {
    this.searchControl.setValue('');
  }
}
