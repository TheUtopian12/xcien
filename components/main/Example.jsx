import React from "react";
import Image from "next/dist/client/image";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import bg1 from "../../public/img/Wave BG.png";
import bg2 from "../../public/img/City.png";
import bg3 from "../../public/img/Antenna.png";

import Hero from "./Hero";
const Example = () => {
  return (
    <> <div id="inicio" className="hidden sm:flex" 
      
    >
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              speed: -45,
              children: (
                <div className="absolute inset-0 flex items-center justify-center  bg-black">
                  <Image src={bg1} ></Image>
                </div>
              ),
            },

            {
              speed: -32,
              children: (
                <div className="absolute inset-0 flex items-center justify-center ">
                  <Image src={bg2}></Image>
                </div>
              ),
            },
            {
              speed: -20,
              children: (
                <div className="absolute inset-0 flex items-center justify-end mr-16 mt-20 ">
                  <Image src={bg3} height={700} width={150}></Image>
                </div>
              ),
            },
            {
              speed: -5,
              children: (
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 bg-gradient-to-t from-[#000000d7] to-transparent ">
                  <div className="col-end-4 text-white mt-[14rem] sm:ml-[-5rem] sm:w-11/12  w-10/12  bg-black border-solid border-2 border-green-500 ">
                    <h1 className="font-normal sm:text-2xl text-xl text-center sm:text-left">
                      Somos expertos en conectividad e integración de servicios
                      y proyectos{" "}
                      <span className="font-bold">de telecomunicaciones</span>{" "}
                      para diferentes sectores
                    </h1>
                  </div>

                  <div className="col-end-4 text-white mt-[2rem] lg:ml-[-5rem] w-10/12 bg-black border-solid border-2 border-green-500 ">
                    <h1 className="font-normal sm:text-2xl sm:text-left text-xl text-center">
                      Creamos soluciones personalizadas para aumentar la
                      eficiencia y productividad en tu empresa
                    </h1>
                  </div>

                  <div className="col-end-4 text-white mt-[2rem] lg:ml-[-5rem] w-10/12 text-center">
                    <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-cyan-400">
                      ¿Te gustaría saber más?
                    </h1>
                  </div>
                  <div className="col-end-4 text-white mt-[2rem] lg:ml-[-5rem] w-10/12 text-center">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-52">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 w-52">
                        Ver Servicios
                      </span>
                    </button>
                  </div>

                  <div className="col-end-3 col-span-3 text-white mt-[155px] translate-y-[-100px] sm:translate-y-0 ml-[0rem] w-screen text-center h-24 bg-gradient-to-t from-black to-transparent">
                    <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-green-400">
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
    
    <div className="sm:hidden block">
        <Hero/>
        </div></>
   

  );
};

export default Example;
