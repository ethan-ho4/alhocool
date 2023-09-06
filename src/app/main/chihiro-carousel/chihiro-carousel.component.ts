import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';//scroll to top

@Component({
  selector: 'chihiro-carousel',
  templateUrl: './chihiro-carousel.component.html',
  styleUrls: ['./chihiro-carousel.component.css']
})
export class ChihiroCarouselComponent {
  slides = [
    { src: 'assets/images/main/chihiro-carousel-images/chihiro-beer.jpg', title: 'Experience the Art of Brewing', subtitle: 'Discover a spectrum of beer varieties and delve into the craft behind brewing', link: '/beer' },
    { src: 'assets/images/main/chihiro-carousel-images/chihiro-wine.jpg', title: 'Unearth the Secrets of the Vine', subtitle: 'Journey through the rich diversity of wine styles and their vine-to-bottle process', link: '/wine' },
    { src: 'assets/images/main/chihiro-carousel-images/chihiro-spirit.jpg', title: 'Demystifying the Spirit World', subtitle: 'Explore the vast range of spirits and the artistry of distillation', link: '/spirit' },
    { src: 'assets/images/main/chihiro-carousel-images/chihiro-liqueurs.jpg', title: 'A Symphony of Sweet Allure', subtitle: 'Immerse in the world of liqueurs and the infusion techniques that amplify their flavors', link: '/liqueurs-cordial' },
    { src: 'assets/images/main/chihiro-carousel-images/chihiro-soju.jpg', title: 'Journey to the East', subtitle: 'Understand the varied rice-based alcohols and the traditional methods used in their creation', link: '/rice-based-alcohol' }
  ];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  navigateToExplore(link: string) {
    this.router.navigate([link]).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);//scroll to top
    });
  }
}
