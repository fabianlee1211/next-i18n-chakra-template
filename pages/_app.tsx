import { ChakraProvider } from '@chakra-ui/react';
import App, { AppProps } from 'next/app';
import theme from '../shared/theme';
import { appWithTranslation } from '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
