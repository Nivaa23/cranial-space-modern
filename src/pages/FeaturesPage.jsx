import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Activity, Users, GraduationCap, TrendingUp, 
  Layers, CheckCircle2, Award, Zap, FileText, Check, Sliders, Smartphone, 
  Briefcase, Eye, Flame, BarChart3, Globe, MousePointer, Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/FeaturesPage.css';

const FeaturesPage = () => {
  // Hero Studio Canvas State
  const [heroTool, setHeroTool] = useState('inspect'); // 'inspect', 'heatmap', 'grid'
  
  // Bento Feature 1: Sub-metric selection
  const [selectedSubmetric, setSelectedSubmetric] = useState('contrast');

  // Interactive Pipeline Workflow Step
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Modular Studio Dashboard Tab
  const [activeDashTab, setActiveDashTab] = useState('overview');

  const workflowSteps = [
    {
      title: "1. Upload Design",
      desc: "Import Figma frames, high-res PNGs or vector wireframes.",
      detail: "Cranial Space immediately parses visual bounding boxes, typography hierarchies, layout grids, and color palettes to prepare the design for audit.",
      mockTitle: "File Ingestion & Parsing",
      mockStatus: "Parsed 14 Frame Layers in 0.08s"
    },
    {
      title: "2. Choose Feedback Type",
      desc: "Select automated AI heuristic scan, peer sandbox, or mentor review.",
      detail: "Customize critique depth based on your project phase—whether you need rapid pre-handoff accessibility checks or deep structural critiques.",
      mockTitle: "Review Protocol Configuration",
      mockStatus: "Selected: Automated AI + Lead Designer Sandbox"
    },
    {
      title: "3. AI Analysis",
      desc: "Sub-second heuristics engine scans contrast, spacing, and grids.",
      detail: "Our neural computer vision engine performs WCAG 2.1 AA/AAA compliance checks, verifies 8pt grid alignment, and identifies typographic scale inconsistencies.",
      mockTitle: "Neural Computer Vision Active",
      mockStatus: "Detected 2 Spacing Bleeds & 1 Contrast Violation"
    },
    {
      title: "4. Community Review",
      desc: "Verified product designers leave pinpoint annotations on the canvas.",
      detail: "Avoid vague comments. Community members place visual pins directly on layout elements, suggesting concrete fixes and design system enhancements.",
      mockTitle: "Pinpoint Canvas Overlay",
      mockStatus: "3 Annotated Review Pins Placed"
    },
    {
      title: "5. UX Score Generated",
      desc: "Algorithmic 100-point usability rating dynamically computed.",
      detail: "Get an un-biased quantitative usability score calculated across 4 foundational pillars: Clarity, Accessibility, Grid Discipline, and Information Flow.",
      mockTitle: "Usability Index Calculation",
      mockStatus: "UX Score: 91 / 100 (+18 pts)"
    },
    {
      title: "6. Actionable Report",
      desc: "Receive step-by-step design system solutions and code snippets.",
      detail: "Every detected issue comes with actionable remedies: exact hex color substitutes, grid token fixes, and layout refactoring instructions.",
      mockTitle: "Remediation Playbook",
      mockStatus: "Generated 3 Step-by-Step Fix Recommendations"
    },
    {
      title: "7. Improve & Resubmit",
      desc: "Apply changes, rescan in real-time, and log your skill growth.",
      detail: "Watch your score increase on each iteration. Export before/after comparisons directly into your portfolio case study with verified audit stamps.",
      mockTitle: "Milestone Verified & Certified",
      mockStatus: "Case Study Export Ready (Score 94)"
    }
  ];

  const upcomingFeatures = [
    {
      title: "Team Workspaces",
      tag: "Q4 Roadmap",
      icon: <Users size={22} />,
      desc: "Shared design audit repositories for design agencies and product teams with centralized design system token verification."
    },
    {
      title: "AI Portfolio Coach",
      tag: "Private Beta",
      icon: <Sparkles size={22} />,
      desc: "Conversational AI agent trained on thousands of accepted Staff Designer case studies to guide your storytelling and design defense."
    },
    {
      title: "Recruiter Mode",
      tag: "In Development",
      icon: <Briefcase size={22} />,
      desc: "Verified design transcripts that allow prospective hiring managers to view your audited UX improvement velocity and scores."
    },
    {
      title: "Live Critique Rooms",
      tag: "Coming Soon",
      icon: <Globe size={22} />,
      desc: "Synchronous multi-user canvas critiques with live audio commentary, laser pointers, and real-time community voting."
    },
    {
      title: "Mobile Companion App",
      tag: "In Development",
      icon: <Smartphone size={22} />,
      desc: "Review layout critiques on the go, approve community annotations, and receive push notifications when mentors sign off."
    },
    {
      title: "Design Benchmark Reports",
      tag: "Q4 Roadmap",
      icon: <BarChart3 size={22} />,
      desc: "Compare your product interfaces against anonymized benchmarks from leading tech companies like Stripe, Linear, and Airbnb."
    }
  ];

  return (
    <div className="features-page-container">
      
      {/* =========================================================
          1. HERO SECTION: INTERACTIVE FIGMA-STYLE STUDIO WORKSPACE
          ========================================================= */}
      <section className="feat-studio-hero">
        <div className="feat-hero-intro">
          <div className="feat-hero-badge">
            <span className="badge-pulse" />
            <span>Interactive Design System Suite</span>
          </div>
          <h1 className="feat-hero-title">
            Everything you need to become a <span className="gradient-text">better product designer</span>.
          </h1>
          <p className="feat-hero-desc">
            Cranial Space combines AI heuristics, peer community reviews, elite mentorship, longitudinal analytics, and automated portfolio growth into one unified ecosystem.
          </p>
          <div className="feat-hero-cta">
            <Link to="/product" className="btn btn-primary">
              Launch Product Demo
              <ArrowRight size={16} />
            </Link>
            <a href="#bento-suite" className="btn btn-secondary">
              Explore Capability Grid
            </a>
          </div>
        </div>

        {/* Live Interactive Studio Canvas */}
        <div className="studio-canvas-workspace">
          <div className="canvas-toolbar-top">
            <div className="canvas-file-info">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span>checkout_experience_v4.fig</span>
              <span className="canvas-zoom-badge">100% SCALE</span>
            </div>

            <div className="tool-selector-group">
              <button 
                className={`tool-btn ${heroTool === 'inspect' ? 'active' : ''}`}
                onClick={() => setHeroTool('inspect')}
              >
                <MousePointer size={13} /> AI Inspect
              </button>
              <button 
                className={`tool-btn ${heroTool === 'heatmap' ? 'active' : ''}`}
                onClick={() => setHeroTool('heatmap')}
              >
                <Sliders size={13} /> Contrast Mode
              </button>
              <button 
                className={`tool-btn ${heroTool === 'grid' ? 'active' : ''}`}
                onClick={() => setHeroTool('grid')}
              >
                <Layers size={13} /> 8pt Grid Overlay
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="mentor-stamp">LIVE HEURISTIC ENGINE</span>
            </div>
          </div>

          <div className="canvas-viewport-grid">
            <div className="canvas-floating-artboard">
              <div className="artboard-laser-scan" />
              
              {/* Top Artboard Navigation Strip */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-muted)' }}>PAYMENT CHECKOUT MODAL</span>
                <span style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: 800 }}>✓ PASSING AA</span>
              </div>

              {/* Central Layout Wireframe Mock */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ height: '8px', width: '65%', background: '#0f172a', borderRadius: '4px' }} />
                  <div style={{ height: '5px', width: '90%', background: '#94a3b8', borderRadius: '3px' }} />
                  <div style={{ height: '24px', width: '120px', background: '#7C3AED', borderRadius: '6px', marginTop: '4px' }} />
                </div>
                <div style={{ width: '80px', height: '60px', background: 'rgba(124, 58, 237, 0.08)', borderRadius: '8px', border: '1px solid rgba(124, 58, 237, 0.2)' }} />
              </div>

              {/* Dynamic Overlay Pins based on Tool Selection */}
              {heroTool === 'inspect' && (
                <>
                  <div className="canvas-annotation-pin" style={{ top: '25%', left: '15%' }}>
                    <CheckCircle2 size={12} color="#10b981" /> 8pt Grid Discipline Verified
                  </div>
                  <div className="canvas-annotation-pin warning" style={{ bottom: '22%', right: '18%' }}>
                    <Sliders size={12} color="#ffffff" /> Button Contrast (4.2:1 → 6.5:1)
                  </div>
                </>
              )}

              {heroTool === 'heatmap' && (
                <div className="canvas-annotation-pin" style={{ top: '40%', left: '30%' }}>
                  <Zap size={12} color="#38BDF8" /> WCAG 2.1 AAA Compliant Background (#FFFFFF on #0F172A)
                </div>
              )}

              {heroTool === 'grid' && (
                <div className="canvas-annotation-pin" style={{ top: '30%', right: '25%' }}>
                  <Layers size={12} color="#A855F7" /> Baseline Grid Snap: 16px Gutters
                </div>
              )}

              {/* Artboard Status Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: 'var(--text-dim)' }}>
                <span>Layer ID: Frame_982</span>
                <span>Usability Score: 94 / 100</span>
              </div>
            </div>
          </div>

          <div className="canvas-status-footer">
            <span>Telemetric Computer Vision Active • Sub-second Frame Parsing</span>
            <span style={{ color: '#10b981' }}><Check size={14} style={{ verticalAlign: 'middle' }} /> All 14 System Layers Inspected</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MASTER BENTO GRID ARCHITECTURE (VARIED COMPOSITION)
          ========================================================= */}
      <section id="bento-suite" className="bento-features-section">
        <div className="feat-section-header">
          <span className="feat-section-tag">CORE CAPABILITY MATRIX</span>
          <h2 className="feat-section-title">Built for designers who refuse to stagnate.</h2>
          <p className="feat-section-desc">
            Explore the specialized instruments engineered to eliminate guesswork, streamline reviews, and accelerate your craft.
          </p>
        </div>

        <div className="bento-grid-master">
          
          {/* Card 1: UX Score System (Span 8 - Hero Bento) */}
          <div className="bento-card span-8">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box purple"><Activity size={24} /></div>
                <span className="bento-pill-tag">ALGORITHMIC SCORING</span>
              </div>
              <h3 className="bento-title">Algorithmic 100-Point UX Score System</h3>
              <p className="bento-desc">
                Stop relying on subjective 'looks good' feedback. Our 100-point usability engine evaluates your layout against industry-standard heuristics, accessibility laws, and spacing tokens.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Instant objective rating from 1 to 100</li>
                <li><span className="bento-bullet-dot" /> Sub-score breakdowns for Contrast, Grid, Scale & Flow</li>
                <li><span className="bento-bullet-dot" /> Track your score evolution across every design revision</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-dim)' }}>SELECT SUB-PILLAR TO INSPECT:</span>
                <span className="mentor-stamp">SCORE: 94 / 100</span>
              </div>
              <div className="bento-submetric-selector">
                <div 
                  className={`submetric-tab-pill ${selectedSubmetric === 'contrast' ? 'active' : ''}`}
                  onClick={() => setSelectedSubmetric('contrast')}
                >
                  <span>WCAG AAA</span>
                  <strong>98 / 100</strong>
                </div>
                <div 
                  className={`submetric-tab-pill ${selectedSubmetric === 'grid' ? 'active' : ''}`}
                  onClick={() => setSelectedSubmetric('grid')}
                >
                  <span>8pt Grid</span>
                  <strong>92 / 100</strong>
                </div>
                <div 
                  className={`submetric-tab-pill ${selectedSubmetric === 'scale' ? 'active' : ''}`}
                  onClick={() => setSelectedSubmetric('scale')}
                >
                  <span>Typography</span>
                  <strong>95 / 100</strong>
                </div>
                <div 
                  className={`submetric-tab-pill ${selectedSubmetric === 'flow' ? 'active' : ''}`}
                  onClick={() => setSelectedSubmetric('flow')}
                >
                  <span>UX Flow</span>
                  <strong>91 / 100</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI-Powered Critique (Span 4 - Compact Vertical) */}
          <div className="bento-card span-4">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box blue"><Zap size={24} /></div>
                <span className="bento-pill-tag">COMPUTER VISION</span>
              </div>
              <h3 className="bento-title">AI-Powered Critique</h3>
              <p className="bento-desc">
                Upload your mockups or paste Figma frame URLs to receive sub-second visual intelligence mapping bottlenecks and contrast fixes.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Sub-second vision parsing</li>
                <li><span className="bento-bullet-dot" /> Context-aware copy suggestions</li>
              </ul>
            </div>

            <div className="bento-interactive-stage" style={{ background: 'rgba(59, 130, 246, 0.04)', border: '1px dashed rgba(59, 130, 246, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', fontWeight: 800, color: '#2563EB' }}>
                <Zap size={14} /> Sub-second AI Scanner Active
              </div>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Found 1 contrast violation (4.2:1 → 6.5:1) & verified 16px component padding.</p>
            </div>
          </div>

          {/* Card 3: Community Feedback Portal (Span 4) */}
          <div className="bento-card span-4">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box red"><Users size={24} /></div>
                <span className="bento-pill-tag">PEER SANDBOX</span>
              </div>
              <h3 className="bento-title">Community Sandbox</h3>
              <p className="bento-desc">
                Connect with vetted designers. Receive high-signal canvas critiques in structured sandboxes rather than messy chat channels.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Pinpoint canvas notes</li>
                <li><span className="bento-bullet-dot" /> Vetted community tiers</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#EF4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800 }}>AL</div>
                <div style={{ fontSize: '0.7rem' }}>
                  <strong>Anna Lin (Staff Designer)</strong>
                  <p style={{ color: 'var(--text-muted)', marginTop: '2px' }}>“Tighten button line-height from 1.3 to 1.15.”</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Portfolio Builder (Span 8) */}
          <div className="bento-card span-8">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box green"><Layers size={24} /></div>
                <span className="bento-pill-tag">CASE STUDY GENERATOR</span>
              </div>
              <h3 className="bento-title">Automated Portfolio Builder</h3>
              <p className="bento-desc">
                Transform every audited design into a hiring-ready case study. Automatically compile iteration logs, before/after interactive sliders, heuristic benchmarks, and mentor sign-offs into shareable web portfolios.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> 1-Click case study generation</li>
                <li><span className="bento-bullet-dot" /> Verified proof-of-iteration badges for recruiters</li>
                <li><span className="bento-bullet-dot" /> Export to web, PDF, or Notion format</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>Checkout Case Study Export</span>
                <span className="mentor-stamp">VERIFIED BY CRANIAL SPACE</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="bento-pill-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Score 94</span>
                <span className="bento-pill-tag" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED' }}>+24% Conversion</span>
                <span className="bento-pill-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>WCAG AAA</span>
              </div>
            </div>
          </div>

          {/* Card 5: Progress Tracking (Span 6) */}
          <div className="bento-card span-6">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box sky"><TrendingUp size={24} /></div>
                <span className="bento-pill-tag">VELOCITY TELEMETRY</span>
              </div>
              <h3 className="bento-title">Progress Tracking & Analytics</h3>
              <p className="bento-desc">
                Visualize your craft's trajectory over time. Track your skill distribution radar across visual design, accessibility compliance, information architecture, and design systems.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Historical UX Score velocity graphs</li>
                <li><span className="bento-bullet-dot" /> 5-axis designer skill distribution radar</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 750 }}>
                <span>Weekly Design Velocity</span>
                <span style={{ color: '#0EA5E9' }}>8.4 Audits / wk</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(15,23,42,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '84%', height: '100%', background: '#0EA5E9', borderRadius: '3px' }} />
              </div>
            </div>
          </div>

          {/* Card 6: Mentor Studio (Span 6) */}
          <div className="bento-card span-6">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box orange"><GraduationCap size={24} /></div>
                <span className="bento-pill-tag">OFFICE HOURS</span>
              </div>
              <h3 className="bento-title">Direct Mentor Access</h3>
              <p className="bento-desc">
                Gain direct access to Design Directors, Staff Designers, and UX Leads from top-tier tech organizations (Stripe, Linear, Figma) for async video reviews and career promotions.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> 1-on-1 video walkthroughs and recordings</li>
                <li><span className="bento-bullet-dot" /> Verified portfolio endorsements and critique sign-offs</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F59E0B', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800 }}>JD</div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>Jessica Duong (Figma Director)</span>
                </div>
                <span className="mentor-stamp">CRITIQUE READY</span>
              </div>
            </div>
          </div>

          {/* Card 7: Case Study Submission (Span 6) */}
          <div className="bento-card span-6">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box indigo"><FileText size={24} /></div>
                <span className="bento-pill-tag">FLOW INGESTION</span>
              </div>
              <h3 className="bento-title">Design Case Study Submission</h3>
              <p className="bento-desc">
                Submit entire product flows, design systems, or mobile experiences for multi-page audits on onboarding, friction points, and retention loops.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Multi-frame prototype flow reviews</li>
                <li><span className="bento-bullet-dot" /> Retention and friction heatmap predictions</li>
              </ul>
            </div>

            <div className="bento-interactive-stage" style={{ display: 'flex', gap: '8px' }}>
              <div style={{ flex: 1, background: 'rgba(79, 70, 229, 0.05)', padding: '8px', borderRadius: '8px', fontSize: '0.65rem', textAlign: 'center', fontWeight: 800 }}>
                1. Onboard ✓
              </div>
              <div style={{ flex: 1, background: 'rgba(79, 70, 229, 0.05)', padding: '8px', borderRadius: '8px', fontSize: '0.65rem', textAlign: 'center', fontWeight: 800 }}>
                2. Dash ✓
              </div>
              <div style={{ flex: 1, background: 'rgba(79, 70, 229, 0.05)', padding: '8px', borderRadius: '8px', fontSize: '0.65rem', textAlign: 'center', fontWeight: 800 }}>
                3. Checkout ✓
              </div>
            </div>
          </div>

          {/* Card 8: Challenges & Rewards (Span 6) */}
          <div className="bento-card span-6">
            <div>
              <div className="bento-top-row">
                <div className="bento-icon-box pink"><Award size={24} /></div>
                <span className="bento-pill-tag">TIER PROGRESSION</span>
              </div>
              <h3 className="bento-title">Challenges & Rewards</h3>
              <p className="bento-desc">
                Level up through weekly design challenges created by industry leaders. Fix real-world UI usability anti-patterns, unlock verified badges, and climb leaderboards.
              </p>
              <ul className="bento-bullets">
                <li><span className="bento-bullet-dot" /> Weekly curated UX redesign prompts</li>
                <li><span className="bento-bullet-dot" /> Tier progression: Apprentice → Senior → Master</li>
              </ul>
            </div>

            <div className="bento-interactive-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={18} color="#EC4899" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>Weekly Heuristic Master Sprint</span>
                </div>
                <span className="mentor-stamp">RANK #4</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. INTERACTIVE HORIZONTAL WORKFLOW PIPELINE
          ========================================================= */}
      <section className="workflow-pipeline-section">
        <div className="feat-section-header">
          <span className="feat-section-tag">CONTINUOUS DESIGN LOOP</span>
          <h2 className="feat-section-title">The anatomy of an audited design.</h2>
          <p className="feat-section-desc">
            Follow the 7-stage interactive pipeline that transforms raw interface frames into verified, production-ready deliverables.
          </p>
        </div>

        <div className="pipeline-track-wrapper">
          <div className="pipeline-nodes-bar">
            {workflowSteps.map((step, idx) => (
              <button 
                key={step.title}
                className={`pipeline-node-btn ${activeWorkflowStep === idx ? 'active' : ''}`}
                onClick={() => setActiveWorkflowStep(idx)}
              >
                <div className="node-circle-indicator">{idx + 1}</div>
                <span className="pipeline-node-label">{step.title.split('. ')[1]}</span>
              </button>
            ))}
          </div>

          <div className="pipeline-interactive-display">
            <div>
              <span className="bento-pill-tag">STAGE {activeWorkflowStep + 1} OF 7</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginTop: '8px', marginBottom: '10px' }}>
                {workflowSteps[activeWorkflowStep].title}
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {workflowSteps[activeWorkflowStep].detail}
              </p>
            </div>

            <div className="bento-interactive-stage" style={{ background: '#f8fafc', padding: '24px' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 850, color: 'var(--primary)' }}>STAGE TELEMETRY</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 900 }}>{workflowSteps[activeWorkflowStep].mockTitle}</h4>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)', marginTop: '6px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 750 }}>{workflowSteps[activeWorkflowStep].mockStatus}</span>
                <CheckCircle2 size={16} color="#10b981" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. FULL-WIDTH MODULAR STUDIO DASHBOARD COCKPIT
          ========================================================= */}
      <section className="feat-studio-dash-section">
        <div className="feat-section-header">
          <span className="feat-section-tag">COMMAND CENTER</span>
          <h2 className="feat-section-title">Your unified design command cockpit.</h2>
          <p className="feat-section-desc">
            Monitor score trajectories, review queues, and verifiable case study exports inside a high-density modular studio.
          </p>
        </div>

        <div className="studio-dash-shell">
          <div className="studio-sidebar">
            <div className="sidebar-brand-strip">
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7C3AED' }} />
              <span>CRANIAL SPACE OS</span>
            </div>

            <button 
              className={`studio-nav-btn ${activeDashTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveDashTab('overview')}
            >
              <Activity size={16} /> Overview & Score
            </button>
            <button 
              className={`studio-nav-btn ${activeDashTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveDashTab('reviews')}
            >
              <Eye size={16} /> Active Reviews (3)
            </button>
            <button 
              className={`studio-nav-btn ${activeDashTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveDashTab('portfolio')}
            >
              <Layers size={16} /> Portfolio Case Studies
            </button>
            <button 
              className={`studio-nav-btn ${activeDashTab === 'badges' ? 'active' : ''}`}
              onClick={() => setActiveDashTab('badges')}
            >
              <Award size={16} /> Badges & Milestones
            </button>
          </div>

          <div className="studio-main-body">
            <div className="dash-trio-metrics">
              <div className="dash-stat-tile">
                <span style={{ fontSize: '0.65rem', fontWeight: 850, color: 'var(--text-dim)' }}>AGGREGATE UX SCORE</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>94 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ 100</span></div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 750 }}>↑ +14% vs last revision</span>
              </div>
              <div className="dash-stat-tile">
                <span style={{ fontSize: '0.65rem', fontWeight: 850, color: 'var(--text-dim)' }}>ACCESSIBILITY INDEX</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>98%</div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 750 }}>✓ WCAG AAA Compliant</span>
              </div>
              <div className="dash-stat-tile">
                <span style={{ fontSize: '0.65rem', fontWeight: 850, color: 'var(--text-dim)' }}>VERIFIED CASE STUDIES</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>12</div>
                <span style={{ fontSize: '0.72rem', color: '#7C3AED', fontWeight: 750 }}>3 Ready for recruiters</span>
              </div>
            </div>

            <div className="dash-stat-tile" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 850 }}>Longitudinal Heuristic Growth Trajectory</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Live Telemetry</span>
              </div>
              <svg viewBox="0 0 600 110" style={{ width: '100%', height: '110px' }}>
                <path d="M0,95 Q150,85 300,45 T600,15" fill="none" stroke="#7C3AED" strokeWidth="4" />
                <path d="M0,95 Q150,85 300,45 T600,15 L600,110 L0,110 Z" fill="rgba(124, 58, 237, 0.08)" />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                <span>Sprint 1 (Score 58)</span>
                <span>Sprint 3 (Score 74)</span>
                <span>Current Revision (Score 94)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FEATURE COMPARISON DECK (TRADITIONAL VS CRANIAL)
          ========================================================= */}
      <section className="feat-comparison-deck">
        <div className="comp-deck-card traditional">
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '6px' }}>Traditional Design Feedback</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Unorganized screenshots, delayed chats, and subjective opinions.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Days of Waiting for Slack Reviews</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Feedback is delayed, scattered across random threads, and easily lost.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Subjective 'Looks Good' Opinions</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>No objective criteria for contrast, typographic scale, or layout spacing.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Zero Quantifiable Usability Metrics</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Impossible to prove design improvement to stakeholders or hiring managers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-deck-card cranial">
          <span className="deck-tag-pill">ENGINEERED FOR RIGOR</span>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '6px' }}>Cranial Space Platform</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Objective heuristics, pinpoint overlays, and verifiable growth metrics.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Sub-Second Automated AI Diagnostics</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Instant contrast compliance, 8pt grid mapping, and hierarchy checks.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>100-Point Algorithmic UX Score</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Quantifiable scoring benchmarked against industry standards.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Automated Proof-of-Growth Portfolio Exports</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>1-Click case studies containing before/after comparison sliders and mentor stamps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. UPCOMING FEATURES (MASONRY-STYLE ROADMAP LABS)
          ========================================================= */}
      <section className="upcoming-features-section">
        <div className="feat-section-header">
          <span className="feat-section-tag">ROADMAP & LABS</span>
          <h2 className="feat-section-title">What we're building next.</h2>
          <p className="feat-section-desc">
            A preview of upcoming innovations currently under active development in our engineering labs.
          </p>
        </div>

        <div className="upcoming-masonry-grid">
          {upcomingFeatures.map((feat) => (
            <div key={feat.title} className="upcoming-glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <div className="bento-icon-box purple" style={{ width: '38px', height: '38px' }}>
                  {feat.icon}
                </div>
                <span className="bento-pill-tag">{feat.tag}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 850 }}>{feat.title}</h3>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          7. FINAL CTA
          ========================================================= */}
      <section className="feat-final-cta-container">
        <div className="feat-cta-pill">
          <Sparkles size={14} />
          <span>Elevate Your Design Authority Today</span>
        </div>
        <h2 className="feat-cta-headline">
          Ready to experience the future of product design feedback?
        </h2>
        <p className="feat-cta-desc">
          Join thousands of product designers, design leads, and founders who use Cranial Space to audit, iterate, and prove layout metrics daily.
        </p>
        <div className="feat-cta-buttons">
          <Link to="/product" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
            Start Interactive Demo
            <ArrowRight size={16} />
          </Link>
          <Link to="/" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
            Back to Home
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FeaturesPage;
