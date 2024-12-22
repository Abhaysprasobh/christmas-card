// _components/Gift.js
import React from "react";

const Gift = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        color: "#8B0000",
        textAlign: "center",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Surprise Gift!</h1>
      <p style={{ fontSize: "1.5rem" }}>Enjoy the holidays with love and joy!</p>
    </div>
  );
};

export default Gift;