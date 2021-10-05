import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

  
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
