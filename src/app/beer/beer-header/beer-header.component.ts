import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-beer-header',
  templateUrl: './beer-header.component.html',
  styleUrls: ['./beer-header.component.css']
})
export class BeerHeaderComponent {
    constructor(private viewportScroller: ViewportScroller) {}

    displayedComponent: string = 'overview';

    handleButtonClick(componentName: string): void {
        this.displayedComponent = componentName;
        this.viewportScroller.scrollToPosition([0, 350]);
    }
}
