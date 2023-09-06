import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-spirit-header',
  templateUrl: './spirit-header.component.html',
  styleUrls: ['./spirit-header.component.css']
})
export class SpiritHeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

    displayedComponent: string = 'overview';

    handleButtonClick(componentName: string): void {
        this.displayedComponent = componentName;
        this.viewportScroller.scrollToPosition([0, 350]);
    }
}
