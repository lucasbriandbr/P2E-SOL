import '../styles/globals.css'
import type { AppProps } from "next/app"

// élements de la page

import Header from "./components/Header"
import Footer from "./components/Footer"

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
    <div className='thatsthebigdivbro'>
      
      <Header/>
      
        <Component {...pageProps} />
      
      <Footer/>

    </div>
  
  );

}
