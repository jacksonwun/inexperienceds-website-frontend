import React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/styles.css';
import '../styles/globals.css';
import Script from 'next/script';
import { Layout } from '../components/Common/Layout';

interface PageProps {
  pageProps: React.ReactNode;
}

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => (
  <>
    <Head>
      {/* <!-- Required meta tags --> */}
      <title>Inexperienceds.com</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      {/* <!-- Bootstrap CSS --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      ></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
      {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </Layout>
  </>
);
export default MyApp;
