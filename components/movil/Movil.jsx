import React from "react";
import Image from "next/image";
import movil from "./assets/IPhone.png";
import view from "./assets/view.png";
import refresh from "./assets/refresh.png";
import tech from "./assets/technical-support.png";
import invoice from "./assets/invoice.png";
import Google from "./assets/Google.png"
import AppStore from "./assets/AppStore.png"
const Movil = () => {
  return (
    <div
      className="w-full h-[600px] pt-28 bg-black"
      style={{
        backgroundImage: "url('/img/Back Shape.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-center pt-10">
          <Image src={movil} width={400} height={400} />
        </div>
        <div className="col-span-2 pt-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#2adc2f] ">
              Descarga nuestra app Mi xcien
            </h1>
          </div>
          <div className=" flex justify-between m-12 text-center text-white font-semibold">
            <div>
              <Image src={view} width={100} height={90} />
              <p>Visualiza tus servicios activos y su rendimiento</p>
            </div>

            <div>
              {" "}
              <Image src={tech} width={100} height={90} />
              <p>Reporte y seguimiento con Soporte técnico</p>
            </div>
            <div>
              <Image src={refresh} width={100} height={90} />
              <p>Solicita una actualización de tu servicio</p>
            </div>
            <div>
              <Image src={invoice} width={100} height={90} />
              <p>Descarga tus facturas</p>
            </div>
          </div>


          <div className="flex justify-center gap-40">
            <Image src={Google} width={150} height={50}/>
            <Image src={AppStore} width={150} height={50}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Movil;
