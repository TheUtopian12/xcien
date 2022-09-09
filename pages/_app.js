import "../styles/globals.css";
import Navbar from "../components/ui/Navbar";
import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/ui/Footer";
import Loading from "./Loading";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true)
  setTimeout(()=>{
    setLoading(false)
  },15000)
  return (
    <>

    {loading ? <Loading/> : <><Navbar/>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
     <Footer/></>}

    
    </>
  );
}

export default MyApp;
