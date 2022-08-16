import React, { useState } from "react";
import "./style.css";
import { VscMenu, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { TiHomeOutline } from "react-icons/ti";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
        <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
            <button className="home__button  nav_ac" onClick={handleToggle} 
            to="/home">{!isActive ? <TiHomeOutline /> : <  TiHomeOutline />}
          </button>
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />


          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ?   <VscClose /> : <VscMenu />}
          </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Inicio</Link>
                  </li>
                  <li className="menu_item ">
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3">Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">Acerca de mi</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-center align-items-md-center position-absolute w-100 p-3">
            
            <p className="copyright m-0">&copy; Copyright 2022 Pagina Web Desarrolada por Dani Andrada</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
