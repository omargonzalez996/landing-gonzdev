import React from "react";
import Balatro from "./bits/Balatro";

const Hero = ({ heroData }) => {
  return (
    <div className="hero min-h-screen relative bg-slate-950">
      <Balatro
        isRotate={true}
        mouseInteraction={false}
        pixelFilter={300}
      />
      {/* Gradient overlay for bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"
      ></div>
      <div className="flex flex-col items-center gap-2">
        <img
          src="/PWLOGO.png"
          alt="GONZDEV Logo"
          className="w-48 md:w-56 mb-4 mx-auto"
        />
        <div className="text-8xl md:text-9xl font-bold bebas-neue-regular">{heroData.title}</div>
        <p className="text-2xl md:text-4xl">{heroData.subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;