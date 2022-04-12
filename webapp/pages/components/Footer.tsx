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

  const current = new Date();
  const date = `${current.getFullYear()}`;

  useEffect(() => {
    solanaPrice();
  }, []);

  return (

    <div className={styles.Footer}>

      <div className={styles.sectionDeux}>

      <p className={styles.paragraphefooter}>3333 Unique Kaijuz and 6666 Unique Baby Kaijuz Who Need A Home</p>

      <p>©LUCAS SAS 2021-{date}. All rights reserved</p>

      </div>

    </div>

  );

}
  
  export default Footer;