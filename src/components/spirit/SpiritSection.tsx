import { useState } from 'react';
import SpiritOverview from './SpiritOverview';
import SpiritTypes from './SpiritTypes';
import SpiritFood from './SpiritFood';
import SpiritHistory from './SpiritHistory';
import SpiritProcess from './SpiritProcess';
import SpiritBrands from './SpiritBrands';
import '../CategorySection.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'types',    label: 'Varieties' },
  { key: 'food',     label: 'Foods to Pair' },
  { key: 'history',  label: 'History' },
  { key: 'process',  label: 'Process' },
  { key: 'brands',   label: 'Big Brands' },
];

export default function SpiritSection() {
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
        {active === 'overview' && <SpiritOverview />}
        {active === 'types'    && <SpiritTypes />}
        {active === 'food'     && <SpiritFood />}
        {active === 'history'  && <SpiritHistory />}
        {active === 'process'  && <SpiritProcess />}
        {active === 'brands'   && <SpiritBrands />}
      </div>
    </div>
  );
}
