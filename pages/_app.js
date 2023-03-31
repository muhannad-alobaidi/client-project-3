import '../styles/globals.css'
import smoothscroll from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';
import { useEffect, useState } from "react";




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
      console.log("smooth scroll")
    }
  }, []);
  
 
  return <Component {...pageProps} />
}

export default MyApp
