import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  TrendingUp, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  ThumbsUp, 
  Focus,
  Lock,
  Layers,
  GraduationCap
} from 'lucide-react';
import '../styles/TrustConversion.css';

// Animated Counter helper for Section 2
const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    // Parse the number out of strings like "12,000+", "94%", etc.
    const numericString = value.replace(/[^0-9]/g, '');
    const end = parseInt(numericString, 10);
    if (isNaN(end) || end === 0) {
      return;
    }

    let start = 0;
    const totalMs = duration * 1000;
    const intervalTime = 30; // 33 fps
    const totalSteps = totalMs / intervalTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  if (!isInView) {
    return <span ref={ref}>0</span>;
  }

  // Format back with formatting
  const suffix = value.replace(/[0-9,]/g, '');
  const hasComma = value.includes(',');
  const formattedCount = hasComma ? count.toLocaleString() : count;

  return <span ref={ref}>{formattedCount}{suffix}</span>;
};

const TrustConversion = () => {
  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);
  
  // Hovered testimonial state
  const [hoveredStory, setHoveredStory] = useState(null);

  const stories = [
    {
      id: 1,
      name: "Sarah Lin",
      role: "Senior Product Designer at Vercel",
      avatar: "SL",
      avatarBg: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      challenge: "Spent days debating spacing and tap target consistency with engineering without concrete usability benchmarks.",
      improvement: "Aligned the team around verifiable WCAG targets in seconds using Heuristic Auditor feedback.",
      scoreBefore: 72,
      scoreAfter: 94,
      quote: "AI Heuristics saved us hours of design handoff arguments and made our final layouts completely indisputable."
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Lead Mobile Architect",
      avatar: "MV",
      avatarBg: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
      challenge: "Felt isolated working solo; got generic 'looks clean' responses on traditional portfolio sites.",
      improvement: "Engaged in double-blind feedback sprints that surfaced actionable interface bugs.",
      scoreBefore: 64,
      scoreAfter: 89,
      quote: "The targeted critique circles completely transformed how I structure system-level layout decisions."
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Core UX Designer at Stripe",
      avatar: "ER",
      avatarBg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      challenge: "Portfolios were static archives of screenshots; struggled to prove active skill growth to hiring managers.",
      improvement: "Maintained a live growth curve demonstrating rapid iterations on real-time UX benchmarks.",
      scoreBefore: 78,
      scoreAfter: 96,
      quote: "Cranial Space shows how I learn and solve constraints, not just how I assemble polished templates."
    }
  ];

  const faqs = [
    {
      q: "How does AI Review work?",
      a: "Our AI engine employs computer vision models trained on thousands of vetted interface patterns and operating system human interface guidelines. Once you sync a layout, it generates spatial overlays highlight tap target issues, contrast violations, visual hierarchies, and alignment anomalies in less than a second."
    },
    {
      q: "How is UX Score calculated?",
      a: "The UX Score is calculated using an aggregate benchmark scoring engine. It analyzes three major pillars: Technical accessibility (WCAG AA/AAA targets), Layout Heuristics (based on industry-vetted grids/spacing guides), and community critique feedback weightings. Scores range from 0 to 100."
    },
    {
      q: "Can I upload Figma files?",
      a: "Absolutely. Our platform integrates directly via a Figma Plugin. You can sync frames with a single hotkey, or drag-and-drop standard PNG/JPG exports directly. We support automatic versioning to map your design progression over time."
    },
    {
      q: "Can beginners join?",
      a: "Yes! While Cranial Space is built for designers aiming for senior and lead roles, the structured feedback circles and real-time AI guardrails are one of the fastest ways to build design discipline and instinct from the ground up."
    },
    {
      q: "Is my work private?",
      a: "Yes, by default, all uploads are private. You can choose to invite specific peers to your circle, submit design variations anonymously, or publish completed milestones to show off on your public profile timeline."
    },
    {
      q: "Can I become a mentor?",
      a: "Once your instinct metrics reach the top 5% of active designers globally (UX Score > 90 and high feedback accuracy indicators), you unlock the ability to host paid 1-on-1 critique sessions and lead mentoring challenges."
    }
  ];

  return (
    <div className="trust-conversion-chapter">
      
      {/* SECTION 1: REAL GROWTH STORIES */}
      <section className="growth-stories-section">
        <div className="section-header-editorial">
          <span className="section-kicker">Verifiable Outcomes</span>
          <h2 className="section-title-large">
            Real designer <span className="gradient-text">transformations.</span>
          </h2>
          <p className="section-subtitle">
            How three uncompromising designers moved from guessing to measurable mastery.
          </p>
        </div>

        <div className="stories-container">
          {stories.map((story) => {
            const isHovered = hoveredStory === story.id;
            
            return (
              <div 
                key={story.id} 
                className={`story-card glass-panel-journey ${isHovered ? 'story-expanded' : ''}`}
                onMouseEnter={() => setHoveredStory(story.id)}
                onMouseLeave={() => setHoveredStory(null)}
              >
                {/* Score Progression Header */}
                <div className="story-score-header">
                  <div className="score-badge before-badge">
                    <span className="badge-lbl">Before</span>
                    <span className="story-score-val">{story.scoreBefore}</span>
                  </div>
                  <div className="score-arrow">
                    <ArrowRight size={14} className="arrow-pulse" />
                  </div>
                  <div className="score-badge after-badge">
                    <span className="badge-lbl">After</span>
                    <span className="story-score-val glow-value">{story.scoreAfter} UX Score</span>
                  </div>
                </div>

                {/* Main Quote */}
                <blockquote className="story-blockquote">
                  "{story.quote}"
                </blockquote>

                {/* Expandable Case Study details */}
                <div className="story-case-study">
                  <div className="case-step">
                    <div className="case-step-label">
                      <span className="dot-red" /> The Challenge
                    </div>
                    <p className="case-step-desc">{story.challenge}</p>
                  </div>
                  
                  <div className="case-step">
                    <div className="case-step-label">
                      <span className="dot-green" /> The Evolution
                    </div>
                    <p className="case-step-desc">{story.improvement}</p>
                  </div>
                </div>

                {/* Profile Footer */}
                <div className="story-profile-footer">
                  <div 
                    className="profile-avatar"
                    style={{ background: story.avatarBg }}
                  >
                    {story.avatar}
                  </div>
                  <div className="profile-info">
                    <h4 className="profile-name">{story.name}</h4>
                    <p className="profile-role">{story.role}</p>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="card-hover-radial" />
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: WHY DESIGNERS STAY */}
      <section className="stay-comparison-section">
        <div className="section-header-editorial">
          <span className="section-kicker">Alternative Realities</span>
          <h2 className="section-title-large">
            Why designers <span className="gradient-text">upgrade.</span>
          </h2>
        </div>

        <div className="comparison-layout">
          {/* Left Column: Traditional */}
          <div className="comparison-column traditional-column">
            <div className="column-header">
              <h3 className="column-title">Traditional Portfolio Platforms</h3>
              <p className="column-subtitle">Designed for vanity, not progress.</p>
            </div>
            
            <div className="comparison-card-stack">
              <div className="comparison-item">
                <div className="item-title">
                  <ShieldAlert className="item-icon-bad" size={16} />
                  Likes & Views
                </div>
                <p className="item-desc">
                  Vanity metrics boost dopamine but offer zero guidance on visual hierarchy or product flaws.
                </p>
              </div>

              <div className="comparison-item">
                <div className="item-title">
                  <ShieldAlert className="item-icon-bad" size={16} />
                  Static Screenshot Archives
                </div>
                <p className="item-desc">
                  Showcases final, polished mockups but hides the iteration trail and decision architecture.
                </p>
              </div>

              <div className="comparison-item">
                <div className="item-title">
                  <ShieldAlert className="item-icon-bad" size={16} />
                  Working in Isolation
                </div>
                <p className="item-desc">
                  Decisions are made in a vacuum, relying only on subjective instincts and luck.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cranial Space */}
          <div className="comparison-column cranial-column">
            <div className="column-header">
              <h3 className="column-title text-glow">Cranial Space Ecosystem</h3>
              <p className="column-subtitle">A sandbox engineered for mastery.</p>
            </div>
            
            <div className="comparison-card-stack">
              <div className="comparison-item highlighted-item">
                <div className="item-title">
                  <CheckCircle2 className="item-icon-good" size={16} />
                  Actionable Usability Diagnostics
                </div>
                <p className="item-desc">
                  Concrete visual highlights pinpointing contrast issues, target errors, and alignment offsets instantly.
                </p>
              </div>

              <div className="comparison-item highlighted-item">
                <div className="item-title">
                  <CheckCircle2 className="item-icon-good" size={16} />
                  Dynamic Version Chronologies
                </div>
                <p className="item-desc">
                  An active timeline plotting your design revisions, showing how your UX metrics improved over time.
                </p>
              </div>

              <div className="comparison-item highlighted-item">
                <div className="item-title">
                  <CheckCircle2 className="item-icon-good" size={16} />
                  Double-Blind Circle Critiques
                </div>
                <p className="item-desc">
                  Secure peer networks reviewing layouts objectively, focusing on user experience instead of aesthetics.
                </p>
              </div>
            </div>
            <div className="column-glow" />
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ */}
      <section className="faq-section" id="faqs">
        <div className="section-header-editorial">
          <span className="section-kicker">Common Inquiries</span>
          <h2 className="section-title-large">
            Answering <span className="gradient-text">the details.</span>
          </h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                onClick={() => setOpenFaq(isOpen ? null : index)}
              >
                <button className="faq-trigger" aria-expanded={isOpen}>
                  <span className="faq-question">{faq.q}</span>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={18} className="chevron-icon" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-content-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: COMMUNITY MOMENTUM (Moved to the end of the dark section) */}
      <section className="community-momentum-section">
        <div className="momentum-bg-glow" />
        
        <div className="section-header-editorial text-center">
          <span className="section-kicker">Live Momentum</span>
          <h2 className="section-title-large">
            A network built on <span className="gradient-text">excellence.</span>
          </h2>
        </div>

        <div className="stats-dashboard">
          <div className="stat-card">
            <div className="stat-value-container">
              <AnimatedCounter value="12,000+" />
            </div>
            <div className="stat-label">AI Reviews Completed</div>
            <div className="stat-detail">Automated tap, color & contrast audits</div>
          </div>

          <div className="stat-card">
            <div className="stat-value-container">
              <AnimatedCounter value="48,000+" />
            </div>
            <div className="stat-label">Feedback Comments</div>
            <div className="stat-detail">Vetted, contextual peer reviews</div>
          </div>

          <div className="stat-card">
            <div className="stat-value-container">
              <AnimatedCounter value="3,500+" />
            </div>
            <div className="stat-label">Designers Growing</div>
            <div className="stat-detail">From indie builders to FAANG leads</div>
          </div>

          <div className="stat-card">
            <div className="stat-value-container">
              <AnimatedCounter value="2,400+" />
            </div>
            <div className="stat-label">Mentorship Sessions</div>
            <div className="stat-detail">High-fidelity 1-on-1 critique hours</div>
          </div>

          <div className="stat-card full-width-stat">
            <div className="stat-value-container gradient-text">
              <AnimatedCounter value="94%" />
            </div>
            <div className="stat-label">Average UX Score Improvement</div>
            <div className="stat-detail">Measured across designer profiles over 90 days of consistent critique</div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default TrustConversion;
