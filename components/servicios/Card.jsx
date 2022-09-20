import React, { Fragment,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ titulo, imagen, descripcion, arrow, pagina }) => {
  var direccion
useEffect(() => {
  direccion = pagina
}, []);

  console.log(pagina)
  return (
    <div className="flex justify-center group">
      <div
        className={` border-solid  bg-[#050c13] group-hover:bg-white h-[350px]  sm:w-[90%] md:w-[98%] 2xl:w-[400px] w-[80%] rounded-2xl shadow-lg  text-white group-hover:text-black`}
      >
        <div className={`pt-5 pl-5 rounded-2xl group-hover:bg-green-600`}>
          <Image
            src={imagen}
            width={50}
            height={50}
            className="group-hover:brightness-0 group-hover:invert"
          />
        </div>

        <div>
          <h1 className="pt-5 pl-5  font-semibold sm:text-2xl text-xl uppercase ">
            {titulo}
          </h1>
          <p className="pt-5 pl-5 text-md">{descripcion}</p>

         
          
        </div>
      </div>
    </div>
  );
};

export default Card;
