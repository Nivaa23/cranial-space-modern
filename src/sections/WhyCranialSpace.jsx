import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Activity, GraduationCap, Award, Compass, CheckCircle, Clock } from 'lucide-react';
import BorderGlow from '../components/BorderGlow';
import '../styles/WhyCranialSpace.css';

const WhyCranialSpace = () => {
  const glowColors = ['#7C3AED', '#A855F7', '#3B82F6'];
  const glowHSL = '258 89 60';

  return (
    <section className="why-section" id="why-us">
      <div className="section-header-editorial">
        <span className="section-kicker">Core Capabilities</span>
        <h2 className="section-title-large">
          A high-conviction sandbox for <br />
          <span className="gradient-text">uncompromised product growth.</span>
        </h2>
      </div>

      <div className="why-bento-grid">
        {/* Card 1: AI UX Reviews (Large Card - 2 Columns) */}
        <motion.div 
          className="bento-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-purple">
                  <Sparkles size={22} />
                </div>
                <span className="bento-tag">Instant feedback</span>
              </div>
              <h3 className="why-card-title">AI UX Reviews</h3>
              <p className="why-card-desc">Upload Figma frames or raw screens. Get sub-second usability audits checking layouts, touch targets, and contrast compliance.</p>
              
              {/* Custom Interactive UI Mockup */}
              <div className="bento-visual visual-ai-scanner">
                <div className="scanner-mobile-frame">
                  <div className="scanner-laser" />
                  <div className="mobile-header">
                    <span className="status-dot" />
                    <span className="frame-title">Checkout Screen</span>
                  </div>
                  <div className="mobile-body">
                    <div className="btn-mock fail-target">
                      <span className="btn-label">Pay Now</span>
                      <span className="scan-highlight text-red">36px height (Fail)</span>
                    </div>
                    <div className="text-mock contrast-fail">
                      <span className="text-line-mock" />
                      <span className="scan-highlight text-orange">Contrast 2.4:1 (Fail)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Card 2: Instinct Scoring (Medium Card - 1 Column) */}
        <motion.div 
          className="bento-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-indigo">
                  <Activity size={22} />
                </div>
                <span className="bento-tag">Analytics</span>
              </div>
              <h3 className="why-card-title">UX Score</h3>
              <p className="why-card-desc">Quantify your design growth over time with dynamic scoring metrics compiled from critiques.</p>
              
              {/* Custom visual */}
              <div className="bento-visual visual-ux-score">
                <div className="score-dial-container">
                  <svg className="score-svg" viewBox="0 0 36 36">
                    <path className="dial-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="dial-value" strokeDasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="score-dial-text">
                    <span className="score-number">87</span>
                    <span className="score-label">+12% this wk</span>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Card 3: Asynchronous Community (Medium Card - 1 Column) */}
        <motion.div 
          className="bento-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-sky">
                  <Users size={22} />
                </div>
                <span className="bento-tag">Peer Review</span>
              </div>
              <h3 className="why-card-title">Community</h3>
              <p className="why-card-desc">Trade high-conviction notes inside invite-only circles of product builders. Zero vanity noise.</p>
              
              {/* Custom dialogue stack */}
              <div className="bento-visual visual-dialogue-stack">
                <div className="dialogue-card">
                  <span className="dialogue-author">Sarah L. (Designer)</span>
                  <p className="dialogue-text">Check button touch targets. Tap target is currently narrow.</p>
                </div>
                <div className="dialogue-card response">
                  <span className="dialogue-author">You</span>
                  <p className="dialogue-text">Adjusted to 48px height padding. Fixed!</p>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Card 4: Vetted Mentorship (Large Card - 2 Columns) */}
        <motion.div 
          className="bento-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-emerald">
                  <GraduationCap size={22} />
                </div>
                <span className="bento-tag">1-on-1 Help</span>
              </div>
              <h3 className="why-card-title">Vetted Mentorship</h3>
              <p className="why-card-desc">Connect with Design Leads at Stripe, Linear, and Vercel. Book video calls and async reviews to solve hard career roadblocks.</p>
              
              {/* Booking Slot Custom visual */}
              <div className="bento-visual visual-mentorship">
                <div className="mentor-card-bento">
                  <div className="mentor-profile">
                    <div className="mentor-avatar">AR</div>
                    <div className="mentor-details">
                      <span className="mentor-name">Alex Rivera</span>
                      <span className="mentor-role">Principal Designer, Stripe</span>
                    </div>
                  </div>
                  <div className="mentor-booking-slots">
                    <span className="booking-slot active">10:00 AM (Mon)</span>
                    <span className="booking-slot">02:30 PM (Wed)</span>
                    <button className="book-btn">Book Review</button>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Card 5: Weekly Challenges (Medium Card - 1 Column) */}
        <motion.div 
          className="bento-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-rose">
                  <Award size={22} />
                </div>
                <span className="bento-tag">Active Prompts</span>
              </div>
              <h3 className="why-card-title">Weekly Challenges</h3>
              <p className="why-card-desc">Formulate interface layout solutions for real-world products. Compete with peers and get reviewed live.</p>
              
              {/* Timer visual */}
              <div className="bento-visual visual-challenge">
                <div className="timer-pill">
                  <Clock size={12} className="timer-icon" />
                  <span className="timer-value">2d : 14h : 30m left</span>
                </div>
                <span className="challenge-prompt">Challenge #4: Multi-step checkout optimization</span>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Card 6: Continuous Learning (Medium Card - 1 Column) */}
        <motion.div 
          className="bento-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 90, damping: 15 }}
          whileHover={{ y: -6 }}
          style={{ height: '100%' }}
        >
          <BorderGlow
            className="bento-card"
            edgeSensitivity={30}
            glowColor={glowHSL}
            backgroundColor="var(--card-bg)"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1.0}
            colors={glowColors}
          >
            <div className="bento-card-content">
              <div className="bento-header-row">
                <div className="why-icon-container bg-glow-amber">
                  <Compass size={22} />
                </div>
                <span className="bento-tag">Heuristics</span>
              </div>
              <h3 className="why-card-title">Continuous Learning</h3>
              <p className="why-card-desc">Master deep UX guidelines, accessibility best practices, and fine UI spacing through interactive check sheets.</p>
              
              {/* Custom learning list visual */}
              <div className="bento-visual visual-checklist">
                <div className="check-item done">
                  <CheckCircle size={12} className="check-icon" />
                  <span className="check-text">Fitts' Law Application</span>
                </div>
                <div className="check-item done">
                  <CheckCircle size={12} className="check-icon" />
                  <span className="check-text">Gestalt Principles</span>
                </div>
                <div className="check-item pending">
                  <span className="check-bullet" />
                  <span className="check-text">WCAG Touch Target Specs</span>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCranialSpace;
