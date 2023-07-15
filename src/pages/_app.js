import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "./globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <link rel="icon" href="/favicon.ico" />
        <title>Discover Romania</title>
      </Head>

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
