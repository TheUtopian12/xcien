import React from "react";
import Image from "next/image";
import view from "./assets/view.png";
import refresh from "./assets/refresh.png";
import tech from "./assets/technical-support.png";
import invoice from "./assets/invoice.png";
import Google from "./assets/Google.png";
import AppStore from "./assets/AppStore.png";
const Movil = () => {
  return (
    <div
      className="w-full pt-28 bg-black pb-10"
      style={{
        backgroundImage: "url('/img/backs/BG_03.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "",
      }}
    >
      <div className="grid sm:grid-cols-3 ">
        <div className="flex items-center justify-center pt-10">
          <div className="w-[200px] sm:w-[400px] ">
            <img src="/img/telefono.png" width={400} height={400} />
          </div>
        </div>
        <div className="sm:col-span-2 pt-10">
          <div className="text-center">
            <h1 className="sm:text-4xl text-xl font-bold text-[#2adc2f] ">
              Descarga nuestra app Mi xcien
            </h1>
          </div>
          <div className="xl:flex sm:justify-between m-12 md:text-center text-white font-semibold grid grid-cols-1 lg:grid-cols-2 text-center">
            <div>
              <div className="w-[60px] mb-2 mt-5 ml-[40%]">
                <Image src={view} width={100} height={80} />
              </div>
              <p className="pt-2 md:text-xs lg:text-base">
                Visualiza tus servicios activos y su rendimiento
              </p>
            </div>

            <div>
              {" "}
              <div className="w-[60px] mb-2 mt-5 ml-[40%]">
                <Image src={tech} width={100} height={90} />
              </div>
              <p className="md:text-xs lg:text-base">Reporte y seguimiento con Soporte técnico</p>
            </div>
            <div>
              <div className="w-[60px] mb-2 mt-5 ml-[40%]">
                {" "}
                <Image src={refresh} width={100} height={90} />
              </div>
              <p className="md:text-xs lg:text-base">Solicita una actualización de tu servicio</p>
            </div>
            <div>
              <div className="w-[60px] mb-2 mt-5 ml-[40%]">
                <Image src={invoice} width={100} height={90} />
              </div>
              <p className="md:text-xs lg:text-base">Descarga tus facturas</p>
            </div>
          </div>

          <div className="flex sm:justify-center sm:gap-40 justify-between ml-5 mr-5 sm:mr-0 sm:ml-0">
            <Image src={Google} width={150} height={50} />
            <Image src={AppStore} width={150} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movil;
