import React from "react";

const index = () => {
  return (
    <div className="h-[100vh]  bg-[#00723F] flex">
      <div className="flex flex-col bg01 bg-cover w-[51%] h-[90vh] justify-center items-center rounded-br-3xl">
        <h1 className="text-4xl text-white m-5 font-bold w-[60%]">
          Estamos en búsqueda de los mejores talentos
        </h1>
        <h2 className="text-2xl text-white m-5 font-semibold">
        ¿Te interesa unirte a nuestro equipo de trabajo?
        </h2>
      </div>
      <div className="flex bg-white w-[600px] h-[700px] -translate-x-20 translate-y-40 rounded-[20px] justify-center shadow-lg">
        <htmlForm className=" rounded m-8  w-[80%] ">
          <div className="text-center mt-10 mb-5">
            <h1 className="text-2xl text-black justify-center font-bold">Contacto</h1>
          </div>

          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre Completo
            </label>
            <input
              className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              E-Mail
            </label>
            <input
              className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Teléfono
            </label>
            <input
              className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="phone"
              placeholder=""
            />
          </div>
          <div className="mb-6">
          <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Selecciona tu Ubicacion
            </label>
            <select
              className="block appearance-none w-full bg-white border border-green-200 text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="grid-state"
            >
              <option className="">-  -</option>
              <option>Monterrey</option>
              <option>Saltillo</option>
            </select>
          </div>

          <div className="mb-6">
          <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Selecciona tu Área de interés
            </label>
            <select
              className="block appearance-none w-full bg-white border border-green-200 text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="grid-state"
            >
              <option className="">-  -</option>
              <option>Técnicos y auxiliares de instalación</option>
              <option>Asesor Comercial de Negocios</option>
            </select>
          </div>
         

          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mensaje
            </label>
            <input
              className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=""
            />
          </div>




          <div className="flex items-center justify-between">
            <button
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
              type="button"
            >
              <input type="file" />
            </button>
          <button className="btn btn-success text-white">Enviar</button>
          </div>
        </htmlForm>
      </div>
    </div>
  );
};

export default index;
