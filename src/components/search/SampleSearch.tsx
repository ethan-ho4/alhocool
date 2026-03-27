import { useMemo, useState } from 'react';
import SearchBar from './SearchBar';
import { SEARCH_ITEMS, type ItemCategory } from './searchItems';
import './SampleSearch.css';

export default function SampleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<ItemCategory | 'All'>('All');

  const items = SEARCH_ITEMS;
  const categories: Array<ItemCategory | 'All'> = ['All', 'Beer', 'Wine', 'Spirit', 'Liqueur', 'Rice Alcohol'];

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const normalizedTerm = searchTerm.trim().toLowerCase();
  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const matchCategory = activeCategory === 'All' || item.category === activeCategory;
        const haystack = [
          item.label,
          item.blurb,
          item.category,
          item.nonAlcoholicRecipe,
          item.imageAlt,
        ]
          .join(' ')
          .toLowerCase();
        const matchTerm = !normalizedTerm || haystack.includes(normalizedTerm);
        return matchCategory && matchTerm;
      }),
    [items, activeCategory, normalizedTerm]
  );

  return (
    <>
      <div className="search-bar-wrapper">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          resultCount={filteredItems.length}
          totalCount={items.length}
        />
      </div>

      <div className="search-filter-row">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="empty-state glass-panel">
          <h3>No matches found</h3>
          <p>Try a broader term like &quot;wine&quot;, &quot;gin&quot;, or reset filters.</p>
          <button
            type="button"
            className="btn-outline empty-reset"
            onClick={() => {
              setSearchTerm('');
              setActiveCategory('All');
            }}
          >
            Reset search
          </button>
        </div>
      ) : (
        <div className="list">
          {filteredItems.map((item, index) => (
            <article
              className="label-container glass-panel"
              key={`${item.label}-${index}`}
              tabIndex={0}
              role="group"
              aria-label={`${item.label}: ${item.category}. Hover or focus for full details and non-alcoholic recipe.`}
            >
              <div className="item-image-wrap" aria-hidden="true">
                <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" decoding="async" />
              </div>
              <div className="item-card-preview">
                <div className="item-category">{item.category}</div>
                <div className="item-label">{item.label}</div>
                <p className="item-blurb">{item.blurb}</p>
                <p className="item-hover-hint">Hover, focus, or tap the card for the full recipe</p>
              </div>

              <div className="item-hover-overlay" aria-hidden="true">
                <div className="item-hover-inner">
                  <div className="item-category">{item.category}</div>
                  <h3 className="item-hover-title">{item.label}</h3>
                  <p className="item-hover-blurb">{item.blurb}</p>
                  <p className="item-hover-image-note">{item.imageAlt}</p>
                  <div className="item-hover-recipe">
                    <span className="recipe-label">Non-alcoholic flavor</span>
                    <p className="recipe-text">{item.nonAlcoholicRecipe}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
