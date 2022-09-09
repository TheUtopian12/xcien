import React from "react";

const Loading = () => {
  return (
    <div className="bg-cover bg-black h-screen w-screen flex justify-center items-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
