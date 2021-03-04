import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [w, sw] = useState(1000);

  useEffect(() => {
    sw(window.innerWidth);
  });

  return (
    <header className="navbarContainer " id="header">
      <Link href="/">
        <Image
          src="/lala.png"
          alt="magnetic sand"
          width="70px"
          height="60px"
        ></Image>
      </Link>
      <nav>
        <ul className="navbar-ul fullw">
          <li className="leftLink needHover"></li>
          <li className="ml-6 needHover">
            <Link href="/iletisim" >
              İletişim
            </Link>
          </li>
          <li className="ml-6 needHover but">
            <Link href="/urunler">
              Ürünler
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
