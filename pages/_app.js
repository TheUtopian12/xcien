import "../styles/globals.css";
import Navbar from "../components/ui/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
