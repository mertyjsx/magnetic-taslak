import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 

  render() {
    return (
      <Html>
        <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="magnetic sand, magnetic necklaces healing and stressfield sand"/>
<meta name="keywords" content="magnetic,sand,stone,pendant,stress,age,health"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf8"/>
<meta name="language" content="English"/>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
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