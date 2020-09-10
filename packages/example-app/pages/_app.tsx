import Head from "next/head";

function App({ Component, pageProps }) {
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
