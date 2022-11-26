import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp;
