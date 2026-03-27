import type { ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="search-container">
        <input 
          value={searchTerm} 
          onChange={handleInputChange} 
          placeholder="Search..."
        />
        {searchTerm && (
          <button className="clear-btn" onClick={clearSearch}>x</button>
        )}
    </div>
  );
}
