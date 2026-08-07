import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Upload, Play, RefreshCw, Layers, Compass, HelpCircle } from 'lucide-react';
import '../styles/InteractiveShowcase.css';

const InteractiveShowcase = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0); // 0: Idle/Ready, 1: Scanning, 2: Done
  const [overallScore, setOverallScore] = useState(0);
  const [activeItems, setActiveItems] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 for comparison slider
  const sliderRef = useRef(null);

  const uxMetrics = [
    { name: "Accessibility", target: 94, category: "WCAG Compliance" },
    { name: "Visual Hierarchy", target: 96, category: "Scannability" },
    { name: "Spacing Consistency", target: 91, category: "Layout Grid" },
    { name: "CTA Visibility", target: 97, category: "Conversion Path" },
    { name: "Typography Scale", target: 93, category: "Readability" },
    { name: "Cognitive Load", target: 89, category: "Friction Index" }
  ];

  const suggestions = [
    { target: "Accessibility", text: "Contrast ratio for primary button increased from 2.8:1 to 6.2:1 (Passes AAA)." },
    { target: "Visual Hierarchy", text: "Staggered headline size to 3rem and description to 1rem to prioritize visual flow." },
    { target: "Spacing Consistency", text: "Unified layout padding to exactly 24px matching the underlying 8pt system." }
  ];

  // Trigger Audit sequence
  const startAudit = () => {
    if (isAuditing) return;
    setIsAuditing(true);
    setAuditStep(1);
    setOverallScore(0);
    setActiveItems([]);

    // Staggered reveal of metric analysis
    uxMetrics.forEach((metric, index) => {
      setTimeout(() => {
        setActiveItems(prev => [...prev, metric.name]);
      }, (index + 1) * 600);
    });

    // Finalize audit and count up overall score
    setTimeout(() => {
      setAuditStep(2);
      let currentScore = 0;
      const scoreInterval = setInterval(() => {
        if (currentScore >= 94) {
          clearInterval(scoreInterval);
          setIsAuditing(false);
        } else {
          currentScore += 1;
          setOverallScore(currentScore);
        }
      }, 25);
    }, uxMetrics.length * 600 + 400);
  };

  // Run automatically on mount after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      startAudit();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle slider drag/move
  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Only drag on click
      handleSliderMove(e.clientX);
    }
  };

  return (
    <section className="showcase-section" id="sandbox">
      <div className="section-header-editorial">
        <span className="section-kicker">Interactive Sandbox</span>
        <h2 className="section-title-large">
          Step Inside Cranial Space
        </h2>
        <p className="section-subtitle">
          Experience how every design evolves through AI, community and measurable growth.
          <br />
          <span className="gradient-text font-bold">Don't describe the product. Demonstrate it.</span>
        </p>
      </div>

      {/* COCKPIT 1: AI AUDITING RUNTIME */}
      <div className="showcase-container glass-panel">
        
        {/* Left Side: Mockup Canvas */}
        <div className="showcase-workspace">
          <div className="workspace-header">
            <div className="window-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="workspace-title-bar">
              <Layers size={12} />
              <span>Workspace Sandbox / frame_v2_final</span>
            </div>
            <div className="workspace-actions">
              <button 
                className={`btn-run-audit ${isAuditing ? 'loading' : ''}`}
                onClick={startAudit}
                disabled={isAuditing}
              >
                {isAuditing ? <RefreshCw size={12} className="spin" /> : <Play size={12} />}
                <span>{auditStep === 2 ? 'Re-Run Audit' : 'Run Audit'}</span>
              </button>
            </div>
          </div>

          <div className="workspace-canvas">
            {/* Scan Beam Indicator */}
            {auditStep === 1 && <div className="canvas-scan-beam" />}

            {/* Design Mockup Frame */}
            <div className="canvas-frame">
              <div className="canvas-frame-header">
                <span className="frame-tag font-bold">Figma Import</span>
                <span className="frame-filename">dashboard_layout_draft.fig</span>
              </div>

              {/* Rendered Mockup Components */}
              <div className="mockup-viewport">
                <div className="mockup-sidebar">
                  <div className="sidebar-logo" />
                  <div className="sidebar-nav-item active" />
                  <div className="sidebar-nav-item" />
                  <div className="sidebar-nav-item" />
                </div>
                <div className="mockup-body">
                  <div className="mockup-nav">
                    <div className="mockup-user-avatar" />
                  </div>
                  <div className="mockup-hero-block">
                    <div className="mockup-tag">Pro Dashboard</div>
                    <h3 className="mockup-heading">Elevate your design instincts.</h3>
                    <p className="mockup-desc">
                      Get immediate heuristics audits and community reviews in a clean workspace.
                    </p>
                    <div className="mockup-cta-wrapper">
                      <div className="mockup-btn-cta">
                        <span>Get Started</span>
                      </div>
                      <div className="mockup-btn-secondary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay audit callout markers (active when audit is complete) */}
              {auditStep === 2 && (
                <>
                  <div className="audit-marker marker-contrast" style={{ left: '55%', top: '78%' }}>
                    <div className="marker-dot" />
                    <div className="marker-label">CTA Contrast: 97%</div>
                  </div>
                  <div className="audit-marker marker-spacing" style={{ left: '38%', top: '48%' }}>
                    <div className="marker-dot" />
                    <div className="marker-label">Hierarchy Gap: 96%</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: AI Assistant Review Panel */}
        <div className="showcase-ai-panel">
          <div className="ai-panel-header">
            <div className="ai-panel-title">
              <Sparkles size={14} className="icon-pulse" />
              <span>Instinct AI Auditor</span>
            </div>
            <div className="ai-badge">V2.4 Active</div>
          </div>

          <div className="ai-panel-content">
            {/* Score Ring Display */}
            <div className="ai-score-section">
              <div className="score-ring-container">
                <svg viewBox="0 0 36 36" className="circular-chart-large">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle-fg" strokeDasharray={`${overallScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="score-number-display">
                  <span className="score-num">{overallScore}</span>
                  <span className="score-label">UX Index</span>
                </div>
              </div>
              <div className="score-status-message">
                {auditStep === 0 && <span className="text-muted">Ready to audit upload...</span>}
                {auditStep === 1 && <span className="text-primary icon-pulse">Analyzing frame nodes...</span>}
                {auditStep === 2 && <span className="text-success font-bold">Excellent Layout Quality</span>}
              </div>
            </div>

            {/* Metrics List */}
            <div className="ai-metrics-list">
              {uxMetrics.map((metric) => {
                const isActive = activeItems.includes(metric.name) || auditStep === 2;
                const isAnalyzing = auditStep === 1 && !activeItems.includes(metric.name);

                return (
                  <div key={metric.name} className={`metric-row ${isActive ? 'analyzed' : ''}`}>
                    <div className="metric-info">
                      <span className="metric-name">{metric.name}</span>
                      <span className="metric-category">{metric.category}</span>
                    </div>
                    <div className="metric-result">
                      {isAnalyzing && <div className="analyzing-dots"><span>.</span><span>.</span><span>.</span></div>}
                      {isActive && (
                        <div className="metric-badge-score">
                          <CheckCircle2 size={12} className="check-icon" />
                          <span>{metric.target}%</span>
                        </div>
                      )}
                      {!isActive && !isAnalyzing && <span className="text-muted">-</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Suggestions Box */}
            <div className="ai-suggestions-box">
              <span className="suggestions-title">Optimization Log</span>
              <div className="suggestions-list">
                {auditStep === 2 ? (
                  suggestions.map((suggestion, idx) => (
                    <div key={idx} className="suggestion-item">
                      <div className="suggestion-bullet" />
                      <p>{suggestion.text}</p>
                    </div>
                  ))
                ) : (
                  <div className="suggestion-placeholder">
                    Waiting for audit completions to construct suggestions log...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* COCKPIT 2: BEFORE / AFTER COMPARISON SLIDER */}
      <div className="comparison-header">
        <h3 className="comparison-title">Evolving Design Quality</h3>
        <p className="comparison-desc">
          Drag the center handle to see how your design instantly improves using Cranial Space advice.
        </p>
      </div>

      <div 
        ref={sliderRef}
        className="comparison-slider-container glass-panel"
        onMouseDown={(e) => handleSliderMove(e.clientX)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Persistent Side Labels */}
        <div 
          className="persistent-side-label left-side-label"
          style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
        >
          <span className="side-tag before-tag">BEFORE</span>
          <span className="side-title">Raw Design</span>
          <span className="side-subtitle">Without Cranial Space</span>
        </div>
        
        <div 
          className="persistent-side-label right-side-label"
          style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
        >
          <span className="side-tag after-tag">AFTER</span>
          <span className="side-title">Improved Design</span>
          <span className="side-subtitle">With Cranial Space</span>
        </div>

        {/* Left Side: Original Design */}
        <div className="slider-view original-view">
          <div className="slider-design-mockup original-mock">
            <div className="inner-mockup-content original-content">
              <span className="mockup-kicker kicker-before">draft-layout-01_v2</span>
              <h4 className="mockup-headline headline-before">Instinct dashboard tool for teams</h4>
              <p className="mockup-paragraph paragraph-before">
                Get immediate heuristics audits. We help product designers grow with better reviews.
              </p>
              <div className="mockup-btn-primary button-before">
                <span>Sign Up Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Improved Design (clipped based on slider position) */}
        <div 
          className="slider-view improved-view"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <div className="slider-design-mockup improved-mock">
            <div className="inner-mockup-content improved-content">
              <span className="mockup-kicker kicker-after">✓ Cranial Space Optimized</span>
              <h4 className="mockup-headline headline-after">Instinct dashboard built for elite design teams.</h4>
              <p className="mockup-paragraph paragraph-after">
                Deploy instant heuristics reviews, align layout grids, and track team-wide usability growth on one unified dashboard.
              </p>
              <div className="mockup-btn-primary button-after">
                <span>Get Started Free</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="handle-line" />
          <div className="handle-floating-badge">
            <span className="badge-arrow">←</span>
            <span>
              {sliderPosition > 75 
                ? "Drag left to reveal improvements" 
                : sliderPosition < 25 
                  ? "Cranial Space Optimized" 
                  : "Drag to compare"}
            </span>
            <span className="badge-arrow">→</span>
          </div>
          <div className="handle-button">
            <ChevronRight size={14} className="arrow-left" />
            <ChevronRight size={14} className="arrow-right" />
          </div>
          <div className="handle-line" />
        </div>

        {/* Floating Callout Anchors (Visible only on revealed AFTER side) */}
        <div 
          className={`comparison-badge badge-spacing ${sliderPosition < 24 ? 'revealed' : ''}`}
          style={{ left: '24%', top: '22%' }}
        >
          <div className="badge-pulse-dot" />
          <span className="badge-text">✓ Better Spacing</span>
        </div>

        <div 
          className={`comparison-badge badge-hierarchy ${sliderPosition < 44 ? 'revealed' : ''}`}
          style={{ left: '44%', top: '38%' }}
        >
          <div className="badge-pulse-dot" />
          <span className="badge-text">✓ Improved Visual Hierarchy</span>
        </div>

        <div 
          className={`comparison-badge badge-typography ${sliderPosition < 64 ? 'revealed' : ''}`}
          style={{ left: '64%', top: '74%' }}
        >
          <div className="badge-pulse-dot" />
          <span className="badge-text">✓ Better Typography</span>
        </div>

        <div 
          className={`comparison-badge badge-contrast ${sliderPosition < 82 ? 'revealed' : ''}`}
          style={{ left: '82%', top: '58%' }}
        >
          <div className="badge-pulse-dot" />
          <span className="badge-text">✓ Accessible CTA</span>
        </div>

      </div>
    </section>
  );
};

export default InteractiveShowcase;
