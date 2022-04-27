// pages/play.tsx

import Layout from "../pages/components/Layout";
import { useEffect } from "react";
import styles from '../styles/Play.module.css'

function PlayView() {

    useEffect(() => {

    });

    return (

        <Layout hello="Play">

            <div className={styles.firstSection}>
                
                <p>Hello World !!! Here is the Mint Page.</p>

            </div>
            
        </Layout>

    );

};

export default PlayView;