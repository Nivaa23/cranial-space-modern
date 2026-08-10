import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Zap, Users, Trophy, Award } from 'lucide-react';

const AuthBrandPanel = () => {
  return (
    <div className="auth-brand-panel">
      <div className="auth-ambient-glow" />
      <div className="auth-ambient-glow-bottom" />
      <div className="auth-grid-overlay" />

      {/* Header Logo */}
      <div className="auth-brand-header">
        <Link to="/" className="auth-logo-link">
          <div className="auth-logo-icon">C</div>
          <span>Cranial Space</span>
        </Link>
        <span className="auth-brand-tag">Product Studio</span>
      </div>

      {/* Center Brand Identity & Core Value Statement */}
      <div className="auth-brand-content">
        <div className="auth-brand-kicker">
          <span className="auth-kicker-dot" />
          <span>The Designer Intelligence Ecosystem</span>
        </div>

        <h1 className="auth-brand-title">
          Design better. <br />
          Think sharper. <br />
          <span className="gradient-accent">Grow faster.</span>
        </h1>

        <p className="auth-brand-desc">
          Sharpen your product instincts with sub-second AI usability feedback, 
          rigorous community critique, weekly layout challenges, and 1-on-1 mentorship 
          from principal designers at top-tier tech companies.
        </p>

        {/* Live Interface Telemetry Preview Fragment */}
        <div className="auth-preview-card">
          <div className="auth-preview-header">
            <div className="auth-preview-status">
              <span className="auth-status-dot" />
              <span>AI Usability Engine v2.4</span>
            </div>
            <span className="auth-score-chip">96.8 UX Score</span>
          </div>

          <div className="auth-metrics-row">
            <div className="auth-metric-item">
              <span className="auth-metric-label">Hierarchy</span>
              <span className="auth-metric-val">98%</span>
            </div>
            <div className="auth-metric-item">
              <span className="auth-metric-label">Contrast</span>
              <span className="auth-metric-val">AAA</span>
            </div>
            <div className="auth-metric-item">
              <span className="auth-metric-label">Fitts Law</span>
              <span className="auth-metric-val">Optimal</span>
            </div>
          </div>

          <div className="auth-pillars-strip">
            <span className="auth-pillar-tag">
              <Zap size={12} color="#818cf8" />
              AI Feedback
            </span>
            <span className="auth-pillar-tag">
              <Users size={12} color="#38bdf8" />
              Community Critique
            </span>
            <span className="auth-pillar-tag">
              <Trophy size={12} color="#f59e0b" />
              Weekly Challenges
            </span>
            <span className="auth-pillar-tag">
              <Award size={12} color="#22c55e" />
              Mentor Guidance
            </span>
          </div>
        </div>
      </div>

      {/* Brand Panel Footer */}
      <div className="auth-brand-footer">
        <div className="auth-trust-avatars">
          <div className="auth-avatar-stack">
            <div className="auth-avatar-thumb">UX</div>
            <div className="auth-avatar-thumb">DS</div>
            <div className="auth-avatar-thumb">PM</div>
          </div>
          <span>Joined by 14,200+ designers at Linear, Figma & Stripe</span>
        </div>
        <span>&copy; 2026 Cranial Space</span>
      </div>
    </div>
  );
};

export default AuthBrandPanel;
