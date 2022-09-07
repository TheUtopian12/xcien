import React from "react";

const Nosotros = () => {
  return (
    <div className=" w-full grid lg:grid-cols-2 bg-black gap-0">
      <div
        className="md:h-[700px] h-[800px] items-center text-white sm:pl-10"
       
      > <video
      src="https://res.cloudinary.com/dtdxwe8yz/video/upload/v1662505951/VideosXcien/BG05_lxo9ah.mp4"
      autoPlay
      loop
      muted
      className="bg-cover w-full h-full hidden sm:grid "
    />
        <div className="items-center pt-[10%] sm:pt-[20%] text-justify ml-10 mr-10 sm:-translate-y-[800px]">
          <h1 className="text-5xl font-bold text-[#2adc2f]">Nosotros</h1>
          <p className="pt-5 ">
            Nuestra experiencia en{" "}
            <span className="font-bold">telecomunicaciones y tecnología</span> ,
            desde hace 23 años, nos ha posicionado como el primer proveedor
            inalámbrico para diferentes sectores.{" "}
          </p>
          <p className="pt-5">
            En este tiempo nos ha permitido crecer y contar{" "}
            <span className="font-bold">con infraestructura propia </span>en 10
            estados de México, ubicados en las 3 principales regiones económicas
            del país y con presencia de servicios especializados a nivel
            nacional.{" "}
          </p>
          <p className="pt-5">
            Nuestro objetivo es dar un servicio de calidad, acompañado de
            nuestro personal altamente capacitado, para lograr una conectividad
            más eficiente y rentable para PYMES, grandes empresas y Gobierno.
          </p>
          <p className="pt-5">
            Si buscas una solución de calidad e innovadora, XCIEN es tu opción
            más inteligente.
            <br />
            <br />
            <span className="font-bold">¡Estamos listos para asesorarte!</span>
          </p>
        </div>
      </div>

      <div
        className="h-[220px] sm:h-[700px] md:h-[400px] lg:h-[480px]  items-center text-white "
        style={{
          backgroundImage: "url('/img/Back-Nosotros.png')",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Nosotros;
