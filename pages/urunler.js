import React from "react";
import CardItem from "../components/cardItem";
import Head from "next/head"


function Cards() {
  return (
    <div className="cards">
      <Head>
        <title>El yapımı kumtaşı çeşitleri  </title>
        <meta
          name="description"
          content="Timus bezi nasıl aktive edilir ? Manyetik Kumtaşı çeşitleri . Kuvars taşı içeren kolyeler
      "
        />

        <meta property="og:title" content="Ünye Manyetik Kumtaşı Klasik" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://magneticsand.net/klasik" />
        <meta
          property="og:image"
          content="https://magneticsand.net/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi"
        />

      

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ünye Manyetik Kumtaşı"></meta>

        <meta
          name="twitter:description"
          content="Stres avcısı manyetik kumdan yapılan sanatsal kolye"
        ></meta>

        <meta
          name="twitter:image"
          content="https://magneticsand.net/thumbnail.jpg"
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

       
        <meta
          name="title"
          content="Ünye Manyetik Kumu | Sanatsal El yapımı kolye"
        ></meta>
        <meta
          name="description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi , El yapımı doğal taş kolye , Quartz "
        ></meta>

      
        
      </Head>
      <div className="banner fullw relative">

<img src="/banner.png" className="fullw bannerImage"></img>
<div className="bannerContent">
<h1 className="bannerText">Ünye <br></br> Manyetik  Kumtaşı</h1>
<h3 className="bannerText2">Sanatsal Takılar</h3>

</div>

      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
              src={"/mavi.jpg"}
              text="Mavi tasarım "
              label="Yeni"
              path="/mavi"
              available={true}
            />
            <CardItem
              src={"/pure.jpg"}
              text="Sade ünye kumtaşı"
              label="Yeni"
              path="/unye-manyetik-kumtasi-klasik"
              style={{objectPosition: "bottom"}}
              available={true}
            />
          
          </ul>
          <ul className="cards__items">
          <CardItem
              src={"/desen.jpg"}
              text="Desenli kumtaşı kolye"
              label="Yeni"
              path="/timus-bezi-kumtasi"
              available={true}
             
              
            />
            
            <CardItem
              src={"/magneflower_mobile.jpg"}
              text="epoksi ve siyah kum"
              label="Yeni"
              path="/magneflower"
              available={true}
            />
              <CardItem
              src={"/denizatı_mobile.jpg"}
              text="deniz atı "
              label="Yeni"
              path="/denizati"
              style={{objectPosition: "bottom"}}
              available={true}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={"/product5.jpg"}
              text="Pirinç çerçeve manyetik siyah kumtaşı"
              label="Tükendi"
              path="/klasik"
            />
            <CardItem
              src={"/product4.jpg"}
              text="Manyetik kum üzerinde doğal taşlar"
              label="Tükendi"
              path="/klasik"

            />
            <CardItem
              src={"/special_mobile.jpg"}
              text="Manyetik kum üzerine quartz"
              label="Yeni"
              path="/special"
              available={true}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;