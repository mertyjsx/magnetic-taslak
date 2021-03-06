import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SP1M83JQL1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-SP1M83JQL1');
                  `,
            }}
          />

          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta
            name="p:domain_verify"
            content="f7ff4e16ee81b34b14d1d43bd2341086"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>

          <meta
            name="p:domain_verify"
            content="f7ff4e16ee81b34b14d1d43bd2341086"
          />
         

          <meta name="robots" content="index, follow" />

          <meta name="thumbnail" content="/thumbnail.jpg" />

          <meta property="og:type" content="website" />

          <link rel="preload" as="image" href="/lala.png" type="image/png" />
          <link
            rel="preload"
            as="video"
            href="/magneticVideo.mp4"
            type="video/mp4"
          />

          <link rel="icon" href="/lala.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
