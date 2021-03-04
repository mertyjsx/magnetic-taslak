import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Manyetik from "../components/manyetik";
import Thymus from "../components/thymus";
import Level2 from "../components/level3";
import Level3 from "../components/level2";
import ButtonContainer from "../components/buttonContainer";
import SampleProduct from "../components/SampleProduct";

import config from "react-reveal/globals";

config({ ssrFadeout: true });
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <main className={""}>
      <Head>
        <meta property="og:title" content="Ünye Manyetik Kumtaşı Klasik" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://unyemanyetik.com/klasik" />
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

        <title>Ünye Manyetik Kumu | Sanatsal El yapımı kolye</title>
        <meta
          name="title"
          content="Ünye Manyetik Kumu | Sanatsal El yapımı kolye"
        ></meta>
        <meta
          name="description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi , El yapımı doğal taş kolye , Quartz "
        ></meta>
      </Head>
      <article className={styles.main}>
        <Manyetik></Manyetik>

        
         
       
        
        <h3 className="text-center text-6xl font-bold mt220 ">
          Kolye haline getirdik
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
          Ünye sahillerinde bulunan, içinde 20’ye yakın mineral olduğu tespit
          edilen, vücudun stresten arınmasına yardımcı olan manyetik siyah
          kumdan; özel işlemlere tabi tutularak, el işçiliği ile üretilmiştir.
          <br></br>
          <span class="text-3xl font-bold text-black">
            Siyah Manyetik kumu tasarımla buluşturduk
          </span>
        </p>
      

        <SampleProduct></SampleProduct>
        <ButtonContainer></ButtonContainer>
        <Thymus></Thymus>

        <Level2></Level2>
        <Level3></Level3>
      
        <h3 className="text-center text-6xl font-bold mt-6 ">
          Ünye Siyah Kumu Nedir ?
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
          1900'lü yıllardan beri insanlar tarafından ağrılar ve farklı
          tedavilerde de kullanılan manyetik siyah kumun, geçmişe dönük
          araştırmalara bakıldığında, binlerce yıl öncesinde de kullanıldığı
          anlaşılıyor. Özellikle İç Anadolu’dan Karadeniz'e inen ve İpekyolu
          olarak adlandırılan Akkuş, Niksar, Tokat, Sivas, şehirleri üzerinden
          insanların ağrılarına çözüm bulmak için geçmişte Ünye’ye geldikleri,
          siyah manyetik kumun olduğu kumsalda kuma gömülerek doğal tedavi
          yolları aradıkları belirtiliyor.
          <br></br>
          <b class="text-3xl font-bold text-black">
            Büyüklerimiz ağrılarından kurtulmak için ünye siyah kuma gömülürdü.
          </b>
        </p>
        <h3 className="text-center text-6xl font-bold mt-6 ">
          Ünye Kumu Timus bezi etkisi
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
          Timüs bezini tedavi ediyor. Yapılan tıbbi araştırmalarda, kara kumun,
          insan vücudunun bağışıklık sistemini düzenleyen timüs bezini onarma
          özelliği bulunuyor. Kara kumdan yapılan kolyeler bu görevi
          yapabiliyor. Siklon enerji oluşturarak negatif enerjiyi
          uzaklaştırıyor, yerine daha fazla pozitif enerjiyi vücuda çekiyor.
          Stresi azaltıyor. Bağışıklık sistemini düzenliyor. (Dikkat! Sadece
          kalp pili kullananlar için kesinlikle tavsiye edilmiyor.)
        
        </p>
        <h3 className="text-center text-6xl font-bold mt-6 ">
          Ünye Kumu Timus bezi etkisi
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
          Timüs bezini tedavi ediyor. Yapılan tıbbi araştırmalarda, kara kumun,
          insan vücudunun bağışıklık sistemini düzenleyen timüs bezini onarma
          özelliği bulunuyor. Kara kumdan yapılan kolyeler bu görevi
          yapabiliyor. Siklon enerji oluşturarak negatif enerjiyi
          uzaklaştırıyor, yerine daha fazla pozitif enerjiyi vücuda çekiyor.
          Stresi azaltıyor. Bağışıklık sistemini düzenliyor. (Dikkat! Sadece
          kalp pili kullananlar için kesinlikle tavsiye edilmiyor.)
        
        </p>

      
      </article>
    </main>
  );
}
