import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, message, Upload } from 'antd';
import Aviso from "../../components/ui/Aviso";
import { BiFileBlank } from "react-icons/bi";




const Vacantes = () => {
  const [estado, setEstado] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddrTypeChange = (e) => {
    setEstado(e.target.value);
  };
  console.log(estado);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qv3y18o",
        "template_vd003j5",
        form.current,
        "1c7A6aDNctH2b5iEo"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-[100vh]  bg-[#00723F] flex">
      <Aviso isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="flex flex-col bg01 bg-cover w-[51%] h-[90vh] justify-center items-center rounded-br-3xl">
        <h1 className="text-4xl text-white m-5 font-bold w-[60%]">
          Estamos en búsqueda de los mejores talentos
        </h1>
        <h2 className="text-2xl text-white m-5 font-semibold">
          ¿Te interesa unirte a nuestro equipo de trabajo?
        </h2>
      </div>
      <div className="flex bg-white w-[600px] h-[800px] -translate-x-20 translate-y-40 rounded-[20px] justify-center shadow-lg">
        <form
          enctype="multipart/form-data"
          method="post"
          ref={form}
          onSubmit={sendEmail}
          className=" rounded m-8  w-[80%] "
        >
          <div className="text-center mt-10 mb-5">
            <h1 className="text-2xl text-black justify-center font-bold">
              Contacto
            </h1>
            <div className="mb-4 text-left">
              <label className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Teléfono
              </label>
              <input
                type="phone"
                name="telefono"
                className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Selecciona tu Ubicacion
              </label>
              <select
                className="block appearance-none w-full bg-white border border-green-200 text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="grid-state"
                name="estado"
                onChange={(e) => handleAddrTypeChange(e)}
                required
              >
                <option className="" value="">
                  - -
                </option>

                <option value="Monterrey">Monterrey</option>
                <option value="Saltillo">Saltillo</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Reynosa">Reynosa</option>
                <option value="Queretaro">Queretaro</option>
              </select>
            </div>

            <div className="mb-4 text-left">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Selecciona tu Área de interés
              </label>
              <select
                name="area"
                id=""
                className="block appearance-none w-full bg-white border border-green-200 text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                required
              >
                {estado === "Monterrey" ? (
                  <>
                    <option className="" value="">
                      - -
                    </option>
                    <option value="Técnicos y auxiliares de instalación">
                      Técnicos y auxiliares de instalación
                    </option>
                    <option value="Asesor Comercial de Negocios">
                      Asesor Comercial de Negocios
                    </option>
                    <option value="Atención a clientes">
                      Atención a clientes
                    </option>
                    <option value="Especialista en Soporte Télefonico">
                      Especialista en Soporte Télefonico
                    </option>
                    <option value="Especialista en Soporte telefónico Bilingue">
                      Especialista en Soporte telefónico Bilingue
                    </option>
                    <option value="NOC">NOC</option>
                    <option value="Administración">Administración</option>
                    <option value="Almacén">Almacén</option>
                    <option value="Prácticas profesionales">
                      Prácticas profesionales
                    </option>
                    <option value="TI">TI</option>
                  </>
                ) : (
                  <>
                    <option className="" value="">
                      - -
                    </option>
                    <option value="Técnicos y auxiliares de instalación">
                      Técnicos y auxiliares de instalación
                    </option>
                  </>
                )}
              </select>
            </div>
            <div className="mn-4 text-left">
              {" "}
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mensaje
              </label>
              <span className="text-green-500 text-[10px]">
                Máximo 250 caracteres
              </span>
              <textarea
                style={{ resize: "none", height: "50px" }}
                name="message"
                maxLength="250"
                className="mb-4 block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full h-14 mb-12 ">
             
             
              <label
                htmlFor="archivo"
                style={{
                  display: "block",
                  backgroundColor: "#ffff",
                  height: "50px",
                  backgroundColor: "#36d298",
                  borderRadius: "15px",
                  borderStyle: "dashed",
                  borderColor: "black",
                  color: "white",
                  fontSize: "20px",
                  display:'flex',
                  justifyContent:'center',
                  placeItems:'center',
                  gap:'10px'
                }}
              >
              <BiFileBlank size={30}/>  Adjunta tu CV
              </label>
              <input type="file" name="my_file" id="archivo" onChange={(e)=>alert('Archivo cargado con exito')}/>
            </div>
          </div>

          <input
            type="submit"
            value="Enviar"
            className="btn btn-success text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Vacantes;
