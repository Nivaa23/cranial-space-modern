import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  Award 
} from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';

const EXPERIENCE_OPTIONS = [
  { 
    id: 'fun', 
    title: 'Designing for Fun', 
    description: "I'm exploring design and learning the fundamentals.",
    icon: Sparkles 
  },
  { 
    id: 'early-career', 
    title: 'Early Career', 
    description: "I'm building my skills and starting to work on real projects.",
    icon: BookOpen 
  },
  { 
    id: 'growing', 
    title: 'Growing Designer', 
    description: "I have some experience and want to sharpen my craft.",
    icon: TrendingUp 
  },
  { 
    id: 'experienced', 
    title: 'Experienced Designer', 
    description: "I'm actively designing products and looking to level up.",
    icon: Briefcase 
  },
  { 
    id: 'senior-lead', 
    title: 'Senior / Lead', 
    description: "I have significant experience and want to refine my expertise or help others grow.",
    icon: Award 
  },
];

const ExperienceLevelStep = () => {
  const { data, updateData, nextStep, prevStep } = useOnboarding();

  const [selectedLevel, setSelectedLevel] = useState(data.experienceLevel || '');

  // Sync state if context changes
  useEffect(() => {
    if (data.experienceLevel) {
      setSelectedLevel(data.experienceLevel);
    }
  }, [data.experienceLevel]);

  const handleSelect = (levelId) => {
    setSelectedLevel(levelId);
    updateData({ experienceLevel: levelId });
  };

  const isFormValid = Boolean(selectedLevel);

  const handleContinue = () => {
    if (!isFormValid) return;
    updateData({ experienceLevel: selectedLevel });
    nextStep();
  };

  return (
    <div className="onboarding-step-content experience-level-step-container">
      {/* Step Kicker */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <span>Step 5 • Experience Level</span>
      </div>

      {/* Header Group */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          Where are you in your <span className="welcome-gradient-accent">design journey</span>?
        </h1>
        <p className="welcome-subtitle">
          Help us understand your experience so we can tailor your learning, feedback, and mentorship recommendations.
        </p>
      </div>

      {/* Experience level list */}
      <div className="step-section">
        <div className="experience-level-list">
          {EXPERIENCE_OPTIONS.map((item) => {
            const isSelected = selectedLevel === item.id;
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`experience-level-card ${isSelected ? 'card-selected' : ''}`}
                onClick={() => handleSelect(item.id)}
                aria-pressed={isSelected}
              >
                <div className="experience-level-card-left">
                  <div className={`experience-level-icon-box ${isSelected ? 'icon-box-active' : ''}`}>
                    <IconComponent size={19} />
                  </div>
                  <div className="experience-level-text">
                    <span className="experience-level-title">{item.title}</span>
                    <span className="experience-level-desc">{item.description}</span>
                  </div>
                </div>
                
                {isSelected && (
                  <div className="experience-level-indicator">
                    Selected
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Actions Row */}
      <div className="onboarding-actions-row">
        <button 
          type="button" 
          onClick={prevStep}
          className="btn-onboarding-secondary"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <button 
          type="button" 
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`btn-onboarding-primary ${!isFormValid ? 'btn-disabled' : ''}`}
          id="btn-experience-level-continue"
        >
          <span>Continue</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceLevelStep;
