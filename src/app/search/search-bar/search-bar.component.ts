import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  @Output() searchChanged: EventEmitter<string> = new EventEmitter();

  onInputChange() {
    this.searchChanged.emit(this.searchTerm);
  }
  
  clearSearch() {
    this.searchTerm = '';
    this.onInputChange();
  }
  
}
