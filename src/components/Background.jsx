import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background-container">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>
      {/* Optional: Add a subtle overlay to simulate the blur of brass lamps */}
      <div className="blur-overlay"></div>
    </div>
  );
};

export default Background;
