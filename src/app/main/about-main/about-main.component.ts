import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css']
})
export class AboutMainComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  onLinkClick() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
