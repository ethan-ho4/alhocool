import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-wine-header',
  templateUrl: './wine-header.component.html',
  styleUrls: ['./wine-header.component.css']
})
export class WineHeaderComponent {
    constructor(private viewportScroller: ViewportScroller) {}

    displayedComponent: string = 'overview';

    handleButtonClick(componentName: string): void {
        this.displayedComponent = componentName;
        this.viewportScroller.scrollToPosition([0, 350]);
    }
}
