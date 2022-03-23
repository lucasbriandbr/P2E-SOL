// components/Header.js
import styles from '../../styles/Header.module.css'

const Header = () => (
  <div className={styles.Header}>
    
    <div className={styles.firstSection}>

      <p>Home</p>

    </div>

    <div className={styles.centerSection}>

      <p>Mint</p>

      <p>About</p>

      <p>Gallery</p>

      <p>Play</p>

    </div>

    <div className={styles.lastSection}>

      <p>Wallet</p>

    </div>

  </div>
);
  
export default Header;