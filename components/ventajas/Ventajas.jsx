import React from "react";
import Expanding from "./Expanding";
import ExpandingVertical from "./ExpandingVertical";

import { Parallax } from "react-parallax";
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
    
    
    <Parallax bgImage="/img/BG_Flat.png" bgImageAlt="the cat" strength={100}>
    
     <section className="pt-10 2xl:pt-32 xl:pt-32 pb-10 text-center h-[100vh]">
          <h1 className="sm:text-5xl text-2xl font-bold text-[#2adc2f] pb-10">
            Ventajas
          </h1>
          <div className="hidden lg:flex lg:justify-center">
            <Expanding data={images} />
          </div>
          <div className="lg:hidden flex justify-center pb-10">
            <ExpandingVertical data={images} />
          </div>
        </section>
  </Parallax>


      
    
  );
};

export default Ventajas;
