import React from "react";
import Expanding from "./Expanding";
const images = [
  {
    id: 1,
    url: "",
    title: "Integramos servicios",
    description:
      "Todos tus servicios de telecomunicaciones en un mismo lugar. Juntos podemos desarrollar e integrar las mejores soluciones que necesita tu empresa.",
  },
  {
    id: 2,
    url: "",
    title: "Servicios administrados",
    description:
      "Simplifica la administración de tus servicios de telecomunicaciones a través de la migración a la nube, la transformación digital y las redes mejoradas. ¡Despreocúpate! Nosotros nos encargamos de tus servicios con personal especializado.",
  },
  {
    id: 3,
    url: "",
    title: "Escalabilidad",
    description:
      "Si tu empresa está en constante crecimiento e innovación, somos tu mejor aliado. Nos encargamos de crecer a tu ritmo para que tus servicios de telecomunicaciones se ajusten a los requerimientos de tu empresa. ",
  },
  {
    id: 4,
    url: "",
    title: "SLA / Nivel de Servicio",
    description:
      "Todos nuestros procesos y tecnología están diseñados para ofrecerte los más altos niveles de servicio y brindarte una disponibilidad de hasta 99.95% anual en tu servicio de internet",
  }
];
const Ventajas = () => {
  return (
    <div
      className="flex items-center justify-center gap-9 gapt w-full  h-screen pt-32 bg-black"
      style={{
        backgroundImage: "url('/img/BG_S04.png')",

        backgroundSize: "cover",
      }}
    >

      <Expanding/>

    </div>
  );
};

export default Ventajas;
