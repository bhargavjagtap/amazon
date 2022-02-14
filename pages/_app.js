import { useEffect } from 'react'
import '../styles/globals.css'
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  
  //Step 1 to get rid of the issue that is css not applied to the page
  //Step 2 create _document.js 
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {  
      jssStyles.parentElement.removeChild(jssStyles);
  }
},[]);

return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp
