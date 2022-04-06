// components/Header.js

import styles from '../../styles/Header.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

//librairie solana-web3.js

import * as solanaWeb3 from '@solana/web3.js';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

//Librairie pour la détection des NFT présents dans le wallet.

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig } from "@nfteyez/sol-rayz";

//librairie pour s'occupper des noms de domaines en .sol

import { FavouriteDomain, NAME_OFFERS_ID } from "@bonfida/name-offers";
import { performReverseLookup } from "@bonfida/spl-name-service";
import { PublicKey } from "@solana/web3.js";

function Header() {

  const [walletAdress, setWalletAdress] = useState('');
  const [bonfidaDomain, setBonfidaDomain] = useState('');
  const [connected, setConnected] = useState(false);
  const [myProvider, setProvider] = useState();
  const [balance, setBalance] = useState('');

  useEffect(() => {

  });

  const router = useRouter()
  
  function changeUrl(url) {
    router.push(url, undefined, { shallow: true })
  }

  async function getProvider() {

    //On déclare une fonction asynchrone "getprovider"

    if ("solana" in window) {

      //si "solana" est détecté dans l'objet window : 

      const provider = window.solana;
      setProvider(provider);
      // console.log(myProvider);

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

            let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));

            // let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("testnet"));

            let accountTokens = await connection.getBalance(window.solana.publicKey);

            setBalance((accountTokens/solanaWeb3.LAMPORTS_PER_SOL).toString());

            //récupérer toutes le données du NFT

            let solanadomain = await findFavoriteDomainName(resp.publicKey, connection);

            if (typeof(solanadomain) === 'string') {

              setBonfidaDomain(solanadomain);

            }

            // getAllNftData();

          } else {

          }

        } catch (err) {

          //On attrappe les erreurs éventuelles

          if (err.code === 4001) {

          }

        }
      }
    } else {

      window.open("https://phantom.app/", "_blank");

      //On renvoie l'user vers la page de phantom Wallet

    }
  }

  //Se déconnecter grâce à une fonction

  async function phantomDisconnect() {

    myProvider.disconnect();

    setConnected(false);

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

  //fonction de récupération des NFT

  
  const getAllNftData = async () => {
    
    try {

        const connect = createConnectionConfig(clusterApiUrl("mainnet-beta"));
        const provider = window.solana;
        let ownerToken = provider.publicKey;
        const result = isValidSolanaAddress(ownerToken);

        const nfts = await getParsedNftAccountsByOwner({

          publicAddress: ownerToken,
          connection: connect,
          sanitize: true,

        });

    } catch (error) {

      // console.log(error);

    }

  }

  //récupérer les éventuels noms de domaines détenus par le wallet

  const findFavoriteDomainName = async (owner: PublicKey, connection: solanaWeb3.Connection) => {
    try {
      const [favKey] = await FavouriteDomain.getKey(NAME_OFFERS_ID,new PublicKey(owner));
  
      const favourite = await FavouriteDomain.retrieve(connection, favKey);
  
      const reverse = await performReverseLookup(connection,favourite.nameAccount);
  
      return reverse;
    } catch (err) {
      // console.log(err);
    }
  };

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
            
            {connected === true && bonfidaDomain !== '' ?
            
            <p>{bonfidaDomain.replace(bonfidaDomain[0], bonfidaDomain[0].toUpperCase())}</p>

            :

            <p>{walletAdress.substring(0,4)}...{walletAdress.substring(walletAdress.length-4,walletAdress.length)}</p>

            }

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
    
          <button className={styles.menuLink} disabled><span className={styles.mainnetActive}></span> Mainnet</button>
    
          <button className={styles.menuLink} disabled>{balance.substring(0,balance.indexOf('.')+3)} SOL</button>
    
          <button className={styles.menuLink} onClick={phantomDisconnect}>Disconnect</button>
    
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