import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-68 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                        introdata.animated.seventh,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 5,
                    }}
                  />
                </h1>
                <p className="mb-2x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio">
                    <div id="button_h" className="ac_btn btn">
                      Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contacto
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      Acerca de Mi
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/contrato">
                    <div id="button_h" className="ac_btn btn">

                      ¿Eres una empresa y quieres contratarme?, Hablemos !!
                      
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>

                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-center align-items-md-center position-absolute w-100 p-3">
            <p className="copyright m-0">&copy; Copyright 2022 Pagina Web Desarrolada por Dani Andrada</p>
          </div>
      </section>
    </HelmetProvider>
  );
};
