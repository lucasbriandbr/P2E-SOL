// components/Header.js
import styles from '../../styles/Header.module.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Header() {

  const router = useRouter()
  
  function changeUrl(url) {
    router.push(url, undefined, { shallow: true })
  }

  return (

    <div>

      <div className={styles.Header}>
        
        <div className={styles.firstSection}>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/')}>Home</button>
    
        </div>
    
        <div className={styles.centerSection}>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/mint')}>Mint</button>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/about')}>About</button>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/gallery')}>Gallery</button>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/play')}>Play</button>
    
        </div>
    
        <div className={styles.lastSection}>
    
          <button className={styles.menuLink}>Wallet</button>
    
        </div>
    
      </div>
    
    </div>

  );
}
  
export default Header;