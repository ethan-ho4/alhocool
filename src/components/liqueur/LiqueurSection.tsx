import { useState } from 'react';
import LiqueurOverview from './LiqueurOverview';
import LiqueurTypes from './LiqueurTypes';
import LiqueurFood from './LiqueurFood';
import LiqueurHistory from './LiqueurHistory';
import LiqueurProcess from './LiqueurProcess';
import LiqueurBrands from './LiqueurBrands';
import '../CategorySection.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'types',    label: 'Varieties' },
  { key: 'food',     label: 'Foods to Pair' },
  { key: 'history',  label: 'History' },
  { key: 'process',  label: 'Process' },
  { key: 'brands',   label: 'Big Brands' },
];

export default function LiqueurSection() {
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
        {active === 'overview' && <LiqueurOverview />}
        {active === 'types'    && <LiqueurTypes />}
        {active === 'food'     && <LiqueurFood />}
        {active === 'history'  && <LiqueurHistory />}
        {active === 'process'  && <LiqueurProcess />}
        {active === 'brands'   && <LiqueurBrands />}
      </div>
    </div>
  );
}
