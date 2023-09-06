import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-rice-alcohol-header',
  templateUrl: './rice-alcohol-header.component.html',
  styleUrls: ['./rice-alcohol-header.component.css']
})
export class RiceAlcoholHeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  displayedComponent: string = 'overview';

  handleButtonClick(componentName: string): void {
      this.displayedComponent = componentName;
      this.viewportScroller.scrollToPosition([0, 350]);
  }
}

