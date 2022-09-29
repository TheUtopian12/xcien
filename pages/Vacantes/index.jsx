import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "antd/dist/antd.css";
import { InboxOutlined } from "@ant-design/icons";
import { Alert, message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  accept: ".pdf",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Vacantes = () => {
  const [estado, setEstado] = useState("");
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
        "template_ikvjmzn",
        form.current,
        "1c7A6aDNctH2b5iEo"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Se envio exitosamente ')
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );

      
  };

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
      <div className="flex bg-white w-[600px] h-[800px] -translate-x-20 translate-y-40 rounded-[20px] justify-center shadow-lg">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" rounded m-8  w-[80%] "
        >
          <div className="text-center mt-10 mb-5">
            <h1 className="text-2xl text-black justify-center font-bold">
              Contacto
            </h1>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                className="block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
                required
             />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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

            <div className="mb-4">
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
            <div className="mn-4">
              {" "}
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                className="mb-4 block appearance-none  rounded w-full py-2 px-3 bg-white border border-green-200 text-gray-700 text-xlleading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full h-14 mb-12">
              <Dragger {...props} style={{ border: "2" }}>
                <p className="text-green-500"> Adjuntar CV</p>
              </Dragger>
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
