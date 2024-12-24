import React, { useState } from "react";
import Snowfall from "react-snowfall"; 

const Hero = () => {
  const [showSnow, setShowSnow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleGiftClick = () => {
    setShowSnow(true);
    setShowPopup(true);
    const audio = document.getElementById("christmas-song");
    audio.play();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-red-800 text-center font-serif">
      {/* Snowfall Effect */}
      {showSnow && <Snowfall />}

      {/* Christmas Song */}
      <audio id="christmas-song" src="/christmas.mp3" loop />

      {/* Hero Section */}
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

      {/* Gift Button */}
      <button
        onClick={handleGiftClick}
        className="px-6 py-3 rounded-md cursor-pointer"
      >
        <img
          src="/gift.png"
          alt="Gift"
          className="w-[25vw]"
        />
      </button>

      {/* Popup for Beautiful Moment */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-slate-50 rounded-lg shadow-lg p-6 relative max-w-md w-full">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <p className="text-lg text-red-800 mt-4 text-center font-semibold">
              "Cherish the moments that make this season magical. Merry Christmas!"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
