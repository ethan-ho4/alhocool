import { useState } from 'react';
import RiceAlcoholOverview from './RiceAlcoholOverview';
import RiceAlcoholTypes from './RiceAlcoholTypes';
import RiceAlcoholFood from './RiceAlcoholFood';
import RiceAlcoholHistory from './RiceAlcoholHistory';
import RiceAlcoholProcess from './RiceAlcoholProcess';
import RiceAlcoholBrands from './RiceAlcoholBrands';
import '../CategorySection.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'types',    label: 'Varieties' },
  { key: 'food',     label: 'Foods to Pair' },
  { key: 'history',  label: 'History' },
  { key: 'process',  label: 'Process' },
  { key: 'brands',   label: 'Big Brands' },
];

export default function RiceAlcoholSection() {
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
        {active === 'overview' && <RiceAlcoholOverview />}
        {active === 'types'    && <RiceAlcoholTypes />}
        {active === 'food'     && <RiceAlcoholFood />}
        {active === 'history'  && <RiceAlcoholHistory />}
        {active === 'process'  && <RiceAlcoholProcess />}
        {active === 'brands'   && <RiceAlcoholBrands />}
      </div>
    </div>
  );
}
