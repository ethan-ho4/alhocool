import { useState } from 'react';
import WineOverview from './WineOverview';
import WineTypes from './WineTypes';
import WineFood from './WineFood';
import WineHistory from './WineHistory';
import WineProcess from './WineProcess';
import WineBrands from './WineBrands';
import '../CategorySection.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'types',    label: 'Varieties' },
  { key: 'food',     label: 'Foods to Pair' },
  { key: 'history',  label: 'History' },
  { key: 'process',  label: 'Process' },
  { key: 'brands',   label: 'Big Brands' },
];

export default function WineSection() {
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
        {active === 'overview' && <WineOverview />}
        {active === 'types'    && <WineTypes />}
        {active === 'food'     && <WineFood />}
        {active === 'history'  && <WineHistory />}
        {active === 'process'  && <WineProcess />}
        {active === 'brands'   && <WineBrands />}
      </div>
    </div>
  );
}
