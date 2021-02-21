import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Kumtası from "../components/kumtası";
import Icon from "../components/iconLayout";
import FeatureText from "../components/FeatureText";
import Scale from "../components/ScaleText";
import { Fade } from "react-reveal";
let fadeNumber = 0;
let radius = false;
export default function Home() {
  const [scroll, setScroll] = React.useState(0);
  const [width, setWidth] = React.useState(1400);
  const [height, setHeight] = React.useState(800);
  const [responsive, setResponsive] = React.useState(0);
  const [content, setContent] = React.useState([
    { left: "Stres", content: "Terapi" },
    { left: "Bağışıklık", content: "Rahatlama" },
    { left: "Biyoenerji", content: "" },
    { left: "Terapi", content: "" },
  ]);
  const [props_scroll, setPropsScroll] = React.useState(0);

  const [renderText, setrenderText] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setPropsScroll(position);
    console.log(position < window.innerWidth);
    if (position > 50 && position < window.innerWidth + 200)
      setScroll(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    return window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  if (width > 1000) {
    if (scroll > width / 2) {
      radius = true;
    } else {
      radius = false;
    }
  } else {
    if (scroll > (width * 3) / 4) {
      radius = true;
    } else {
      radius = false;
    }
  }

  if (scroll < 1060) {
    fadeNumber = 0;
  }

  if (scroll > 1060 && scroll < 1200) {
    fadeNumber = 1;
  }
  if (scroll > 1200 && scroll < 1350) {
    fadeNumber = 2;
  }

  console.log(fadeNumber);
  console.log(width, scroll);

  return (
    <div className={styles.container}>
      <div className="fullw  mt-20">
        <div className="flex  xl:flex-column center  flex-col  fullw">
          <div className="relative sss fullw center column ">
            <h1 className="tt text-start " key="Magnetic sand">
              <span className="den">Ünye</span> Manyetik Kumu
            </h1>
            <h3
              className="text-start text-3rem md:text-xl lg:text-2xl text-white  font-normal mt-4"
              style={{ color: "#bdbdbd", zIndex: 99 }}
            >
              Sanatsal takılar
            </h3>
          </div>
          <div className="stickyContainer ">
            <div className="relative fullw lg:pt-4  center stickLine  ">
              <div
                className="magneticBackground"
                style={{
                  height: scroll,
                  width: scroll,

                  borderRadius: radius ? "0%" : "100%",
                }}
              >
                {" "}
              </div>
              <div className="textContainer">
                <div className="stickyBackground">
                  <div className="magneticDotCircle">
                    <h2 className="magneticFeatureText rotateTop">
                      Bağışıklık
                    </h2>
                    <h2 className="magneticFeatureText rotateRight">Terapi</h2>
                    <h2 className="magneticFeatureText rotateBottom">
                      Rahatlık
                    </h2>
                    <h2 className="magneticFeatureText rotateLeft">Stres</h2>
                    <Icon
                      icon="/magnet.png"
                      style={{ bottom: "0%", left: "0%" }}
                    ></Icon>
                    <Icon
                      icon="/atom3.png"
                      style={{ bottom: "0%", right: "0%" }}
                    ></Icon>
                    <Icon
                      icon="/heart.png"
                      style={{ top: "0%", left: "0%" }}
                    ></Icon>
                    <Icon
                      icon="/energy.png"
                      style={{ top: "0%", right: "0%" }}
                    ></Icon>

                    <div className="magneticCircle">
                      <video autoPlay loop muted className="circleR">
                        <source src="/magneticVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
