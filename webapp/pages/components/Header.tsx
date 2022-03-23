// components/Header.js
import styles from '../../styles/Header.module.css'

const Header = () => (
  <div className={styles.Header}>
    
    <div className={styles.firstSection}>

      <a className={styles.menuLink} href={'../'}>Home</a>

    </div>

    <div className={styles.centerSection}>

      <a className={styles.menuLink} href={'../mint'}>Mint</a>

      <a className={styles.menuLink} href={'../about'}>About</a>

      <a className={styles.menuLink} href={'../gallery'}>Gallery</a>

      <a className={styles.menuLink} href={'../play'}>Play</a>

    </div>

    <div className={styles.lastSection}>

      <p className={styles.menuLink}>Wallet</p>

    </div>

  </div>
);
  
export default Header;