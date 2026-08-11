import React from 'react';

const STEP_LABELS = [
  'Welcome',
  'Experience',
  'Interests',
  'Goals',
  'Profile',
  'Summary'
];

const OnboardingProgress = ({ currentStep, totalSteps = 6 }) => {
  // Step 1 is welcome, so progress calculation reflects progress through setup
  const progressPercent = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="onboarding-progress-wrapper" aria-label={`Step ${currentStep} of ${totalSteps}: ${STEP_LABELS[currentStep - 1] || ''}`}>
      <div className="onboarding-progress-header">
        <span className="onboarding-step-count">
          <span className="step-current">Step {currentStep}</span>
          <span className="step-divider">/</span>
          <span className="step-total">{totalSteps}</span>
          <span className="step-title-separator">•</span>
          <span className="step-label-text">{STEP_LABELS[currentStep - 1]}</span>
        </span>
        <span className="onboarding-percentage-badge">
          {progressPercent}% Complete
        </span>
      </div>

      {/* Segmented / continuous responsive progress track */}
      <div className="onboarding-progress-track">
        <div 
          className="onboarding-progress-fill" 
          style={{ width: `${Math.max(progressPercent, 4)}%` }} 
        />
        {/* Step indicator markers */}
        <div className="onboarding-step-markers">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNum = idx + 1;
            const isPassed = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            return (
              <div 
                key={stepNum} 
                className={`onboarding-step-dot ${isPassed ? 'dot-passed' : ''} ${isCurrent ? 'dot-current' : ''}`}
                title={`Step ${stepNum}: ${STEP_LABELS[idx]}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
