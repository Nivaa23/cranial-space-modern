import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Layout, 
  Compass, 
  Layers, 
  MousePointer, 
  Search, 
  Eye, 
  Lightbulb, 
  PlaySquare, 
  Sparkles, 
  TrendingUp, 
  FolderGit2, 
  Briefcase,
  Check
} from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';

const INTEREST_OPTIONS = [
  { id: 'ui-design', label: 'UI Design', icon: Layout },
  { id: 'ux-design', label: 'UX Design', icon: Compass },
  { id: 'design-systems', label: 'Design Systems', icon: Layers },
  { id: 'interaction-design', label: 'Interaction Design', icon: MousePointer },
  { id: 'ux-research', label: 'UX Research', icon: Search },
  { id: 'accessibility', label: 'Accessibility', icon: Eye },
  { id: 'product-thinking', label: 'Product Thinking', icon: Lightbulb },
  { id: 'prototyping', label: 'Prototyping', icon: PlaySquare },
  { id: 'visual-design', label: 'Visual Design', icon: Sparkles },
  { id: 'design-strategy', label: 'Design Strategy', icon: TrendingUp },
  { id: 'portfolio-building', label: 'Portfolio Building', icon: FolderGit2 },
  { id: 'career-growth', label: 'Career Growth', icon: Briefcase },
];

const InterestsStep = () => {
  const { data, updateData, nextStep, prevStep } = useOnboarding();

  const [selectedInterests, setSelectedInterests] = useState(
    Array.isArray(data.interests) ? data.interests : []
  );

  // Sync state if context changes
  useEffect(() => {
    if (Array.isArray(data.interests)) {
      setSelectedInterests(data.interests);
    }
  }, [data.interests]);

  const toggleInterest = (interestId) => {
    setSelectedInterests((prev) => {
      const exists = prev.includes(interestId);
      const updated = exists 
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId];
      
      updateData({ interests: updated });
      return updated;
    });
  };

  const isFormValid = selectedInterests.length > 0;

  const handleContinue = () => {
    if (!isFormValid) return;
    updateData({ interests: selectedInterests });
    nextStep();
  };

  return (
    <div className="onboarding-step-content interests-step-container">
      {/* Step Kicker */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <span>Step 3 • Areas of Interest</span>
      </div>

      {/* Header Group */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          What do you want to <span className="welcome-gradient-accent">get better at</span>?
        </h1>
        <p className="welcome-subtitle">
          Choose the areas you'd like to explore or improve. We'll use these to personalize your Cranial Space experience.
        </p>
      </div>

      {/* Selection Section */}
      <div className="step-section">
        <div className="step-section-header">
          <h2 className="step-section-title">Focus Areas</h2>
          <span className="step-section-hint">
            {selectedInterests.length > 0 
              ? `${selectedInterests.length} selected` 
              : 'Select at least one'}
          </span>
        </div>

        {/* Multi-select Grid */}
        <div className="interests-selection-grid">
          {INTEREST_OPTIONS.map((item) => {
            const isSelected = selectedInterests.includes(item.id);
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`interest-card ${isSelected ? 'interest-card-selected' : ''}`}
                onClick={() => toggleInterest(item.id)}
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
          id="btn-interests-continue"
        >
          <span>Continue</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default InterestsStep;
