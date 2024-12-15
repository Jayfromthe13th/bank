import { useState } from 'react';
import styles from './Markets.module.css';
import cx from 'classnames';

const MARKET_DATA = [
  {
    id: 1,
    symbol: 'APE',
    icon: '/ape-coin.svg',
    marketSize: '260.92',
    totalBorrowed: '18.06',
    depositAPY: '0.04',
    borrowAPY: '1.08'
  },
  {
    id: 2,
    symbol: 'ApeETH',
    icon: '/ape-eth.svg',
    marketSize: '0.03',
    totalBorrowed: '0',
    depositAPY: '0.00',
    borrowAPY: '0.00'
  },
  {
    id: 3,
    symbol: 'ApeUSD',
    icon: '/ape-usd.svg',
    marketSize: '61.45',
    totalBorrowed: '1.12',
    depositAPY: '0.00',
    borrowAPY: '0.09'
  }
];

const Markets = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.marketsContainer}>
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
        <div>Assets ▼</div>
        <div>Market size ▼</div>
        <div>Total borrowed ▼</div>
        <div>Deposit APY ▼</div>
        <div>Borrow APY ▼</div>
      </div>
      
      <div className={styles.tableRows}>
        {MARKET_DATA.filter(market => 
          market.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(market => (
          <div key={market.id} className={styles.tableRow}>
            <div className={styles.asset}>
              <img src={market.icon} alt={market.symbol} />
              <span>{market.symbol}</span>
            </div>
            <div>{market.marketSize}</div>
            <div>{market.totalBorrowed}</div>
            <div>{market.depositAPY}%</div>
            <div>{market.borrowAPY}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets; 