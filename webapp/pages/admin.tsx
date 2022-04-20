import { useRouter } from 'next/router';
import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import { posts } from "./constantes/posts"

declare const window: any;

export default function Admin() {

    const router = useRouter()

    const [ connected, setConnected ] = useState(false)
    const [ walletAdress, setWalletAdress ] = useState('')

    const [ admin, setAdmin ] = useState(false)

    useEffect(() => {

        setInterval(askIfSolanaConnected, 100)

    }, [])

    async function askIfSolanaConnected() {
        if ( window.solana.isConnected === true ) {
            setConnected(true)
            setWalletAdress(window.solana.publicKey.toString())
            //on passe l'adresse du wallet dans la fonction
        } else {
            setConnected(false)
        }
    }

    function askIfAdressIsAdmin(props: string) {
        for (let index = 0; index < posts.length; index++) {
            if(props === posts[index].adress) {
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

            <div>
                
                <p>Hello World !!! Here is the ADMIN Page.</p>

            </div>

            {connected === true && askIfAdressIsAdmin(window.solana.publicKey.toString()) !== false ?
                <div>

                    <p>Bienvenue {askIfAdressIsAdmin(window.solana.publicKey.toString())}</p>

                </div>
                :
                <p>Erreur - Veuillez vous identifier pour accéder à cette partie du site</p>
            }
            
        </Layout>

    )

}