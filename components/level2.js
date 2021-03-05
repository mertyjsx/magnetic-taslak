import React from "react";
import { useRouter } from "next/router";


import Image from "next/image";
import Link from "next/link";


const Line = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className=" flex mobile-column items-center justify-center fullw mt30">
      <div
        onClick={(e) => handleClick(e, "/iletisim")}
        className="card flex-column center justify-center"
      >
        <Image
          className="hidden"
          src="/lala.png"
          alt="magnetic sand"
          width="200px"
          height="200px"
        ></Image>
        <div className="text-center out-link ml-20">
          <Link href="iletisim">İletişim</Link>
        </div>
      </div>

      <div
        onClick={(e) =>
          handleClick(
            e,
            "https://www.ox.ac.uk/news/2016-08-22-study-suggests-routes-improved-immunity-older-people"
          )
        }
        className="card card flex-column-reverse center justify-center"
      >
        <div>
          <div className="text-center out-link">
            <Link
              style={{ fontSize: 25 }}
              href="https://www.ox.ac.uk/news/2016-08-22-study-suggests-routes-improved-immunity-older-people"
            >
              Oxford
            </Link>
          </div>

          <p className="text-center">
            Timus bezinin faydalarıyla alakalı araştırmalar
          </p>
        </div>
        <Image
          className="hidden"
          src="/oxford.png"
          alt="magnetic sand"
          width="220px"
          height="220px"
        ></Image>
      </div>
    </div>
  );
};

export default Line;
