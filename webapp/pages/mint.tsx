// pages/mint.tsx

import styles from '../styles/Mint.module.css'

//Composants de la page

import Layout from "../pages/components/Layout";

import { useEffect } from "react";

function MintView() {

    useEffect(() => {

    });

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (

        <Layout hello="Mint">

            <div className={styles.MintSection}>
            
                <div className={styles.Space}></div>

                <p className={styles.h1}>{date}</p>
            
            </div>
            
        </Layout>

    );

};

export default MintView;