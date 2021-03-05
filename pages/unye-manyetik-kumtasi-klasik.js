import React from "react";
import Link from "next/link";
import Checkout from "../components/checkout";
import Head from "../components/HeaderComp";
import { products } from "../utils/products";
//   title,description,url,image_url,mobile_image_url,price,currency,sku

const data = products["unye-manyetik-kumu-klasik"];
function CardItem(props) {
  return (
    <main className="fullw  cards__item_ responsiveProduct">
      <Head
        title={data.title}
        description={data.description}
        url={data.url}
        image_url={data.image_url}
        mobile_image_url={data.mobil_image_url}
        price={data.price}
        currency={data.currency}
        sku={data.sku}
      />

      <figure className="cards__item__pic-wrap" data-category={"new"}>
        <img
          src={"/pure.jpg"}
          alt="Gezi Imgae"
          className="cards__item__img cards__item__link"
          style={{ objectPosition: "bottom" }}
        />
      </figure>
      <div className="urun_acıklama cards__item__link ">
        <header>
          <h1 className="urun_text">Ünye Manyetik Kumu Klasik</h1>
        </header>
        <h2 className="text-center">Sanatsal el yapımı takı</h2>

        <Checkout url="https://www.trendyol.com/unye-manyetik-kumtasi/unye-manyetik-kumu-kolye-p-85861149?merchantId=346017"></Checkout>

        <h2 className="mt30 red">Manyetik kum nedir ?</h2>

        <p className="urun__item__text mt30">
          Karadeniz'e kıyısı olan ülkelerin sahillerini görülen bu siyah kum ,
          Ünye ilçesinde bol miktarda bulunmaktadır ve 20’ye yakın mineral
          içerdiği tespit edilmiştir . Rengi doğal olarak siyahtır ve normal
          kumlara göre ince tanelidir.
        </p>
        <h3 className="mt30 gray-color">
          Ünye Manyetik kumu neden kullanılır ?
        </h3>

        <p className="urun__item__text mt30">
          Manyetik siyah kum yüksek bir Enerji alanına sahiptir ve stres ve
          bağışıklık sistemi için kullanılır. Timus bezinde kullanıldığında
          timus bezini harekete geçirir, Timus bezi stres ve bağışıklık
          sistemimizin merkezidir.Japonyada manyetik siyah kumu kullanarak
          rahatlama ve arındırma hizmeti veren bir çok tesis bulunur. İnsanlar
          bu kuma gömülerek terapi olmaktadırlar. <br></br>
          Bu{" "}
          <a
            style={{ color: "red" }}
            href="https://www.google.com/search?client=opera&sxsrf=ALeKk00v-8OcPZM9aAdtNYtT57DaHqIHeg%3A1614894104459&ei=GFRBYMLTG5GQlwSj3pbACA&q=magnetic+sand+japanese+bath&oq=magnetic+sand+japanese+bath&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMggIIRAWEB0QHjoHCCEQChCgAToECCEQFToFCCEQoAFQhhBY0iFglSJoAXAAeACAAdgBiAHEEJIBBTAuOS4ymAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwjCv8irzZfvAhURyIUKHSOvBYgQ4dUDCAw&uact=5"
          >
            linke
          </a>{" "}
          basarak bu tesislerden bazılarını görebilirsiniz.
        </p>

        <h3 className="mt30">Manyetik siyah kumtaşı </h3>

        <p className="urun__item__text mt30">
          Bu kumu özel işlemlere tabi tuttuk , tamamen el işçiliği ile kumtaşı
          kolye haline getirdik . Bu modelimiz klasik saf siyah kumdan yapılan
          modeldir. En çok tercih edilenler arasında gelir.Kullandığımız mum ipi
          ayarlanabilirdir her yaş için uygundur.
        </p>
        <h3 className="mt30">Dikkat Manyetik etkiye sahip ! </h3>

        <p className="urun__item__text mt30">
          Kolyelerimiz adı üzerinde manyetik kumdan yapıldığı için manyetik
          etkiye sahiptir , Kalp pili kullananlar , vücudunda manyetik alanla
          etkileşime girecek bir durum bulunan kişiler kullanmamalıdır!
        </p>
      </div>
    </main>
  );
}

export default CardItem;
