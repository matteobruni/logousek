import { Html, Head, Main, NextScript } from "next/document";
import LoaderScreenPage from "../components/loader-screen-page";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <title>Logousek</title>
      <meta name="description" content="Logopedická aplikace"></meta>
      <meta property="og:image" content="Obrázek nemáme"></meta>
      <body>
        <LoaderScreenPage />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
