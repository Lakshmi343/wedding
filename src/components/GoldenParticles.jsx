import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './GoldenParticles.css';

const GoldenParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 30 random particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      targetX: (Math.random() - 0.5) * 50, // relative movement
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ['0%', '-100vh'],
            x: ['0%', `${p.targetX}%`],
            opacity: [0, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default GoldenParticles;
