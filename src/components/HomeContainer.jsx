import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home  ">
      <div className="py-6 flex-1 flex-col items-start  justify-center gap-6">
        <div
          className="flex items-center gap-3 justify-start
    bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-orange-500 font-semibold ">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full bg-white object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-gray-850">
          the Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p
          className="text-base text-gray-600 text-center md:w-[80%]
    md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ratione
          necessitatibus assumenda odit enim sapiente est adipisci illum
          commodi, possimus itaque ipsa sint quaerat doloribus modi quasi nihil
          dolorum cumque.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400
    to-orange-500 w-full md:w-auto  px-4 py-2 rounded-lg hover:shadow-lg transition-all
    ease-in-out duration-100 ">
          Order Now
        </button>
      </div>
      <div className="py-6  flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-Bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-[rgba(256,256,256,0.5)] backdrop-blur-3xl rounded-md  flex flex-col items-center justify-center drop-shadow-lg ">
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="i1"
                />
                <p className="text-base lg:text-lg font-semibold text-black mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className=" text-[10px] lg:text-sm font-semibold text-gray-500 my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
