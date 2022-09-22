import React from "react";
import { Parallax } from "react-parallax";
const InternetEventual = () => {
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
            Internet para Eventos
          </h1>
          <h2 className="text-white font-bold text-2xl">
            Internet para tu evento y asistentes en cualquier momento y en
            cualquier lugar
          </h2>
        </div>

        <div className="flex justify-center p-10">
          <p className="text-white">
            Si está organizando un evento, ejecutando un sitio de construcción o
            administrando cualquier tipo de ubicación temporal, la conectividad
            a Internet confiable es esencial para las operaciones comerciales
            efectivas. Nuestro internet dedicado se puede implementar
            rápidamente para una red rápida de nivel empresarial con seguridad,
            redundancia, soporte en el sitio, servicios de administración de
            Wi-Fi o lo que requiera tu evento.
          </p>
        </div>
        <div className="flex justify-center gap-[650px] text-3xl text-green-500 font-semibold">
          <div>Dedicado</div>
          <div>Simétrico</div>
        </div>
        <div className="flex justify-center gap-72">
          <div className="bg-black w-[500px] h-[150px] border-2 rounded-3xl flex items-center text-white gap-5 p-10">
            <p>Icon</p>
            <p>
              Elige el ancho de banda adecuado para tu evento y ten la seguridad
              de estar conectado independientemente de la ubicación. Nos
              aseguramos de que tengas el rendimiento que necesita para tu
              operación en tu evento.
            </p>
          </div>
          <div className="bg-black w-[500px] h-[150px] border-2 rounded-3xl flex items-center text-white gap-5 p-10">
            <p>Icon</p>
            <p>
              Disfruta de velocidades de carga y descarga para que disfrutes de
              una conectividad más rápida y confiable en todo momento.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-[650px] text-3xl text-green-500 font-semibold pt-10">
          ¿Por qué internet eventual es para ti?
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          <div className="text-white text-2xl w-[300px] h-[100px]">
            La más alta velocidad en conexión
          </div>
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          {" "}
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
          <div className="text-white text-2xl w-[300px] h-[100px]">
            Conexión estable y simétrica, tanto de descarga como de carga
          </div>
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          <div className="text-white text-2xl w-[300px] h-[100px]">
            Contratación desde 1 día
            <br />
            Sólo se paga por el tiempo que dura el evento
          </div>
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          {" "}
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
          <div className="text-white text-2xl w-[300px] h-[100px]">
          Acceso wifi para sólo para el evento y/o asistentes

          </div>
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          <div className="text-white text-2xl w-[300px] h-[100px]">
          Instalación rápida y sencilla en sitio
          </div>
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
        </div>

        <div className="flex justify-center items-center gap-52 pt-10 pb-10">
          {" "}
          <div className="rounded border-2 bg-gray-400 w-[300px] h-[100px]"></div>
          <div className="text-white text-2xl w-[300px] h-[100px]">
          Soporte y monitoreo
          </div>
        </div>


        <div className="flex justify-center text-center text-2xl text-white pt-10 pb-10">Cuéntanos más sobre tu evento</div>

        <div className="flex justify-center">
              {" "}
              <button className="btn text-white bg-green-500 hover:bg-green-800 w-[200px]">Cotizar</button>
            </div>
      </Parallax>
    </div>
  );
};

export default InternetEventual;
