// _components/Gift.js
import React from "react";

const Gift = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-800 text-center font-serif">
      <div
        className="bg-white p-8 rounded-lg h-[80vh] shadow-lg max-w-md w-[80vw] relative"
        style={{
          background: "linear-gradient(to bottom, #020617 1px, transparent 1px)", // Horizontal lines
          backgroundSize: "100% 20px", // Sets line height to 20px
        }}
      >
        <div className="flex flex-row float-left gap-2">
          <h3 className="text-1xl  mb-4">Dear </h3>
          <h3 className="text-1xl  mb-4">name;</h3>
        </div>
        <div>
        <img
          src="/pro.jpg"
          alt="Bell"
          className="mt-10 mb-8 ml-[20vw] w-[25vw]"
        />
        </div>
        <div>
        <p className="flex flex-wrap text-xs justify-center items-center mb-6">"Wishing you a Christmas filled with love, laughter, and cherished memories! May the warmth of this festive season bring joy to your heart and light to your days. May your New Year be blessed with health, happiness, and success. Here's to celebrating the magic of togetherness and the beauty of giving. Merry Christmas and a Happy New Year!"</p>
        </div>
        <div className="flex flex-row float-right gap-2">
          <h3 className="text-1xl mb-4">From:</h3>
          <h3 className="text-1xl mb-4">name</h3>
        </div>

      </div>
    </div>
  );
};

export default Gift;
