import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HelpCircle, UserX, LineChart, ShieldAlert, Sparkles } from 'lucide-react';
import '../styles/Problem.css';

const Problem = () => {
  const problems = [
    {
      num: "01",
      icon: <Heart size={20} className="problem-icon-inner text-rose" />,
      title: "Clout over Critique",
      description: "Designers receive likes, fire emojis, and superficial appreciation instead of rigorous, actionable feedback. Creative growth is suffocated by vanity metrics.",
      mock: (
        <div className="problem-mock-bubble bubble-clout">
          <div className="bubble-header">
            <span className="user-dot bg-blue" />
            <span className="bubble-name">feedback_seeker.fig</span>
          </div>
          <div className="bubble-body">
            <p>How's the layout balance here?</p>
            <div className="reactions-container">
              <span className="badge-like"><Heart size={10} fill="currentColor" /> 142</span>
              <span className="badge-comment">🔥 "Looks clean!"</span>
              <span className="badge-comment">🚀 "Amazing stuff!"</span>
            </div>
            <div className="critique-empty">
              <span>0 actionable UX suggestions received</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "02",
      icon: <HelpCircle size={20} className="problem-icon-inner text-sky" />,
      title: "The Portfolio Paradox",
      description: "Portfolios act as a static repository of polished, finalized work. They showcase your final decisions but do absolutely nothing to help you debug and refine your process.",
      mock: (
        <div className="problem-mock-bubble bubble-portfolio">
          <div className="portfolio-bar">
            <div className="portfolio-dot" />
            <div className="portfolio-dot" />
            <div className="portfolio-dot" />
          </div>
          <div className="portfolio-content">
            <div className="portfolio-card-mock">
              <div className="card-mock-img" />
              <span className="card-mock-title">portfolio_v2_final.pdf</span>
              <span className="card-mock-status">No active feedback loops found.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      icon: <UserX size={20} className="problem-icon-inner text-purple" />,
      title: "Mentorship is a Lottery",
      description: "Finding quality, focused mentors from top tier design teams is incredibly difficult. You are left cold-messaging leaders on LinkedIn, facing silent inbox death.",
      mock: (
        <div className="problem-mock-bubble bubble-mentor">
          <div className="mentor-message sent">
            <span>Hey Alex! Would love 10 mins to review my spacing...</span>
          </div>
          <div className="mentor-message status">
            <span>Read 3 weeks ago</span>
          </div>
        </div>
      )
    },
    {
      num: "04",
      icon: <LineChart size={20} className="problem-icon-inner text-orange" />,
      title: "Growth is Invisible",
      description: "Without objective industry benchmarking, measuring your design intuition is purely subjective. You design in a vacuum, unsure if you're actually improving.",
      mock: (
        <div className="problem-mock-bubble bubble-growth">
          <div className="growth-graph">
            <svg viewBox="0 0 100 40" className="growth-svg">
              <path d="M 0,35 Q 25,30 50,32 T 100,34" fill="none" stroke="rgba(15, 23, 42, 0.2)" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="50" cy="32" r="3" fill="#f59e0b" />
            </svg>
            <span className="graph-label">Stagnant progress baseline</span>
          </div>
        </div>
      )
    },
    {
      num: "05",
      icon: <ShieldAlert size={20} className="problem-icon-inner text-rose" />,
      title: "Isolation & Blindspots",
      description: "Designing isolated in solo loops hides usability blindspots until they slip into client code. Catching styling errors early prevents costly rewrites.",
      mock: (
        <div className="problem-mock-bubble bubble-isolation">
          <div className="isolation-indicator">
            <span className="pulsing-radar" />
            <span className="isolation-text">Silo Mode Active</span>
          </div>
        </div>
      )
    },
    {
      num: "06",
      icon: <Sparkles size={20} className="problem-icon-inner text-sky" />,
      title: "Heuristics Overlooked",
      description: "Vague feedback hides design flaws. Without checking WCAG contrast rules and touch guidelines, UX flaws bypass testing and frustrate users.",
      mock: (
        <div className="problem-mock-bubble bubble-heuristics">
          <div className="heuristic-box">
            <span className="warning-pill">Contrast: 2.1:1</span>
            <span className="fail-badge">WCAG FAIL</span>
          </div>
        </div>
      )
    }
  ];

  // Tripled list for infinite looping scrolling
  const tripledProblems = [...problems, ...problems, ...problems];

  return (
    <section className="problem-section" id="problems">
      <div className="section-header-editorial">
        <motion.span 
          className="section-kicker"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The Unspoken Reality
        </motion.span>
        <motion.h2 
          className="section-title-large"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          Product design has a <br />
          <span className="gradient-text">feedback problem.</span>
        </motion.h2>
      </div>

      <div className="problems-carousel-container">
        <div className="problems-carousel-track">
          {tripledProblems.map((prob, index) => (
            <div 
              key={`${prob.num}-${index}`}
              className="editorial-card"
            >
              <div className="editorial-card-inner">
                <div className="card-top-row">
                  <span className="editorial-number">{prob.num}</span>
                  <div className="problem-icon-wrapper">{prob.icon}</div>
                </div>
                <div className="card-mid-row">
                  <h3 className="problem-card-title">{prob.title}</h3>
                  <p className="problem-card-desc">{prob.description}</p>
                </div>
                <div className="card-bottom-visual">
                  {prob.mock}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
