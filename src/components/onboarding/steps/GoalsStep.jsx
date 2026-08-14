import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  MessageSquare, 
  FolderGit2, 
  Briefcase, 
  Compass, 
  Target, 
  GraduationCap, 
  Users,
  Check
} from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';

const GOAL_OPTIONS = [
  { id: 'improve-skills', label: 'Improve Design Skills', icon: Sparkles },
  { id: 'ux-feedback', label: 'Get Better UX Feedback', icon: MessageSquare },
  { id: 'build-portfolio', label: 'Build My Portfolio', icon: FolderGit2 },
  { id: 'prepare-interviews', label: 'Prepare for Interviews', icon: Briefcase },
  { id: 'find-mentor', label: 'Find a Mentor', icon: Compass },
  { id: 'participate-challenges', label: 'Participate in Challenges', icon: Target },
  { id: 'learn-designers', label: 'Learn from Designers', icon: GraduationCap },
  { id: 'grow-network', label: 'Grow My Network', icon: Users },
];

const GoalsStep = () => {
  const { data, updateData, nextStep, prevStep } = useOnboarding();

  const [selectedGoals, setSelectedGoals] = useState(
    Array.isArray(data.goals) ? data.goals : []
  );

  // Sync state if context changes
  useEffect(() => {
    if (Array.isArray(data.goals)) {
      setSelectedGoals(data.goals);
    }
  }, [data.goals]);

  const toggleGoal = (goalId) => {
    setSelectedGoals((prev) => {
      const exists = prev.includes(goalId);
      const updated = exists 
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId];
      
      updateData({ goals: updated });
      return updated;
    });
  };

  const isFormValid = selectedGoals.length > 0;

  const handleContinue = () => {
    if (!isFormValid) return;
    updateData({ goals: selectedGoals });
    nextStep();
  };

  return (
    <div className="onboarding-step-content goals-step-container">
      {/* Step Kicker */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <span>Step 4 • Your Goals</span>
      </div>

      {/* Header Group */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          What do you want to <span className="welcome-gradient-accent">achieve</span>?
        </h1>
        <p className="welcome-subtitle">
          Tell us what you're hoping to accomplish. We'll use this to personalize your Cranial Space experience.
        </p>
      </div>

      {/* Selection Section */}
      <div className="step-section">
        <div className="step-section-header">
          <h2 className="step-section-title">Primary Goals</h2>
          <span className="step-section-hint">
            {selectedGoals.length > 0 
              ? `${selectedGoals.length} SELECTED` 
              : 'SELECT AT LEAST ONE'}
          </span>
        </div>

        {/* Multi-select Grid */}
        <div className="goals-selection-grid">
          {GOAL_OPTIONS.map((item) => {
            const isSelected = selectedGoals.includes(item.id);
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`interest-card ${isSelected ? 'interest-card-selected' : ''}`}
                onClick={() => toggleGoal(item.id)}
                aria-pressed={isSelected}
              >
                <div className="interest-card-left">
                  <div className={`interest-icon-box ${isSelected ? 'icon-box-active' : ''}`}>
                    <IconComponent size={17} />
                  </div>
                  <span className="interest-card-label">{item.label}</span>
                </div>
                
                <div className={`interest-check-indicator ${isSelected ? 'indicator-active' : ''}`}>
                  {isSelected && <Check size={12} strokeWidth={3.5} />}
                </div>
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
          id="btn-goals-continue"
        >
          <span>Continue</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default GoalsStep;
