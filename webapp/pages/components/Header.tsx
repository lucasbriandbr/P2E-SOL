// components/Header.js

import styles from '../../styles/Header.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

function Header() {

  const [walletAdress, setWalletAdress] = useState('');
  const [connected, setConnected] = useState(false);
  const [myProvider, setProvider] = useState();

  useEffect(() => {
    
    //Au lancement de la page
    
    getProviderHook();

    //appel de la fonction de connexoin si déjà connecté

  });

  const router = useRouter()
  
  function changeUrl(url) {
    router.push(url, undefined, { shallow: true })
  }

  async function getProviderHook() {

    if ("solana" in window) {

      //si "solana" est détecté dans l'objet window : 

      const provider = window.solana;

      //on instaure cet objet en tant que provider

      if (provider.isPhantom) {

        //Si le provider est bien Phantom Wallet

        const resp = await provider.connect({ onlyIfTrusted: true });

        //On connecte le provider dans le cas ou l'on apparaît comme site de confiance

        if (provider.isConnected == true) {

          //si le provider est connecté
          
          setConnected(true);

          //on définit un état connecté

          setWalletAdress(resp.publicKey.toString());

          //on passe l'adresse du wallet dans la fonction

        } else {

        }
      }
    } else {
      // window.open("https://phantom.app/", "_blank")
    }

  }

  async function getProvider() {

    //On déclare une fonction asynchrone "getprovider"

    if ("solana" in window) {

      //si "solana" est détecté dans l'objet window : 

      const provider = window.solana;

      //on instaure cet objet en tant que provider

      if (provider.isPhantom) {

        //Si le provider est bien Phantom Wallet

        try {

          //On essaye

          const resp = await provider.connect();

          //On attend que la connection au Wallet soit effective

          if (provider.isConnected == true) {

            //si le provider est connecté
            
            setConnected(true);

            //on définit un état connecté

            setWalletAdress(resp.publicKey.toString());

            //on passe l'adresse du wallet dans la fonction

          } else {

          }

        } catch (err) {

          //On attrappe les erreurs éventuelles

          console.log(err);

          //On affiche l'erreur attrappée

        }
      }
    } else {
      // window.open("https://phantom.app/", "_blank");
    }
  }

  //Gérer les états ouvert et fermé du menu Hamburger Responsive

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const setHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setWalletOpen(false);
  }

  //Gérer les états ouvert et fermé du menu Wallet Responsive

  const [isWalletOpen, setWalletOpen] = useState(false);

  const setWallet = () => {
    setWalletOpen(!isWalletOpen);
    setHamburgerOpen(false);
  }

  //Retour de la barre de Header

  return (

    <div className={styles.Element}>

      <div className={styles.Header}>

        <div className={styles.conteneurDeMenu}>

          <div className={styles.hamburger} onClick={setHamburger}>

            {/* <div className={styles.burger1}/>

            <div className={styles.burger2}/>

            <div className={styles.burger3}/> */}

            <p>Menu</p>

          </div>
          
          {connected === true && walletAdress !== '' ?

          <div className={styles.hamburger} onClick={setWallet}>

            <p>{walletAdress.substring(0,4)}...{walletAdress.substring(walletAdress.length-4,walletAdress.length)}</p>

          </div>

          :

          ""

          }

        </div>
        
        <div className={`${styles.firstSection} ${hamburgerOpen ? `${styles.hamburgermenuIsOpen}` : ``}`}>
    
          <button className={styles.menuLink} onClick={() => changeUrl('/')}>Home</button>
    
        </div>
    
        <div className={`${styles.centerSection} ${hamburgerOpen ? `${styles.hamburgermenuIsOpen}` : ``}`}>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/mint')} disabled>Mint</button>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/gallery')} disabled>Gallery</button>
    
          <button className={styles.menuLinkDisabled} onClick={() => changeUrl('/play')} disabled>Play</button>
    
        </div>
        
        {connected === true && walletAdress !== '' ?
    
        <div className={`${styles.centerSectionWallet} ${isWalletOpen ? `${styles.hamburgermenuIsOpen}` : ``}`}>
    
          <button className={styles.menuLinkDisabled} disabled>Solana Mainnet</button>
    
          <button className={styles.menuLinkDisabled} disabled>Balance</button>
    
          <button className={styles.menuLinkDisabled} disabled>Disconnect</button>
    
        </div>
        
        :

        ""

        }

        {connected === true && walletAdress !== '' ?
    
        <div className={`${styles.lastSectionBro} ${hamburgerOpen ? `${styles.hamburgermenuIsOpen}` : ``}`}>
          
          <button className={styles.menuLink}>{walletAdress.substring(0,4)}...{walletAdress.substring(walletAdress.length-4,walletAdress.length)}</button>
          
        </div>

        :
    
        <div className={`${styles.lastSection} ${hamburgerOpen ? `${styles.hamburgermenuIsOpen}` : ``}`}>
    
          <button className={styles.menuLink} onClick={getProvider}>Connect</button>
          
        </div>

        }
    
      </div>
    
    </div>

  );
}
  
export default Header;