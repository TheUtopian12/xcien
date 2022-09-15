import React from "react";
import Image from "next/dist/client/image";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import bg3 from "../../public/img/Antenna.png";

import { Parallax } from "react-parallax";
const Example = () => {
  return (
    <Parallax
      bgImage="/img/BG_S04.png"
      bgImageAlt="the cat"
      strength={500}
      bgImageStyle={{
        objectFit: "cover",
      }}
    >
      {" "}
      <div id="inicio" className="flex h-screen">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                speed: -45,
                children: <></>,
              },

              {
                speed: -10,
                children: (
                  <div
                    className="absolute inset-0 flex items-center justify-center w-[800px] h-[500px] translate-y-[550px] -translate-x-24 
                    sm:w-[1000px] 
                    md:w-[1200px]
                    md:translate-y-[600px]
                    lg:w-[1000px]
                    lg:translate-y-[620px]
                    xl:translate-y-[480px]
                    xl:w-[1000px]
                    2xl:w-[1200px]
                    2xl:h-[600px]
                    2xl:translate-y-[500px]
                    2xl:translate-x-[-100px]
                    3xl:translate-x-1
                  "
                  >
                    <img src="/img/City-Mirror.png" alt="City" />

                    <div
                      className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-black/80 z-[2] 
                      lg:w-[1370px]

                      lg:hidden
                    "
                    />
                  </div>
                ),
              },
              {
                speed: 0,
                children: (
                  <div
                    className="absolute inset-0 items-center justify-end mr-16 mt-20 translate-y-36 
                  hidden  
                  sm:hidden 
                  md:hidden
                  lg:flex
                  
                  2xl:translate-y-[100px]
                  "
                  >
                    <img
                      src="/img/Antenna.png"
                      alt="Antena"
                      className="lg:w-[150px]
                                lg:h-[710px]"
                    />
                    <div
                      className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-black/80 z-[2] lg:w-[1370px] 
                      2xl:w-[1900px]
                      
                      "
                    />
                  </div>
                ),
              },
              {
                speed: 5,
                children: (
                  <div
                    className="flex flex-col mt-[150px] ml-3 mr-3 pt-10
                   md:ml-9 md:mr-9
                   lg:ml-10 lg:mr-10
                   2xl:translate-x-[1000px]
                   2xl:translate-y-[210px]
                   2xl:w-[520px]
                   "
                  >
                    <div>
                      <p
                        className="text-white text-center text-xl 
                      md:text-2xl
                      lg:text-3xl
                      2xl:text-left
                      2xl:text-2xl
                      
                      "
                      >
                        Somos expertos en conectividad e integración de
                        servicios y proyectos de <br />
                        <span className="font-extrabold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-green-400  to-cyan-400 uppercase">
                          Telecomunicaciones
                        </span>
                        <br />
                        para diferentes sectores
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="text-white text-center text-xl md:text-2xl  lg:text-3xl 2xl:text-left 2xl:text-2xl">
                        Creamos soluciones personalizadas para aumentar la
                        eficiencia y productividad en tu empresa
                      </p>
                    </div>

                    <div className="mt-6">
                      <h1 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-cyan-400 text-center  lg:text-3xl 2xl:mt-10 ">
                        ¿Te gustaría saber más?
                      </h1>
                    </div>

                    <div className="flex justify-center mt-6 md:mt-12 ">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-52">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 w-52">
                          Ver Servicios
                        </span>
                      </button>
                    </div>

                    <div className="mt-[110px] md:mt-[100px] lg:mt-[240px] xl:mt-[80px] 2xl:mt-[200px]  xl:translate-y-[90px] 2xl:-translate-y-[160px] 2xl:w-[1200px] 2xl:-translate-x-[850px] ">
                      <h1 className="font-extrabold text-transparent text-2xl 2xl:text-3xl  bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-green-400 text-center ">
                        Somos el operador inalámbrico empresarial más grande de
                        México
                      </h1>
                    </div>
                  </div>
                ),
              },
            ]}
            className="aspect-[2/.9]"
          />
        </ParallaxProvider>
      </div>
    </Parallax>
  );
};

export default Example;
