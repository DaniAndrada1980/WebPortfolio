import React, { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";



const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle} >
        <h4>Modo Claro-Oscuro  <VscColorMode/></h4>
    </div>
  );
};

export default Themetoggle;
