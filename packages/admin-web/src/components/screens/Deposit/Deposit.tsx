import { useState } from 'react';
import styles from './Deposit.module.css';
import cx from 'classnames';

const DEPOSIT_DATA = [
  {
    id: 1,
    symbol: 'ApeCoin',
    icon: '/ape-coin.svg',
    walletBalance: '—',
    apy: '0.04'
  },
  {
    id: 2,
    symbol: 'ApeETH',
    icon: '/ape-eth.svg',
    walletBalance: '—',
    apy: '0.00'
  },
  {
    id: 3,
    symbol: 'ApeUSD',
    icon: '/ape-usd.svg',
    walletBalance: '—',
    apy: '0.00'
  }
];

const Deposit = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.depositContainer}>
      <h1 className={styles.title}>Available to deposit</h1>
      
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
        <div>Your wallet balance</div>
        <div>APY ▼</div>
      </div>
      
      <div className={styles.tableRows}>
        {DEPOSIT_DATA.filter(asset => 
          asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(asset => (
          <div key={asset.id} className={styles.tableRow}>
            <div className={styles.asset}>
              <img src={asset.icon} alt={asset.symbol} />
              <span>{asset.symbol}</span>
            </div>
            <div>{asset.walletBalance}</div>
            <div>{asset.apy}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deposit; 