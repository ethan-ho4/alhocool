import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  data = [
    { imageUrl: '/assets/images/main/recommended-images/whiskey-recommended.webp', link:"link", title:"WHISKEY", text: "From the smoky isles of Scotland to the rolling hills of Kentucky, discover how the water of life has captivated hearts globally. Unearth the tales of whiskey's ancient origins and how it's become a symbol of culture and tradition. Dive into the world of whiskey to learn more!" },
    { imageUrl: '/assets/images/main/recommended-images/wine-recommended.webp', link:"link", title:"RED WINE", text: "Sip your way through time, from ancient Georgian vineyards to the renowned châteaux of Bordeaux. Delve into the world of red wine and uncover the stories behind every bottle's unique flavor and aroma. Begin your vinous journey today!"},
    { imageUrl: '/assets/images/main/recommended-images/sake-recommended.jpg', link:"link", title:"SAKE", text: "More than just a drink, sake is a journey through Japanese history and craftsmanship. Explore the art of brewing rice into this delicate beverage that's deeply rooted in tradition and ceremony. Experience the essence of Japan and discover the allure of sake." }
  ];

  constructor() { }

  ngOnInit(): void { }

}
