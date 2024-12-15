import { useState } from 'react';
import styles from './Borrow.module.css';
import cx from 'classnames';

const BORROW_DATA = [
  {
    id: 1,
    symbol: 'ApeCoin',
    icon: '/ape-coin.svg',
    availableToBorrow: '—',
    variableAPY: '1.08'
  },
  {
    id: 2,
    symbol: 'ApeETH',
    icon: '/ape-eth.svg',
    availableToBorrow: '—',
    variableAPY: '0.00'
  },
  {
    id: 3,
    symbol: 'ApeUSD',
    icon: '/ape-usd.svg',
    availableToBorrow: '—',
    variableAPY: '0.09'
  }
];

const Borrow = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.borrowContainer}>
      <h1 className={styles.title}>Available to borrow</h1>
      <div className={styles.subtitle}>(Based on your collateral)</div>
      
      <div className={styles.filterSection}>
        <div className={styles.filters}>
          <button 
            className={cx(styles.filterButton, { [styles.active]: activeFilter === 'All' })}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          <button 
            className={cx(styles.filterButton, { [styles.active]: activeFilter === 'Stable Coins' })}
            onClick={() => setActiveFilter('Stable Coins')}
          >
            Stable Coins
          </button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.tableHeader}>
        <div>Asset</div>
        <div>Available to borrow</div>
        <div>Variable APY ▼</div>
      </div>
      
      <div className={styles.tableRows}>
        {BORROW_DATA.filter(asset => 
          asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(asset => (
          <div key={asset.id} className={styles.tableRow}>
            <div className={styles.asset}>
              <img src={asset.icon} alt={asset.symbol} />
              <span>{asset.symbol}</span>
            </div>
            <div>{asset.availableToBorrow}</div>
            <div>{asset.variableAPY}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Borrow; 