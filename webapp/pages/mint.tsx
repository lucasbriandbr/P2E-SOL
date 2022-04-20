// pages/mint.tsx

import styles from '../styles/Mint.module.css'
import Layout from "../pages/components/Layout"
import { useEffect, useState } from 'react'
import Mintbaby from "./components/Mintbaby"

//librairie solana-web3.js

import * as solanaWeb3 from '@solana/web3.js';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

//Librairie pour la détection des NFT présents dans le wallet.

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig } from "@nfteyez/sol-rayz";

function MintView() {

    return (

        <Layout hello="Mint">
            
            <Mintbaby/>
            
        </Layout>

    );

};

export default MintView;