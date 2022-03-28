import '../styles/globals.css';
import { ConnectProvider } from '../context/connectContext';
import { CityProvider } from '../context/CityContext';

function MyApp({ Component, pageProps }) {
  return (
    <ConnectProvider>
      <CityProvider>
        <Component {...pageProps} />
      </CityProvider>
    </ConnectProvider>
  );
}

export default MyApp;
