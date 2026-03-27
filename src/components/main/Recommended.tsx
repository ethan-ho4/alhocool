import { useMemo } from 'react';
import './Recommended.css';

const ALL_DRINKS = [
  {
    imageUrl: '/assets/images/main/recommended-images/whiskey-recommended.webp',
    link: '/spirit',
    title: 'WHISKEY',
    text: "From the smoky isles of Scotland to the rolling hills of Kentucky, discover how the water of life has captivated hearts globally. Unearth the tales of whiskey's ancient origins and how it's become a symbol of culture and tradition. Dive into the world of whiskey to learn more!"
  },
  {
    imageUrl: '/assets/images/main/recommended-images/wine-recommended.webp',
    link: '/wine',
    title: 'RED WINE',
    text: "Sip your way through time, from ancient Georgian vineyards to the renowned châteaux of Bordeaux. Delve into the world of red wine and uncover the stories behind every bottle's unique flavor and aroma. Begin your vinous journey today!"
  },
  {
    imageUrl: '/assets/images/main/recommended-images/sake-recommended.jpg',
    link: '/rice-based-alcohol',
    title: 'SAKE',
    text: "More than just a drink, sake is a journey through Japanese history and craftsmanship. Explore the art of brewing rice into this delicate beverage that's deeply rooted in tradition and ceremony. Experience the essence of Japan and discover the allure of sake."
  },
  {
    imageUrl: '/assets/images/beer-images/beer-title.jpg',
    link: '/beer',
    title: 'BEER',
    text: "One of the world's oldest and most beloved beverages, beer has a rich history stretching back thousands of years. From crisp lagers to bold stouts, discover the remarkable craft and culture behind every pint. Raise a glass and explore the world of beer!"
  },
  {
    imageUrl: '/assets/images/spirits-images/spirit-title.jpg',
    link: '/spirit',
    title: 'SPIRITS',
    text: "The art of distillation transforms simple ingredients into complex, refined spirits enjoyed across the globe. From gin to vodka, rum to tequila, uncover the heritage and craftsmanship that defines the world's finest distilled drinks. Explore the spirit world!"
  },
  {
    imageUrl: '/assets/images/liqueur-images/liqueur-title.jpg',
    link: '/liqueurs-cordial',
    title: 'LIQUEUR',
    text: "Liqueurs blend spirits with fruits, herbs, spices, and sugars to create some of the most decadent and flavorful drinks in existence. From Italian amaretto to French Cognac-based classics, discover the sweet, layered world of liqueurs and cordials."
  },
  {
    imageUrl: '/assets/images/rice-alcohol-images/rice-alcohol-title.jpg',
    link: '/rice-based-alcohol',
    title: 'RICE ALCOHOL',
    text: "Rice-based alcohols are a cornerstone of Asian drinking culture, steeped in tradition and refined over millennia. From the delicate umami of sake to the bold character of Shaoxing wine, explore the fascinating diversity of rice-derived beverages."
  },
  {
    imageUrl: '/assets/images/wine-images/wine-title.jpg',
    link: '/wine',
    title: 'WINE',
    text: "From sun-drenched vineyards in Tuscany to misty valleys in New Zealand, wine tells the story of its land and people. Whether white, red, or rosé, each bottle is a vintage journey waiting to be uncorked. Discover the timeless elegance of wine!"
  },
];

function getRandomThree(arr: typeof ALL_DRINKS) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

export default function Recommended() {
  // Re-randomize every time the component mounts (i.e., on login / page load)
  const selected = useMemo(() => getRandomThree(ALL_DRINKS), []);

  return (
    <section className="recommended-section">
      <div className="recommended-header">
        <p>DELVE INTO TIMELESS SELECTIONS</p>
      </div>

      <div className="recommended-container">
        {selected.map((item, index) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="recommended-link">
            <div className="rectangle">
              <img src={item.imageUrl} alt={item.title} />
              <div className="rect-text-wrapper">
                <div className="text-title">{item.title}</div>
                <div className="text-content">{item.text}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
