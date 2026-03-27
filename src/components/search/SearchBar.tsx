import type { ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultCount: number;
  totalCount: number;
}

export default function SearchBar({ searchTerm, onSearchChange, resultCount, totalCount }: SearchBarProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="search-container glass-panel">
        <div className="search-header">
          <p className="search-kicker">Discover</p>
          <h2>Find your next favorite drink</h2>
          <p className="search-subtext">
            Browse by style, spirit type, or flavor profile with instant filtering.
          </p>
        </div>

        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Try: whiskey, sparkling wine, gin..."
            aria-label="Search drinks"
          />
          {searchTerm && (
            <button type="button" className="clear-btn" onClick={clearSearch} aria-label="Clear search">
              Clear
            </button>
          )}
        </div>

        <div className="search-meta">
          <span>{resultCount} results</span>
          <span>{totalCount} total entries</span>
        </div>
    </div>
  );
}
