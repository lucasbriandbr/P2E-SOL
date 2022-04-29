// pages/mint.tsx

import styles from '../styles/Mint.module.css'
import Layout from "../pages/components/Layout"
import { useEffect, useState } from 'react'
import Mintbaby from "./components/Mintbaby"
import { useRouter } from "next/router"
import Head from 'next/head'

//librairie solana-web3.js

import * as solanaWeb3 from '@solana/web3.js';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

//Librairie pour la détection des NFT présents dans le wallet.

import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig } from "@nfteyez/sol-rayz";

function MintView() {

    const router = useRouter()

    useEffect(() => {

        router.push('/')

    });

    return (

        <Layout hello="Mint">

            <Head>

                <title>Play - Andromeda Mechs</title>

                <meta name="description" content="Yes, like on Amazon, you can ask for a Mech. He's coming from Andromeda to your wallet." />

            </Head>
            
            <Mintbaby/>
            
        </Layout>

    );

};

export default MintView;