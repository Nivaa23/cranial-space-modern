import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Silk from '../components/Silk';
import '../styles/CinematicCTA.css';

const CinematicCTA = () => {
  return (
    <section className="cinematic-cta-section">
      <div className="cta-cinematic-backdrop">
        <Silk
          speed={3.5}
          scale={1.1}
          color="#5227FF"
          noiseIntensity={1.2}
          rotation={0}
        />
        <div className="grid-overlay" />
      </div>

      <div className="cta-content-wrapper">
        <motion.div 
          className="cta-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={12} className="sparkle-spinning" />
          <span>Enter the space</span>
        </motion.div>

        <motion.h2 
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Ready to become the <br />
          <span className="gradient-text">designer you always wanted to be?</span>
        </motion.h2>

        <motion.p 
          className="cta-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join a community that metrics-tests instincts, critiques constructively, and values true craftsmanship.
        </motion.p>

        <motion.div 
          className="cta-button-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/signup" className="cta-btn cta-primary-glow">
            Join the Community
            <ArrowRight size={16} />
          </Link>
          <Link to="/product" className="cta-btn cta-secondary-glass">
            Explore the Platform
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicCTA;
