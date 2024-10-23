import React from "react";
import hero from "../assets/herophoto.png";

const HeroSection = () => {
  return (
    <div className="relative  w-full mt-[74px]">
      <div className="relative w-full">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-[410px] lg:h-auto object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              The largest community of
              <span className="block">photo enthusiasts</span>
            </h1>

            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base lg:text-lg font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Join Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
