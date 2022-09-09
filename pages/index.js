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
  return (
    <>
      {/*  
      <div className="h-[20px] bg-gradient-to-t from-[#012701] to-black"></div>
 
    
      
      
      
      <Opiniones /> <Movil />
     
      */}{" "}
      <Example />
      <Banners />
      <Servicios />
      <Ventajas /><Nosotros /> 
    </>
  );
}
