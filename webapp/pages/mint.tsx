// pages/mint.tsx

import styles from '../styles/Mint.module.css'

//Composants de la page

import Layout from "../pages/components/Layout";

import { useEffect, useState } from "react";

declare const window: any;

function MintView() {

    let current = new Date();

    const [ dateSecond, setDateSecond ] = useState(current);

    const [ connected, setConnected ] = useState(false);

    useEffect(() => {

        setInterval(askIfSolanaConnected, 1000);

        if ( window.solana.isConnected === true ) {

            setConnected(true);

        } else {
            
            setConnected(false);
            
        }

    }, []);

    function askIfSolanaConnected() {

        if ( window.solana.isConnected === true ) {

            setConnected(true);

        } else {
            
            setConnected(false);
            
        }

    }

    return (

        <Layout hello="Mint">

            <div className={styles.MintSection}>
            
                <div className={styles.Space}></div>

                {connected === true ?

                <p>Connecté</p>
                
                :

                <p>Pas connecté</p>
                
                }
            
            </div>
            
        </Layout>

    );

};

export default MintView;