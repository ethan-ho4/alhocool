import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alhocool';

  //EVerything below is to make the header appear and disappear
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < this.lastScrollPosition) {
      this.headerElement.classList.remove('header-hidden');
    } else {
      this.headerElement.classList.add('header-hidden');
    }
    this.lastScrollPosition = currentScrollPosition;
  }

  lastScrollPosition = 0;
  headerElement: any;

  constructor(private element: ElementRef) {
    this.headerElement = this.element.nativeElement.querySelector('#myHeader');
  }
}
