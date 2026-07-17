import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InvitationEnvelope.css';

const InvitationEnvelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSealClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Let the animation play completely before triggering the navigation
    setTimeout(() => {
      onOpen();
    }, 2800); 
  };

  return (
    <div className="envelope-3d-wrapper">
      {/* 1. Base structure layer (keeps wrapper sized correctly to the image) */}
      <img src="/assets/wedding.png" className="envelope-base-spacer" alt="" />
      
      {/* 2. Back of the envelope (shows when card slides out) */}
      <div className="envelope-back-inside"></div>

      {/* 3. The Invitation Card that slides out */}
      <motion.div 
        className="envelope-inner-card"
        initial={{ y: "10%" }} 
        animate={isOpen ? { y: "-65%", scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" } : { y: "10%", scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <div className="inner-card-content">
           <h2 className="cursive-text maroon-text names-inner">Athulya & Vishnu</h2>
           <p className="accent-text gold-text tagline-inner">TOGETHER FOREVER</p>
        </div>
      </motion.div>

      {/* 4. Bottom Body Layer of the envelope (In front of card) */}
      <div className="envelope-body-layer">
        <img src="/assets/wedding.png" alt="Envelope Body" />
      </div>

      {/* 5. Top Flap Layer (Flips open) */}
      <motion.div 
        className="envelope-flap-layer"
        initial={{ rotateX: 0 }}
        animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 10 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Front of the flap (the image) */}
        <img src="/assets/wedding.png" alt="Envelope Flap" className="flap-front" />
        {/* Back of the flap (inside texture) */}
        <div className="flap-back"></div>
      </motion.div>

      {/* 6. Clickable Wax Seal */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="wax-seal-btn"
            onClick={handleSealClick}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 15px rgba(197, 160, 89, 0.9))" }}
          >
            <img src="/assets/wax_seal.png" alt="Click to open" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvitationEnvelope;
