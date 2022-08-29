import React from "react";

const Ventajas = () => {
  return (
    <div className="grid grid-cols-4 gap-9 gapt w-full  h-screen pt-32 bg-black" style={{
      backgroundImage: "url('/img/BG.png')",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <div
        className="h-[680px]"
        style={{
          backgroundImage: "url('/img/Back01.png')",

          opacity: "90%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pt-5 pl-5 text-[#2adc2f] font-bold text-3xl uppercase">
          Integramos <br /> servicios
        </h1>

        <p className="pt-5 pl-5 text-white text-xl">
          Todos tus servicios de telecomunicaciones en un mismo lugar. Juntos
          podemos desarrollar e integrar las mejores soluciones que necesita tu
          empresa.
        </p>
      </div>
      <div
        className="h-[680px]"
        style={{
          backgroundImage: "url('/img/Back02.png')",

          opacity: "90%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pt-5 pl-5 text-[#2adc2f] font-bold text-3xl uppercase ">
          Servicios <br /> administrados
        </h1>

        <p className="pt-5 pl-5 text-white text-xl">
          Simplifica la administración de tus servicios de telecomunicaciones a
          través de la migración a la nube, la transformación digital y las
          redes mejoradas. ¡Despreocúpate! Nosotros nos encargamos de tus
          servicios con personal especializado.
        </p>
      </div>
      <div
        className="h-[680px]"
        style={{
          backgroundImage: "url('/img/Back03.png')",

          opacity: "90%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pt-5 pl-5 text-[#2adc2f] font-bold text-3xl uppercase ">
          Escalabilidad
        </h1>

        <p className="pt-5 pl-5 text-white text-xl">
          Si tu empresa está en constante crecimiento e innovación, somos tu
          mejor aliado. Nos encargamos de crecer a tu ritmo para que tus
          servicios de telecomunicaciones se ajusten a los requerimientos de tu
          empresa.
        </p>
      </div>
      <div
        className="h-[680px]"
        style={{
          backgroundImage: "url('/img/Back04.png')",

          opacity: "90%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="pt-5 pl-5 text-[#2adc2f] font-bold text-3xl uppercase ">
          SLA / Nivel de Servicio
        </h1>

        <p className="pt-5 pl-5 text-white text-xl">
          Todos nuestros procesos y tecnología están diseñados para ofrecerte
          los más altos niveles de servicio y brindarte una disponibilidad de
          hasta 99.95% anual en tu servicio de internet
        </p>
      </div>
    </div>
  );
};

export default Ventajas;
