import React from "react";

import { Parallax } from "react-parallax";
const InternetDedicado = () => {
  return (
    <div className="h-full pb-10 bg-slate-700">
      <Parallax
        bgImage="/img/BG_S04.png"
        bgImageAlt="the cat"
        strength={-1700}
        bgImageStyle={{
          objectFit: "cover",
        }}
      >
        <div className="bgWave bg-cover h-[700px] flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-3xl uppercase  ">
            Internet Dedicado
          </h1>
          <h2 className="text-white font-bold text-2xl">
            Conexión exclusiva a Internet con alta disponibonibilidad del 99.95
            %, el Internet que tu empresa necesita.
          </h2>
        </div>

        <div className="grid justify-center pb-20">
          <h2 className="text-center text-2xl text-green-400 font-semibold pb-24">
            ¿Por qué Internet Dedicado?
          </h2>

          <div className="grid grid-cols-3 gap-32 text-white">
            <div className="flex flex-col w-[400px]">
              {" "}
              <h1 className="text-2xl font-semibold pb-8">Rápido</h1>
              <p className="text-xl font-medium">
                Ancho de banda de Internet dedicado y de baja latencia con
                velocidades hasta de 1 Gb.
              </p>
            </div>
            <div className="flex flex-col w-[400px]">
              {" "}
              <h1 className="text-2xl font-semibold pb-8">Confiable</h1>
              <p className="text-xl font-medium">
                Monitoreo 24/7 y disponibilidad del 99.95% anual en tu servicio
                de internet.
              </p>
            </div>
            <div className="flex flex-col w-[400px]">
              {" "}
              <h1 className="text-2xl font-semibold pb-8">Instalación</h1>
              <p className="text-xl font-medium">
                La conectividad de microondas es generalmente más rápida y más
                simple de instalar.
              </p>
            </div>
          </div>

          <h2 className="text-center text-2xl text-white pt-20">
            Internet Dedicado brindará la máxima conectividad a tu empresa, con
            velocidades desde 5 Mbps hasta 1 Gb.
          </h2>
        </div>

        <div className="grid grid-cols-2 object-center">
          <div className="w-[300px] ml-72">
            <p className="text-white text-lg">
              Recibe una conexión a Internet dedicada, no compartida con otras
              empresas u organizaciones. <br /> <br /> Esto permite brindar un
              ancho de banda dedicado y confiable y velocidades de carga y
              descarga simétricas.
            </p>
          </div>

          <div className="">
            <div className="flex text-white gap-10">
              <p>Icon</p>

              <p className="border-2 border-green-500 bg-green-500 w-[200px] h-[50px] rounded-r-xl">
                Red xcien sin sobresuscripción
              </p>
            </div>
            <div className="flex text-white gap-10 pt-20">
              <p>Icon</p>
              <p className="border-2 border-green-500 bg-green-500 w-[200px] h-[50px] rounded-r-xl">
                Otras compañías con sobresuscripción
              </p>
            </div>
          </div>
        </div>

        <h2 className="pl-52 pt-52 text-3xl text-green-500 ">
          ¿Por qué XCIEN?
        </h2>

        <div className="grid grid-cols-3 content-center text-center text-lg text-white pt-14">
          <div>
            <p>
              <span className="text-green-500">icon</span> Monitoreo de servicio
              24/7
            </p>
          </div>
          <div>
            <p>
              <span className="text-green-500">icon</span> Disponibilidad del
              servicio anual hasta 99.95%
            </p>
          </div>
          <div>
            <p>
              <span className="text-green-500">icon</span> Tecnología
              inalámbrica de punta
            </p>
          </div>
        </div>
        <div className="flex justify-center text-xl text-white pt-10">
          Brinda un ancho de banda dedicado y velocidades de carga y descarga
          simétricas.
        </div>

        <div className="flex justify-center gap-10 pt-20">
          <div className=" w-[350px] h-[400px] bg-white rounded-b-2xl">
            <div className="h-[70px] bg-green-500 rounded-b-2xl text-white text-xl text-center font-semibold justify-between">
              <p> DEDICADO</p> 30 megas
            </div>
            <p className="text-xl text-center text-gray-800 p-10">
              Velocidades simétricas para admitir aplicaciones locales, correo
              electrónico y dispositivos conectados a Wi-Fi.
            </p>
            <div className="flex justify-center pt-7">
              {" "}
              <button className="btn text-white">Contactar a un asesor</button>
            </div>
          </div>
          <div className=" w-[350px] h-[400px] bg-white rounded-b-2xl">
            <div className="h-[70px] bg-green-500 rounded-b-2xl text-white text-xl text-center font-semibold">
              <p> DEDICADO</p> 40 megas
            </div>
            <p className="text-xl text-center text-gray-800 p-10">
              Velocidades simétricas, para transmisión de alto volumen,
              transferencias de datos y copias de seguridad seguras y
              confiables.
            </p>
            <div className="flex justify-center">
              {" "}
              <button className="btn text-white">Contactar a un asesor</button>
            </div>
          </div>
          <div className=" w-[350px] h-[400px] bg-white rounded-b-2xl">
            <div className="h-[70px] bg-green-500 rounded-b-2xl text-white text-xl text-center font-semibold">
              <p> DEDICADO</p> +50 megas
            </div>
            <p className="text-xl text-center text-gray-800 p-10">
              Para empresas que necesitan una conexión de alta capacidad para
              transferencias de archivos grandes o videoconferencias.
            </p>
            <div className="flex justify-center">
              {" "}
              <button className="btn text-white">Contactar a un asesor</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-32">
          <p className="text-xl w-[400px] text-white">
            En XCIEN creemos firmemente que Internet Dedicado es una de las
            inversiones más importantes para tu empresa
          </p>
          <div className="rounded-xl w-[400px] h-[100px] border-2 text-center">
            Imagen
          </div>
        </div>

        <div className="pt-20">
          <p className="text-2xl text-white text-center">
            Puede ver nuestras ofertas actuales en línea o chatear con un
            representante de servicio al cliente.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default InternetDedicado;
