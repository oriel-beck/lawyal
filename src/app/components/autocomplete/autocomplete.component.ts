import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentMode } from '../../constants';
import type { SearchResult, SearchState } from '../../store/search/search.types';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @Input() searchState?: SearchState | null;
  @Input() searching = false;
  @Input() mode: CurrentMode | null = CurrentMode.Light;

  @Output() selected = new EventEmitter<SearchResult>();
}
