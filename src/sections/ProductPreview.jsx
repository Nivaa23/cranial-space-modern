import React from 'react';
import { Award, Brain, MessageSquare, Calendar, Trophy, Check, ArrowRight, UserCheck, Flame, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/ProductPreview.css';

const ProductPreview = () => {
  return (
    <section className="preview-container">
      
      {/* 1. UX SCORE CARD */}
      <div className="preview-card card-score">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon"><Award size={18} /></div>
            <span className="card-title">UX Score</span>
          </div>
          <span className="card-badge badge-accent">Senior Tier</span>
        </div>
        <div className="score-content">
          <div className="score-ring-wrapper">
            <svg className="score-ring-svg" viewBox="0 0 100 100">
              <circle className="score-ring-bg" cx="50" cy="50" r="40" />
              <circle className="score-ring-fg" cx="50" cy="50" r="40" />
            </svg>
            <span className="score-number">87</span>
          </div>
          <div className="score-stats">
            <div className="score-stat-item">
              <span className="score-stat-dot" style={{ backgroundColor: '#10B981' }} />
              Typography: Excellent
            </div>
            <div className="score-stat-item">
              <span className="score-stat-dot" style={{ backgroundColor: '#10B981' }} />
              Spacing: Consistency high
            </div>
            <div className="score-stat-item">
              <span className="score-stat-dot" style={{ backgroundColor: '#F59E0B' }} />
              Contrast: 2 warnings
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI UX REVIEW CARD */}
      <div className="preview-card card-review">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon"><Brain size={18} /></div>
            <span className="card-title">AI UX Review</span>
          </div>
          <span className="card-badge badge-purple">Realtime Scan</span>
        </div>
        <div className="review-content">
          <div className="review-visual">
            <div className="review-laser" />
            <div className="visual-element" style={{ width: '40%' }} />
            <div className="visual-element v-large">Checkout Modal</div>
            <div className="visual-element" style={{ width: '80%' }} />
          </div>
          <div className="review-feedback-list">
            <div className="feedback-bullet">
              <span>💡 Target Tap Size</span>
              Increase CTA height to 48px to improve touch target accessibility.
            </div>
            <div className="feedback-bullet" style={{ borderLeftColor: '#A855F7' }}>
              <span>⚡ Visual Hierarchy</span>
              Increase price tag weight to 700 to draw focus.
            </div>
          </div>
        </div>
      </div>

      {/* 3. COMMUNITY FEED CARD */}
      <div className="preview-card card-community">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon"><MessageSquare size={18} /></div>
            <span className="card-title">Community Feed</span>
          </div>
          <span className="card-badge">Active</span>
        </div>
        <div className="feed-item">
          <div className="feed-user">
            <div className="user-avatar" style={{ backgroundColor: '#818CF8' }}>SC</div>
            <div className="user-info">
              <span className="user-name">Sarah Chen</span>
              <span className="user-role">Product Designer, Stripe</span>
            </div>
          </div>
          <div className="feed-post-preview">
            Dashboard V2 Navigation
          </div>
          <div className="feed-comment">
            <strong>Alex Rivera:</strong> The sidebar layout feels very clean. Try testing it with a collapsed state to maximize screen space!
          </div>
        </div>
      </div>

      {/* 4. MENTOR SPOTLIGHT CARD */}
      <div className="preview-card card-mentor">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon"><UserCheck size={18} /></div>
            <span className="card-title">Mentor Spotlight</span>
          </div>
          <span className="card-badge badge-accent">1-on-1 Session</span>
        </div>
        <div className="mentor-profile">
          <div className="mentor-avatar" style={{ backgroundColor: '#4338CA' }}>AR</div>
          <span className="mentor-name">Alex Rivera</span>
          <span className="mentor-title">Design Lead at Stripe</span>
          <div className="mentor-time-slot">
            <Calendar size={14} />
            Wednesday, 4:00 PM
          </div>
        </div>
      </div>

      {/* 5. WEEKLY CHALLENGE CARD */}
      <div className="preview-card card-challenge">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon"><Trophy size={18} /></div>
            <span className="card-title">Weekly Challenge</span>
          </div>
          <span className="card-badge badge-purple">Ends Soon</span>
        </div>
        <div className="challenge-content">
          <div className="challenge-main">
            <span className="challenge-title">Dark Mode Form Layouts</span>
            <span className="challenge-desc">Design a high-converting pricing page signup form in dark mode. Focus on input field status and microcopy.</span>
          </div>
          <div className="challenge-tracker">
            <span className="challenge-stat"><Users size={12} /> 142 Submissions</span>
            <span className="challenge-stat" style={{ color: '#A855F7' }}><Flame size={12} /> 18h left</span>
          </div>
          <button className="btn btn-primary challenge-btn">
            Submit Your Draft
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProductPreview;
