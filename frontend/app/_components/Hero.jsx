import React, { useState } from "react";
import Snowfall from "react-snowfall";

const Hero = () => {
  const [showSnow, setShowSnow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isShaking, setIsShaking] = useState(true); // The icon will shake initially.

  const handleGiftClick = () => {
    setShowSnow(true);
    setShowPopup(true);
    setIsShaking(false); // Stop shaking after the icon is clicked.
    const audio = document.getElementById("christmas-song");
    audio.play();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-red-200 bg-cover bg-center text-red-800 text-center font-serif">
      {/* Snowfall Effect */}
      {showSnow && <Snowfall snowflakeCount={300} />}

      {/* Christmas Song */}
      <audio id="christmas-song" src="/christmas.mp3" loop />

      {/* Hero Section */}
      <h1 className="text-3xl mb-2 uppercase tracking-wide">I Wish You</h1>
      <div className="flex items-baseline gap-2">
        <img src="/leaf.png" alt="Holly" className="w-12 transform drop-shadow-md rotate-90" />
        <h2 className="text-7xl font-bold drop-shadow-md">Merry</h2>
        <img src="/leaf.png" alt="Holly" className="w-12 ml-2 rotate-180 drop-shadow-md" />
      </div>
      <h2 className="text-5xl font-bold mb-4 drop-shadow-md">Christmas</h2>
      <p className="text-xl">And</p>
      <div className="flex items-baseline mb-8">
        <img src="/bell.png" alt="Bell" className="w-4 mr-2" />
        <p className="text-xl mb-8">Happy New Year!</p>
        <img src="/bell.png" alt="Bell" className="w-4 ml-2" />
      </div>

      {/* Gift Button */}
      <button
        onClick={handleGiftClick}
        className={`relative px-6 py-3 rounded-md cursor-pointer transform transition-transform ${
          isShaking ? "animate-shake" : ""
        }`} // Apply shake animation conditionally
      >
        <div className="absolute inset-0 rounded-md animate-pulse opacity-75" />
        <img
          src="/gift.png"
          alt="Gift"
          className="w-[25vw] relative z-10"
        />
      </button>

      {/* Popup for Beautiful Moment */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity">
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 relative max-w-md w-[90vw]">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <img src="/stick.png" alt="stick" className="w-8 mr-2" />
            <p className="text-lg text-red-800 mt-4 text-center font-semibold">
              "Cherish the moments that make this season magical. Merry Christmas!"
            </p>
            <img src="/stick.png" alt="stick" className="w-8 mr-2 float-right" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
