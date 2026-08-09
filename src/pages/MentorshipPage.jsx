import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, Star, ShieldCheck, CheckCircle2, Clock, 
  Search, Video, MessageSquare, Layers, Target, Compass, Briefcase, 
  Award, TrendingUp, Users, Check, ChevronRight, X, Calendar, 
  Zap, Code, Monitor, FileText, BarChart3, HelpCircle, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BorderGlow from '../components/BorderGlow';
import '../styles/MentorshipPage.css';

const MentorshipPage = () => {
  const glowColors = ['#4f46e5', '#7c3aed', '#0ea5e9'];
  const glowHSL = '250 85 60';

  // Help Areas State
  const [activeHelpTopic, setActiveHelpTopic] = useState('portfolio');

  // Find Mentor State
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [mentorSearch, setMentorSearch] = useState('');
  const [bookingMentor, setBookingMentor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [sessionAgenda, setSessionAgenda] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Mentorship Experience Studio Mockup State
  const [activeSandboxTab, setActiveSandboxTab] = useState('critique');

  // Growth Loop Active Step State
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  // 1. HELP TOPICS DATA (Section 2)
  const helpTopics = [
    {
      id: 'portfolio',
      title: 'Portfolio & Case Study Reviews',
      tag: 'CRAFT & PRESENTATION',
      icon: <FileText size={18} />,
      desc: 'Transform scattered design artifacts into high-conviction product narratives that prove impact and pass executive scrutiny.',
      deliverables: [
        { num: '01', title: 'Narrative Arc Audit', desc: 'Eliminate process fluff and spotlight business metrics, trade-offs, and rationale.' },
        { num: '02', title: 'Visual Polish Review', desc: 'Frame-by-frame scrutiny of layout rhythm, typography scales, and token consistency.' },
        { num: '03', title: 'Recruiter Defense Script', desc: 'Crisp 5-minute walkthrough structure tailored for design director interviews.' }
      ],
      mentorMatch: ['Jessica Duong', 'Marcus Vance', 'Alexandre Mercer']
    },
    {
      id: 'critique',
      title: 'UX/UI Critique & Heuristics',
      tag: 'USABILITY & ARCHITECTURE',
      icon: <Layers size={18} />,
      desc: 'Unvarnished, objective teardowns of your live WIPs, complex interactions, edge cases, and accessibility compliance.',
      deliverables: [
        { num: '01', title: 'WCAG AAA Gap Scan', desc: 'Pinpoint contrast failures, touch target violations, and cognitive overload points.' },
        { num: '02', title: 'Micro-Interaction Polish', desc: 'Refine easing curves, modal dismiss flows, and keyboard navigation ergonomics.' },
        { num: '03', title: 'Edge-Case Architecture', desc: 'Design resilient zero-states, network timeout fallbacks, and multi-tenant views.' }
      ],
      mentorMatch: ['Elena Rostova', 'Devon Chen', 'Maya Lin']
    },
    {
      id: 'strategy',
      title: 'Product Design Strategy',
      tag: 'BUSINESS & EXECUTION',
      icon: <Target size={18} />,
      desc: 'Learn how to shape product roadmaps, frame qualitative insights into engineering priorities, and speak the language of founders.',
      deliverables: [
        { num: '01', title: 'Problem Framing Matrix', desc: 'Distill ambiguous user feedback into high-leverage quarterly design bets.' },
        { num: '02', title: 'Design-to-Revenue Bridge', desc: 'Quantify design debt and prove conversion lift with measurable telemetry.' },
        { num: '03', title: 'Cross-functional Buy-in', desc: 'Frameworks to align skeptical PMs and engineering leads without endless meetings.' }
      ],
      mentorMatch: ['Kavita Patel', 'Tobias Vance', 'Jessica Duong']
    },
    {
      id: 'systems',
      title: 'Design Systems & Tokens',
      tag: 'SCALE & INFRASTRUCTURE',
      icon: <Code size={18} />,
      desc: 'Architect resilient multi-brand token schemas in Figma Variables and bridge the gap with production frontend components.',
      deliverables: [
        { num: '01', title: 'Semantic Token Schema', desc: 'Build scalable color, spacing, elevation, and typography tier architectures.' },
        { num: '02', title: 'Component Governance', desc: 'Deprecation protocols, contribution guidelines, and breaking change audits.' },
        { num: '03', title: 'Figma-to-Code Sync', desc: 'Automate tokens into CSS variables and React component props seamlessly.' }
      ],
      mentorMatch: ['Elena Rostova', 'Marcus Vance', 'Alexandre Mercer']
    },
    {
      id: 'career',
      title: 'Career & Interview Prep',
      tag: 'LEVELING & NEGOTIATION',
      icon: <Compass size={18} />,
      desc: 'Land senior, staff, or lead roles with whiteboard challenge prep, behavioral answer frameworks, and offer negotiation strategy.',
      deliverables: [
        { num: '01', title: 'Live App Critique Prep', desc: 'Master the 45-minute unstructured app critique round with proven rubrics.' },
        { num: '02', title: 'Staff Leveling Roadmap', desc: 'Identify skill gaps to leap from Senior to Staff/Principal IC tracks.' },
        { num: '03', title: 'Comp & Equity Defense', desc: 'Tactical guidance on total compensation benchmarking and negotiation levers.' }
      ],
      mentorMatch: ['Kavita Patel', 'Devon Chen', 'Jessica Duong']
    },
    {
      id: 'freelancing',
      title: 'Freelancing & Client Work',
      tag: 'INDEPENDENT PRACTICE',
      icon: <Briefcase size={18} />,
      desc: 'Transition from hourly billing to value-based pricing, close five-figure design sprints, and manage difficult stakeholders.',
      deliverables: [
        { num: '01', title: 'Value Pricing Proposal', desc: 'Proposal templates that anchor pricing on business ROI rather than hours.' },
        { num: '02', title: 'Client Scope Contracts', desc: 'Bulletproof revision boundaries, payment milestone structures, and SLAs.' },
        { num: '03', title: 'Client Retention Playbook', desc: 'Turn one-off Figma designs into high-margin ongoing advisory retainers.' }
      ],
      mentorMatch: ['Tobias Vance', 'Maya Lin', 'Alexandre Mercer']
    },
    {
      id: 'leadership',
      title: 'Design Leadership & Org Health',
      tag: 'MANAGEMENT & SCALE',
      icon: <Users size={18} />,
      desc: 'Build high-performing design teams, establish critique rituals, scale hiring loops, and foster psychological safety.',
      deliverables: [
        { num: '01', title: 'Critique Culture Rituals', desc: 'Eliminate design bikeshedding and run high-signal weekly design reviews.' },
        { num: '02', title: 'IC Growth Ladders', desc: 'Objective competency matrices and career progression benchmarks.' },
        { num: '03', title: 'Executive Stakeholder Sync', desc: 'Present design strategy effectively to VP and C-suite leadership.' }
      ],
      mentorMatch: ['Jessica Duong', 'Kavita Patel', 'Elena Rostova']
    },
    {
      id: 'growth',
      title: 'Personal Growth & Craft Mastery',
      tag: 'MASTERY & HABITS',
      icon: <TrendingUp size={18} />,
      desc: 'Overcome creative stagnation, develop sharp visual instincts, and build an intentional daily deliberate practice routine.',
      deliverables: [
        { num: '01', title: 'Visual Taste Calibration', desc: 'Deconstruct award-winning interfaces to internalize spatial nuance.' },
        { num: '02', title: 'Deliberate Practice Sprints', desc: 'Weekly micro-challenges targeting weak spots in typography and layout.' },
        { num: '03', title: 'Burnout Prevention Guardrails', desc: 'Sustainable creative workflows that preserve mental energy and craft passion.' }
      ],
      mentorMatch: ['Marcus Vance', 'Devon Chen', 'Tobias Vance']
    }
  ];

  const currentTopic = helpTopics.find(t => t.id === activeHelpTopic) || helpTopics[0];

  // 2. HOW IT WORKS STEPS (Section 3)
  const journeySteps = [
    {
      num: '01',
      title: 'Find your fit',
      desc: 'Filter mentors by craft specialization, company pedigree, and the specific roadblock you need solved.',
      icon: <Search size={20} />,
      snippet: 'Filter: Design Systems • Staff Tier • 5.0 Rating'
    },
    {
      num: '02',
      title: 'Book a session',
      desc: 'Pick an open slot on their live calendar, choose a 45m or 60m deep dive, and submit your context artifacts.',
      icon: <Calendar size={20} />,
      snippet: 'Calendar sync • Context brief attached • Confirmed'
    },
    {
      num: '03',
      title: 'Work through the problem',
      desc: 'Hop onto an interactive shared canvas. Walk through live Figma frames, deconstruct architecture, and debate trade-offs.',
      icon: <Monitor size={20} />,
      snippet: 'Live cursor sync • Audio stream • Annotation mode'
    },
    {
      num: '04',
      title: 'Leave with direction',
      desc: 'Walk away with a concrete action backlog, annotated Figma components, session recording, and measurable UX score targets.',
      icon: <ShieldCheck size={20} />,
      snippet: 'Exported Action Roadmap • AI Benchmark Verified'
    }
  ];

  // 3. MENTORS DATA (Section 4)
  const mentorsList = [
    {
      id: 'jessica-duong',
      name: 'Jessica Duong',
      company: 'Design Director @ Figma',
      role: 'Staff Systems Architect',
      experience: '12+ yrs experience • Ex-Airbnb',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '5.0',
      reviews: 148,
      specialties: ['Design Systems', 'Design Leadership', 'Portfolio & Case Study'],
      specialtyCategory: 'systems',
      bio: 'Leading design systems tooling and tokens. Passionate about helping senior designers scale multi-brand token architectures and prepare for executive review.',
      availability: 'Tomorrow, 3:30 PM',
      sessionTypes: '45m System Audit / 60m Leadership Defense',
      slotsRemaining: '2 slots left this week'
    },
    {
      id: 'marcus-vance',
      name: 'Marcus Vance',
      company: 'Staff UI Designer @ Linear',
      role: 'Staff Product Designer',
      experience: '9+ yrs experience • Ex-Stripe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '5.0',
      reviews: 112,
      specialties: ['UX/UI Critique', 'High-Density UI', 'Design Systems'],
      specialtyCategory: 'critique',
      bio: 'Obsessed with keyboard-first ergonomics, micro-interactions, and high-density enterprise software. Will give you candid, frame-by-frame critique on your live Figma files.',
      availability: 'Wednesday, 5:00 PM',
      sessionTypes: '45m WIP Teardown / 60m Interaction Lab',
      slotsRemaining: '1 slot left this week'
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      company: 'Principal UX @ Datadog',
      role: 'Principal UX Architect',
      experience: '11+ yrs experience • Ex-GitHub',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '4.9',
      reviews: 94,
      specialties: ['Product Design Strategy', 'UX/UI Critique', 'Complex Data UX'],
      specialtyCategory: 'strategy',
      bio: 'Specialist in telemetry, IAM permissions, and developer tooling. Helps designers master data visualization, heuristic auditing, and difficult stakeholder alignment.',
      availability: 'Thursday, 2:00 PM',
      sessionTypes: '60m Strategy Roadmap / 45m Data UX Audit',
      slotsRemaining: '3 slots left this week'
    },
    {
      id: 'alexandre-mercer',
      name: 'Alexandre Mercer',
      company: 'Staff Designer @ Stripe',
      role: 'Staff FinTech Designer',
      experience: '10+ yrs experience • Ex-Apple',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '5.0',
      reviews: 126,
      specialties: ['Career & Interview Prep', 'Conversion UX', 'Portfolio & Case Study'],
      specialtyCategory: 'career',
      bio: 'Built checkout experiences serving millions of merchants. Focused on conversion science, high-trust micro-interactions, and portfolio storytelling for top-tier SaaS companies.',
      availability: 'Friday, 4:00 PM',
      sessionTypes: '45m Case Study Review / 60m Mock Interview',
      slotsRemaining: '2 slots left this week'
    },
    {
      id: 'kavita-patel',
      name: 'Kavita Patel',
      company: 'Head of Product Design @ Vercel',
      role: 'Design Executive',
      experience: '14+ yrs experience • Ex-Uber',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '5.0',
      reviews: 165,
      specialties: ['Design Leadership', 'Product Design Strategy', 'Career & Interview Prep'],
      specialtyCategory: 'leadership',
      bio: 'Mentoring emerging design managers, staff ICs, and founders. Learn how to bridge product craft with board-level metrics, hiring loops, and design org scaling.',
      availability: 'Monday, 6:00 PM',
      sessionTypes: '60m Executive Coaching / 45m IC Transition',
      slotsRemaining: '1 slot left this week'
    },
    {
      id: 'tobias-vance',
      name: 'Tobias Vance',
      company: 'Independent Design Partner',
      role: 'Principal Brand & Product',
      experience: '8+ yrs experience • YC Alum',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80',
      rating: '4.9',
      reviews: 87,
      specialties: ['Freelancing & Client Work', 'Personal Growth', 'UX/UI Critique'],
      specialtyCategory: 'freelancing',
      bio: 'Generates $300k+/yr running a 1-person design advisory. Guides independent designers on value pricing, inbound marketing, closing enterprise design sprints, and async workflows.',
      availability: 'Thursday, 11:00 AM',
      sessionTypes: '45m Pricing & Pitch Audit / 60m Sprint Strategy',
      slotsRemaining: '4 slots left this week'
    }
  ];

  // Filtered Mentors
  const filteredMentors = mentorsList.filter(m => {
    const matchSpecialty = selectedSpecialty === 'all' || m.specialtyCategory === selectedSpecialty;
    const matchSearch = m.name.toLowerCase().includes(mentorSearch.toLowerCase()) ||
                        m.company.toLowerCase().includes(mentorSearch.toLowerCase()) ||
                        m.specialties.some(s => s.toLowerCase().includes(mentorSearch.toLowerCase()));
    return matchSpecialty && matchSearch;
  });

  // 4. MENTORSHIP EXPERIENCE SANDBOX DATA (Section 5)
  const sandboxModes = [
    {
      id: 'critique',
      label: 'Live Frame Critique',
      frameTitle: 'B2B Analytics Telemetry Dashboard (v3.4)',
      frameSub: 'Figma Canvas Sync • Real-time Cursor Node #782',
      annotation: 'Elena: Contrast ratio on secondary metrics is 2.8:1. Bump to slate-300 to pass WCAG AAA without losing hierarchy.',
      checklist: [
        'Adjust micro-sparkline padding to 12px for thumb precision',
        'Replace low-contrast grey badges with semantic 10% opacity tints',
        'Consolidate 3 redundant filter dropdowns into a single search pill'
      ],
      deliverablePreview: 'Audit Deliverable: +14pt UX Score Gain Estimated'
    },
    {
      id: 'system',
      label: 'System Architecture Audit',
      frameTitle: 'Multi-Brand Variable Tokens & Spacing Tier',
      frameSub: 'Figma Variables Schema • 42 Components Linked',
      annotation: 'Marcus: Component overrides are breaking base token inheritance. Decouple local radius tokens from global primitives.',
      checklist: [
        'Refactor raw pixel spacing values to 8pt semantic tokens',
        'Set up dark/light mode token alias mapping in Figma Variables',
        'Export JSON schema directly to Cranial Space Heuristic Scanner'
      ],
      deliverablePreview: 'Audit Deliverable: 0 Token Collisions in Design CI/CD'
    },
    {
      id: 'defense',
      label: 'Portfolio / Career Defense',
      frameTitle: 'Staff Level Case Study: FinTech Checkout Engine',
      frameSub: 'Recruiter Defense Mode • 5-Minute Pitch Deck',
      annotation: 'Jessica: Lead with the $4.2M revenue recovery metric in slide 2 before showing wireframes. Hook the hiring manager immediately.',
      checklist: [
        'Cut 4 slides of generic user journey maps; focus on trade-off matrix',
        'Emphasize how you led 3 engineers and 1 PM through the migration',
        'Frame your UX decisions as measurable business risk reductions'
      ],
      deliverablePreview: 'Audit Deliverable: 100% Prepared for Staff Design Defense'
    }
  ];

  const currentSandbox = sandboxModes.find(s => s.id === activeSandboxTab) || sandboxModes[0];

  // 5. GROWTH LOOP DATA (Section 7)
  const growthLoopSteps = [
    {
      id: 0,
      name: '01. Identify',
      title: 'Spot the craft bottleneck or career plateau',
      desc: 'Use Cranial Space AI Heuristic Scans to detect objective flaws in your designs or pinpoint where your portfolio is losing recruiter attention.',
      ecoLink: 'Cranial Space Heuristic Scanner'
    },
    {
      id: 1,
      name: '02. Discuss',
      title: 'Contextualize constraints with an industry mentor',
      desc: 'Bring your real-world team friction, technical limitations, and business objectives into a focused 1:1 consultation.',
      ecoLink: '1:1 Mentor Studio Room'
    },
    {
      id: 2,
      name: '03. Critique',
      title: 'Frame-by-frame teardown with zero sugarcoating',
      desc: 'Get granular feedback on token schemas, typography cadence, cognitive friction, and executive storytelling.',
      ecoLink: 'Live Shared Canvas Workbench'
    },
    {
      id: 3,
      name: '04. Apply',
      title: 'Implement the concrete action backlog',
      desc: 'Refactor components, tighten design system variables, and rewrite case study narratives using your session blueprint.',
      ecoLink: 'Figma Live Plugin Integration'
    },
    {
      id: 4,
      name: '05. Improve',
      title: 'Measure tangible UX score & conversion lift',
      desc: 'Rescan your files with Cranial Space AI and test in community sprint arenas to verify measurable quality gains.',
      ecoLink: 'Platform UX Score Telemetry'
    },
    {
      id: 5,
      name: '06. Return',
      title: 'Unlock advanced mentorship & leadership tracks',
      desc: 'As your craft velocity grows, return for staff leveling roadmaps, salary defense, and cross-functional leadership coaching.',
      ecoLink: 'Continuous Career Elevation Loop'
    }
  ];

  const handleOpenBooking = (mentor) => {
    setBookingMentor(mentor);
    setSelectedSlot(mentor.availability.split(',')[0]);
    setBookingSuccess(false);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingMentor(null);
      setBookingSuccess(false);
      setSessionAgenda('');
    }, 2400);
  };

  return (
    <div className="mentorship-page-container">
      
      {/* =================================================================
          1. HERO SECTION — Asymmetric Editorial Split with Studio HUD
          ================================================================= */}
      <section className="mentor-hero-section">
        <div className="mentor-hero-content">
          <div className="mentor-live-status-pill">
            <span className="pulse-dot-green" />
            <span>1:1 DESIGN MENTORSHIP • 18 VETTED MENTORS ONLINE</span>
          </div>

          <h1 className="mentor-hero-title">
            Design better.<br />
            Think sharper.<br />
            <span className="gradient-text">Grow faster.</span>
          </h1>

          <p className="mentor-hero-lead">
            Get practical, unvarnished guidance from experienced product and UX designers who can help you strengthen your craft, solve difficult design problems, and navigate your next career move.
          </p>

          <div className="mentor-hero-cta-group">
            <a href="#find-mentor" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              Find a Mentor
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              How Mentorship Works
            </a>
          </div>

          {/* Social proof bar */}
          <div className="mentor-hero-proof-bar">
            <div className="hero-avatar-stack">
              <div className="avatar-stack-item">JD</div>
              <div className="avatar-stack-item c2">MV</div>
              <div className="avatar-stack-item c3">ER</div>
              <div className="avatar-stack-item c4">AM</div>
              <div className="avatar-stack-item more">+42</div>
            </div>
            <div className="hero-proof-text">
              <span className="proof-stat">4.98 / 5.0 Average Session Rating</span>
              <span className="proof-sub">Mentors from Figma, Stripe, Linear, Airbnb, & Vercel</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup: Real-Time Mentorship Studio HUD */}
        <div className="mentor-hero-visual">
          <div className="hero-studio-mockup">
            <div className="studio-mockup-header">
              <div className="studio-window-controls">
                <span className="dot-ctrl r" />
                <span className="dot-ctrl y" />
                <span className="dot-ctrl g" />
              </div>
              <div className="studio-session-meta">
                <span className="rec-badge">● REC 34:12</span>
                <span>Session: B2B Design System Audit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#4f46e5', fontWeight: 800 }}>
                <Zap size={14} /> LIVE SYNC
              </div>
            </div>

            <div className="studio-mockup-body">
              <div className="studio-stage-grid">
                
                {/* Shared Figma Frame Canvas */}
                <div className="studio-shared-canvas">
                  <div className="canvas-wireframe-preview">
                    <div className="wire-header-row">
                      <span className="wire-pill">Frame 4.2: Data Grid</span>
                      <span style={{ fontSize: '0.62rem', color: '#94a3b8' }}>8pt Grid Active</span>
                    </div>
                    <div className="wire-content-grid">
                      <div className="wire-box" />
                      <div className="wire-box focus-highlight" />
                      <div className="wire-box" />
                      <div className="wire-box" />
                    </div>
                  </div>

                  {/* Mentor Live Cursor */}
                  <div className="canvas-cursor-mentor">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#7c3aed">
                      <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/>
                    </svg>
                    <span className="cursor-tag">Jessica Duong (Figma)</span>
                  </div>

                  {/* Live Annotation Strip */}
                  <div className="canvas-live-critique-card">
                    <Sparkles size={14} color="#d946ef" />
                    <span>"Shift primary action out of the 3-dot overflow menu for 3x discoverability."</span>
                  </div>
                </div>

                {/* Video HUD Tiles */}
                <div className="studio-participants-column">
                  <div className="participant-video-tile mentor-tile">
                    <div className="participant-avatar-badge">JD</div>
                    <span className="participant-name-text">Jessica D.</span>
                    <span className="participant-role-text">Design Director</span>
                    <div className="speaking-waves">
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                    </div>
                  </div>

                  <div className="participant-video-tile">
                    <div className="participant-avatar-badge student">YOU</div>
                    <span className="participant-name-text">Product Designer</span>
                    <span className="participant-role-text">Senior IC Track</span>
                  </div>
                </div>

              </div>

              {/* Bottom HUD Bar */}
              <div className="studio-hud-action-bar">
                <div className="hud-action-badge">
                  <CheckCircle2 size={14} /> 3 Heuristics Resolved
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  Action Roadmap Auto-Generating...
                </div>
              </div>
            </div>
          </div>

          <div className="floating-kudos-chip">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span>"The most tactical 45 minutes of my design career."</span>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. WHAT YOU CAN GET HELP WITH — Spatial Interactive Lens
          ================================================================= */}
      <section className="help-areas-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">COMPREHENSIVE CRAFT COVERAGE</span>
          <h2 className="mentor-section-title">What you can get help with</h2>
          <p className="mentor-section-desc">
            No generic hand-waving. Every mentorship engagement is structured around tangible design artifacts, complex real-world trade-offs, and verifiable craft leveling.
          </p>
        </div>

        <div className="help-areas-spatial-deck">
          
          {/* Topic Navigation list */}
          <div className="help-topics-nav">
            {helpTopics.map((topic) => (
              <button
                key={topic.id}
                className={`help-topic-item-btn ${activeHelpTopic === topic.id ? 'active' : ''}`}
                onClick={() => setActiveHelpTopic(topic.id)}
              >
                <div className="topic-btn-left">
                  <div className="topic-icon-wrap">{topic.icon}</div>
                  <span className="topic-title-text">{topic.title}</span>
                </div>
                <ChevronRight size={16} color={activeHelpTopic === topic.id ? '#4f46e5' : '#94a3b8'} />
              </button>
            ))}
          </div>

          {/* Active Topic Interactive Stage */}
          <div className="help-topic-detail-stage">
            <div className="detail-stage-top">
              <div className="topic-stage-header-row">
                <div className="topic-header-title-box">
                  <span className="topic-stage-tag">{currentTopic.tag}</span>
                  <h3 className="topic-stage-title">{currentTopic.title}</h3>
                </div>
                <div className="topic-icon-wrap" style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' }}>
                  {currentTopic.icon}
                </div>
              </div>

              <p className="topic-stage-desc">{currentTopic.desc}</p>

              {/* Concrete deliverables cards */}
              <div className="topic-deliverables-block">
                <span className="deliverables-header-label">Tactical Session Deliverables</span>
                <div className="deliverables-cards-row">
                  {currentTopic.deliverables.map((item) => (
                    <div key={item.num} className="deliverable-card">
                      <span className="deliverable-num">{item.num}</span>
                      <h4 className="deliverable-card-title">{item.title}</h4>
                      <p className="deliverable-card-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with matched mentors */}
            <div className="detail-stage-footer">
              <div className="stage-mentor-match-info">
                <div className="match-mentor-avatars">
                  <div className="match-avatar">JD</div>
                  <div className="match-avatar" style={{ background: '#4f46e5' }}>MV</div>
                  <div className="match-avatar" style={{ background: '#0ea5e9' }}>ER</div>
                </div>
                <span className="match-label-text">
                  Available Mentors: <strong>{currentTopic.mentorMatch.join(', ')}</strong>
                </span>
              </div>

              <a 
                href="#find-mentor" 
                className="btn btn-primary" 
                style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                onClick={() => {
                  if (currentTopic.id === 'systems') setSelectedSpecialty('systems');
                  else if (currentTopic.id === 'critique') setSelectedSpecialty('critique');
                  else if (currentTopic.id === 'strategy') setSelectedSpecialty('strategy');
                  else if (currentTopic.id === 'career') setSelectedSpecialty('career');
                  else if (currentTopic.id === 'leadership') setSelectedSpecialty('leadership');
                  else if (currentTopic.id === 'freelancing') setSelectedSpecialty('freelancing');
                  else setSelectedSpecialty('all');
                }}
              >
                Browse Specialists <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          3. HOW MENTORSHIP WORKS — High-Velocity Step Progression Deck
          ================================================================= */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">SEAMLESS 4-STEP JOURNEY</span>
          <h2 className="mentor-section-title">How mentorship works</h2>
          <p className="mentor-section-desc">
            From initial problem submission to actionable implementation roadmaps, every session is built for immediate design execution.
          </p>
        </div>

        <div className="steps-journey-grid">
          <div className="step-flow-connector" />
          
          {journeySteps.map((step) => (
            <div key={step.num} className="step-flow-card">
              <div className="step-card-top-row">
                <span className="step-index-pill">{step.num}</span>
                <div className="step-icon-bubble">{step.icon}</div>
              </div>

              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>

              <div className="step-artifact-snippet">
                <Zap size={13} color="#4f46e5" />
                <span>{step.snippet}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          4. FIND YOUR MENTOR — Filterable Discovery Hub with BorderGlow
          ================================================================= */}
      <section id="find-mentor" className="mentor-discovery-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">CURATED DESIGN PRACTITIONERS</span>
          <h2 className="mentor-section-title">Find your mentor</h2>
          <p className="mentor-section-desc">
            Book unvarnished 1:1 sessions with verified Design Directors, Staff UX Leads, and Principal Token Architects who build the tools you use every day.
          </p>
        </div>

        {/* Discovery Control & Filter Strip */}
        <div className="discovery-control-strip">
          <div className="discovery-filter-tabs">
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('all')}
            >
              All Mentors ({mentorsList.length})
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'systems' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('systems')}
            >
              Design Systems
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'critique' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('critique')}
            >
              UX Critique & Heuristics
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'strategy' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('strategy')}
            >
              Product Strategy
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'career' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('career')}
            >
              Career & Interview
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'leadership' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('leadership')}
            >
              Leadership
            </button>
            <button
              className={`filter-chip-btn ${selectedSpecialty === 'freelancing' ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty('freelancing')}
            >
              Freelance Advisory
            </button>
          </div>

          <div className="discovery-search-wrap">
            <Search size={16} className="search-icon-pos" />
            <input 
              type="text"
              placeholder="Search by name, company, or specialty..."
              value={mentorSearch}
              onChange={(e) => setMentorSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Mentors Grid with BorderGlow */}
        <div className="mentors-showcase-grid">
          {filteredMentors.map((mentor) => (
            <BorderGlow
              key={mentor.id}
              className="mentor-profile-card"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="#FFFFFF"
              borderRadius={26}
              glowRadius={40}
              glowIntensity={0.9}
              colors={glowColors}
            >
              <div className="mentor-card-body">
                {/* Header: Avatar + Secondary Rating Tag */}
                <div className="mentor-card-header">
                  <div className="mentor-avatar-halo">
                    <img 
                      src={mentor.avatar} 
                      alt={mentor.name} 
                      className="mentor-avatar-photo"
                      loading="lazy"
                    />
                    <span className="verified-badge-mini" title="Verified Practitioner">
                      <Check size={11} strokeWidth={3} />
                    </span>
                  </div>

                  <div className="mentor-credibility-tag">
                    <Star size={12} fill="#d97706" color="#d97706" />
                    <span>{mentor.rating}</span>
                    <span className="rating-review-count">({mentor.reviews} reviews)</span>
                  </div>
                </div>

                {/* Identity Block */}
                <div className="mentor-identity-block">
                  <h3 className="mentor-full-name">{mentor.name}</h3>
                  <span className="mentor-company-title">{mentor.company}</span>
                  <span className="mentor-experience-pill">{mentor.experience}</span>
                </div>

                {/* Summary / Bio */}
                <p className="mentor-summary-bio">{mentor.bio}</p>

                {/* Specialties Tags Cluster */}
                <div className="mentor-specialties-cluster">
                  {mentor.specialties.map(spec => (
                    <span key={spec} className="specialty-pill-tag">{spec}</span>
                  ))}
                </div>

                {/* Session Type Information Strip */}
                <div className="mentor-session-info-strip">
                  <Clock size={13} className="session-clock-icon" />
                  <span>{mentor.sessionTypes}</span>
                </div>
              </div>

              {/* Distinct Bottom Footer Section */}
              <div className="mentor-card-footer-area">
                <div className="availability-notice">
                  <span className="live-dot-green" />
                  <span>{mentor.slotsRemaining}</span>
                </div>

                <button 
                  className="mentor-book-cta-btn"
                  onClick={() => handleOpenBooking(mentor)}
                >
                  Book 1:1 <ArrowRight size={13} />
                </button>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* =================================================================
          5. THE MENTORSHIP EXPERIENCE — Interactive Studio Session Sandbox
          ================================================================= */}
      <section className="experience-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">INSIDE THE SESSION</span>
          <h2 className="mentor-section-title">What a mentorship session looks like</h2>
          <p className="mentor-section-desc">
            Step directly into an immersive critique studio. Watch how frame-by-frame scrutiny, live token validation, and executive defense scripts turn into concrete improvements.
          </p>
        </div>

        <div className="experience-sandbox-shell">
          {/* Sandbox Top Tab Navigation */}
          <div className="sandbox-nav-strip">
            <div className="sandbox-modes-tabs">
              {sandboxModes.map(mode => (
                <button
                  key={mode.id}
                  className={`sandbox-mode-btn ${activeSandboxTab === mode.id ? 'active' : ''}`}
                  onClick={() => setActiveSandboxTab(mode.id)}
                >
                  <Monitor size={15} />
                  <span>{mode.label}</span>
                </button>
              ))}
            </div>

            <div className="sandbox-telemetry-badge">
              <span className="pulse-dot-green" />
              <span>Studio Engine: 60 FPS Canvas Streaming Active</span>
            </div>
          </div>

          {/* Sandbox Body: Canvas Viewport + Action Sidebar */}
          <div className="sandbox-body-layout">
            
            {/* Main Interactive Artboard */}
            <div className="sandbox-canvas-viewport">
              <div className="canvas-viewport-header">
                <div className="canvas-title-group">
                  <h4 className="canvas-frame-name">{currentSandbox.frameTitle}</h4>
                  <span className="canvas-frame-sub">{currentSandbox.frameSub}</span>
                </div>
                <div style={{ background: 'rgba(79, 70, 229, 0.2)', border: '1px solid rgba(79, 70, 229, 0.4)', borderRadius: '9999px', padding: '4px 12px', fontSize: '0.72rem', color: '#c7d2fe', fontWeight: 800 }}>
                  Active Teardown
                </div>
              </div>

              {/* Artboard Frame with Annotations */}
              <div className="sandbox-interactive-artboard">
                <div className="artboard-annotation-badge" style={{ top: '24px', left: '28px' }}>
                  <span className="annotation-pin" />
                  <span>{currentSandbox.annotation}</span>
                </div>

                <div className="artboard-mockup-frame">
                  <div className="mockup-nav-row">
                    <span style={{ fontSize: '0.74rem', color: '#e2e8f0', fontWeight: 800 }}>Telemetry Console / Live Metrics</span>
                    <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 800 }}>+18.4% Heuristic Lift</span>
                  </div>

                  <div className="mockup-metrics-grid">
                    <div className="mockup-metric-card">
                      <span className="metric-card-label">Contrast Score</span>
                      <span className="metric-card-val" style={{ color: '#10b981' }}>7.2:1 AAA</span>
                    </div>
                    <div className="mockup-metric-card critique-target">
                      <span className="metric-card-label">Tap Target (Flagged)</span>
                      <span className="metric-card-val" style={{ color: '#f43f5e' }}>28px ⚠</span>
                    </div>
                    <div className="mockup-metric-card">
                      <span className="metric-card-label">Token Inheritance</span>
                      <span className="metric-card-val" style={{ color: '#38bdf8' }}>100% Synced</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#94a3b8' }}>
                  <span>Figma Frame: Auto-Layout 4.0 Verified</span>
                  <span style={{ color: '#c084fc', fontWeight: 800 }}>Cranial Space Studio v2.4</span>
                </div>
              </div>
            </div>

            {/* Sidebar: Actionable Takeaway Backlog */}
            <div className="sandbox-action-sidebar">
              <span className="sidebar-panel-title">
                <CheckCircle2 size={16} color="#10b981" />
                Live Action Backlog
              </span>

              <div className="action-checklist-wrap">
                {currentSandbox.checklist.map((item, idx) => (
                  <div key={idx} className="action-check-item">
                    <div className="check-icon-box">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="sidebar-session-export-card">
                <span className="export-card-title">⚡ Session Summary Export</span>
                <p className="export-card-desc">{currentSandbox.deliverablePreview}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          6. WHY MENTORSHIP — Contrasting Value Matrix
          ================================================================= */}
      <section className="why-mentorship-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">VALUE PROPOSITION</span>
          <h2 className="mentor-section-title">Why structured 1:1 mentorship wins</h2>
          <p className="mentor-section-desc">
            Asking for feedback on public Discord or Twitter yields superficial opinions. Cranial Space mentorship gives you context-aware, accountable craft evolution.
          </p>
        </div>

        <div className="comparison-matrix-deck">
          
          {/* Flawed Way: Public Forums & Casual Feedback */}
          <div className="matrix-card flawed-way">
            <div className="matrix-header-group">
              <span className="matrix-tag-pill flawed">Public Forums & Unstructured Feedback</span>
              <h3 className="matrix-title">Superficial, noisy, and uncommitted</h3>
            </div>

            <div className="matrix-points-list">
              <div className="matrix-point-row">
                <div className="point-icon-box bad"><X size={14} /></div>
                <div className="point-content">
                  <span className="point-title">Generic aesthetic comments</span>
                  <span className="point-desc">"Make the header bigger" or "I like the colors" without understanding business constraints.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box bad"><X size={14} /></div>
                <div className="point-content">
                  <span className="point-title">Zero context of product constraints</span>
                  <span className="point-desc">Feedback ignores technical debt, edge cases, legacy architecture, and business KPIs.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box bad"><X size={14} /></div>
                <div className="point-content">
                  <span className="point-title">No accountability or next steps</span>
                  <span className="point-desc">You are left with contradictory opinions and no prioritized action roadmap.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box bad"><X size={14} /></div>
                <div className="point-content">
                  <span className="point-title">Unverified reviewer qualifications</span>
                  <span className="point-desc">Advice often comes from juniors pretending to be experts with zero production pedigree.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Superior Way: Cranial Space Mentorship */}
          <div className="matrix-card cranial-way">
            <span className="cranial-way-badge">CRANIAL SPACE STANDARD</span>

            <div className="matrix-header-group">
              <span className="matrix-tag-pill superior">Vetted 1:1 Craft Mentorship</span>
              <h3 className="matrix-title">Rigorous, tactical, and career-defining</h3>
            </div>

            <div className="matrix-points-list">
              <div className="matrix-point-row">
                <div className="point-icon-box good"><Check size={14} strokeWidth={3} /></div>
                <div className="point-content">
                  <span className="point-title">Experienced practitioners from leading teams</span>
                  <span className="point-desc">Get teardowns from Design Directors and Staff UX leads at Figma, Stripe, and Linear.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box good"><Check size={14} strokeWidth={3} /></div>
                <div className="point-content">
                  <span className="point-title">Deep context-aware analysis</span>
                  <span className="point-desc">Mentors inspect your design tokens, product trade-offs, and user personas before advising.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box good"><Check size={14} strokeWidth={3} /></div>
                <div className="point-content">
                  <span className="point-title">Concrete, prioritized action roadmaps</span>
                  <span className="point-desc">Leave every session with annotated Figma components and measurable score milestones.</span>
                </div>
              </div>

              <div className="matrix-point-row">
                <div className="point-icon-box good"><Check size={14} strokeWidth={3} /></div>
                <div className="point-content">
                  <span className="point-title">Continuous accountability & career leveling</span>
                  <span className="point-desc">Track craft improvement across sessions tied to the Cranial Space ecosystem.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          7. MENTOR JOURNEY / CONTINUOUS GROWTH LOOP
          ================================================================= */}
      <section className="growth-loop-section">
        <div className="mentor-section-header">
          <span className="mentor-section-tag">CONTINUOUS CRAFT ACCELERATION</span>
          <h2 className="mentor-section-title">The Mentorship Growth Loop</h2>
          <p className="mentor-section-desc">
            Mentorship is not a one-off transaction. It is an integral engine inside the Cranial Space ecosystem that compounds with AI audits, community critique, and personal design practice.
          </p>
        </div>

        <div className="loop-interactive-deck">
          {/* Node Selector Row */}
          <div className="loop-nodes-row">
            {growthLoopSteps.map((step) => (
              <div
                key={step.id}
                className={`loop-node-card ${activeLoopStep === step.id ? 'active' : ''}`}
                onClick={() => setActiveLoopStep(step.id)}
              >
                <span className="node-num-tag">{step.name.split('.')[0]}</span>
                <div className="node-icon-box">
                  {step.id === 0 && <Search size={18} />}
                  {step.id === 1 && <MessageSquare size={18} />}
                  {step.id === 2 && <Layers size={18} />}
                  {step.id === 3 && <Code size={18} />}
                  {step.id === 4 && <TrendingUp size={18} />}
                  {step.id === 5 && <Award size={18} />}
                </div>
                <span className="node-name">{step.name.split('.')[1]}</span>
              </div>
            ))}
          </div>

          {/* Active Loop Step Detail Banner */}
          <div className="loop-active-detail-banner">
            <div className="banner-left-info">
              <span className="banner-step-badge">{growthLoopSteps[activeLoopStep].name}</span>
              <h4 className="banner-step-title">{growthLoopSteps[activeLoopStep].title}</h4>
              <p className="banner-step-desc">{growthLoopSteps[activeLoopStep].desc}</p>
            </div>

            <div className="banner-ecosystem-link">
              <span className="eco-pill-label">Cranial Space Integration</span>
              <span className="eco-pill-name">🔗 {growthLoopSteps[activeLoopStep].ecoLink}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          8. FINAL CTA BANNER — Asymmetric Cinematic Conversion Shield
          ================================================================= */}
      <section className="mentor-final-cta-section">
        <div className="final-cta-cinematic-card">
          <div className="cta-light-beam" />

          <div className="final-cta-text-side">
            <span className="final-cta-eyebrow">YOUR NEXT LEAP IN PRODUCT CRAFT</span>
            <h2 className="final-cta-headline">
              Your next breakthrough could start with one conversation.
            </h2>
            <p className="final-cta-subtext">
              Bring your toughest design problem, biggest career question, or next ambitious goal to someone who has built world-class products before.
            </p>

            <div className="final-cta-buttons-row">
              <a href="#find-mentor" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
                Find a Mentor
                <ArrowRight size={16} />
              </a>
              <Link to="/product" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
                Explore Cranial Space
              </Link>
            </div>
          </div>

          <div className="final-cta-interactive-side">
            <div className="cta-mentor-summary-box">
              <div className="summary-box-top">
                <div className="summary-halo-avatar">
                  <ShieldCheck size={24} />
                </div>
                <div className="summary-user-text">
                  <span className="summary-name">100% Satisfaction Guarantee</span>
                  <span className="summary-role">High-signal or full credit rebooking</span>
                </div>
              </div>

              <div className="summary-guarantee-bullets">
                <div className="guarantee-bullet">
                  <Check size={14} color="#10b981" />
                  <span>Vetted Staff & Principal Design Practitioners</span>
                </div>
                <div className="guarantee-bullet">
                  <Check size={14} color="#10b981" />
                  <span>Actionable Figma Roadmap Deliverables</span>
                </div>
                <div className="guarantee-bullet">
                  <Check size={14} color="#10b981" />
                  <span>Full Session Recording & AI Transcript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          BOOKING MODAL DIALOG
          ================================================================= */}
      {bookingMentor && (
        <div className="booking-modal-backdrop" onClick={() => setBookingMentor(null)}>
          <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="booking-modal-header">
              <h3 className="booking-modal-title">Book 1:1 Mentorship Session</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setBookingMentor(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="booking-success-state">
                <div className="success-check-icon">
                  <Check size={36} strokeWidth={3} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 850, color: 'var(--text-primary)' }}>
                  Session Reserved with {bookingMentor.name}!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
                  A calendar invite and shared Figma studio workbench link have been generated. Check your inbox for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="booking-modal-body">
                <div className="booking-mentor-preview">
                  <div className="mentor-avatar-halo" style={{ width: '48px', height: '48px' }}>
                    <img 
                      src={bookingMentor.avatar} 
                      alt={bookingMentor.name} 
                      className="mentor-avatar-photo"
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 850, color: 'var(--text-primary)' }}>{bookingMentor.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: 700 }}>{bookingMentor.company}</span>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      {bookingMentor.sessionTypes}
                    </div>
                  </div>
                </div>

                <div className="booking-field-group">
                  <label className="booking-label">Select Available Time Slot</label>
                  <div className="booking-slots-grid">
                    {['Tomorrow, 3:30 PM', 'Wednesday, 5:00 PM', 'Friday, 11:00 AM'].map(slot => (
                      <button
                        type="button"
                        key={slot}
                        className={`slot-select-btn ${selectedSlot === slot ? 'active' : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="booking-field-group">
                  <label className="booking-label">What specific problem do you want to solve in this session?</label>
                  <textarea
                    className="booking-textarea"
                    placeholder="e.g. Need a rigorous teardown of my B2B checkout flow, Figma variable tokens review, or prep for Staff designer interview defense..."
                    value={sessionAgenda}
                    onChange={(e) => setSessionAgenda(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="booking-confirm-btn">
                  Confirm 1:1 Session Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default MentorshipPage;
