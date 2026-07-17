import React from 'react';
import { motion } from 'framer-motion';
import InvitationCard from '../components/InvitationCard';

const Invitation = () => {
  // Data extracted from the uploaded invitation image
  const weddingData = {
    bride: "Athulya",
    groom: {
      name: "Vishnu",
      parents: "Beloved Son of\nMR. PREMDAS & MRS. PRIYA PREMDAS",
      address: "PARAKKATT HOUSE\nVENMANAD P.O., PAVARATTY\nTHRISSUR"
    },
    weddingDetails: {
      date: "SUNDAY, AUGUST 30, 2026\n(CHINGAM 14, 1202)",
      time: "BETWEEN 9:35 AM\nAND 10:30 AM",
      venue: "SREE BHAYANKAVU BHAGAVATHI TEMPLE,\nKAVILAKKAD"
    },
    receptionDetails: {
      dateAndTime: "WEDNESDAY, SEPTEMBER 2, 2026\nFROM 5:00 PM TO 9:00 PM",
      venue: "GREEN LAND PALACE\nCONVENTION CENTRE,\nATHANIPPADI, PURATHUR"
    },
    invitedBy: "GANESHAN & REENA GANESHAN\nMEPPARAMBATH HOUSE, THRITHALLUR, KAVILAKKAD\n+91 9526922606, +91 9744059094",
    compliments: "ADWAITH, ATHUL, AKHIL, ABHINDEV,\nASHWINDEV & FAMILY MEMBERS"
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--color-ivory)',
        zIndex: 10
      }}
    >
      <InvitationCard data={weddingData} />
    </motion.div>
  );
};

export default Invitation;
