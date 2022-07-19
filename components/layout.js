import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import nextConfig from "../next.config";
const navbar = nextConfig.appConfig.navbar;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content=""
        />
        <title>FOSSBilling</title>

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:title" content="FOSSBilling" />
        <meta property="og:site_name" content="FOSSBilling" />
        <meta property="og:url" content="https://fossbilling.org" />
        <meta
          property="og:description"
          content="FOSSBilling is a free and open source billing and client management solution. FOSSBilling can help you to automate your invoicing, incoming payments, client management and communication."
        />
        <meta property="og:type" content="product" />
        {/*<meta
          property="og:image"
          content="https://fossbilling.org/img/og-image.png"
        />*/}
      </Head>

      <main>
        {children}
      </main>
      <Script src="/main.js" />
    </div>
  );
}