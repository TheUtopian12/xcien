import React from "react";
import logoB from "./logo.png";
import Image from "next/image";
import Callcenter from "./Callcenter.png";
import Facebook from './facebook.png'
import Linkedin from './linkedin.png'
import Instagram from './instagram.png'
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer
        className="p-4 bg-gray-800  shadow md:px-6 md:py-8 dark:bg-gray-900 h-[400px]"
        style={{
          backgroundImage: "url('/img/BG_08.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            {" "}
            <Image
              width={300}
              height={200}
              src={logoB}
              className="mr-3 h-8"
              alt="XCIEN Logo"
            />
          </div>

          <div className="text-white w-[250px] translate-x-[300px] text-sm">
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
          <div className="text-white w-[250px] translate-x-[200px] text-sm">
            <p className="font-semibold">Contrataciones</p>
            <p>¡Llámanos sin costo! 800 288 0092</p> <br />
            <p>
              <span className="text-[#04ce04]">Horario de ventas</span> <br />
              Lunes a Viernes de 9:00 a 19:00 hrs.
              <br />
              Sábados de 9:00 a 13:00 hrs.
            </p>
          </div>

          <div className="text-white w-[250px] translate-x-[100px] text-sm">
            <p className="pb-3 font-semibold">¿Ya eres cliente?</p>

            <p>
              <span className="text-[#04ce04] ">Atención a clientes</span> <br />
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
        <div className="flex text-white justify-end pr-72 gap-24">
          <div className="flex items-center gap-2"><Image src={Facebook} width={20} height={20}/>xcien</div>
          <div className="flex items-center gap-2"><Image src={Instagram} width={20} height={20}/>@xcien</div>
          <div className="flex items-center gap-2"><Image src={Linkedin} width={20} height={20}/>xcien</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
