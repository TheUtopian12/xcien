import React from "react";
import logoB from "./logo.png";
import Image from "next/image";
import Callcenter from "./Callcenter.png";
import Facebook from "./facebook.png";
import Linkedin from "./linkedin.png";
import Instagram from "./instagram.png";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <section className=" translate-y-0">
     
      <footer className="p-4 shadow md:px-6 md:py-8 xl:h-[40vh] 2xl:h-[40vh] h-[90%]  bgFooter bg-contain sm:bg-cover bg-no-repeat bg-bottom">
        <div />

        <div className="grid 2xl:grid-cols-5 sm:grid-cols-2 xl:grid-cols-5 ">
          <div className="sm:col-span-2 md:w-[400px] flex ">
            {" "}
            <Image src={logoB} className="mr-3 h-8" alt="XCIEN Logo" />
          </div>

          <div className="text-white w-[250px] 2xl:translate-x-[150px] text-sm ">
            <p>Av. Eugenio Garza Sada 3820, Roma, 64780 Monterrey, N.L.</p>
            <svg className="translate-x-56 -translate-y-8 lg:-translate-x-8 lg:-translate-y-8 feather feather-map-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adc2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
   
            
            <p>
              <span className="text-[#04ce04]">Horario de oficina</span> <br />
              Lunes a Jueves de 9:00 a 19:00 hrs.
              <br />
              Viernes de 9:00 a 18:00 hrs. <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
          </div>
          <div className="text-white w-[250px] 2xl:translate-x-[120px] text-sm">
            <p className="font-semibold">Contrataciones</p>
            <p>¡Llámanos sin costo! 800 288 0092</p> <br />
            <p>
              <span className="text-[#04ce04]">Horario de ventas</span> <br />
              Lunes a Viernes de 9:00 a 19:00 hrs.
              <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
            <Link href={'/Vacantes'}><p className="text-[#04ce04]" style={{cursor:'pointer'}}>Bolsa de Trabajo</p></Link>
          </div>

          <div className="text-white w-[250px] 2xl:translate-x-[80px] text-sm ">
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
            <h1 className="flex text-white xl:justify-end justify-center sm:gap-24 gap-10 pt-7 sm:pt0 xl:translate-y-[-40px] xl:-translate-x-[480px]
             2xl:-translate-x-[900px] 
            
            ">
              Aviso de Privacidad | Cumplimiento IFT y PROFECO
            </h1>
          </a>
        </div>

        <div className="flex text-white xl:justify-end justify-center 2xl:pr-72 sm:gap-24 gap-10 pt-7 sm:pt0 xl:translate-y-[-95px]
        
        ">
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
