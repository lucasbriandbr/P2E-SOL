import styles from "../../styles/Admin.module.css"

export default function Sales() {
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