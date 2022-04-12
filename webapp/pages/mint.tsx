// pages/mint.tsx

import styles from '../styles/Mint.module.css'

//Composants de la page

import Layout from "../pages/components/Layout";

import { useEffect } from "react";

function MintView() {

    useEffect(() => {

    });

    return (

        <Layout hello="Mint">

            <div className={styles.MintSection}>
            
                <div className={styles.Space}></div>

                <p>Hello World !!! Here is the Mint Page.</p>
            
            </div>
            
        </Layout>

    );

};

export default MintView;