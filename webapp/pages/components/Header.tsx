// components/Header.js

import styles from '../../styles/Header.module.css'
import { useRouter } from 'next/router'

function Header() {

  const router = useRouter()
  
  function changeUrl(url) {
    router.push(url, undefined, { shallow: true })
  }

  return (

    <div className={styles.Element}>

      <div className={styles.Header}>
        
        <div className={styles.firstSection}>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/')}>Home</button>
    
        </div>
    
        <div className={styles.centerSection}>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/mint')} disabled>Mint</button>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/gallery')} disabled>Gallery</button>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/play')} disabled>Play</button>
    
        </div>
    
        <div className={styles.lastSection}>
    
          <button className={styles.menuLink}>Connect</button>
    
        </div>
    
      </div>
    
    </div>

  );
}
  
export default Header;