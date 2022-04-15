// pages/mint.tsx

import styles from '../../styles/Mint.module.css'
import { useEffect, useState } from 'react';

//librairie solana-web3.js

import * as solanaWeb3 from '@solana/web3.js';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

//Librairie pour la détection des NFT présents dans le wallet.

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";

declare const window: any;
  
function Mintbaby() {

    let current = new Date();

    const [ dateSecond, setDateSecond ] = useState(current);
    const [ connected, setConnected ] = useState(false);
    const [ walletAdress, setWalletAdress ] = useState('');
    const [ myProvider, setProvider ] = useState();
    const [ balance, setBalance ] = useState('--');

    const [ theMint, setTheMint ] = useState(0);

    useEffect(() => {

        setInterval(askIfSolanaConnected, 100);

    }, []);

    async function askIfSolanaConnected() {

        if ( window.solana.isConnected === true ) {

            setConnected(true);

            setWalletAdress(window.solana.publicKey.toString());

            //on passe l'adresse du wallet dans la fonction

            // let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));

            // let accountTokens = await connection.getBalance(window.solana.publicKey);

            // setBalance((accountTokens/solanaWeb3.LAMPORTS_PER_SOL).toString());

        } else {

            setConnected(false);

        }

    }

    function setTheMintMenosBro() {

        if (theMint > 0) {

            setTheMint(theMint-1);

        }

    }

    function setTheMintPlusBro() {

        if (theMint < 2) {

            setTheMint(theMint+1);

        }

    }

    async function theMintFunction() {

        let solanaValid = await solanaWeb3.PublicKey.isOnCurve(window.solana.publicKey);

        if (solanaValid === true) {

            console.log('adresse valide bro');

        }

    }

    return (

        <div className={styles.MintSection}>

            <div className={styles.MintWidget}>
                
                {connected === true ?
                
                    <div className={styles.ConnectedIsTrue}>
                        
                        <p>Compteur : 120/120</p>

                        <div className={styles.theMintCounter}>
                            
                            <p onClick={setTheMintMenosBro}>-</p>

                            <p>{theMint}</p>

                            <p onClick={setTheMintPlusBro}>+</p>

                        </div>
                        
                        <p className={styles.mintbutton} onClick={theMintFunction}>Claim / Mint</p>
                        
                    </div>

                :

                    <p>Not connected yet</p>

                }

            </div>

        </div>

    );

}

export default Mintbaby;