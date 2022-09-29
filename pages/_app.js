import "../styles/globals.css";


import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
     <Footer/>
    </>
  );
}

export default MyApp;
