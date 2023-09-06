import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-liqueur-header',
  templateUrl: './liqueur-header.component.html',
  styleUrls: ['./liqueur-header.component.css']
})
export class LiqueurHeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  displayedComponent: string = 'overview';

  handleButtonClick(componentName: string): void {
      this.displayedComponent = componentName;
      this.viewportScroller.scrollToPosition([0, 350]);
  }
}

