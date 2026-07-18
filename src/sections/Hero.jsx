import React from 'react';
import { ArrowRight, Play, Compass, Award, Sparkles, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
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
        AI-Powered UX Reviews Now Active
      </motion.div>

      {/* Hero Headline */}
      <motion.h1 className="hero-headline" variants={itemVariants}>
        Where Product Designers <br />
        <span className="gradient-text">Scale Their Instincts</span>
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p className="hero-subtitle" variants={itemVariants}>
        Stop designing in a vacuum. Receive instant AI-powered UX reviews, benchmark your progress with a dynamic UX Score, enter weekly design challenges, and master your craft alongside senior industry mentors.
      </motion.p>

      {/* Hero Actions */}
      <motion.div className="hero-actions" variants={itemVariants}>
        <button className="btn btn-primary">
          Join the Community
          <ArrowRight size={16} />
        </button>
        <button className="btn btn-secondary">
          <Play size={14} fill="currentColor" />
          Watch How It Works
        </button>
      </motion.div>

      {/* Trust Indicator Logos */}
      <motion.div className="hero-trust-logos" variants={itemVariants}>
        <span className="trust-title">Trusted by designers at forward-thinking companies</span>
        <div className="logos-container">
          <div className="trust-logo">
            <Target size={16} />
            Linear
          </div>
          <div className="trust-logo">
            <Sparkles size={16} />
            Stripe
          </div>
          <div className="trust-logo">
            <Award size={16} />
            Vercel
          </div>
          <div className="trust-logo">
            <Compass size={16} />
            Framer
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
