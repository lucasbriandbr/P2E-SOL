import '../styles/globals.css'
import type { AppProps } from 'next/app'

// élements de la page

import Header from "./components/Header";
import Footer from "./components/Footer";

import WalletBalanceGlobalState from "./components/GlobalStates/balance"

function MyApp({ Component, pageProps }: AppProps) {

  let Balance = WalletBalanceGlobalState(135);

  console.log(Balance)

  return (
    
    <div>
      
      <Header/>
      
      <Component {...pageProps} />
      
      <Footer/>

    </div>
  
  );

}

export default MyApp
