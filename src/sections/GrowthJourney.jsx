import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Sparkles, MessageSquare, Edit3, TrendingUp, Trophy, GraduationCap } from 'lucide-react';
import '../styles/GrowthJourney.css';

const GrowthJourney = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      num: 1,
      icon: <Upload size={16} />,
      title: "Upload Design",
      desc: "Drag-and-drop your designs or sync directly with Figma.",
      extra: "Supports PDF, Figma frames, and direct PNG/JPG link synchronization.",
      pos: "up"
    },
    {
      num: 2,
      icon: <Sparkles size={16} />,
      title: "AI Heuristics",
      desc: "Sub-second checks on WCAG access & tap targets.",
      extra: "Powered by vision models tuned on Apple Human Interface guidelines.",
      pos: "down"
    },
    {
      num: 3,
      icon: <MessageSquare size={16} />,
      title: "Community Note",
      desc: "Vetted peer circle critiques layout structure.",
      extra: "Invite-only workspace blocks vanity metrics to keep feedback actionable.",
      pos: "up"
    },
    {
      num: 4,
      icon: <Edit3 size={16} />,
      title: "Iterate & Refine",
      desc: "Apply feedback changes inside sandbox layers.",
      extra: "Perform real-time alignment and style tuning in our browser playground.",
      pos: "down"
    },
    {
      num: 5,
      icon: <TrendingUp size={16} />,
      title: "Boost UX Score",
      desc: "Your instinct metrics scale based on resolutions.",
      extra: "Dynamic benchmark score shows how your designs match veteran models.",
      pos: "up"
    },
    {
      num: 6,
      icon: <Trophy size={16} />,
      title: "Climb Standings",
      desc: "Gain status badges through weekly design sprints.",
      extra: "Win community challenges and showcase certified design instinct tiers.",
      pos: "down"
    },
    {
      num: 7,
      icon: <GraduationCap size={16} />,
      title: "Lead as Mentor",
      desc: "Unlock paid 1-on-1 reviews for growing peers.",
      extra: "Top 5% designers monetize their critique and guide new builders.",
      pos: "up"
    }
  ];

  return (
    <section className="journey-section" id="journey">
      <div className="section-header-editorial">
        <span className="section-kicker">Interactive Evolution</span>
        <h2 className="section-title-large">
          The path of an <br />
          <span className="gradient-text">uncompromising product designer.</span>
        </h2>
      </div>

      <div className="journey-timeline-container">
        {/* Central connecting line on Desktop */}
        <div className="journey-horizontal-line">
          <motion.div 
            className="journey-line-progress"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="journey-steps-wrapper">
          {steps.map((step, idx) => {
            const isUp = step.pos === "up";
            const isHovered = hoveredStep === step.num;
            const isDimmed = hoveredStep !== null && hoveredStep !== step.num;

            // Compute exact horizontal position (10% to 90%)
            const leftPct = 10 + idx * 13.333;

            return (
              <motion.div 
                key={step.num}
                className={`journey-step-node node-${step.pos} ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                style={{ left: `${leftPct}%` }}
                initial={{ opacity: 0, y: isUp ? -30 : 30, x: "-50%", scale: 1 }}
                whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                whileHover={{ scale: 1.05, y: isUp ? -6 : 6, x: "-50%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, type: "spring", stiffness: 90, damping: 15 }}
                onMouseEnter={() => setHoveredStep(step.num)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {isUp ? (
                  <>
                    {/* Step Counter */}
                    <div className="step-counter-floating">0{step.num}</div>

                    {/* Step Card */}
                    <div className="journey-step-card glass-panel-journey">
                      <div className="step-badge-row">
                        <div className="step-icon-wrapper">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="step-card-title">{step.title}</h3>
                      <p className="step-card-desc">{step.desc}</p>
                      
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            className="step-card-extra"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="step-extra-text">{step.extra}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Vertical Connector Line linking bottom of card to timeline */}
                    <div className="step-link-line line-up">
                      <span className="step-link-dot" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Vertical Connector Line linking timeline to top of card content */}
                    <div className="step-link-line line-down">
                      <span className="step-link-dot" />
                    </div>

                    {/* Step Counter */}
                    <div className="step-counter-floating">0{step.num}</div>

                    {/* Step Card */}
                    <div className="journey-step-card glass-panel-journey">
                      <div className="step-badge-row">
                        <div className="step-icon-wrapper">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="step-card-title">{step.title}</h3>
                      <p className="step-card-desc">{step.desc}</p>
                      
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            className="step-card-extra"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="step-extra-text">{step.extra}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
