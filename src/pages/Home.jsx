import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InvitationEnvelope from '../components/InvitationEnvelope';
import './Home.css';

const Home = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleOpenInvitation = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/invitation');
    }, 1000); // Wait for the fade-out transition
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className="home-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          <div className="home-overlay"></div>
          <div className="envelope-section">
            <InvitationEnvelope onOpen={handleOpenInvitation} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
