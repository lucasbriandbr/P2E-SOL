import styles from "../../styles/Admin.module.css"
import { useEffect, useState } from "react"

export default function Sales() {

    const [deladata, setDeladata] = useState()

    useEffect(() => {

        function GetMagicEdenData() {
        fetch('https://api-mainnet.magiceden.dev/v2/collections/runcible/stats')
          .then(response => response.json())
          .then(data => console.log(data.symbol, data.floorPrice, data.listedCount, data.volumeAll))
        }

        GetMagicEdenData()

    }, [])

    return(
        <div className={styles.whitelistGestion}>
            
            <div className={styles.salesAmountContainer}>

                <div className={styles.divInSales}>
                    
                    <p>Floor Price</p>

                </div>

                <div className={styles.divInSales} id={styles.MiddleSales}>

                    <p>Listed Items</p>

                </div>

                <div className={styles.divInSales}>

                    <p>Total Volume</p>

                </div>

            </div>

            <div className={styles.graphiqueContainer}></div>
        
        </div>
    )
}