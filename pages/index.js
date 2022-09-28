import React,{useState} from "react";
import Example from "../components/main/Example";
import Hero from "../components/main/Hero";
import Welcome from "../components/main/Welcome";
import Movil from "../components/movil/Movil";
import Nosotros from "../components/nosotros/Nosotros";
import Opiniones from "../components/opiniones/Opiniones";
import Servicios from "../components/servicios/Servicios";
import Banners from "../components/slider/Banners";
import Card from "../components/slider/Card";
import Ventajas from "../components/ventajas/Ventajas";

export default function Home() {
  const [dark, setDark] = useState('black')
  return (
    <>

    {/** 
            
      */}
      

      <Example />
     <Banners />
     <Servicios dark={dark} /> <Ventajas /> <Nosotros /> <Opiniones /> <Movil />
    </>
  );
}
