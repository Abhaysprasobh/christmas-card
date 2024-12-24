import React from "react";

const Hero = ({ onButtonClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-red-800 text-center font-serif"

    >
      <h1 className="text-3xl mb-2 uppercase tracking-wide">I Wish You</h1>
      <div className="flex items-baseline gap-2">
        <img
          src="/leaf.png"
          alt="Holly"
          className="w-12 transform rotate-90"
        />
        <h2 className="text-7xl font-bold">Merry</h2>
        <img
          src="/leaf.png"
          alt="Holly"
          className="w-12 ml-2 rotate-180"
        />
      </div>
      <h2 className="text-5xl font-bold mb-4">Christmas</h2>
      <p className="text-xl">And</p>
      <div className="flex items-baseline mb-8">
        <img
          src="/bell.png"
          alt="Bell"
          className="w-4 mr-2"
        />
        <p className="text-xl mb-8">Happy New Year!</p>
        <img
          src="/bell.png"
          alt="Bell"
          className="w-4 ml-2"
        />
      </div>
      <button
        onClick={onButtonClick}
        className="px-6 py-3 rounded-md cursor-pointer"
      >
        <img
          src="/gift.png"
          alt="Bell"
          className="w-[25vw]"
        />
      </button>
    </div>
  );
};

export default Hero;
