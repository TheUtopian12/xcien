import React, { useEffect } from "react";

import {
  MdOutlineSettingsInputAntenna,
  MdOutlineWifi,
  MdSecurity,
} from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import Link from "next/link";
const ServiciosInternet = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>

      <div className="h-full pb-10 bg-slate-700">
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
              style={{ boxShadow: "5px 5px 5px 1px black" }}
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
                  className="w-[400px] h-[320px] border-2 text-xl flex flex-col justify-center items-center text-center bg-purple-600 group rounded-2xl"
                  data-aos="fade-right"
                >
                  <p className="group-hover:hidden">INTERNET DEDICADO</p>
                  <iframe src="https://embed.lottiefiles.com/animation/53969" className="group-hover:hidden"></iframe>
                  <div className="hidden  text-sm text-justify pl-3 pr-3 gap-3
                  transition-all duration-500 transform
                  group-hover:grid 
                  ">
                    <p>Servicio de conexión exclusiva para corporativos y organizaciones cuyos procesos dependen del uso de Internet para sus operaciones</p>

                    <p>Dedicado: enlace directo 1 a 1 Simétrico: misma velocidad de subida y bajada</p>

                    <p>SLA: 99.95%</p>

                    <p>Velocidad: Desde 5 Mbps hasta 1 Gb</p>

                    <p>Instalación hasta 5 días</p>

                  </div>
                  <br />
                  <button className="btn btn-outline btn-success  hidden group-hover:flex pt-2 pb-2">
                    <Link href={'/ServiciosInternet/InternetDedicado'}> Ver mas</Link>
                   </button>

                </div>



                <div
                  className="w-[400px] h-[320px] border-2 text-xl flex flex-col justify-center items-center text-center bg-purple-600 group rounded-2xl"
                  data-aos="fade-left"
                >
                  <p className="group-hover:hidden">INTERNET PARA EVENTOS</p><iframe src="https://embed.lottiefiles.com/animation/53969" className="group-hover:hidden"></iframe>
                  <div className="hidden  text-sm text-justify pl-3 pr-3 gap-3
                  transition-all duration-500 transform
                  group-hover:grid 
                  ">
                    <p>Contrata Internet para eventos los días que los necesites. Internet flexible, dedicado y de rápida instalación.
                    </p>

                    <p>Dedicado: enlace directo 1 a 1 Simétrico: misma velocidad de subida y bajada
                    </p>

                    <p>SLA: 99.95%
                    </p>

                    <p>
                      Velocidad: Desde 10 Mbps hasta 1 Gb
                    </p>

                    <p>Contratación por días</p>

                  </div>
                  <br />
                  <button className="btn btn-outline btn-success  hidden group-hover:flex pt-2 pb-2">
                  <Link href={'/ServiciosInternet/InternetEventual'}> Ver mas</Link>
                  </button>

                </div>
              </div>
            </div>
            <div className="flex pt-10 justify-center items-center">
              <div className="flex justify-center gap-40 text-white"></div>
            </div>

            <div className="flex pt-10 justify-center items-center">
              <div className="flex justify-center gap-40 text-white">
                <div
                  className="w-[400px] h-[320px] border-2 text-xl flex flex-col justify-center items-center text-center bg-purple-600 group rounded-2xl"
                  data-aos="fade-right"
                >
                  <p className="group-hover:hidden">INTERNET MYPE</p><iframe src="https://embed.lottiefiles.com/animation/53969" className="group-hover:hidden"></iframe>
                  <div className="hidden  text-sm text-justify pl-3 pr-3 gap-3
                  transition-all duration-500 transform
                  group-hover:grid 
                  ">
                    <p>Servicio de conexión exclusiva para pequeños y medianos negocios cuyos procesos dependen del uso de Internet para sus operaciones

                    </p>

                    <p>Asimétrico

                    </p>

                    <p>SLA: 99%

                    </p>

                    <p>
                      Velocidad: 10 Mbps y 20 Mbps

                    </p>

                    <p>Instalación hasta 7 días</p>

                  </div>
                  <br />
                  <button className="btn btn-outline btn-success  hidden group-hover:flex pt-2 pb-2">Ver mas</button>

                </div>
                <div
                  className="w-[400px] h-[320px] border-2 text-xl flex flex-col justify-center items-center text-center bg-purple-600 group rounded-2xl"
                  data-aos="fade-left"
                >
                  <p className="group-hover:hidden">INTERNET RESIDENCIAL PLUS</p><iframe src="https://embed.lottiefiles.com/animation/53969" className="group-hover:hidden"></iframe>
                  <div className="hidden  text-sm text-justify pl-3 pr-3 gap-3
                  transition-all duration-500 transform
                  group-hover:grid 
                  ">
                    <p>Servicio de conexión ideal para emprendedores, trabajo en casa o usuarios exigentes que requieren un servicio de Internet en casa.

                    </p>

                    <p>Asimétrico

                    </p>

                    <p>SLA: 99%

                    </p>

                    <p>
                      Velocidad: 10 Mbps y 20 Mbps

                    </p>

                    <p>Instalación hasta 7 días</p>

                  </div>
                  <br />
                  <button className="btn btn-outline btn-success  hidden group-hover:flex pt-2 pb-2">Ver mas</button>

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
