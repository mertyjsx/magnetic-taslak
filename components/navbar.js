import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [w, sw] = useState(1000);

  useEffect(() => {
    sw(window.innerWidth);
  });

  return [
    <div className="navbarContainer ">
      <div className="leftLink needHover">
        <Link href="/">
          <img
            src="/lala.png"
            alt="magnetic sand"
            style={{ width: 70, height: 62 }}
          ></img>
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <Link href="/iletisim">
          <div className="ml-6 needHover">İletişim</div>
        </Link>
        <Link href="/urunler">
          <div className="but">Ürünler</div>
        </Link>
      </div>
    </div>,
  ];
};

export default Navbar;
