import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Markets from '../screens/Markets/Markets';
import Deposit from '../screens/Deposit/Deposit';
import Borrow from '../screens/Borrow/Borrow';
import Rewards from '../screens/Rewards/Rewards';
import WheatField from '../shared/WheatField/WheatField';
import Banner from './Banner';

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/ape-logo.svg" alt="Ape Bank" />
        </div>
        <div className={styles.navLinks}>
          <Link to="/markets">MARKETS</Link>
          <Link to="/dashboard">MY DASHBOARD</Link>
          <Link to="/deposit">DEPOSIT</Link>
          <Link to="/borrow">BORROW</Link>
          <Link to="/rewards">REWARDS</Link>
          <Link to="/docs">DOCS</Link>
        </div>
        <button className={styles.connectButton}>Connect</button>
      </nav>
      
      <Banner />
      
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/markets" element={<Markets />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/" element={<Markets />} />
          </Routes>
        </main>
      </div>
      
      <WheatField />
    </div>
  );
}

export default App;
