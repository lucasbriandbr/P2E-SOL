// pages/mint.tsx

import styles from '../../styles/Mint.module.css'
import { useEffect, useState } from 'react';

//librairie solana-web3.js

import * as solanaWeb3 from '@solana/web3.js';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, Transaction, SystemProgram } from '@solana/web3.js';

//Librairie pour la détection des NFT présents dans le wallet.

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { empty } from '@prisma/client/runtime';

declare const window: any;
  
export default function Mintbaby() {

    let current = new Date();

    const [ dateSecond, setDateSecond ] = useState(current);
    const [ connected, setConnected ] = useState(false);
    const [ walletAdress, setWalletAdress ] = useState('');
    const [ myProvider, setProvider ] = useState();
    const [ balance, setBalance ] = useState('--');

    const [ theMint, setTheMint ] = useState(0);
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');
    const [ message, setMessage ] = useState(false);

    useEffect(() => {
        setInterval(askIfSolanaConnected, 100);
    }, []);

    async function askIfSolanaConnected() {
        if ( window.solana.isConnected === true ) {
            setConnected(true);
            setWalletAdress(window.solana.publicKey.toString());
            //on passe l'adresse du wallet dans la fonction
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
            let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"), 'confirmed');
            let accountTokens = await connection.getBalance(window.solana.publicKey);
            setBalance((accountTokens/solanaWeb3.LAMPORTS_PER_SOL).toString());
            if (theMint > 0 && parseFloat(balance) > theMint) {
                const message = `We'll send u ${theMint} nft's in this wallet so be sure you wanna pay ${theMint*1} SOL. You won't regret bro, be ready for the game haha`;
                const encodedMessage = new TextEncoder().encode(message);                
                const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");            
            } else {
                if (theMint <= 0) {                    
                    setError("Vous devez selectionner au moins 1 token");
                } else {
                    setError("Vous n'avez pas les fonds pour faire cela");
                }
            }
        }
    }
    return (
        <div className={styles.MintSection}>
            <div className={styles.MintWidget}>                
                {connected === true ?                
                    <div className={styles.ConnectedIsTrue}>
                        <div className={styles.theMintCounter}>                            
                            <p onClick={setTheMintMenosBro}>-</p>
                            <p>{theMint}</p>
                            <p onClick={setTheMintPlusBro}>+</p>
                        </div>                        
                        <p className={styles.mintbutton} onClick={theMintFunction}>Mint</p>                        
                    </div>
                :
                    <p>Not connected yet</p>
                }
            </div>
                {error != '' ?                
                    <p className={styles.error}><img src='/icon/x-mark.png'/>{error}</p>
                :
                    ''
                }
                {success != '' ?
                    <p className={styles.success}><img src='/icon/check-mark.png'/>{success}</p>                
                :                
                    ''                
                }
        </div>
    );
}