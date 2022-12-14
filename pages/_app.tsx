import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matteo Kinkela - software engineer</title>
        <meta name="description" content="Matteo Kinkela - software engineer" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="jI9gtzysCR3p9InY00qz69ZAhR5YrkkjsIn46HBz3OU"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
