// components/Footer.js

import styles from '../../styles/Footer.module.css'
import Script from 'next/script'
import Image from 'next/image';

//import des fonctionnalités React.js

import { useState, useEffect } from 'react';
import React from 'react';

  
function Footer() {

  const [ solanaCoinPrice, setSolanaCoinPrice ] = useState(0);

  async function solanaPrice() {
    const solana = await fetch('https://api.coingecko.com/api/v3/coins/solana?tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false')
      .then(response => response.json())
      .then(data => setSolanaCoinPrice(data.tickers[0].last))
  }

  useEffect(() => {
    solanaPrice();
  }, []);

  return (

    <div className={styles.Footer}>
      
      <div className={styles.sectionUne}>

        <div className={styles.linksBlock}>

          <a className={styles.solanaPriceBloc} href={'https://coinmarketcap.com/currencies/solana/'} target={'_blank'} rel={'noreferrer'}>

            <div className={styles.solanaIcon}>

              <Image src='/icon/solana-token.png' alt='Solana' width={75} height={75}/>

            </div>

            <div className={styles.solanaPrice}>

              <p className={styles.solanaText}>Solana <br/>
              {solanaCoinPrice}$</p>

            </div>

          </a>

        </div>

        <div className={styles.linksBlock}>

          <p>Cometh is a blockchain game that lets users own yield-generating NFTs, 
              integrating both DeFi and NFT features into a single, fun gaming experience.
          </p>

        </div>

        <div className={styles.linksTheBloc}>

          <div className={styles.linksBlock}>

            <p><a className={styles.theLink} href={'https://mail.google.com/mail/u/0/#inbox'} target="_blank" rel='noreferrer'>$COIN</a></p>

            <p><a className={styles.theLink} href={'https://mail.google.com/mail/u/0/#inbox'} target="_blank" rel='noreferrer'>Earn</a></p>
            
            <p><a className={styles.theLink} href={'https://mail.google.com/mail/u/0/#inbox'} target="_blank" rel='noreferrer'>Swap</a></p>

          </div>

          <div className={styles.linksBlock}>

            <p><a className={styles.theLink} href={'https://twitter.com/NamedCollection'} target="_blank" rel='noreferrer'>Twitter</a></p>

            <p><a className={styles.theLink} href={'https://github.com/lucasbriandbr'} target="_blank" rel='noreferrer'>Github</a></p>

            <p><a className={styles.theLink} href={'https://discord.gg/Wycyn7bUYq'} target="_blank" rel='noreferrer'>Discord</a></p>

          </div>

          <div className={styles.linksBlock}>

            <p><a className={styles.theLink} href={'https://coinmarketcap.com/'} target="_blank" rel='noreferrer'>Coinmarketcap</a></p>

            <p><a className={styles.theLink} href={'https://www.coingecko.com/'} target="_blank" rel='noreferrer'>Coingecko</a></p>

            <p><a className={styles.theLink} href={'https://mail.google.com/mail/u/0/#inbox'} target="_blank" rel='noreferrer'>Terms of Use</a></p>

          </div>

        </div>

      </div>

      <div className={styles.sectionDeux}>

      <p>3333 Unique Kaijuz and 6666 Unique Baby Kaijuz Who Need A Home</p>

      <p>©LUCAS SAS 2021-2022. All rights reserved</p>

      </div>

    </div>

  );

}
  
  export default Footer;