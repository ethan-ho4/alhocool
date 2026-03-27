import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './SampleSearch.css';

export default function SampleSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { label: 'LAGER', link: '/blank-page' },     
    { label: 'ALE', link: '/blank-page' },
    { label: 'STOUT', link: '/blank-page' },
    { label: 'INDIA PALE ALE', link: '/blank-page' },
    { label: 'PILSNER', link: '/blank-page' },
    { label: 'WHEAT BEER', link: '/blank-page' },
    { label: 'RED WINE', link: '/blank-page' },
    { label: 'WHITE WINE', link: '/blank-page' },
    { label: 'ROSÉ', link: '/blank-page' },
    { label: 'SPARKLING WINE', link: '/blank-page' },
    { label: 'DESSERT WINE', link: '/blank-page' },
    { label: 'FORTIFIED WINE', link: '/blank-page' },
    { label: 'WHISKEY', link: '/blank-page' },
    { label: 'VODKA', link: '/blank-page' },
    { label: 'RUM', link: '/blank-page' },
    { label: 'TEQUILA & MEZCAL', link: '/blank-page' },
    { label: 'GIN', link: '/blank-page' },
    { label: 'BRANDY', link: '/blank-page' },
    { label: 'BAILEYS IRISH CREAM', link: '/blank-page' },
    { label: 'COINTREAU', link: '/blank-page' },
    { label: 'AMARETTO', link: '/blank-page' },
    { label: 'CHAMBORD', link: '/blank-page' },
    { label: 'SAMBUCA', link: '/blank-page' },
    { label: 'JÄGERMEISTER', link: '/blank-page' },
    { label: 'SAKE', link: '/blank-page' },
    { label: 'SOJU', link: '/blank-page' },
    { label: 'MIJIU', link: '/blank-page' },
    { label: 'RƯỢU CẦN', link: '/blank-page' },
    { label: 'LAO-LAO', link: '/blank-page' },
    { label: 'TAPUY', link: '/blank-page' }
  ];

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const filteredItems = items.filter(item => 
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isExternalLink = (link: string) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };

  return (
    <>
      <div className="search-bar-wrapper">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>

      <div className="list">
          {filteredItems.map((item, index) => (
            <div className="label-container" key={index}>
                {isExternalLink(item.link) ? (
                    <a href={item.link}>
                        <div className="item-label">{item.label}</div>
                    </a>
                ) : (
                    <Link to={item.link}>
                        <div className="item-label">{item.label}</div>
                    </Link>
                )}
            </div>
          ))}
      </div>
    </>
  );
}
