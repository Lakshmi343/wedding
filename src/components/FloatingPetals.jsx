import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingPetals.css';

const Petal = ({ delay, startX, duration, scale }) => {
  return (
    <motion.div
      className="petal"
      initial={{ 
        y: -50, 
        x: startX,
        rotate: 0,
        scale: scale,
        opacity: 0
      }}
      animate={{ 
        y: '110vh', 
        x: startX + (Math.random() * 100 - 50),
        rotate: 360,
        opacity: [0, 0.8, 0.8, 0]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate random petals
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      startX: Math.random() * window.innerWidth,
      duration: 10 + Math.random() * 10,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="petals-container">
      {petals.map(petal => (
        <Petal key={petal.id} {...petal} />
      ))}
    </div>
  );
};

export default FloatingPetals;
