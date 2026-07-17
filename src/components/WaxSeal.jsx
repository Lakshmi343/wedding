import React from 'react';
import { motion } from 'framer-motion';
import './WaxSeal.css';

const WaxSeal = ({ isOpened }) => {
  return (
    <div className="wax-seal-container">
      {/* The main seal image */}
      <motion.div 
        className="wax-seal-image"
        animate={{ 
          scale: isOpened ? 1.1 : 1,
          opacity: isOpened ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img src="/assets/wax_seal.png" alt="Wax Seal" />
      </motion.div>
      
      {/* Tassel swings slightly then falls away if opened, or we can just fade it out with the seal */}
      <motion.div 
        className="tassel"
        animate={{ 
          rotate: isOpened ? 15 : 0,
          y: isOpened ? 20 : 0,
          opacity: isOpened ? 0 : 1
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeIn",
          delay: isOpened ? 0.2 : 0
        }}
      >
      </motion.div>
    </div>
  );
};

export default WaxSeal;
