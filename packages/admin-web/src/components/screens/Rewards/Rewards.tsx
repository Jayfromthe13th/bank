import { useWallet } from '../../../contexts/WalletContext';
import styles from './Rewards.module.css';

const Rewards = () => {
  const { isConnected } = useWallet();

  if (!isConnected) {
    return (
      <div className={styles.rewardsContainer}>
        <h1 className={styles.title}>My Rewards</h1>
        <div className={styles.walletPrompt}>
          <p>A wallet must be connected to claim rewards.</p>
          <div className={styles.connectMessage}>
            Please connect your wallet to see your rewards.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.rewardsContainer}>
      <h1 className={styles.title}>My Rewards</h1>
      <div className={styles.rewardsGrid}>
        {/* Add rewards content when connected */}
        <div className={styles.rewardCard}>
          <div className={styles.rewardHeader}>
            <img src="/ape-coin.svg" alt="APE" />
            <span>APE Rewards</span>
          </div>
          <div className={styles.rewardAmount}>0.00</div>
          <button className={styles.claimButton} disabled>
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rewards; 