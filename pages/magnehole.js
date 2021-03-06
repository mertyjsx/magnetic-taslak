import React from "react";
import Link from "next/link";
import Checkout from "../components/checkout" 
import Head from "next/head";
function CardItem(props) {
  return (
    <div className="fullw  cards__item_ responsiveProduct">
     <Head>
     <title>Ünye Manyetik Kumu | Sanatsal El yapımı kolye</title>
        <meta
          name="title"
          content="Ünye Manyetik Kumu | Stres karşıtı terapi kolye"
        ></meta>
        <meta
          name="description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi , El yapımı doğal taş kolye , Quartz "
        ></meta>

        <meta property="og:title" content="Ünye Manyetik Kumtaşı Magnehole" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://unyemanyetik.com/magnehole" />
        <meta
          property="og:image"
          content="https://unyemanyetik.com/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi"
        />

        <meta property="product:price:amount" content="75" />
        <meta property="product:price:currency" content="TRY" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ünye Manyetik Kumtaşı"></meta>

        <meta
          name="twitter:description"
          content="Stres avcısı manyetik kumdan yapılan sanatsal kolye"
        ></meta>

        <meta
          name="twitter:image"
          content="https://unyemanyetik.com/thumbnail.jpg"
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

        

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
               "@type": "Product",
               "name": "Ünye Manyetik Kumtaşı",
               "image":["https://unyemanyetik.com/pure.jpg"],
               "description": "Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi",
                   "offers": {
                 "@type": "Offer",
                 "url": "https://unyemanyetik.com/klasik",
                 "priceCurrency": "TRY",
                 "price": "75",
                
                 "availability": "https://schema.org/InStock"
         }
         
         }
                  `,
          }}
        />
      </Head>
      <figure className="cards__item__pic-wrap" data-category={"new"}>
        <img
          src={"/magnehole.jpg"}
          alt="Gezi Imgae"
          className="cards__item__img cards__item__link"
          style={{objectPosition:"bottom"}}
        />
      </figure>
      <div className="urun_acıklama cards__item__link ">
        <h1 className="urun_text">Magnehole Stres kumtaşı</h1>
        <h2>Ünye Manyetik Kumtaşı</h2>

        <h3 className="mt30">stres rahatlama terapi </h3>

        <h4></h4>
        <p className="urun__item__text mt30">
          ünye sahillerinde bulunan, içinde 20’ye yakın mineral olduğu tespit
          edilen, vücudun stresten arınmasına yardımcı olan manyetik siyah
          kumdan özel işlemlere tabi tutularak, el işçiliği ile üretilmiştir.
          Karadenizin sahillerinden çıkan bu kum manyetik özelliğe sahip ve
          doğal olarak siyah renktedir. Kolye çok yüksek bir Enerji alanına
          sahiptir ve stres ve bağışıklık sistemi için kullanılır. Timus bezinde
          kullanıldığında timus bezini harekete geçirir, Timus bezi stres ve
          bağışıklık sistemimizin merkezidir.
        </p>
        <h4 className="mt30">Ödeme seçenekleri</h4>
       <Checkout url="https://www.trendyol.com/unye-manyetik-kumtasi/stres-kolyesi-unye-manyetik-kumu-sanatsal-kolye-akses"></Checkout>
      </div>
    </div>
  );
}

export default CardItem;
