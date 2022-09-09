import React from "react";
import Image from "next/image";
import Gent from "../../public/img/Back-Nosotros.png";
const Nosotros = () => {
  return (
    <div className="bg-cover bg-black sm:h-[90vh] xl:pt-20">
      
      <h1 className="text-5xl font-bold text-[#2adc2f] text-center mb-10">Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <div className="bg-cover bgNosotros rounded-3xl text-white grid justify-center items-center text-lg">
          
          <p className="pt-5 ml-10">
            Nuestra experiencia en{" "}
            <span className="font-bold">telecomunicaciones y tecnología</span> ,
            desde hace 23 años, nos ha posicionado como el primer proveedor
            inalámbrico para diferentes sectores.{" "}
          </p>
          <p className="pt-5 ml-10">
            En este tiempo nos ha permitido crecer y contar{" "}
            <span className="font-bold">con infraestructura propia </span>en 10
            estados de México, ubicados en las 3 principales regiones económicas
            del país y con presencia de servicios especializados a nivel
            nacional.{" "}
          </p>
          <p className="pt-5 ml-10">
            Nuestro objetivo es dar un servicio de calidad, acompañado de
            nuestro personal altamente capacitado, para lograr una conectividad
            más eficiente y rentable para PYMES, grandes empresas y Gobierno.
          </p>
          <p className="pt-5 ml-10">
            Si buscas una solución de calidad e innovadora, XCIEN es tu opción
            más inteligente.
            <br />
            <br />
            <span className="font-bold">¡Estamos listos para asesorarte!</span>
          </p>
        </div>
        <div className=" md:w-[90vh] ">
          <Image src={Gent}/>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
