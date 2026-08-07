import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Sparkles, Users, GraduationCap, CheckCircle, Upload, 
  TrendingUp, Activity, FileText, Monitor, ChevronRight, Play, Check,
  AlertTriangle, Shield, Award, Layers, Target, Clock, MessageSquare, Zap, Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BorderGlow from '../components/BorderGlow';
import '../styles/ProductPage.css';

// Animated Counter Component for Section 9
const AnimatedCounter = ({ value, duration = 1200, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.IntersectionObserver) {
      setHasStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const stringValue = String(value || "");
    const end = parseInt(stringValue.replace(/[^0-9]/g, ""), 10) || 0;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ProductPage = () => {
  // Section 7: Interactive Demo State
  const [demoStep, setDemoStep] = useState(0); // 0: Select, 1: AI Scan, 2: Community comments, 3: Score Update, 4: Done/Slider
  const [sliderVal, setSliderVal] = useState(50);
  const [selectedDemoDesign, setSelectedDemoDesign] = useState('dashboard');
  const demoSliderRef = useRef(null);

  // Section 3: Workflow state
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Section 5: Dashboard preview simulated states
  const [loadingDashboard, setLoadingDashboard] = useState(false);
  const [dashboardScore, setDashboardScore] = useState(78);

  useEffect(() => {
    if (loadingDashboard) {
      const timer = setTimeout(() => {
        setLoadingDashboard(false);
        setDashboardScore(92);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loadingDashboard]);

  const resetDashboardSim = () => {
    setLoadingDashboard(true);
    setDashboardScore(78);
  };

  // Section 7: handle slider movement
  const handleDemoSliderMove = (clientX) => {
    if (!demoSliderRef.current) return;
    const rect = demoSliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderVal(percentage);
  };

  const runDemoStepFlow = () => {
    setDemoStep(1);
    setTimeout(() => {
      setDemoStep(2);
      setTimeout(() => {
        setDemoStep(3);
        setTimeout(() => {
          setDemoStep(4);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const workflowSteps = [
    { title: "1. Submit Design", desc: "Upload Figma links, PNGs or wireframes to your space.", detail: "Cranial Space immediately parses visual layout layers, font styling, and bounding grids to prepare the heuristics matrix." },
    { title: "2. Choose Review", desc: "Select automated AI review or post to peer boards.", detail: "Run WCAG accessibility audits, custom AI visual checks, or open annotations to verified community leaders." },
    { title: "3. Receive UX Score", desc: "Get an instant, actionable usability index score.", detail: "Your design receives a score from 1-100 based on standard heuristics: clarity, accessibility, and navigation consistency." },
    { title: "4. Analyze Report", desc: "Study annotated issue cards mapped on your layout.", detail: "Browse clean markers highlighting specific problems like low-contrast text, misaligned elements, or dead ends." },
    { title: "5. Iterate Design", desc: "Make design changes using step-by-step guidelines.", detail: "Review step-by-step design system solutions, visual tips, and code samples provided directly by AI and mentors." },
    { title: "6. Track Progress", desc: "Watch your score improve and build your portfolio.", detail: "Log milestones, track team-wide metrics, and export audited layouts to prove your growth and authority." }
  ];

  const feedbackTypes = [
    {
      title: "AI Review Engine",
      desc: "Instant micro-heuristics analysis of visual hierarchy, grids, accessibility, and WCAG contrast rules.",
      bullets: ["Sub-second scan time", "Grids & spacing mapping", "WCAG AA/AAA compliance checks"],
      color: "258 89 60",
      accent: "#7C3AED"
    },
    {
      title: "Community Sandbox",
      desc: "Peer critiques and layout annotations from vetted product designers and developers.",
      bullets: ["Annotated canvas comments", "Weekly designer vetting", "Collaborative design sandboxes"],
      color: "220 89 60",
      accent: "#EF4444"
    },
    {
      title: "Vetted Mentor Office",
      desc: "1-on-1 critiques and video review sign-offs from Design Directors and Staff Designers.",
      bullets: ["Interactive mock reviews", "Career tracking advice", "Figma system walkthroughs"],
      color: "200 89 60",
      accent: "#0EA5E9"
    }
  ];

  const designTypes = [
    { name: "Web Design", tag: "E-Commerce, Landing Pages", icon: <Monitor size={20} /> },
    { name: "Mobile Apps", tag: "iOS & Android Layouts", icon: <Zap size={20} /> },
    { name: "UX Flows", tag: "User journeys & maps", icon: <Layers size={20} /> },
    { name: "Case Studies", tag: "UX Research reports", icon: <FileText size={20} /> },
    { name: "Dashboards", tag: "SaaS analytics interfaces", icon: <Activity size={20} /> },
    { name: "Design Systems", tag: "Tokens, Grids & Components", icon: <Target size={20} /> },
    { name: "Wireframes", tag: "Low-fidelity layouts", icon: <Clock size={20} /> },
    { name: "Prototypes", tag: "Figma interaction maps", icon: <Sliders size={20} /> },
    { name: "Figma Files", tag: "Live design review sync", icon: <Sparkles size={20} /> }
  ];

  return (
    <div className="product-page-container">
      
      {/* SECTION 1: HERO */}
      <section className="product-hero-section">
        <div className="hero-content-col">
          <div className="hero-kicker-badge">
            <span className="kicker-pulse" />
            <span>Introducing Cranial Space OS</span>
          </div>
          <h1 className="hero-title">
            Everything you need to <span className="gradient-text">grow</span> as a product designer.
          </h1>
          <p className="hero-description">
            Cranial Space combines high-fidelity AI reviews, peer-to-peer sandbox critiques, and elite mentorship into one continuous design iteration workflow. Elevate your design metrics daily.
          </p>
          <div className="hero-cta-group">
            <button className="btn btn-primary btn-hero-explore">
              Explore the Platform
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary btn-hero-community">
              Join the Community
            </button>
          </div>
        </div>

        <div className="hero-preview-col">
          <div className="hero-interactive-dashboard glass-panel">
            <div className="dashboard-header-bar">
              <div className="dots-row">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="dash-title-bar">space_index_v2.fig</div>
              <div className="active-user-badge">
                <span className="live-pulse-dot" />
                <span>AI Auditor Active</span>
              </div>
            </div>
            
            <div className="dashboard-hero-layout">
              <div className="dashboard-sidebar-sim">
                <div className="sidebar-item active"><Activity size={14} /> Heuristics</div>
                <div className="sidebar-item"><Users size={14} /> Mentors</div>
                <div className="sidebar-item"><Layers size={14} /> History</div>
              </div>
              
              <div className="dashboard-main-sim">
                <div className="dashboard-row-widgets">
                  <div className="sim-widget glass-card">
                    <span className="widget-label">UX SCORE</span>
                    <div className="widget-score-container">
                      <span className="widget-score-num">89</span>
                      <span className="score-trend-up">↑ +14%</span>
                    </div>
                    <div className="score-bar-bg">
                      <div className="score-bar-fill" style={{ width: '89%' }} />
                    </div>
                  </div>
                  <div className="sim-widget glass-card">
                    <span className="widget-label">CONTRAST AA</span>
                    <span className="widget-status status-success">✓ Passed</span>
                    <span className="widget-subtext">5.4:1 ratio verified</span>
                  </div>
                </div>

                <div className="sim-canvas-preview">
                  <div className="canvas-card-sim">
                    <span className="canvas-kicker">audited preview</span>
                    <div className="canvas-headline-sim" />
                    <div className="canvas-paragraph-sim" />
                    <div className="canvas-button-sim" />
                  </div>
                  {/* Floating AI Highlight */}
                  <div className="floating-highlight-pulse" style={{ top: '25%', left: '70%' }}>
                    <div className="highlight-ping" />
                    <div className="highlight-tag">Grid Aligned ✓</div>
                  </div>
                  <div className="floating-highlight-pulse" style={{ top: '65%', left: '20%' }}>
                    <div className="highlight-ping warning" />
                    <div className="highlight-tag warning">Verify contrast (4.2:1)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM OVERVIEW */}
      <section className="platform-overview-section">
        <div className="section-header-centered">
          <span className="section-subtitle">PLATFORM INDEX</span>
          <h2 className="section-title">An operating system for designers.</h2>
          <p className="section-desc">
            No more fragmented review tools. Cranial Space unites every stage of the product review and training cycle under a single visual canvas.
          </p>
        </div>

        <div className="platform-overview-grid">
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box purple"><Sparkles size={22} /></div>
            <h3>AI Reviews</h3>
            <p>Get instant heuristics, layouts, accessibility, and visual copy reports mapped directly onto your mockup frame within seconds.</p>
          </div>
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box red"><Users size={22} /></div>
            <h3>Community Feedback</h3>
            <p>Collaborate on visual sandboxes with vetted UI experts. Receive structured annotations rather than vague text comments.</p>
          </div>
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box blue"><GraduationCap size={22} /></div>
            <h3>Mentorship</h3>
            <p>Unlock structured critique hours with Staff Designers. Get sign-offs, portfolio audits, and tailored growth advice.</p>
          </div>
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box green"><TrendingUp size={22} /></div>
            <h3>UX Score</h3>
            <p>Every design iterations updates your UX Index score. Measure your layouts against leading product standards dynamically.</p>
          </div>
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box sky"><Layers size={22} /></div>
            <h3>Portfolio Growth</h3>
            <p>Export beautifully structured case studies containing before/after comparison links, scores, and design logs.</p>
          </div>
          <div className="overview-card glass-panel hover-lift">
            <div className="overview-icon-box orange"><Target size={22} /></div>
            <h3>Career Progress</h3>
            <p>Complete challenges, raise your heuristics rating, and share a verified design transcript with potential employers.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY WORKFLOW */}
      <section className="key-workflow-section">
        <div className="section-header-centered">
          <span className="section-subtitle">THE CYCLE</span>
          <h2 className="section-title">How designs evolve inside Cranial Space</h2>
          <p className="section-desc">
            A standardized workflow built to replace messy screenshots, slack reviews, and unorganized design feedback.
          </p>
        </div>

        <div className="workflow-interactive-container">
          <div className="workflow-timeline-row">
            {workflowSteps.map((step, idx) => (
              <div 
                key={step.title}
                className={`workflow-timeline-node ${activeWorkflowStep === idx ? 'active' : ''}`}
                onClick={() => setActiveWorkflowStep(idx)}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
              >
                <div className="node-circle">
                  {idx + 1}
                </div>
                <div className="node-summary">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="workflow-detail-display glass-panel">
            <div className="workflow-detail-kicker">STEP {activeWorkflowStep + 1} OVERVIEW</div>
            <h3>{workflowSteps[activeWorkflowStep].title}</h3>
            <p className="workflow-detail-text">{workflowSteps[activeWorkflowStep].detail}</p>
            <div className="workflow-detail-bullets">
              <span className="workflow-bullet">✓ Real-time telemetry</span>
              <span className="workflow-bullet">✓ Collaborative sync</span>
              <span className="workflow-bullet">✓ Non-destructive history</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TYPES OF FEEDBACK */}
      <section className="feedback-types-section">
        <div className="section-header-centered">
          <span className="section-subtitle">THREE FEEDBACK VEHICLES</span>
          <h2 className="section-title">Critique channels engineered for depth.</h2>
          <p className="section-desc">
            Choose the speed and detail level your design needs, from instant automated scans to deep-dive human mentorship.
          </p>
        </div>

        <div className="feedback-cards-row">
          {feedbackTypes.map((fb, idx) => (
            <BorderGlow
              key={fb.title}
              className="feedback-glow-card glass-panel"
              edgeSensitivity={30}
              glowColor={fb.color}
              backgroundColor="rgba(255, 255, 255, 0.75)"
              borderRadius={24}
              glowRadius={60}
              glowIntensity={1.0}
              colors={['#7C3AED', '#3B82F6']}
            >
              <div className="feedback-card-inner">
                <div className="feedback-illustration-sim">
                  {idx === 0 && (
                    <div className="ai-sim-graphics">
                      <div className="scanner-line" />
                      <div className="grid-points">
                        <span className="point" />
                        <span className="point" />
                        <span className="point" />
                        <span className="point" />
                      </div>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="community-sim-graphics">
                      <div className="avatar-stack-sim">
                        <span className="avatar-circle">M</span>
                        <span className="avatar-circle">S</span>
                        <span className="avatar-circle">D</span>
                      </div>
                      <div className="annotation-badge-sim">✓ Space Refined</div>
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="mentor-sim-graphics">
                      <div className="mentor-video-sim">
                        <Play size={16} />
                        <span>Critique.mp4</span>
                      </div>
                    </div>
                  )}
                </div>
                <h3>{fb.title}</h3>
                <p className="feedback-explanation">{fb.desc}</p>
                <ul className="feedback-features">
                  {fb.bullets.map((b) => (
                    <li key={b}>
                      <span className="check-dot" style={{ background: fb.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* SECTION 5: DASHBOARD PREVIEW */}
      <section className="dashboard-showcase-section">
        <div className="section-header-centered">
          <span className="section-subtitle">THE APP EXPERIENE</span>
          <h2 className="section-title">A look inside the product.</h2>
          <p className="section-desc">
            Explore authentic platform interfaces constructed directly with clean UI components. Feel the speed and depth of Cranial Space.
          </p>
        </div>

        <div className="dashboard-showcase-widget glass-panel">
          <div className="dash-showcase-sidebar">
            <div className="sidebar-logo">C</div>
            <nav className="sidebar-nav-sim">
              <div className="nav-item-sim active"><Activity size={16} /> UX Score Dashboard</div>
              <div className="nav-item-sim"><TrendingUp size={16} /> Portfolio Analytics</div>
              <div className="nav-item-sim"><Clock size={16} /> Review History</div>
              <div className="nav-item-sim"><Users size={16} /> Mentors & Activity</div>
              <div className="nav-item-sim"><Target size={16} /> Growth Challenges</div>
            </nav>
            <button className="reset-sim-btn" onClick={resetDashboardSim}>
              Reset Simulated State
            </button>
          </div>

          <div className="dash-showcase-viewport">
            <div className="viewport-header">
              <h3>Heuristics Index & Portfolio Dashboard</h3>
              <div className="user-profile-widget">
                <span className="user-level">Tier 2 Designer</span>
                <span className="user-avatar-sim">JD</span>
              </div>
            </div>

            {loadingDashboard ? (
              <div className="viewport-loading-state">
                <div className="spinner-loader" />
                <p>Simulating audit updates...</p>
              </div>
            ) : (
              <div className="viewport-grid">
                {/* UX Score Widget */}
                <div className="grid-item-wide glass-card">
                  <div className="card-header-sim">
                    <h4>Usability Index (UX Score)</h4>
                    <span className="metric-badge green">Optimized</span>
                  </div>
                  <div className="score-meter-flex">
                    <div className="score-radial">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="none" 
                          stroke="#7C3AED" 
                          strokeWidth="8" 
                          strokeDasharray={`${251.2 * (dashboardScore / 100)} 251.2`}
                          transform="rotate(-90 50 50)"
                          strokeLinecap="round"
                        />
                        <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0f172a">
                          {dashboardScore}
                        </text>
                      </svg>
                    </div>
                    <div className="score-breakdown">
                      <div className="breakdown-stat">
                        <span>Typographic Scale</span>
                        <strong>94 / 100</strong>
                      </div>
                      <div className="breakdown-stat">
                        <span>Grid Alignment</span>
                        <strong>90 / 100</strong>
                      </div>
                      <div className="breakdown-stat">
                        <span>WCAG AAA Contrast</span>
                        <strong>91 / 100</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Analytics Widget */}
                <div className="grid-item-half glass-card">
                  <h4>Portfolio Analytics</h4>
                  <div className="mini-chart-placeholder">
                    <svg viewBox="0 0 200 80" className="chart-line-svg">
                      <path d="M0,70 Q40,65 80,45 T160,25 T200,10" fill="none" stroke="#7C3AED" strokeWidth="3" />
                      <path d="M0,70 Q40,65 80,45 T160,25 T200,10 L200,80 L0,80 Z" fill="rgba(124, 58, 237, 0.05)" />
                    </svg>
                    <div className="chart-labels">
                      <span>March</span>
                      <span>May</span>
                      <span>July (Current)</span>
                    </div>
                  </div>
                </div>

                {/* Recent Reviews & Mentor Activity */}
                <div className="grid-item-half glass-card">
                  <h4>Recent Reviews & Mentor Activity</h4>
                  <div className="mentor-feed-sim">
                    <div className="feed-item">
                      <span className="feed-avatar pt">PT</span>
                      <div className="feed-text">
                        <strong>Patricia T. (Mentor, Stripe)</strong>
                        <p>Approved iteration on landing page visual spacing. High accessibility scores.</p>
                      </div>
                    </div>
                    <div className="feed-item">
                      <span className="feed-avatar ai">AI</span>
                      <div className="feed-text">
                        <strong>Heuristic Bot v2.4</strong>
                        <p>Found 2 weak typographic contrast pairs in footer components.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge Progress */}
                <div className="grid-item-wide glass-card">
                  <div className="card-header-sim">
                    <h4>Active Design Challenges</h4>
                    <span>2 challenges in progress</span>
                  </div>
                  <div className="challenges-list">
                    <div className="challenge-bar-item">
                      <div className="bar-label">
                        <span>E-commerce Checkout Redesign</span>
                        <span>80% Done</span>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-fill" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div className="challenge-bar-item">
                      <div className="bar-label">
                        <span>Accessible Color Schemes</span>
                        <span>40% Done</span>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-fill" style={{ width: '40%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: SUPPORTED DESIGN TYPES */}
      <section className="supported-formats-section">
        <div className="section-header-centered">
          <span className="section-subtitle">FORMAT SUPPORT</span>
          <h2 className="section-title">Design without limitations.</h2>
          <p className="section-desc">
            No matter the platform, interface size, or complexity, our heuristics system adapts to audit layouts correctly.
          </p>
        </div>

        <div className="formats-visual-grid">
          {designTypes.map((item) => (
            <div key={item.name} className="format-tile glass-panel hover-lift">
              <div className="format-icon-wrap">{item.icon}</div>
              <div className="format-info">
                <h4>{item.name}</h4>
                <p>{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE DEMO */}
      <section className="interactive-demo-section">
        <div className="section-header-centered">
          <span className="section-subtitle">TRY IT LIVE</span>
          <h2 className="section-title">Test a review sandbox instantly.</h2>
          <p className="section-desc">
            Experience our AI heuristics, community annotation layering, and scoring tools on a sample mock interface.
          </p>
        </div>

        <div className="demo-showcase-board glass-panel">
          <div className="demo-board-left-panel">
            <h4>Select Sample Design</h4>
            <div className="demo-selector-list">
              <button 
                className={`selector-btn ${selectedDemoDesign === 'dashboard' ? 'active' : ''}`}
                onClick={() => { setSelectedDemoDesign('dashboard'); setDemoStep(0); }}
                disabled={demoStep > 0 && demoStep < 4}
              >
                E-Commerce Cart Page
              </button>
              <button 
                className={`selector-btn ${selectedDemoDesign === 'dashboard_v2' ? 'active' : ''}`}
                onClick={() => { setSelectedDemoDesign('dashboard_v2'); setDemoStep(0); }}
                disabled={demoStep > 0 && demoStep < 4}
              >
                SaaS Dashboard
              </button>
            </div>

            <div className="demo-telemetry-console">
              <h4>Review Telemetry Log</h4>
              <div className="telemetry-messages">
                {demoStep === 0 && <p className="console-prompt">Click "Start Interactive Review" to run the diagnostics flow.</p>}
                {demoStep >= 1 && <p className="console-msg success">✓ File initialized: index_frame.png</p>}
                {demoStep >= 1 && <p className="console-msg info">→ Running AI visual parser...</p>}
                {demoStep >= 2 && <p className="console-msg success">✓ Found 2 layout errors, 1 typography alignment warning.</p>}
                {demoStep >= 2 && <p className="console-msg info">→ Importing community sandboxes...</p>}
                {demoStep >= 3 && <p className="console-msg success">✓ 2 community annotations matched. Re-scoring layout...</p>}
                {demoStep >= 4 && <p className="console-msg success highlight">✓ Usability score optimized from 45 to 92. Sandbox complete!</p>}
              </div>
            </div>

            {demoStep === 0 ? (
              <button className="btn btn-primary start-demo-btn" onClick={runDemoStepFlow}>
                Start Interactive Review
                <Play size={14} />
              </button>
            ) : demoStep === 4 ? (
              <button className="btn btn-secondary start-demo-btn" onClick={() => setDemoStep(0)}>
                Restart Demo
              </button>
            ) : (
              <div className="demo-progress-indicator">
                <div className="progress-spinner" />
                <span>Running Step {demoStep}...</span>
              </div>
            )}
          </div>

          <div className="demo-board-right-canvas" ref={demoSliderRef}>
            {demoStep === 0 && (
              <div className="demo-canvas-initial">
                <div className="upload-placeholder-content">
                  <Upload size={48} className="upload-icon" />
                  <h4>Instinct Layout File V1</h4>
                  <p>Click the button on the left to start the automated heuristics scan.</p>
                </div>
              </div>
            )}

            {demoStep === 1 && (
              <div className="demo-canvas-scanning">
                <div className="scanning-overlay-line" />
                <div className="simulated-wireframe-bg">
                  <div className="scan-highlight-box" style={{ top: '20%', left: '15%', width: '70%', height: '8%' }} />
                  <div className="scan-highlight-box" style={{ top: '35%', left: '15%', width: '70%', height: '35%' }} />
                </div>
              </div>
            )}

            {demoStep === 2 && (
              <div className="demo-canvas-community">
                <div className="simulated-wireframe-bg">
                  {/* Community Annotation Pins */}
                  <div className="avatar-comment-pin" style={{ top: '25%', left: '20%' }}>
                    <span className="comment-avatar">MK</span>
                    <div className="comment-bubble">Align this layout block to the main grid.</div>
                  </div>
                  <div className="avatar-comment-pin" style={{ top: '65%', left: '60%' }}>
                    <span className="comment-avatar">JD</span>
                    <div className="comment-bubble">This CTA button contrast does not meet WCAG AA.</div>
                  </div>
                </div>
              </div>
            )}

            {demoStep === 3 && (
              <div className="demo-canvas-scoring">
                <div className="score-meter-fullscreen">
                  <span className="score-large-number">92</span>
                  <span className="score-large-label">UX SCORE RATING</span>
                </div>
              </div>
            )}

            {demoStep === 4 && (
              <div className="demo-canvas-finished">
                {/* Drag Slider Comparison */}
                <div className="demo-slider-wrapper">
                  {/* Left Side: Before */}
                  <div className="demo-slider-view before-side">
                    <div className="demo-card-mock rough-layout">
                      <span className="mock-tag-red">draft_layout_v1</span>
                      <h4 className="mock-title-small">E-commerce cart draft</h4>
                      <p className="mock-desc-small">Click sign up to buy products quickly.</p>
                      <button className="mock-btn-rough">Buy</button>
                    </div>
                  </div>

                  {/* Right Side: After (clipped) */}
                  <div 
                    className="demo-slider-view after-side"
                    style={{ clipPath: `polygon(${sliderVal}% 0, 100% 0, 100% 100%, ${sliderVal}% 100%)` }}
                  >
                    <div className="demo-card-mock polished-layout">
                      <span className="mock-tag-purple">✓ Cranial Space Audited</span>
                      <h4 className="mock-title-large">Seamless checkout flow, refined for conversion.</h4>
                      <p className="mock-desc-large">Secure your subscription immediately using our audited 1-click checkout layout.</p>
                      <button className="mock-btn-polished">Secure Checkout <ArrowRight size={14} /></button>
                    </div>
                  </div>

                  {/* Draggable slider line */}
                  <div 
                    className="demo-slider-handle-line"
                    style={{ left: `${sliderVal}%` }}
                    onMouseDown={(e) => {
                      const moveHandler = (moveEvent) => handleDemoSliderMove(moveEvent.clientX);
                      const upHandler = () => {
                        window.removeEventListener('mousemove', moveHandler);
                        window.removeEventListener('mouseup', upHandler);
                      };
                      window.addEventListener('mousemove', moveHandler);
                      window.addEventListener('mouseup', upHandler);
                    }}
                    onTouchStart={(e) => {
                      const moveHandler = (moveEvent) => {
                        if (moveEvent.touches && moveEvent.touches[0]) {
                          handleDemoSliderMove(moveEvent.touches[0].clientX);
                        }
                      };
                      const upHandler = () => {
                        window.removeEventListener('touchmove', moveHandler);
                        window.removeEventListener('touchend', upHandler);
                      };
                      window.addEventListener('touchmove', moveHandler, { passive: true });
                      window.addEventListener('touchend', upHandler);
                    }}
                  >
                    <div className="demo-handle-control">
                      <ChevronRight size={12} style={{ transform: 'rotate(180deg)' }} />
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRODUCT BENEFITS */}
      <section className="product-benefits-section">
        <div className="benefit-row">
          <div className="benefit-text-col">
            <span className="benefit-number">01</span>
            <h2>Why AI reviews are faster.</h2>
            <p>Our micro-heuristics engine parses visual designs within milliseconds, scanning contrast compliance, grid spacing accuracy, typographic scale, and structural consistency before your team commits layouts to development.</p>
          </div>
          <div className="benefit-visual-col">
            <div className="benefit-visual-card glass-panel">
              <div className="ai-telemetry-badge">
                <Zap size={14} />
                <span>Diagnostics: 0.12 seconds</span>
              </div>
              <div className="bar-graph-comparison">
                <div className="bar-item">
                  <span>Traditional Human Audit</span>
                  <div className="bar-track"><div className="bar-fill red" style={{ width: '100%' }}>48 Hours</div></div>
                </div>
                <div className="bar-item">
                  <span>Cranial Space Heuristics</span>
                  <div className="bar-track"><div className="bar-fill purple" style={{ width: '12%' }}>0.1 Sec</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit-row reverse">
          <div className="benefit-text-col">
            <span className="benefit-number">02</span>
            <h2>Why community feedback is better.</h2>
            <p>Unlike raw Slack comments or vague Figma post-its, our platform sandboxes support layout overlay reviews. Spot exact positioning mismatches on the board, complete with verified layout overlays.</p>
          </div>
          <div className="benefit-visual-col">
            <div className="benefit-visual-card glass-panel">
              <div className="community-annotations-list">
                <div className="annotation-pill">✓ Fixed 8px spacing bleed</div>
                <div className="annotation-pill">✓ Combined CTA buttons into single layout group</div>
                <div className="annotation-pill">✓ Resolved contrast ratio mismatch (3.4:1 to 6.1:1)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit-row">
          <div className="benefit-text-col">
            <span className="benefit-number">03</span>
            <h2>Why mentorship accelerates growth.</h2>
            <p>Direct critiques from vetted lead designers give you clear path direction. You learn to defend designs, identify core usability errors, and scale your personal design system skills faster than any bootcamp.</p>
          </div>
          <div className="benefit-visual-col">
            <div className="benefit-visual-card glass-panel">
              <div className="mentor-signoff-widget">
                <div className="mentor-avatar-col">PT</div>
                <div className="mentor-info-col">
                  <strong>Peter T. (Design Lead, Vercel)</strong>
                  <p>“Verified layout system compliance. Spacing, type hierarchies, and color accessibility index passed elite standards.”</p>
                  <span className="signoff-stamp">✓ APPROVED CRITIQUE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit-row reverse">
          <div className="benefit-text-col">
            <span className="benefit-number">04</span>
            <h2>Why tracking UX Score matters.</h2>
            <p>Quantify your growth. Keep a continuous usability track index that updates over time. Expose clear charts to project stake-holders or prospective employers to prove your design value quantitatively.</p>
          </div>
          <div className="benefit-visual-col">
            <div className="benefit-visual-card glass-panel">
              <div className="ux-score-progress-sim">
                <div className="score-row">
                  <span>Current Layout Rating</span>
                  <strong>92 / 100</strong>
                </div>
                <div className="score-row-sub">
                  <span>Previous Rating</span>
                  <strong>68 / 100</strong>
                </div>
                <div className="score-delta-badge">
                  <span>Usability Index increased by 24 points!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SUCCESS METRICS */}
      <section className="success-metrics-section">
        <div className="metrics-grid">
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="142,820" suffix="+" />
            </h3>
            <p className="metric-label">Reviews Completed</p>
          </div>
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="24,500" suffix="+" />
            </h3>
            <p className="metric-label">Designers Improved</p>
          </div>
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="38" suffix="%" />
            </h3>
            <p className="metric-label">Average UX Score Increase</p>
          </div>
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="1200000" suffix="+" />
            </h3>
            <p className="metric-label">Feedback Generated</p>
          </div>
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="18400" suffix="+" />
            </h3>
            <p className="metric-label">Mentor Sessions</p>
          </div>
          <div className="metric-item glass-panel">
            <h3 className="metric-number">
              <AnimatedCounter value="8900" suffix="+" />
            </h3>
            <p className="metric-label">Design Challenges Completed</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="product-final-cta-section">
        <div className="cta-gradient-overlay" />
        <div className="cta-inner-content">
          <h2 className="cta-headline">Ready to build your design authority?</h2>
          <p className="cta-subheadline">
            Join thousands of product designers who use Cranial Space to audit, iterate, and prove layout usability metrics every single day.
          </p>
          <div className="cta-buttons-row">
            <button className="btn btn-primary btn-cta-start">
              Start Your Journey
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary btn-cta-pricing">
              View Pricing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductPage;
