import { useRouter } from 'next/router';
import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import { posts } from "./constantes/posts"
import styles from "../styles/Admin.module.css"

declare const window: any;

export default function Admin() {

    const router = useRouter()

    const [ connected, setConnected ] = useState(false)
    const [ loader, setLoader ] = useState(true)
    const [ timer, setTimer ] = useState(10)
    const [ realTimer, setRealTimer ] = useState(timer)
    const [ walletAdress, setWalletAdress ] = useState('')
    const [state, setState] = useState(0)

    const [ admin, setAdmin ] = useState(false)

    const tabs = [
        {label:"Sales", state:0},
        {label:"Option-2", state:1},
        {label:"Option-3", state:2}
    ]

    useEffect(() => {

        setInterval(askIfSolanaConnected, 100)

    }, [])

    async function askIfSolanaConnected() {
        if ( window.solana.isConnected === true ) {
            setWalletAdress(window.solana.publicKey.toString())
            //on passe l'adresse du wallet dans la fonction
            setConnected(true)
        } else {
            setConnected(false)
        }
    }

    function askIfAdressIsAdmin(props: string) {
        for (let index = 0; index < posts.length; index++) {
            if(props === posts[index].adress) {
                setTimeout(() => {setLoader(false)}, 1700)
                return(posts[index].name)
            } else {
                if (posts[index].state === posts.length) {
                    changeUrl('/')
                    return(false)
                }
            }
        }
    }
  
    function changeUrl(url: string) {
      router.push(url, undefined, { shallow: true })
    }

    return (

        <Layout hello="Admin">

            <div className={styles.Space}></div>

            {connected === true && askIfAdressIsAdmin(window.solana.publicKey.toString()) !== false ?

            <div className={styles.classeLoader}>

                {loader === false ?

                    <>

                        <div className={styles.MenuBro}>

                            <h3>AndroMechas</h3>
                            
                            {tabs.map((tab,index) => {
                                return(
                                    <p key={`tab_${index}`} onClick={() => {setState((tab.state))}} >{tab.label}</p>
                                )
                            })}

                        </div>

                        <div className={styles.vueChangeante}>

                            <h3>{tabs[state].label}</h3>

                        </div>
                    
                    </>

                :

                    <img className={styles.imageLoading} src="/images/fa6aa8b9f02691e42df56f1678e795fc.gif" alt="" />

                }

            </div>

            :

            <div className={styles.classeLoader}>

                <p>An error has occured</p>

            </div>

            }
            
        </Layout>

    )

}