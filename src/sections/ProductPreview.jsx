import React, { useState, useRef } from 'react';
import { Award, Brain, MessageSquare, Calendar, Trophy, ArrowRight, UserCheck, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/ProductPreview.css';

const ProductPreview = () => {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mouse tilt tracking for 3D parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="preview-3d-canvas"
    >
      <motion.section 
        className="preview-container"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        
        {/* 1. UX SCORE CARD */}
        <div 
          className={`preview-card card-score ${hoveredCard && hoveredCard !== 'score' ? 'inactive-card' : ''}`}
          onMouseEnter={() => setHoveredCard('score')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon"><Award size={16} /></div>
              <span className="card-title">Instinct Score</span>
            </div>
            <span className="card-badge badge-accent">Senior Tier</span>
          </div>
          <div className="score-content">
            <div className="score-ring-wrapper">
              <svg className="score-ring-svg" viewBox="0 0 100 100">
                <circle className="score-ring-bg" cx="50" cy="50" r="40" />
                <circle className="score-ring-fg" cx="50" cy="50" r="40" />
              </svg>
              <div className="score-inner-text">
                <span className="score-number">87</span>
                <span className="score-label">pts</span>
              </div>
            </div>
            <div className="score-stats">
              <div className="score-stat-item">
                <span className="score-stat-dot success" />
                <span>Typography: <strong className="txt-highlight">Excellent</strong></span>
              </div>
              <div className="score-stat-item">
                <span className="score-stat-dot success" />
                <span>Spacing: <strong className="txt-highlight">Consistent</strong></span>
              </div>
              <div className="score-stat-item">
                <span className="score-stat-dot warning" />
                <span>Contrast: <strong className="txt-warning">2 warnings</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. AI UX REVIEW CARD */}
        <div 
          className={`preview-card card-review ${hoveredCard && hoveredCard !== 'review' ? 'inactive-card' : ''}`}
          onMouseEnter={() => setHoveredCard('review')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon"><Brain size={16} /></div>
              <span className="card-title">AI Heuristic Audit</span>
            </div>
            <span className="card-badge badge-purple">Sub-second Scan</span>
          </div>
          <div className="review-content">
            <div className="review-visual">
              <div className="review-laser" />
              {/* Sleek Mini UI Mockup */}
              <div className="mock-checkout-window">
                <div className="mock-window-header">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                  <span className="mock-window-title">payment_modal.fig</span>
                </div>
                <div className="mock-window-body">
                  <div className="mock-input-field highlighted-error">
                    <span className="mock-label">Cardholder Name</span>
                    <div className="mock-input">•••• ••••</div>
                    <span className="mock-error-indicator"><AlertCircle size={10} /> tap target: 32px</span>
                  </div>
                  <div className="mock-button-field">
                    <span>Pay $29.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-feedback-list">
              <div className="feedback-bullet error-bullet">
                <div className="bullet-title-row">
                  <AlertCircle size={13} className="text-purple" />
                  <span>Tap Target Size</span>
                </div>
                <p>Increase CTA height to 48px to meet WCAG AAA touch guidelines.</p>
              </div>
              <div className="feedback-bullet success-bullet">
                <div className="bullet-title-row">
                  <Sparkles size={13} className="text-sky" />
                  <span>Visual Hierarchy</span>
                </div>
                <p>Excellent weight contrast. Price label stands out beautifully.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. COMMUNITY FEED CARD */}
        <div 
          className={`preview-card card-community ${hoveredCard && hoveredCard !== 'community' ? 'inactive-card' : ''}`}
          onMouseEnter={() => setHoveredCard('community')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon"><MessageSquare size={16} /></div>
              <span className="card-title">Asynchronous Critique</span>
            </div>
            <span className="card-badge">Active Thread</span>
          </div>
          <div className="feed-item">
            <div className="feed-user">
              <div className="user-avatar-wrapper">
                <div className="user-avatar accent-blue">SC</div>
                <div className="online-badge" />
              </div>
              <div className="user-info">
                <span className="user-name">Sarah Chen</span>
                <span className="user-role">Product Designer, Stripe</span>
              </div>
            </div>
            <div className="feed-post-preview">
              <span className="tag">#navigation</span>
              <span>Checkout Sidebar V2</span>
            </div>
            <div className="feed-comment">
              <p><strong>Alex Rivera:</strong> The sidebar layout feels very clean. Try testing it with a collapsed state to maximize active screen space!</p>
              <div className="comment-reactions">
                <span className="reaction-badge">🔥 4</span>
                <span className="reaction-badge">👀 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MENTOR SPOTLIGHT CARD */}
        <div 
          className={`preview-card card-mentor ${hoveredCard && hoveredCard !== 'mentor' ? 'inactive-card' : ''}`}
          onMouseEnter={() => setHoveredCard('mentor')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon"><UserCheck size={16} /></div>
              <span className="card-title">1-on-1 Spotlight</span>
            </div>
            <span className="card-badge badge-accent">Interactive Live</span>
          </div>
          <div className="mentor-profile">
            <div className="mentor-avatar-container">
              <div className="mentor-avatar">AR</div>
              <span className="mentor-company-logo">S</span>
            </div>
            <span className="mentor-name">Alex Rivera</span>
            <span className="mentor-title">Principal Designer at Stripe</span>
            
            <div className="mentor-tags">
              <span className="mentor-tag">Design Systems</span>
              <span className="mentor-tag">Micro-copy</span>
            </div>

            <div className="mentor-time-slot">
              <Calendar size={12} />
              <span>Wed, 4:00 PM (30 min)</span>
            </div>
            <button className="btn btn-secondary mentor-book-btn">
              Request Booking
            </button>
          </div>
        </div>

        {/* 5. WEEKLY CHALLENGE CARD */}
        <div 
          className={`preview-card card-challenge ${hoveredCard && hoveredCard !== 'challenge' ? 'inactive-card' : ''}`}
          onMouseEnter={() => setHoveredCard('challenge')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon"><Trophy size={16} /></div>
              <span className="card-title">Weekly Challenge</span>
            </div>
            <span className="card-badge badge-purple">Ends Soon</span>
          </div>
          <div className="challenge-content">
            <div className="challenge-main">
              <span className="challenge-title">Dark Mode Checkout Form</span>
              <span className="challenge-desc">Design a high-converting, accessible pricing page checkout form. Focus on inline validation states.</span>
            </div>
            
            <div className="challenge-participants">
              <div className="avatar-stack">
                <div className="stack-avatar" style={{ backgroundColor: '#f43f5e' }}>JD</div>
                <div className="stack-avatar" style={{ backgroundColor: '#10b981' }}>ML</div>
                <div className="stack-avatar" style={{ backgroundColor: '#3b82f6' }}>TK</div>
                <div className="stack-avatar-more">+142</div>
              </div>
              <span className="avatar-stack-label">Submissions</span>
            </div>

            <div className="challenge-tracker">
              <span className="challenge-stat"><Clock size={12} /> 18h remaining</span>
            </div>
            <button className="btn btn-primary challenge-btn">
              Submit Draft
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </motion.section>
    </div>
  );
};

export default ProductPreview;
