import "../styles/globals.css";
import Navbar from "../components/ui/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/ui/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <Footer/>
    </>
  );
}

export default MyApp;
