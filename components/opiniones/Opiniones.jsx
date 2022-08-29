import React from "react";
import Image from "next/image";
import empresas from "./assets/empresas.png";
import Slider from "react-slick";
import empresas2 from "./assets/empresas2.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const Opiniones = () => {
  return (
    <div
      className="w-full h-screen grid grid-cols-1 pt-10"
      style={{
        backgroundImage: "url('/img/Wave BG.png')",

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center text-[#2adc2f] font-bold text-4xl  ">
        <h1>Certificaciones</h1>
        <div className="pt-10 flex items-center">
          {" "}
          <IoIosArrowDropleftCircle size={30} /> <Image src={empresas} />{" "}
          <IoIosArrowDroprightCircle size={30} />
        </div>
      </div>
      <div className="flex flex-col items-center text-[#2adc2f] font-bold text-4xl  ">
        <h1>Alianzas comerciales</h1>
        <div className="pt-10 flex items-center">
          {" "}
          <IoIosArrowDropleftCircle size={30} /> <Image src={empresas2} />{" "}
          <IoIosArrowDroprightCircle size={30} />
        </div>
      </div>
      <div className="flex flex-col items-center text-[#2adc2f] font-bold text-4xl ">
        <h1 className="pb-20">Casos de éxito</h1>
        <Slider {...settings} className="w-[1700px] flex">
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
          <div className="ml-32 items-center justify-center">
            <div className="w-[400px] h-[300px]  border-solid bg-[#08141c] rounded-3xl">
              <img
                src="/img/Twitter.png"
                alt="Twitter"
                className="w-7 h-5 translate-x-80 translate-y-11"
              />
              <div className="flex ml-10 mt-10 flex-row">
                <img
                  src="/img/Photo.png"
                  alt="Photo"
                  className="w-20 h-20 rounded"
                />
                <p className="text-white text-lg ml-6">
                  Andrea Mitz <br />{" "}
                  <span className="font-light text-sm">XCIEN</span>
                </p>
              </div>
              <img
                src="/img/“.png"
                alt=""
                className="w-5 h-5 translate-x-8 translate-y-8"
              />
              <p className="text-sm font-normal text-white pr-10 pl-10 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img
                src="/img/”.png"
                alt=""
                className="w-5 h-5 translate-x-80 "
              />
            </div>
          </div>{" "}
        </Slider>
      </div>
    </div>
  );
};

export default Opiniones;
