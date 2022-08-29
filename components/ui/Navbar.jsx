import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import contacto from "./Contacto.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const [textColor, setTextColor] = useState("#26e43d");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-700"
    >
      <div className="max-w[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" style={{ color: `${textColor}` }}>
          <h1 className="font-bold text-4xl">XCIEN</h1>
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-semibold"
        >
          <li className="p-4">
            <Link href="/#inicio">Inicio</Link>
          </li>
          <li className="p-4">
            <Link href="/">Servicios</Link>
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
          <li className="p-4">
            <Link href="/">
              <Image src={contacto} width={150} height={30} />
            </Link>
          </li>
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
              <Link href="/">Servicios</Link>
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
