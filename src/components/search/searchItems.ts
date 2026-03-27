/**
 * Search catalog: unique preview images (Unsplash / Pexels) plus non-alcoholic flavor recipes.
 * Image licenses: https://unsplash.com/license · https://www.pexels.com/license/
 */
export type ItemCategory = 'Beer' | 'Wine' | 'Spirit' | 'Liqueur' | 'Rice Alcohol';

export interface SearchItem {
  label: string;
  link: string;
  category: ItemCategory;
  blurb: string;
  imageUrl: string;
  imageAlt: string;
  /** Short non-alcoholic preparation evoking the drink’s taste */
  nonAlcoholicRecipe: string;
}

/** Unsplash CDN — pass the id after `photo-` (e.g. `1608742598121-15038a8db33c`) */
const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&q=80`;

/** Pexels CDN — numeric photo id */
const pexels = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const SEARCH_ITEMS: SearchItem[] = [
  {
    label: 'LAGER',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Clean and crisp with a refreshing finish.',
    imageUrl: unsplash('1608742598121-15038a8db33c'),
    imageAlt: 'Clear glass of golden lager with foam',
    nonAlcoholicRecipe:
      '240 ml chilled barley tea or light malt beverage (NA), 60 ml sparkling water, squeeze of lemon, pinch of salt—stir over ice.',
  },
  {
    label: 'ALE',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Fruit-forward fermentation with fuller body.',
    imageUrl: unsplash('1639632074007-986083627f0a'),
    imageAlt: 'Hand holding a glass of amber ale',
    nonAlcoholicRecipe:
      '120 ml apple juice, 120 ml ginger ale, splash of NA aromatic bitters, orange twist—build over ice.',
  },
  {
    label: 'STOUT',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Roasted malt character and rich texture.',
    imageUrl: unsplash('1765277394598-efd74091c117'),
    imageAlt: 'Dark stout beer in a glass with a rich head',
    nonAlcoholicRecipe:
      '180 ml cold brew coffee (decaf optional), 60 ml oat milk, 15 ml molasses, dust of cocoa—shake with ice, strain.',
  },
  {
    label: 'INDIA PALE ALE',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Hop-driven aromas with layered bitterness.',
    imageUrl: unsplash('1638366172707-aca097c47149'),
    imageAlt: 'Flight of different beers on a bar',
    nonAlcoholicRecipe:
      '200 ml grapefruit juice + tonic water to taste, 2–3 drops NA hop bitters, lemon peel—serve tall with ice.',
  },
  {
    label: 'PILSNER',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Bright, floral, and balanced lager profile.',
    imageUrl: unsplash('1749456255910-a38c83339190'),
    imageAlt: 'Mug of pale beer on a wood bar',
    nonAlcoholicRecipe:
      'Equal parts chilled elderflower cordial (light dilution) and sparkling water, lime wedge, very light pinch of salt.',
  },
  {
    label: 'WHEAT BEER',
    link: '/blank-page',
    category: 'Beer',
    blurb: 'Soft wheat notes with citrusy lift.',
    imageUrl: unsplash('1712746785394-bc9b30979788'),
    imageAlt: 'Two glasses of hazy beer with food on a table',
    nonAlcoholicRecipe:
      '200 ml orange juice (fresh), 60 ml coconut water, coriander seed (cracked, steep 5 min then strain), top with soda.',
  },
  {
    label: 'RED WINE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Bold tannins, dark fruit, and depth.',
    imageUrl: unsplash('1630369160812-26c7604cbd8c'),
    imageAlt: 'Red wine in a clear wine glass',
    nonAlcoholicRecipe:
      '120 ml pure pomegranate juice, 60 ml black tea (chilled), 15 ml lemon, touch of vanilla—stir; optional NA tannin tea drop.',
  },
  {
    label: 'WHITE WINE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Bright acidity with fresh fruit notes.',
    imageUrl: unsplash('1579721333016-b58535cc0dc3'),
    imageAlt: 'Pale yellow wine in a wine glass',
    nonAlcoholicRecipe:
      '150 ml white grape juice, 50 ml chilled green tea, squeeze of lime, basil leaf—stir over ice.',
  },
  {
    label: 'ROSE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Light, aromatic, and elegantly dry.',
    imageUrl: unsplash('1660814807979-8482e075420c'),
    imageAlt: 'Several wine glasses with rosé tones',
    nonAlcoholicRecipe:
      'Equal parts light cranberry juice and white grape juice, splash of rose water, mint—serve cold.',
  },
  {
    label: 'SPARKLING WINE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Bubbles, lift, and celebratory style.',
    imageUrl: unsplash('1562673478-0849b4049b0c'),
    imageAlt: 'Champagne flutes with sparkling wine',
    nonAlcoholicRecipe:
      'Chilled NA sparkling white grape juice or ginger beer + white grape juice 2:1, lemon twist.',
  },
  {
    label: 'DESSERT WINE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Sweet concentration with smooth finish.',
    imageUrl: unsplash('1628876153244-d10fca15052c'),
    imageAlt: 'Wine poured from bottle into a glass',
    nonAlcoholicRecipe:
      '60 ml reduced pear juice (simmered), 30 ml apricot nectar, vanilla bean scrape—cool, sip in a small glass.',
  },
  {
    label: 'FORTIFIED WINE',
    link: '/blank-page',
    category: 'Wine',
    blurb: 'Enhanced richness with spirit fortification.',
    imageUrl: unsplash('1610458034932-dc165f29499e'),
    imageAlt: 'Rich red wine in a stemmed glass',
    nonAlcoholicRecipe:
      '80 ml strong chilled black tea, 40 ml orange juice, 10 ml maple, orange peel—evokes sweet oxidative notes.',
  },
  {
    label: 'WHISKEY',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Oak influence, spice, and warming depth.',
    imageUrl: unsplash('1695057672316-7efe5b856ab0'),
    imageAlt: 'Glass of whiskey on a wooden table',
    nonAlcoholicRecipe:
      '45 ml strong black tea (cold), 15 ml maple syrup, 2 dashes NA aromatic bitters, smoked salt rim optional.',
  },
  {
    label: 'VODKA',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Neutral, versatile spirit for mixing.',
    imageUrl: unsplash('1615887023544-3a566f29d822'),
    imageAlt: 'Clear spirit in a glass on a white surface',
    nonAlcoholicRecipe:
      'Neutral base: 60 ml chilled cucumber water + 30 ml lime juice + tonic to taste—clean, martini-like.',
  },
  {
    label: 'RUM',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Sugarcane sweetness from light to dark.',
    imageUrl: pexels('1283219'),
    imageAlt: 'Tropical rum-style cocktail with fruit garnish',
    nonAlcoholicRecipe:
      '60 ml pineapple juice, 30 ml coconut cream (light), 15 ml lime, pinch of cinnamon—shake with ice.',
  },
  {
    label: 'TEQUILA & MEZCAL',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Agave character from bright to smoky.',
    imageUrl: unsplash('1615887625746-f3d2aa27e048'),
    imageAlt: 'Golden spirit in a glass in bright light',
    nonAlcoholicRecipe:
      '45 ml agave syrup (light dilution in water), 30 ml lime, 15 ml grapefruit, tiny pinch smoked salt—shake.',
  },
  {
    label: 'GIN',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Juniper-led botanicals and aromatic complexity.',
    imageUrl: unsplash('1618111415053-88700b403939'),
    imageAlt: 'Green botanical gin cocktail in a glass',
    nonAlcoholicRecipe:
      '200 ml tonic water, 15 ml lime, crushed juniper berries (strain), cucumber slice, rosemary sprig.',
  },
  {
    label: 'BRANDY',
    link: '/blank-page',
    category: 'Spirit',
    blurb: 'Distilled fruit expression with rounded warmth.',
    imageUrl: unsplash('1614098691332-7b838d40ca53'),
    imageAlt: 'Amber spirit in a snifter glass',
    nonAlcoholicRecipe:
      '60 ml apple cider (reduced slightly), 30 ml strong chamomile tea (cold), vanilla, nutmeg dust.',
  },
  {
    label: 'BAILEYS IRISH CREAM',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Creamy dessert-style liqueur profile.',
    imageUrl: unsplash('1563731649913-fab41907b535'),
    imageAlt: 'Creamy coffee drink in a glass cup',
    nonAlcoholicRecipe:
      '60 ml oat cream, 30 ml cold espresso (decaf ok), 15 ml maple, pinch cocoa—blend over ice.',
  },
  {
    label: 'COINTREAU',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Orange-forward, dry and bright liqueur.',
    imageUrl: unsplash('1571104508999-893933ded431'),
    imageAlt: 'Orange cocktail in a glass with ice',
    nonAlcoholicRecipe:
      '30 ml orange zest syrup (sugar + zest), 15 ml lemon, 120 ml soda—bright triple-sec style.',
  },
  {
    label: 'AMARETTO',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Almond sweetness with smooth body.',
    imageUrl: unsplash('1606767208159-1a5fb0a87841'),
    imageAlt: 'Sweet amber drink in a wine glass',
    nonAlcoholicRecipe:
      '30 ml orgeat (almond syrup), 120 ml cola or coffee (NA), orange twist.',
  },
  {
    label: 'CHAMBORD',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Black raspberry richness and sweetness.',
    imageUrl: unsplash('1652480189831-a76e5bc3ba90'),
    imageAlt: 'Colorful drinks in glasses on a table',
    nonAlcoholicRecipe:
      'Muddle blackberries, 20 ml raspberry syrup, 15 ml lemon, top with NA sparkling wine or soda.',
  },
  {
    label: 'SAMBUCA',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Anise aroma with sweet herbal depth.',
    imageUrl: unsplash('1470337458703-46ad1756a187'),
    imageAlt: 'Clear spirit poured into a shot glass',
    nonAlcoholicRecipe:
      'Star anise tea (strong, chilled), sweeten with simple syrup, 15 ml lemon—served cold in a cordial glass.',
  },
  {
    label: 'JAGERMEISTER',
    link: '/blank-page',
    category: 'Liqueur',
    blurb: 'Intense herbal blend with bittersweet finish.',
    imageUrl: unsplash('1614713946694-bcbd63bfb094'),
    imageAlt: 'Dark herbal liqueur bottle on a table',
    nonAlcoholicRecipe:
      'Strong chamomile + dandelion root tea (cold), 10 ml molasses, 5 ml ginger juice, orange peel—sip cold.',
  },
  {
    label: 'SAKE',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Umami-driven rice fermentation craftsmanship.',
    imageUrl: unsplash('1626379907753-406934326e2c'),
    imageAlt: 'Sake bottle and cups on a wooden table',
    nonAlcoholicRecipe:
      '150 ml koji-style rice drink or light amazake (NA), 50 ml water, pinch of salt—chilled, gentle umami.',
  },
  {
    label: 'SOJU',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Light body with approachable character.',
    imageUrl: unsplash('1552463063-4c11aff042fb'),
    imageAlt: 'Traditional white ceramic jars in a row',
    nonAlcoholicRecipe:
      '100 ml chilled barley tea, 50 ml Asian pear juice, 10 ml lime, light honey—clean and easy.',
  },
  {
    label: 'MIJIU',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Traditional Chinese rice wine style.',
    imageUrl: unsplash('1545239907-ea7bb166efa6'),
    imageAlt: 'Stacked boxes with Japanese lettering in a shop',
    nonAlcoholicRecipe:
      'Warm light amazake (NA) with a goji berry garnish and tiny pinch of five-spice—aromatic rice sweetness.',
  },
  {
    label: 'RUOU CAN',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Communal fermented rice drink tradition.',
    imageUrl: unsplash('1769213312703-78fec4456b96'),
    imageAlt: 'Stacked sake barrels with Japanese writing',
    nonAlcoholicRecipe:
      'Light ginger-turmeric rice water (strained), sweetened lightly with palm sugar, served cool.',
  },
  {
    label: 'LAO-LAO',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Laotian distilled rice spirit profile.',
    imageUrl: unsplash('1763475648219-346b2ed074d6'),
    imageAlt: 'Stacked barrels with Southeast Asian writing',
    nonAlcoholicRecipe:
      '30 ml lime, 15 ml honey, lemongrass tea (strong, cold), splash soda—bright highland lift.',
  },
  {
    label: 'TAPUY',
    link: '/blank-page',
    category: 'Rice Alcohol',
    blurb: 'Filipino rice wine with local heritage.',
    imageUrl: unsplash('1740982355751-6ccd0ffcc5d1'),
    imageAlt: 'Sake barrels stacked against a wall',
    nonAlcoholicRecipe:
      'Sweet rice porridge drink (NA), thinned with coconut water, banana chip garnish—soft ferment character.',
  },
];
