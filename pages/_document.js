import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 

  render() {
    return (
      <Html>
        <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument