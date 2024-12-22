"use client";

import React, { useState } from "react";
import Gift from "./_components/Gift";
import Hero from "./_components/Hero";

export default function Home() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="text-primary">
      {showGift ? (
        <Gift />
      ) : (
        <Hero onButtonClick={() => setShowGift(true)} />
      )}
    </div>
  );
}