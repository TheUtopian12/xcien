import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import contacto from "./Contacto-White.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffff");
  const [url, setUrl] = useState("/img/logo.png");
  const [ancho, setAncho] = useState(220);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#3ba137");
        setTextColor("#ffff");
        setUrl("/img/xcien-logo-White.png");
        setAncho(120);
      } else {
        setColor("transparent");
        setTextColor("#ffff");
        setUrl("/img/xcien-logo-White.png");
        setAncho(120);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-700 h-[110px]"
    >
      <div className="max-w-screen m-auto flex justify-between items-center p-0 text-white pl-16 pr-16">
        <Link href="/" style={{ color: `${textColor}` }}>
          <img src={url} style={{ width: ancho }} />
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-semibold pl-[10%] "
        >
          <li className="p-4">
            <Link href="/#inicio">Inicio</Link>
          </li>
          <li className="p-4">
            <Link href="/#servicios">Servicios</Link>
          </li>
          <li className="p-4">
            <Link href="/">Nosotros</Link>
          </li>
          <li className="p-4">
            <Link href="/">Cobertura</Link>
          </li>
          <li className="p-4">
            <Link href="/">Contacto</Link>
          </li>
        </ul>
        <ul className="p-4 hidden sm:flex">
          <Link href="/">
            <Image
              src={contacto}
              width={200}
              height={100}
              className="grayscale"
            />
          </Link>
        </ul>
        {/*mobile*/}

        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-green-500">
              <Link href="/">Inicio</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-500">
              <Link href="/#servicios">Servicios</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-500">
              <Link href="/">Nosotros</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-500">
              <Link href="/">Cobertura</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-500">
              <Link href="/">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
