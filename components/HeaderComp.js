import React from 'react'
import Head from "next/head";

export default function HeaderComp({title,description,url,image_url,mobile_image_url,price,currency,sku}) {
    return (
        <Head>
        <title>{title}</title>
       
        <meta
          name="description"
          content={description}
        ></meta>

        <meta property="og:title" content={title} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={url}/>
        <meta
          property="og:image"
          content={image_url}
        />
        <meta
          property="og:description"
          content={description}
        />

        <meta property="product:price:amount" content={price}/>
        <meta property="product:price:currency" content={currency} />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ünye Manyetik Kumtaşı"></meta>

        <meta
          name="twitter:description"
          content={description}
        ></meta>

        <meta
          name="twitter:image"
          content={image_url}
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "${title}",
                "image": [
                  "${image_url}"
                 ],
                "description": "${description}",
                "sku": "${sku}",
                
                "brand": {
                  "@type": "Brand",
                  "name": "Unye Magnetic Sand"
                },
               
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "0",
                  "reviewCount": "0"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "${url}",
                  "priceCurrency": "${currency}",
                  "price": "${price}",
                  "priceValidUntil": "2022-11-20",
                  "itemCondition": "https://schema.org/NewCondition",
                  "availability": "https://schema.org/InStock"
                }
              }`,
          }}
        />
      </Head>
    )
}
