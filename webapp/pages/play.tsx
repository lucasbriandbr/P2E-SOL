// pages/play.tsx

import Layout from "../pages/components/Layout";
import { useEffect } from "react";
import styles from '../styles/Play.module.css'
import { useRouter } from "next/router"
import Head from "next/head";

function PlayView() {

    const router = useRouter()

    useEffect(() => {

        router.push('/')

    });

    return (

        <Layout hello="Play">

            <Head>

                <title>Play - Andromeda Mechs</title>

                <meta name="description" content="Enter the game, try to fight with Human army." />

            </Head>

            <div className={styles.firstSection}>
                
                <p>Hello World !!! Here is the Mint Page.</p>

            </div>
            
        </Layout>

    );

};

export default PlayView;