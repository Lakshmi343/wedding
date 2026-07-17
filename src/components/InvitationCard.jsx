import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, Image as ImageIcon, ArrowDown, Map } from 'lucide-react';
import GoldenParticles from './GoldenParticles';
import './InvitationCard.css';

const AnimatedCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`editorial-card ${className}`}
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
  >
    <div className="card-shine"></div>
    {children}
  </motion.div>
);

const InvitationCard = ({ data }) => {
  return (
    <div className="invitation-page-wrapper">
      {/* 1. Fullscreen Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <p className="hero-small-text tracking-wide">TOGETHER WITH THEIR FAMILIES</p>
          <h1 className="hero-names cursive-text maroon-text">
            Athulya <br/>
            <span className="hero-ampersand gold-text">&</span> <br/>
            Vishnu
          </h1>
          <p className="hero-small-text tracking-wide mt-20">INVITE YOU TO CELEBRATE THEIR</p>
          <h2 className="hero-event-title gold-text accent-text">WEDDING</h2>
          <div className="hero-divider"><span className="gold-text">❦</span></div>
          <div className="hero-date-container">
            <span className="date-part">AUG</span>
            <span className="date-divider">|</span>
            <span className="date-part date-day">30</span>
            <span className="date-divider">|</span>
            <span className="date-part">2026</span>
          </div>
          <p className="hero-day">SUNDAY</p>
          <div className="hero-venue">
            <MapPin size={18} className="gold-text inline-icon" />
            <span style={{ whiteSpace: 'pre-line' }}>{data.weddingDetails.venue}</span>
          </div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={30} className="gold-text" />
        </motion.div>
      </section>

      {/* 2. Detailed Info Section (Grid Layout) */}
      <section className="editorial-details-section">
        <GoldenParticles />
        
        <div className="editorial-container">
          
          {/* Couple Portrait Section */}
          <div className="couple-section">
            <motion.div 
              className="couple-image-wrapper"
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img src="/assets/couple.jpg" alt="Athulya and Vishnu" className="couple-photo" />
            </motion.div>
          </div>

          {/* Header */}
          <motion.div 
            className="editorial-header"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="logo-text gold-text">
              {data.bride.charAt(0)}<span className="logo-ampersand">&</span>{data.groom.name.charAt(0)}
            </h1>
            <h2 className="cursive-text maroon-text section-title">Wedding Details</h2>
          </motion.div>

          {/* Grid Layout */}
          <div className="editorial-grid">
            
            {/* Row 1: Date & Time */}
            <AnimatedCard className="grid-date">
              <Calendar size={24} className="icon gold-text" />
              <p className="detail-label gold-text">WEDDING DATE</p>
              <p className="detail-value bold-text">Sunday, August 30, 2026</p>
              <p className="detail-value small-text mt-10">Chingam 14, 1202</p>
            </AnimatedCard>

            <AnimatedCard className="grid-time" delay={0.2}>
              <Calendar size={24} className="icon gold-text" />
              <p className="detail-label gold-text">MUHURTHAM</p>
              <p className="detail-value bold-text">Between 9:35 AM</p>
              <p className="detail-value small-text">and</p>
              <p className="detail-value bold-text">10:30 AM</p>
            </AnimatedCard>

            {/* Row 2: Bride */}
            <AnimatedCard className="grid-bride span-2" delay={0.1}>
              <div className="floral-corner top-left"></div>
              <div className="floral-corner bottom-right"></div>
              <div className="title-banner">THE BRIDE</div>
              <h3 className="cursive-text maroon-text names-large mt-20">{data.bride}</h3>
              <p className="parents-text mt-10">Beloved Daughter of</p>
              {/* Using placeholder for parents as we only have groom's in data, but user asked for "Parent Names" */}
              <p className="parents-names">Mr. BrideFather & Mrs. BrideMother</p>
              <p className="address-text">Bride House Address<br/>City, State</p>
            </AnimatedCard>

            {/* Row 3: Groom */}
            <AnimatedCard className="grid-groom span-2" delay={0.1}>
               <div className="title-banner">THE GROOM</div>
               <h3 className="cursive-text maroon-text names-large mt-20">{data.groom.name}</h3>
               <p className="parents-text mt-10">Beloved Son of</p>
               <p className="parents-names">Mr. Premdas & Mrs. Priya Premdas</p>
               <p className="address-text">Parakkatt House<br/>Venmanad P.O., Pavaratty, Thrissur</p>
            </AnimatedCard>

            {/* Row 4: Venue */}
            <AnimatedCard className="grid-venue span-2" delay={0.1}>
              <MapPin size={24} className="icon gold-text" />
              <p className="detail-label gold-text">WEDDING VENUE</p>
              <p className="detail-value bold-text">{data.weddingDetails.venue}</p>
              <button className="map-btn mt-20">
                <Map size={16} /> Open in Google Maps
              </button>
            </AnimatedCard>

            {/* Row 5: Reception */}
            <AnimatedCard className="grid-reception span-2" delay={0.1}>
              <h2 className="cursive-text maroon-text section-title-small">Wedding Reception</h2>
              <div className="reception-split mt-20">
                <div className="rec-half">
                  <p className="detail-label gold-text">DATE & TIME</p>
                  <p className="detail-value small-text">{data.receptionDetails.dateAndTime}</p>
                </div>
                <div className="rec-divider"></div>
                <div className="rec-half">
                  <p className="detail-label gold-text">VENUE</p>
                  <p className="detail-value small-text">{data.receptionDetails.venue}</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Row 6: Hosted By */}
            <AnimatedCard className="grid-hosted span-2" delay={0.1}>
              <p className="detail-label gold-text">HOSTED BY</p>
              <p className="detail-value bold-text">{data.invitedBy.split('\n')[0]}</p>
              <p className="detail-value small-text">{data.invitedBy.split('\n')[1]}</p>
              <p className="detail-value gold-text mt-10">{data.invitedBy.split('\n')[2]}</p>
            </AnimatedCard>

            {/* Row 7: Compliments */}
            <AnimatedCard className="grid-compliments span-2" delay={0.2}>
              <p className="detail-label gold-text">WITH BEST COMPLIMENTS FROM</p>
              <div className="chips-container mt-10">
                {data.compliments.split(',').map((name, i) => (
                  <span key={i} className="name-chip">{name.trim().replace('AND', '&').replace('\n', ' ')}</span>
                ))}
              </div>
            </AnimatedCard>

          </div>
          
          <div className="action-buttons editorial-actions mt-20">
            <button className="action-btn primary-btn"><Heart size={18} /><span>RSVP Now</span></button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default InvitationCard;
