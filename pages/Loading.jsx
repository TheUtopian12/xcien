import React from "react";
import Image from "next/image";
import Logo from '../public/img/logo.png'
const Loading = () => {
  return (
    <div className="bg-cover bg-black h-screen w-screen  justify-center items-center flex flex-col-reverse">
        <Image src={Logo} className=''/>
     <div> <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div></div>
    </div>
  );
};

export default Loading;
