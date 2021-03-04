import React from "react";
import Link from "next/link";
import Checkout from "../components/checkout";
import Head from "../components/HeaderComp";
function CardItem(props) {
  return (
    <main className="fullw  cards__item_ responsiveProduct">
      <Head></Head>

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
          <h1 className="urun_text">Stres avcısı Klasik model</h1>
        </header>

        <h2 className="text-center">Ünye Manyetik Kumtaşı</h2>

        <h3 className="mt30">stres rahatlama terapi </h3>

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
        <div className="mt30">Ödeme seçenekleri</div>
        <Checkout url="https://www.trendyol.com/unye-manyetik-kumtasi/unye-manyetik-kumu-kolye-p-85861149?merchantId=346017"></Checkout>
      </div>
    </main>
  );
}

export default CardItem;
