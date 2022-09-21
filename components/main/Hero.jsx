import React, { Fragment } from "react";
const Hero = () => {
  return (
    <div
      className="grid content-end h-screen w-screen"
      style={{
        background:
          "linear-gradient(135deg, #006003 0%, #000000 34%, #000000 71%, #006003 100%);",
      }}
    >

      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/img/Wave BG.png')",

        }}
      ></div>

      <div
        className="absolute bg-center bg-cover z-[2] bg-image "
        style={{
          backgroundImage: "url('/img/City.png')",

          opacity: "100%",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 bg-gradient-to-t from-black to-transparent ">
          <div className="col-end-4 text-white mt-[14rem] sm:ml-[-5rem] sm:w-11/12  w-10/12  bg-black border-solid border-2 border-green-500 ">
            <div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <div className="flex flex-col justify-between h-full bg-white text-white rounded-lg p-4">

              </div>
            </div>
          </div>



          <div className="col-end-4 text-white mt-[2rem] lg:ml-[-5rem] w-10/12 bg-black border-solid border-2 border-green-500 ">
            <h1 className="font-normal sm:text-2xl sm:text-left text-xl text-center">
              Creamos soluciones personalizadas para aumentar la eficiencia y
              productividad en tu empresa
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
            <h1 className="font-semibold text-3xl">
              Somos el operador inalámbrico empresarial más grande de México
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
