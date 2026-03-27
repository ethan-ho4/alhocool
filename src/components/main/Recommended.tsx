import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Recommended.css';

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&q=80`;

const ALL_DRINKS = [
  {
    imageUrl: unsplash('1695057672316-7efe5b856ab0'),
    imageAlt: 'Glass of whiskey with warm amber tones',
    link: '/spirit',
    title: 'WHISKEY',
    text: "From the smoky isles of Scotland to the rolling hills of Kentucky, discover how the water of life has captivated hearts globally. Unearth the tales of whiskey's ancient origins and how it's become a symbol of culture and tradition. Dive into the world of whiskey to learn more!",
    nonAlcoholicRecipe:
      '45 ml chilled black tea, 15 ml maple syrup, 2 dashes NA aromatic bitters, orange peel—stir over ice for oaky warmth without alcohol.',
  },
  {
    imageUrl: unsplash('1553361371-9b22f78e8b1d'),
    imageAlt: 'Red wine in a glass with deep ruby color',
    link: '/wine',
    title: 'RED WINE',
    text: "Sip your way through time, from ancient Georgian vineyards to the renowned châteaux of Bordeaux. Delve into the world of red wine and uncover the stories behind every bottle's unique flavor and aroma. Begin your vinous journey today!",
    nonAlcoholicRecipe:
      '120 ml pomegranate juice, 60 ml chilled black tea, 15 ml lemon, touch of vanilla—stir; evokes tannin and dark fruit.',
  },
  {
    imageUrl: unsplash('1626379907753-406934326e2c'),
    imageAlt: 'Sake served in traditional cups',
    link: '/rice-based-alcohol',
    title: 'SAKE',
    text: "More than just a drink, sake is a journey through Japanese history and craftsmanship. Explore the art of brewing rice into this delicate beverage that's deeply rooted in tradition and ceremony. Experience the essence of Japan and discover the allure of sake.",
    nonAlcoholicRecipe:
      '150 ml light amazake or koji-style rice drink (NA), 50 ml water, pinch of salt—chilled for soft umami and rice sweetness.',
  },
  {
    imageUrl: unsplash('1608742598121-15038a8db33c'),
    imageAlt: 'Cold beer in a glass with foam',
    link: '/beer',
    title: 'BEER',
    text: "One of the world's oldest and most beloved beverages, beer has a rich history stretching back thousands of years. From crisp lagers to bold stouts, discover the remarkable craft and culture behind every pint. Raise a glass and explore the world of beer!",
    nonAlcoholicRecipe:
      '240 ml chilled barley tea, 60 ml sparkling water, lemon squeeze, pinch of salt—crisp “lager” mouthfeel, no alcohol.',
  },
  {
    imageUrl: unsplash('1617820915076-5f3163127e3d'),
    imageAlt: 'Assorted spirits and mixing glass',
    link: '/spirit',
    title: 'SPIRITS',
    text: "The art of distillation transforms simple ingredients into complex, refined spirits enjoyed across the globe. From gin to vodka, rum to tequila, uncover the heritage and craftsmanship that defines the world's finest distilled drinks. Explore the spirit world!",
    nonAlcoholicRecipe:
      '200 ml tonic, 15 ml lime, crushed juniper (strained), cucumber—botanical “gin” style; or pineapple + lime + coconut for a rum feel.',
  },
  {
    imageUrl: unsplash('1587055997115-f2baa3fa9a0e'),
    imageAlt: 'Colorful liqueurs in glasses',
    link: '/liqueurs-cordial',
    title: 'LIQUEUR',
    text: "Liqueurs blend spirits with fruits, herbs, spices, and sugars to create some of the most decadent and flavorful drinks in existence. From Italian amaretto to French Cognac-based classics, discover the sweet, layered world of liqueurs and cordials.",
    nonAlcoholicRecipe:
      '30 ml orgeat (almond syrup), 120 ml cola or cold brew (NA), orange twist—sweet, nutty cordial character.',
  },
  {
    imageUrl: unsplash('1769213312703-78fec4456b96'),
    imageAlt: 'Rice-based drinks and ingredients',
    link: '/rice-based-alcohol',
    title: 'RICE ALCOHOL',
    text: "Rice-based alcohols are a cornerstone of Asian drinking culture, steeped in tradition and refined over millennia. From the delicate umami of sake to the bold character of Shaoxing wine, explore the fascinating diversity of rice-derived beverages.",
    nonAlcoholicRecipe:
      'Light ginger rice water (strained), sweetened with palm sugar, splash coconut water—fermented rice aroma, zero ABV.',
  },
  {
    imageUrl: unsplash('1510812431401-41d2bd2722f3'),
    imageAlt: 'Wine glasses with white and rosé wine',
    link: '/wine',
    title: 'WINE',
    text: "From sun-drenched vineyards in Tuscany to misty valleys in New Zealand, wine tells the story of its land and people. Whether white, red, or rosé, each bottle is a vintage journey waiting to be uncorked. Discover the timeless elegance of wine!",
    nonAlcoholicRecipe:
      '150 ml white grape juice, 50 ml chilled green tea, lime, basil—bright “white wine” acidity without alcohol.',
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
          <Link to={item.link} onClick={() => window.scrollTo(0, 0)} key={index} className="recommended-link">
            <div className="rectangle">
              <img src={item.imageUrl} alt={item.imageAlt} />
              <div className="rect-text-wrapper">
                <div className="text-title">{item.title}</div>
                <div className="text-content">{item.text}</div>
                <p className="text-recipe-label">Non-alcoholic flavor</p>
                <p className="text-recipe">{item.nonAlcoholicRecipe}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
