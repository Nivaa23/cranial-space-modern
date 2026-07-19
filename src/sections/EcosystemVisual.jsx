import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Zap, Target, TrendingUp, Trophy, ArrowRight, UserCheck, Play } from 'lucide-react';
import '../styles/EcosystemVisual.css';

const EcosystemVisual = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Micro-animation states
  const [uxScore, setUxScore] = useState(78);
  const [aiStatus, setAiStatus] = useState("Checking contrast...");
  const [aiProgress, setAiProgress] = useState(45);
  const [challengeProgress, setChallengeProgress] = useState(40);
  const [mentorStep, setMentorStep] = useState(0);

  useEffect(() => {
    // 1. Animate UX Instinct Score (looping count-up)
    const scoreTimer = setInterval(() => {
      setUxScore(prev => {
        if (prev >= 96) return 78;
        return prev + 1;
      });
    }, 200);

    // 2. Animate AI Audit steps
    const aiStatuses = [
      { text: "Scanning contrast...", progress: 30 },
      { text: "Auditing tap targets...", progress: 75 },
      { text: "Contrast Pass (AAA)", progress: 100 }
    ];
    let statusIdx = 0;
    const aiTimer = setInterval(() => {
      statusIdx = (statusIdx + 1) % aiStatuses.length;
      setAiStatus(aiStatuses[statusIdx].text);
      setAiProgress(aiStatuses[statusIdx].progress);
    }, 2800);

    // 3. Animate Challenge progress bar
    const challengeTimer = setInterval(() => {
      setChallengeProgress(prev => {
        if (prev >= 100) return 20;
        return prev + 10;
      });
    }, 800);

    // 4. Animate Mentor booking avatars
    const mentorInterval = setInterval(() => {
      setMentorStep(prev => (prev + 1) % 3);
    }, 3500);

    return () => {
      clearInterval(scoreTimer);
      clearInterval(aiTimer);
      clearInterval(challengeTimer);
      clearInterval(mentorInterval);
    };
  }, []);

  // Parallax handlers
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="section-header-editorial">
        <span className="section-kicker">Unified Platform</span>
        <h2 className="section-title-large">
          A living ecosystem for <br />
          <span className="gradient-text">design mastery.</span>
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="ecosystem-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ambient atmosphere backgrounds */}
        <div className="eco-ambient-spotlight spotlight-1" />
        <div className="eco-ambient-spotlight spotlight-2" />
        <div className="eco-ambient-spotlight spotlight-3" />
        <div className="eco-grid-overlay" />

        {/* FLOATING GLASS MODULES LAYER */}
        <div className="eco-showcase-layer">

          {/* 1. CENTRAL WORKSPACE ANCHOR (Large Card) */}
          <div 
            className={`eco-card eco-card-center ${hoveredCard === 'workspace' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(calc(-50% + ${mousePos.x * 24}px), calc(-50% + ${mousePos.y * 24}px), 40px)`,
              zIndex: hoveredCard === 'workspace' ? 50 : 20
            }}
            onMouseEnter={() => setHoveredCard('workspace')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-shine" />
            <div className="card-content">
              <div className="card-header">
                <div className="status-indicator active" />
                <span className="card-kicker">Workspace Sandbox</span>
              </div>
              <h3 className="card-title">Instinct Sandbox View</h3>
              
              <div className="workspace-mini-ui">
                <div className="workspace-figma-badge">
                  <div className="figma-icon-placeholder" />
                  <span>Figma Frame Active</span>
                </div>
                <div className="workspace-laser-scan-container">
                  <div className="workspace-laser-beam" />
                  <div className="workspace-btn-mockup">
                    <span className="btn-label">Primary CTA</span>
                    <span className="btn-score">96</span>
                  </div>
                </div>
              </div>
              
              <p className="card-description-hover">
                Playground workspace checking layout, structure, and spacing ratios as you import mockups.
              </p>
            </div>
          </div>

          {/* 2. AI REVIEW (Medium Card - Top Left) */}
          <div 
            className={`eco-card eco-card-ai ${hoveredCard === 'ai' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 60px)`,
              zIndex: hoveredCard === 'ai' ? 50 : 15
            }}
            onMouseEnter={() => setHoveredCard('ai')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-content">
              <div className="card-header">
                <Sparkles size={14} className="icon-ai" />
                <span className="card-kicker">Auto-Audit</span>
              </div>
              <h4 className="card-title-sub">AI Design Copilot</h4>
              
              <div className="ai-audit-mini-ui">
                <div className="audit-progress-row">
                  <span className="audit-status-text">{aiStatus}</span>
                  <span className="audit-percent">{aiProgress}%</span>
                </div>
                <div className="audit-progress-bar-bg">
                  <div className="audit-progress-bar-fill" style={{ width: `${aiProgress}%` }} />
                </div>
              </div>
              
              <p className="card-description-hover">
                Instant diagnostic audits matching WCAG tap safety guidelines and visual hierarchy models.
              </p>
            </div>
          </div>

          {/* 3. UX SCORE DIAL (Small Card - Top Right) */}
          <div 
            className={`eco-card eco-card-score ${hoveredCard === 'score' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(${mousePos.x * 45}px, ${mousePos.y * 45}px, 80px)`,
              zIndex: hoveredCard === 'score' ? 50 : 18
            }}
            onMouseEnter={() => setHoveredCard('score')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-content">
              <div className="card-header">
                <TrendingUp size={14} className="icon-score" />
                <span className="card-kicker">Instinct Index</span>
              </div>
              
              <div className="score-dial-mini-ui">
                <div className="score-dial-visual">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray={`${uxScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="score-val">{uxScore}</div>
                </div>
                <div className="score-meta">
                  <span className="score-label">UX Rating</span>
                  <span className="score-trend">+18% Upgrade</span>
                </div>
              </div>
              
              <p className="card-description-hover">
                Adaptive skill scorecard evaluating design speed, visual balance, and heuristic choices.
              </p>
            </div>
          </div>

          {/* 4. COMMUNITY CRITIQUE (Medium Card - Bottom Left) */}
          <div 
            className={`eco-card eco-card-critique ${hoveredCard === 'critique' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 20px)`,
              zIndex: hoveredCard === 'critique' ? 50 : 12
            }}
            onMouseEnter={() => setHoveredCard('critique')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-content">
              <div className="card-header">
                <MessageSquare size={14} className="icon-critique" />
                <span className="card-kicker">Peer Review</span>
              </div>
              <h4 className="card-title-sub">Vetted Critiques</h4>
              
              <div className="critique-mini-ui">
                <div className="critique-bubble bubble-1">
                  <span className="bubble-author">Marcus (Senior UX)</span>
                  <span className="bubble-text">Spacing is slightly off here.</span>
                </div>
                <div className="critique-bubble bubble-2">
                  <span className="bubble-author">Elena (Principal)</span>
                  <span className="bubble-text">Fixed it! Tap margins now 48px.</span>
                </div>
              </div>
              
              <p className="card-description-hover">
                Skip standard comments. Leverage direct sandbox reviews and annotation overlays.
              </p>
            </div>
          </div>

          {/* 5. MENTOR BOOKING (Medium Card - Bottom Right) */}
          <div 
            className={`eco-card eco-card-mentor ${hoveredCard === 'mentor' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(${mousePos.x * 32}px, ${mousePos.y * 32}px, 50px)`,
              zIndex: hoveredCard === 'mentor' ? 50 : 16
            }}
            onMouseEnter={() => setHoveredCard('mentor')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-content">
              <div className="card-header">
                <UserCheck size={14} className="icon-mentor" />
                <span className="card-kicker">Mentorship</span>
              </div>
              <h4 className="card-title-sub">1:1 Office Hours</h4>
              
              <div className="mentor-mini-ui">
                {mentorStep === 0 && (
                  <div className="mentor-slot connecting">
                    <div className="pulse-dot" />
                    <span>Connecting mentor slot...</span>
                  </div>
                )}
                {mentorStep === 1 && (
                  <div className="mentor-slot slot-active">
                    <div className="avatar-mock avatar-1" />
                    <span>Sarah Chen (Lead @ Linear)</span>
                  </div>
                )}
                {mentorStep === 2 && (
                  <div className="mentor-slot slot-active">
                    <div className="avatar-mock avatar-2" />
                    <span>Dillon K. (Staff @ Stripe)</span>
                  </div>
                )}
              </div>
              
              <p className="card-description-hover">
                Direct booking link to senior designers, principal builders, and design lead critiques.
              </p>
            </div>
          </div>

          {/* 6. WEEKLY CHALLENGE (Small Card - Center Bottom) */}
          <div 
            className={`eco-card eco-card-challenge ${hoveredCard === 'challenge' ? 'lifted' : ''}`}
            style={{
              transform: `translate3d(calc(-50% + ${mousePos.x * 28}px), ${mousePos.y * 28}px, 30px)`,
              zIndex: hoveredCard === 'challenge' ? 50 : 14
            }}
            onMouseEnter={() => setHoveredCard('challenge')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glass-surface" />
            <div className="card-content">
              <div className="card-header">
                <Trophy size={14} className="icon-challenge" />
                <span className="card-kicker">Design Sprint</span>
              </div>
              <h4 className="card-title-sub">Weekly Sprint Challenge</h4>
              
              <div className="challenge-mini-ui">
                <div className="progress-row">
                  <span>Task: Fitts' Law</span>
                  <span>{challengeProgress}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${challengeProgress}%` }} />
                </div>
              </div>
              
              <p className="card-description-hover">
                Win challenge badges by refining layouts under active constraints and timing metrics.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcosystemVisual;
