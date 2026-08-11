import React from 'react';
import { ArrowRight, Zap, Target, Users, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { useNavigate } from 'react-router-dom';

const VALUE_PILLARS = [
  {
    icon: Zap,
    color: '#818cf8',
    bgColor: 'rgba(129, 140, 248, 0.12)',
    title: 'Adaptive AI Usability Engine',
    description: 'Instant visual hierarchy, accessibility, and contrast critique tailored to your seniority.',
  },
  {
    icon: Target,
    color: '#38bdf8',
    bgColor: 'rgba(56, 189, 248, 0.12)',
    title: 'Targeted Weekly Challenges',
    description: 'Curated design sprints focused on the exact skill gaps and domains you want to master.',
  },
  {
    icon: Users,
    color: '#34d399',
    bgColor: 'rgba(52, 211, 153, 0.12)',
    title: 'Curated 1-on-1 Mentorship',
    description: 'Personalized matching with principal design leads at Figma, Linear, and Stripe.',
  },
];

const WelcomeStep = () => {
  const { nextStep, completeOnboarding } = useOnboarding();
  const navigate = useNavigate();

  const handleSkipAll = () => {
    completeOnboarding();
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-step-content welcome-step-container">
      {/* Kicker badge */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <Sparkles size={13} className="welcome-kicker-icon" />
        <span>Step 1 • Welcome to your new workspace</span>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          Welcome to <span className="welcome-gradient-accent">Cranial Space.</span>
        </h1>
        <p className="welcome-subtitle">
          Let’s take 2 quick minutes to personalize your experience so your dashboard, 
          AI critique engine, community challenges, and mentors adapt to your craft.
        </p>
      </div>

      {/* Value Proposition Cards */}
      <div className="welcome-pillars-grid">
        {VALUE_PILLARS.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div key={idx} className="welcome-pillar-card">
              <div 
                className="welcome-pillar-icon-box"
                style={{ backgroundColor: pillar.bgColor, color: pillar.color }}
              >
                <IconComp size={20} />
              </div>
              <div className="welcome-pillar-text">
                <h2 className="welcome-pillar-title">{pillar.title}</h2>
                <p className="welcome-pillar-desc">{pillar.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance Metadata Strip */}
      <div className="welcome-meta-strip">
        <div className="welcome-meta-item">
          <Clock size={14} className="welcome-meta-icon" />
          <span>Estimated time: <strong>~2 minutes</strong></span>
        </div>
        <div className="welcome-meta-divider" />
        <div className="welcome-meta-item">
          <ShieldCheck size={14} className="welcome-meta-icon" />
          <span>You can change these preferences anytime in settings</span>
        </div>
      </div>

      {/* Navigation & Action Footer */}
      <div className="onboarding-actions-row">
        <button 
          type="button" 
          onClick={handleSkipAll}
          className="btn-onboarding-secondary"
        >
          Skip for now
        </button>

        <button 
          type="button" 
          onClick={nextStep}
          className="btn-onboarding-primary"
          id="btn-welcome-start"
        >
          <span>Let's Get Started</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default WelcomeStep;
