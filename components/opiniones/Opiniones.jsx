import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Empresas1 from './Empresas1'

import Empresas2 from './Empresas2'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const settings3 = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const Opiniones = () => {
  return (
    <div
      className="w-full md:h-[1300px] grid grid-cols-1 pt-10"
     
    >
       <video
      src="https://res.cloudinary.com/dtdxwe8yz/video/upload/v1662505944/VideosXcien/BG06_avuunx.mp4"
      autoPlay
      loop
      muted
      className="bg-cover w-full h-full hidden sm:grid "
    />
      <div className=" sm:-translate-y-[800px]" > <div className="flex flex-col items-center text-[#2adc2f] font-bold text-3xl sm:4xl">
        <h1>Certificaciones</h1>
        <div className="pt-10 flex items-center">
          {" "}
         <Empresas1/>
        </div>
      </div>
      <div className="flex flex-col items-center text-[#2adc2f] font-bold text-3xl sm:4xl ">
        <h1>Alianzas comerciales</h1>
        <div className="pt-10 flex items-center">
          {" "}
          <Empresas2/>
        </div>
      </div>
      <div className="flex flex-col items-center text-[#2adc2f] font-bold text-3xl mb-10">
        <h1 className="pb-10 sm:pb-20">Casos de éxito</h1>
        <Slider {...settings} className=" w-[85%] pl-5 xl:hidden">
          <div className="">
            <div className="  w-[90%] h-[280px] sm:w-[60%] sm:ml-28 md:w-[500px] md:ml-36 lg:w-[600px] lg:ml-44  border-solid bg-[#08141c] rounded-3xl ">
              <div className="flex ml-10 mt-10 flex-row pt-10">
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
                className="w-5 h-5 translate-x-56 lg:translate-x-[450px]"
              />
            </div>
          </div>{" "}
          <div className="">
            <div className="  w-[90%] h-[280px] sm:w-[60%] sm:ml-28 md:w-[500px] md:ml-36 lg:w-[600px] lg:ml-44  border-solid bg-[#08141c] rounded-3xl ">
              <div className="flex ml-10 mt-10 flex-row pt-10">
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
                className="w-5 h-5 translate-x-56 lg:translate-x-[450px]"
              />
            </div>
          </div>{" "}
          <div className="">
            <div className="  w-[90%] h-[280px] sm:w-[60%] sm:ml-28 md:w-[500px] md:ml-36 lg:w-[600px] lg:ml-44  border-solid bg-[#08141c] rounded-3xl ">
              <div className="flex ml-10 mt-10 flex-row pt-10">
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
                className="w-5 h-5 translate-x-56 lg:translate-x-[450px]"
              />
            </div>
          </div>{" "}
        </Slider>
        <Slider
          {...settings3}
          className="w-[1100px] xl:flex hidden 2xl:hidden "
        >
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
        <Slider {...settings2} className="w-[1700px] 2xl:flex hidden">
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
      </div></div>

     
    </div>
  );
};

export default Opiniones;
