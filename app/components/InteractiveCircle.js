"use client";
// components/InteractiveCircle.js
import { useState } from "react";

const InteractiveCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className='circle'
      onMouseMove={handleMouseMove}
      style={{ left: position.x + "px", top: position.y + "px" }}
    >
      <div className='dot'></div>
    </div>
  );
};

export default InteractiveCircle;
