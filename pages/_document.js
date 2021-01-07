import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
class MyDocument extends Document {
 

  render() {
    return (
      <Html>
        <Head >
    
<script>

</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-179714695-1"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-179714695-1');
                  `,
                }}
              />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Necklace , pendant , jewelry made by sea sand that has magnetic effect from Black Sea region"/>
<meta name="keywords" content="magnetic,sand,stone,seasand,gift,breastmilk jewelry,magnetic sand necklace,pendant,stress,age,health,anxiety,necklace,etsy"/>
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