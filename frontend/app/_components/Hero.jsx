import React from "react";

const Hero = ({ onButtonClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url(/xmas.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#8B0000",
        textAlign: "center",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1rem" }}>I Wish You</h1>
      <h2 style={{ fontSize: "4rem", marginBottom: "1rem", fontWeight: "bold" }}>Merry Christmas</h2>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>And Happy New Year!</p>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
        <img
          src="/holly-icon.png"
          alt="Holly"
          style={{ width: "40px", height: "40px", marginRight: "0.5rem" }}
        />
        <img
          src="/holly-icon.png"
          alt="Holly"
          style={{ width: "40px", height: "40px", marginLeft: "0.5rem" }}
        />
      </div>
      <button
        onClick={onButtonClick}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#8B0000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Open Present
      </button>
    </div>
  );
};

export default Hero;