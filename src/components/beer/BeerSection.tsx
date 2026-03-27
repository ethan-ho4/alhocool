import { useState } from 'react';
import BeerOverview from './BeerOverview';
import BeerTypes from './BeerTypes';
import BeerFood from './BeerFood';
import BeerHistory from './BeerHistory';
import BeerProcess from './BeerProcess';
import BeerBrands from './BeerBrands';
import '../CategorySection.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'types',    label: 'Varieties' },
  { key: 'food',     label: 'Foods to Pair' },
  { key: 'history',  label: 'History' },
  { key: 'process',  label: 'Process' },
  { key: 'brands',   label: 'Big Brands' },
];

export default function BeerSection() {
  const [active, setActive] = useState('overview');

  const handleTabClick = (key: string) => {
    setActive(key);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="category-section-container">
      <div className="category-tabs">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={active === tab.key ? 'active' : ''}
            onClick={() => handleTabClick(tab.key)}
          >{tab.label}</button>
        ))}
      </div>

      <div className="category-content">
        {active === 'overview' && <BeerOverview />}
        {active === 'types'    && <BeerTypes />}
        {active === 'food'     && <BeerFood />}
        {active === 'history'  && <BeerHistory />}
        {active === 'process'  && <BeerProcess />}
        {active === 'brands'   && <BeerBrands />}
      </div>
    </div>
  );
}
