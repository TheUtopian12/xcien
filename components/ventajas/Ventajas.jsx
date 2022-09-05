import React from "react";
import Expanding from "./Expanding";
import ExpandingVertical from "./ExpandingVertical";
const images = [
  {
    id: 1,
    url: "/img/Back01.png",
    title: "Integramos servicios",
    description:
      "Todos tus servicios de telecomunicaciones en un mismo lugar. Juntos podemos desarrollar e integrar las mejores soluciones que necesita tu empresa.",
    active: true,
  },
  {
    id: 2,
    url: "/img/Back02.png",
    title: "Servicios administrados",
    description:
      "Simplifica la administración de tus servicios de telecomunicaciones a través de la migración a la nube, la transformación digital y las redes mejoradas. ¡Despreocúpate! Nosotros nos encargamos de tus servicios con personal especializado.",
    active: false,
  },
  {
    id: 3,
    url: "/img/Back03.png",
    title: "Escalabilidad",
    description:
      "Si tu empresa está en constante crecimiento e innovación, somos tu mejor aliado. Nos encargamos de crecer a tu ritmo para que tus servicios de telecomunicaciones se ajusten a los requerimientos de tu empresa. ",
    active: false,
  },
  {
    id: 4,
    url: "/img/Back04.png",
    title: "SLA / Nivel de Servicio",
    description:
      "Todos nuestros procesos y tecnología están diseñados para ofrecerte los más altos niveles de servicio y brindarte una disponibilidad de hasta 99.95% anual en tu servicio de internet.",
    active: false,
  },
];
const Ventajas = () => {
  return (
    <div
      className="flex items-center justify-center gap-9 gapt w-full  h-full sm:h-screen pt-32 bg-black"
      style={{
        backgroundImage: "url('/img/backs/BG_S04.png')",

        backgroundSize: "cover",
      }}
    >
      <div className="hidden lg:flex ">
        <Expanding data={images} />
      </div>
      <div className="lg:hidden flex justify-center pb-10">
        <ExpandingVertical data={images} />
      </div>
    </div>
  );
};

export default Ventajas;
