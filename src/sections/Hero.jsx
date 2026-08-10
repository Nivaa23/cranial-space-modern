import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 22, mass: 0.6 }
    }
  };

  return (
    <motion.section 
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Dynamic Trust Tag */}
      <motion.div className="hero-trust-tag" variants={itemVariants}>
        <span />
        AI-Powered UX Audit Engine v2.0
      </motion.div>

      {/* Hero Headline */}
      <motion.h1 className="hero-headline" variants={itemVariants}>
        The Sandbox for <br />
        <span className="gradient-text">Uncompromising Craft</span>
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p className="hero-subtitle" variants={itemVariants}>
        Stop designing in a vacuum. Cranial Space is a premium platform for product designers. Benchmark your screens with sub-second AI usability feedback, master nuances in weekly challenges, and lead design decisions alongside principal industry mentors.
      </motion.p>

      {/* Hero Actions */}
      <motion.div className="hero-actions" variants={itemVariants}>
        <Link to="/signup" className="btn btn-primary">
          Join the Ecosystem
          <ArrowRight size={16} />
        </Link>
        <a href="#demo" className="btn btn-secondary">
          <Play size={12} fill="currentColor" style={{ marginRight: '2px' }} />
          Inspect Sandbox
        </a>
      </motion.div>

      {/* Trust Indicator Metrics Dashboard */}
      <motion.div className="hero-metrics-dashboard" variants={itemVariants}>
        <div className="hero-metrics-header">
          <span className="hero-metrics-pulse" />
          <span className="metrics-title">Platform Ecosystem Activity</span>
        </div>
        <div className="hero-metrics-track">
          <div className="hero-metric-item">
            <span className="metric-value">14,280+</span>
            <span className="metric-label">Designers Growing</span>
          </div>
          <div className="hero-metric-divider" />
          <div className="hero-metric-item">
            <span className="metric-value">1.4M+</span>
            <span className="metric-label">AI UX Audits Run</span>
          </div>
          <div className="hero-metric-divider" />
          <div className="hero-metric-item">
            <span className="metric-value">99.4%</span>
            <span className="metric-label">Review Satisfaction</span>
          </div>
          <div className="hero-metric-divider" />
          <div className="hero-metric-item">
            <span className="metric-value">Weekly</span>
            <span className="metric-label">Design Sprints</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
