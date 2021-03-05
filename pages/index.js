import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Manyetik from "../components/manyetik";
import Thymus from "../components/thymus";
import Level2 from "../components/level3";
import Level3 from "../components/level2";
import ButtonContainer from "../components/buttonContainer";
import SampleProduct from "../components/SampleProduct";




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

        <title>Ünye Manyetik Kumtaşı | Sanatsal El yapımı kolye</title>

        <meta
          name="description"
          content="Ünye Manyetik Kumundan yapılan sanatsal kumtaşı , timus bezi üzerinde kullanılır , kuvars içeren kumtaşı , Timus bezi nedir ? "
        ></meta>
     

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ "@context": "https://schema.org", 
            "@type": "BlogPosting",
            "headline": "Ünye Manyetik Kumtaşı ve Timus bezi  ",
            "alternativeHeadline": "Ünye manyetik kumundan yapılan takılar",
            "image": "https://unyemanyetik.com/pure.jpg",
           
            "editor": "Orkun Mert Yiğit", 
            "genre": "Ünye manyetik kumu", 
            "keywords": "timus kumtaşı kumtasi", 
            "wordcount": "1120",
            "publisher": "Ünye Manyetik",
            "url": "https://www.unyemanyetik.com",
            "datePublished": "2021-03-05",
            "dateCreated": "2021-03-05",
           
            "description": "Ünye Manyetik Kumundan yapılan sanatsal kumtaşı , timus bezi üzerinde kullanılır , kuvars içeren kumtaşı , Timus bezi nedir ?",
            "articleBody": "Ünye kumsallarında bulunan ve birçok mineralden oluşan bu kum doğal olarak siyahtır ve manyetik etkiye sahiptir
            , bir çok ülkede terapi,stres ve bağışıklık için kullanılan bu kumu kolye haline getirdik.
            Ünye Siyah Kumu Nedir ?
            Karadeniz'e kıyısı olan ülkelerin sahillerini görülen bu siyah kum ,
            Ünye ilçesinde bol miktarda bulunmaktadır ve 20’ye yakın mineral
            içerdiği tespit edilmiştir . Rengi doğal olarak siyahtır ve normal
            kumlara göre ince tanelidir.
           
            Timus bezi nedir ?
            Timus az bilinen bir organ olmasına karşın, çok önemli özellikleri vardır. Endokrin sistemin önemli bir parçasıdır. 
            Timus bezi T hücrelerini üretir, bağışıklık sistemindeki diğer organların da düzgün büyümesine yardımcı olur. 
            Timus bezi nerededir ?
            Timus, göğüs kemiğinin  ( İman tahtasının )  üstünde bulunur.Troid bezinin alt kısmındadır. Bebeklerde nispeten büyüktür ve ergenliğe kadar büyür.

            ",
              "author": {
               "@type": "Person",
               "name": "Orkun"
             }
            }`,
          }} />
      </Head>
      <article className={styles.main}>
        <Manyetik></Manyetik>

        <h3 className="text-center text-6xl font-bold mt220 ">
          Kolye haline getirdik.
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
          Ünye kumsallarında bulunan ve birçok mineralden oluşan bu kum doğal olarak siyahtır ve manyetik etkiye sahiptir
          , bir çok ülkede terapi,stres ve bağışıklık için kullanılan bu kumu kolye haline getirdik.
          <br></br>
          <span class="text-3xl font-bold text-black">
            Siyah Manyetik kumu tasarımla buluşturduk.
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
        Karadeniz'e kıyısı olan ülkelerin sahillerini görülen bu siyah kum ,
          Ünye ilçesinde bol miktarda bulunmaktadır ve 20’ye yakın mineral
          içerdiği tespit edilmiştir .
          <br></br>
           Rengi doğal olarak siyahtır ve normal
          kumlara göre ince tanelidir.
          <br></br>
          <b class="text-3xl font-bold text-black">
            Büyüklerimiz ağrılarından kurtulmak için ünye siyah kuma gömülürdü.
          </b>
        </p>
        <h3 className="text-center text-6xl font-bold mt-6 ">
        Ünye Manyetik kumu neden kullanılır ?
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
        Manyetik siyah kum yüksek bir Enerji alanına sahiptir ve stres ve
          bağışıklık sistemi için kullanılır. Timus bezinde kullanıldığında
          timus bezini harekete geçirir, Timus bezi stres ve bağışıklık
          sistemimizin merkezidir.Japonyada  manyetik siyah kumu kullanarak rahatlama ve arındırma hizmeti veren bir çok tesis bulunur.
          İnsanlar bu kuma gömülerek terapi olmaktadırlar. <br></br>
           Bu <a style={{color:"red"}} href="https://www.google.com/search?client=opera&sxsrf=ALeKk00v-8OcPZM9aAdtNYtT57DaHqIHeg%3A1614894104459&ei=GFRBYMLTG5GQlwSj3pbACA&q=magnetic+sand+japanese+bath&oq=magnetic+sand+japanese+bath&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMggIIRAWEB0QHjoHCCEQChCgAToECCEQFToFCCEQoAFQhhBY0iFglSJoAXAAeACAAdgBiAHEEJIBBTAuOS4ymAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwjCv8irzZfvAhURyIUKHSOvBYgQ4dUDCAw&uact=5">linke</a> basarak bu tesislerden bazılarını görebilirsiniz.
   
        </p>
        <h3 className="text-center text-6xl font-bold mt-6 ">
          Timus bezi nedir ?
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
        Timus az bilinen bir organ olmasına karşın, çok önemli özellikleri vardır. Endokrin sistemin önemli bir parçasıdır. 
        Timus bezi T hücrelerini üretir, bağışıklık sistemindeki diğer organların da düzgün büyümesine yardımcı olur. 
        </p>
        <h3 className="text-center text-6xl font-bold mt-6 ">
          Timus bezi nerededir ?
        </h3>
        <p className="shadow-lg text-3xl contentful responsiveWidth">
        Timus, göğüs kemiğinin  ( İman tahtasının )  üstünde bulunur.Troid bezinin alt kısmındadır. Bebeklerde nispeten büyüktür ve ergenliğe kadar büyür.
              </p>
      </article>
    </main>
  );
}
