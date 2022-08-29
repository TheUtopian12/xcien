import React from "react";

const Nosotros = () => {
  return (
    <div className=" w-full grid grid-cols-2 bg-black gap-5">
      <div
        className="h-[700px] items-center text-white pl-10"
        style={{
          backgroundImage: "url('/img/Back-Text.png')",
          borderRadius: 25,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="items-center pt-[20%] ">
          <h1 className="text-5xl font-bold text-[#2adc2f]">Nosotros</h1>
          <p className="pt-5 ">
            Nuestra experiencia en telecomunicaciones y tecnología, desde hace
            23 años, nos ha posicionado como el primer proveedor inalámbrico
            para diferentes sectores.{" "}
          </p>
          <p className="pt-5">
            En este tiempo nos ha permitido crecer y contar con infraestructura
            propia en 10 estados de México, ubicados en las 3 principales
            regiones económicas del país y con presencia de servicios
            especializados a nivel nacional.{" "}
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
                ¡Estamos listos para asesorarte!
          </p>
        </div>
      </div>

      <div
        className="h-[700px] items-center text-white "
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
