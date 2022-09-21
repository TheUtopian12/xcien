import React, { useEffect } from "react";
import {
  MdOutlineSettingsInputAntenna,
  MdOutlineWifi,
  MdSecurity,
} from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
const ServiciosInternet = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
   
      <div className="h-full pb-10 bg-slate-500">
      <Parallax
      bgImage="/img/BG_S04.png"
      bgImageAlt="the cat"
      strength={-1700}
      bgImageStyle={{
        objectFit: "cover",
      }}
    >
        <div className="bgWave bg-cover h-[800px] flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-3xl uppercase">Internet</h1>
          <h2 className="text-white font-bold text-2xl">
            Encuentra la mejor opción de Internet para negocio, empresa y
            Gobierno
          </h2>
        </div>
       


        <div className="flex justify-center -translate-y-10 ">
          <div
            className="rounded-xl bg-[#212121] w-[90%] "
            data-aos="fade-up"
            style={{ boxShadow: "5px 5px 5px 1px " }}
          >
            <p className="text-white p-5 text-2xl">
              En XCIEN ofrecemos servicios de internet especializados que se
              adaptan a las necesidades de tu empresa o negocio. Nuestro
              excelente servicio y atención al cliente es la razón por la cual
              miles de clientes depositan su confianza en nosotros.
            </p>

            <div className="grid grid-cols-3 text-left text-white pt-14 pl-5 pr-5">
              <div>
                <div className="flex">
                  <p className="text-2xl">
                    Tecnología <br /> Inalámbrica{" "}
                  </p>{" "}
                  <MdOutlineSettingsInputAntenna size={40} className="ml-10" />
                </div>
                <p className="w-[80%] text-justify pt-10 pb-10">
                  Los enlaces de microondas ofrecen conectividad a Internet de
                  banda ancha, lo que significa que pueden transferir grandes
                  cantidades de datos a altas velocidades, al mismo tiempo
                  permite un despliegue más rápido que otras tecnologías.
                </p>
              </div>
              <div>
                <div className="flex">
                  <p className="text-2xl">Cobertura</p>
                  <MdOutlineWifi size={40} className="ml-10" />
                </div>
                <p className="w-[80%] text-justify pt-10 pb-10">
                  Mantente seguro y conectado a Internet incluso en zonas
                  remotas o de difícil acceso. Llegamos a dónde otros
                  proveedores de Internet tradicionales no llegan. Contamos con
                  infraestructura propia en los principales Estados de la
                  República.
                </p>
              </div>

              <div>
                <div className="flex">
                  <p className="text-2xl">Confiable</p>{" "}
                  <MdSecurity size={40} className="ml-10" />
                </div>
                <p className="w-[80%] text-justify pt-10 pb-10">
                  Mantén el flujo de trabajo sin interrupciones con una conexión
                  a Internet de baja latencia, esencial para que las empresas
                  usen VoIP, videoconferencias, navegación web y transferencias
                  de datos con tiempos de respuesta rápidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl text-white" data-aos="fade-up">
            Servicios diseñados para una mejor conectividad
          </h1>

          <div className="flex pt-10 justify-center items-center">
            <div className="flex justify-center gap-40 text-white">
              <div
                className="w-[400px] h-[200px] border-2 text-xl flex justify-center items-center text-center bg-purple-600"
                data-aos="fade-right"
              >
                <p>INTERNET DEDICADO</p>
              </div>
              <div
                className="w-[400px] h-[200px] border-2 text-xl flex justify-center items-center text-center bg-purple-600"
                data-aos="fade-left"
              >
                <p>INTERNET PARA EVENTOS</p>
              </div>
            </div>
          </div>
          <div className="flex pt-10 justify-center items-center">
            <div className="flex justify-center gap-40 text-white"></div>
          </div>

          <div className="flex pt-10 justify-center items-center">
            <div className="flex justify-center gap-40 text-white">
              <div
                className="w-[400px] h-[200px] border-2 text-xl flex justify-center items-center text-center bg-purple-600"
                data-aos="fade-right"
              >
                <p>INTERNET RESIDENCIAL PLUS</p>
              </div>
              <div
                className="w-[400px] border-2 text-xl flex justify-center items-center text-center bg-purple-600"
                data-aos="fade-left"
              >
                <p>INTERNET MYPE</p>
              </div>
            </div>
          </div>

          <div className="flex pt-10 justify-center items-center">
            <div className="flex justify-center gap-40 text-white"></div>
          </div>
        </div>
        </Parallax>
      </div>
    </>
  );
};

export default ServiciosInternet;
