import React from "react";
import logoB from "./logo.png";
import Image from "next/image";
import Callcenter from "./Callcenter.png";
import Facebook from "./facebook.png";
import Linkedin from "./linkedin.png";
import Instagram from "./instagram.png";
import Link from "next/link";
const Footer = () => {
  return (
    <section>
      <video
        src="https://res.cloudinary.com/dtdxwe8yz/video/upload/v1662505910/VideosXcien/BG08_ykemkz.mp4"
        autoPlay
        loop
        muted
        className="bg-cover w-full  hidden sm:grid md:translate-y-[100px]"
      />
      <footer className="p-4 shadow md:px-6 md:py-8  xl:h-[1px] h-[90%] md:-translate-y-[330px] bg-cover bgImage5">
        <div />

        <div className="grid 2xl:grid-cols-5 sm:grid-cols-2 xl:grid-cols-5">
          <div className="sm:col-span-2  flex ">
            {" "}
            <Image src={logoB} className="mr-3 h-8" alt="XCIEN Logo" />
          </div>

          <div className="text-white w-[250px] 2xl:translate-x-[300px] text-sm ">
            <p>Av. Eugenio Garza Sada 3820, Roma, 64780 Monterrey, N.L.</p>
            <br />
            <p>
              <span className="text-[#04ce04]">Horario de oficina</span> <br />
              Lunes a Jueves de 9:00 a 19:00 hrs.
              <br />
              Viernes de 9:00 a 18:00 hrs. <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
          </div>
          <div className="text-white w-[250px] 2xl:translate-x-[200px] text-sm">
            <p className="font-semibold">Contrataciones</p>
            <p>¡Llámanos sin costo! 800 288 0092</p> <br />
            <p>
              <span className="text-[#04ce04]">Horario de ventas</span> <br />
              Lunes a Viernes de 9:00 a 19:00 hrs.
              <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
          </div>

          <div className="text-white w-[250px] 2xl:translate-x-[100px] text-sm">
            <p className="pb-3 font-semibold">¿Ya eres cliente?</p>

            <p>
              <span className="text-[#04ce04] ">Atención a clientes</span>{" "}
              <br />
              Lunes a Jueves de 9:00 a 19:00 hrs.
              <br />
              Viernes de 9:00 a 18:00 hrs.
              <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
            <br />
            <p className="font-semibold">
              Soporte Servicio 24 hrs.{" "}
              <Image src={Callcenter} width={20} height={20} />
            </p>
          </div>
        </div>
        <div>
          <a href="">
            <h1 className="flex text-white xl:justify-end justify-center 2xl:pr-72 sm:gap-24 gap-10 pt-7 sm:pt0">
              Aviso de Privacidad | Cumplimiento IFT y PROFECO
            </h1>
          </a>
        </div>

        <div className="flex text-white xl:justify-end justify-center 2xl:pr-72 sm:gap-24 gap-10 pt-7 sm:pt0">
          <div className="flex items-center gap-2">
            <Image src={Facebook} width={20} height={20} />
            xcien
          </div>
          <div className="flex items-center gap-2">
            <Image src={Instagram} width={20} height={20} />
            @xcien
          </div>
          <div className="flex items-center gap-2">
            <Image src={Linkedin} width={20} height={20} />
            xcien
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
