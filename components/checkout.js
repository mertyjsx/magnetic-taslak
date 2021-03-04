import React from "react";
import { Fade } from "react-reveal";
import { useRouter } from "next/router";
import Link from "next/link";
export default function checkout() {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className="checkout mobile-column">
      <div
        onClick={(e) => handleClick(e, "/iletisim")}
        className="card checkout-card"
      >
        <div>
          <div className="out-link-bold">
            <Link href="iletisim">İletişim</Link>
          </div>
          <p className="urun__item__text">
           Diğer ödeme yöntemleri için bize ulaşın
          </p>
        </div>
      </div>

      <div
        onClick={(e) =>
          handleClick(
            e,
            "https://www.trendyol.com/unye-manyetik-kumtasi/unye-manyetik-kumu-kolye-p-85861149?boutiqueId=61&merchantId=346017"
          )
        }
        className="card  checkout-card"
      >
        <div className="centerColumn">
          <div className="out-link-bold">Güvenli Ödeme</div>
          <p className="text-center">
          Türkiyenin büyük pazaryerlerindeyiz , tıklayıp seçebilirsiniz.
          </p>
          <div className="new_but ">seç</div>
        </div>
      </div>
    </div>
  );
}
