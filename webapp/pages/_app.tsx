import '../styles/globals.css'
import type { AppProps } from 'next/app'

// élements de la page

import Header from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
    <div>
      
      <Header/>
      
      <Component {...pageProps} />
      
      <Footer/>

    </div>
  
  );

}

export default MyApp
