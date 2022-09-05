import React from "react";
import Image from "next/image";
import arrow from "./icons/Arrow.png";
import internet from "./icons/internet.png";
import sdwan from "./icons/SDWAN.png";
import ip from "./icons/IP.png";
import ciber from "./icons/padlock.png";
import vpn from "./icons/VPN.png";
import bigdata from "./icons/big-data.png";

//Borroso fondo
const Servicios = () => {
  return (
    <div
      className="  w-full  justify-center pt-32 bg-black md:h-[1200px]"
      style={{
        backgroundImage: "url('/img/backs/BG_03.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 justify-center text-center">
        {" "}
        <h1 className="sm:text-5xl text-2xl font-bold text-[#2adc2f]">
          Servicios
        </h1>
        <h2 className="sm:text-xl text-lg sm:ml-20 sm:mr-20 ml-5 mr-5 pt-5 text-white">
          La combinación de diferentes tecnologías y nuestra experiencia nos
          permite construir una solución personalizada a las necesidades de tu
          negocio o empresa.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-9 w-full mt-20 md:mb-10 xl:pl-10 xl:pr-10 ">
        <div className="flex justify-center 2xl:translate-x-48">
          <div className="border-solid  bg-[#050c13] h-[350px]  sm:w-[90%] md:w-[98%] 2xl:w-[60%] w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white ">
            <div className="pt-5 pl-5">
              <Image src={internet} width={50} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl uppercase ">
                Internet
              </h1>
              <p className="pt-5 pl-5 text-md">
                Soluciones de{" "}
                <span className="font-bold">
                  conectividad confiables y seguras
                </span>{" "}
                para la base de la transformación de tu empresa.
              </p>

              <button href="" className="pt-5 pl-5 text-md">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="border-solid  bg-[#050c13] h-[350px] sm:w-[90%] md:w-[98%]  2xl:w-[60%] w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white">
            <div className="pt-4 pl-5">
              <Image src={sdwan} width={60} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl">
                SDWAN
              </h1>
              <p className="pt-5 pl-5">
                Nuestro servicio administrado hace que todos tus sitios trabajen
                juntos hacia un objetivo común, ya que{" "}
                <span className="font-bold">centraliza y simplifica </span>
                tu red de manera más inteligente.
              </p>

              <button href="" className="pt-5 pl-5">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center 2xl:-translate-x-48">
          <div className="border-solid  bg-[#050c13] h-[350px] sm:w-[90%] md:w-[98%] 2xl:w-[60%]  w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white">
            <div className="pt-5 pl-5">
              <Image src={ip} width={50} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl uppercase ">
                Telefonía IP
              </h1>
              <p className="pt-5 pl-5">
                Conecte a empleados y clientes con nuestros{" "}
                <span className="font-bold">
                  servicios de voz y colaboración
                </span>{" "}
                desde la oficina, de forma remota o móvil.
              </p>

              <button href="" className="pt-5 pl-5">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-center 2xl:translate-x-48">
          <div className="border-solid  bg-[#050c13] h-[350px] sm:w-[90%] md:w-[98%] 2xl:w-[60%]  w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white">
            <div className="pt-5 pl-5">
              <Image src={ciber} width={50} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl">
                CIBERSEGURIDAD
              </h1>
              <p className="pt-5 pl-5">
                <span className="font-bold">Seguridad administrada</span> 100%
                en la nube. La instalación y la administración remota es más
                simple.
              </p>

              <button href="" className="pt-5 pl-5">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-center ">
          <div className="border-solid  bg-[#050c13] h-[350px] sm:w-[90%] md:w-[98%] 2xl:w-[60%]  w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white">
            <div className="pt-5 pl-5">
              <Image src={vpn} width={50} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl">
                VPN
              </h1>
              <p className="pt-5 pl-5">
                Permite a los usuarios autorizados{" "}
                <span className="font-bold">
                  acceder de forma segura a la información
                </span>{" "}
                y los recursos de la red de tu empresa desde ubicaciones
                remotas.
              </p>

              <button href="" className="pt-5 pl-5">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-center 2xl:-translate-x-48">
          <div className="border-solid  bg-[#050c13] h-[350px] sm:w-[90%] md:w-[98%] 2xl:w-[60%]  w-[80%] rounded-2xl shadow-xl hover:shadow-green-500/20 text-white">
            <div className="pt-5 pl-5">
              <Image src={bigdata} width={50} height={50} />
            </div>

            <div>
              <h1 className="pt-5 pl-5 text-white font-semibold sm:text-2xl text-xl uppercase ">
                Data Center
              </h1>
              <p className="pt-5 pl-5 text-base">
                Renta un espacio en uno de nuestros racks y{" "}
                <span className="font-bold">
                  almacena de forma segura tu información.
                </span>
              </p>

              <button href="" className="pt-5 pl-5">
                Ver más <Image src={arrow} width={12} height={10} />{" "}
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
