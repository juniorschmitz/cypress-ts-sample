import Head from "next/head";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Example Kiwi.com App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
