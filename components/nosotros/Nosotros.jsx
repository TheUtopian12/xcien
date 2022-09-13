import React from "react";
import Image from "next/image";
import Gent from "../../public/img/Back-Nosotros.png";
import { Parallax } from "react-parallax";
const Nosotros = () => {
  return (
    <Parallax bgImage="/img/BG_S04.png" bgImageAlt="the cat" strength={500} bgImageStyle={{
      
      objectFit: 'cover', 
    }}>
      <div className="2xl:h-[100vh] 2xl:pt-36 xl:h-[110vh] xl:pt-24">
        <h1 className="text-5xl font-bold text-[#2adc2f] text-center mb-10">
          Nosotros
        </h1>
        <div className="sm:flex gap-10 pb-10 ">
          <div className="m-2 sm:w-[50%]  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-900 rounded-2xl pt-10 pb-10 pl-10 pr-10">
            {" "}
            <div className=" rounded-3xl text-white grid justify-center items-center text-lg pt-0">
              <p className="pt-2 mr-6 ml-6">
                Nuestra experiencia en{" "}
                <span className="font-bold">
                  telecomunicaciones y tecnología
                </span>{" "}
                , desde hace 23 años, nos ha posicionado como el primer
                proveedor inalámbrico para diferentes sectores.{" "}
              </p>
              <p className="pt-4 mr-6 ml-6 ">
                En este tiempo nos ha permitido crecer y contar{" "}
                <span className="font-bold">con infraestructura propia </span>en
                10 estados de México, ubicados en las 3 principales regiones
                económicas del país y con presencia de servicios especializados
                a nivel nacional.{" "}
              </p>
              <p className="pt-4 mr-6 ml-6">
                Nuestro objetivo es dar un servicio de calidad, acompañado de
                nuestro personal altamente capacitado, para lograr una
                conectividad más eficiente y rentable para PYMES, grandes
                empresas y Gobierno.
              </p>
              <p className="pt-4 mr-6 ml-6">
                Si buscas una solución de calidad e innovadora, XCIEN es tu
                opción más inteligente.
                <br />
                <br />
                <span className="font-bold">
                  ¡Estamos listos para asesorarte!
                </span>
              </p>
            </div>
          </div>

          <div className=" md:w-[80vh] pt-5 sm:pt-0">
            <Image
              src={Gent}
              className="2xl:rounded-tl-[300px] 2xl:rounded-br-[300px] rounded-tl-[100px] rounded-br-[100px] xl:rounded-tl-[150px] xl:rounded-br-[150px]"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Nosotros;
