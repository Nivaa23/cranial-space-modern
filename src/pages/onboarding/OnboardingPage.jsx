import React from 'react';
import { OnboardingProvider, useOnboarding } from '../../context/OnboardingContext';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader';
import OnboardingProgress from '../../components/onboarding/OnboardingProgress';
import WelcomeStep from '../../components/onboarding/steps/WelcomeStep';
import ExperienceStep from '../../components/onboarding/steps/ExperienceStep';
import InterestsStep from '../../components/onboarding/steps/InterestsStep';
import '../../styles/Onboarding.css';

const OnboardingContent = () => {
  const { currentStep, totalSteps, prevStep, nextStep, goToStep } = useOnboarding();

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep />;
      case 2:
        return <ExperienceStep />;
      case 3:
        return <InterestsStep />;
      default:
        return (
          <div className="onboarding-step-content placeholder-step">
            <div className="welcome-kicker">
              <span>Step {currentStep} • Personalization</span>
            </div>
            <h1 className="welcome-title">Step {currentStep} of {totalSteps}</h1>
            <p className="welcome-subtitle">Personalizing your Cranial Space environment.</p>
            <div className="placeholder-box">
              <span>[Step {currentStep} will be established in subsequent stages]</span>
            </div>
            <div className="onboarding-actions-row">
              <button type="button" onClick={prevStep} className="btn-onboarding-secondary">
                Back
              </button>
              <button type="button" onClick={nextStep} className="btn-onboarding-primary">
                Continue
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="onboarding-page-wrapper cranial-product-theme" data-theme="product">
      {/* Subtle atmospheric ambient glows */}
      <div className="onboarding-ambient-glow-top" />
      <div className="onboarding-ambient-glow-bottom" />
      <div className="onboarding-grid-bg" />

      {/* Global Onboarding Shell Header */}
      <OnboardingHeader />

      {/* Main Centered Shell */}
      <main className="onboarding-main-container">
        {/* Progress Bar Component */}
        <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

        {/* Dynamic Step Container Card */}
        <div className="onboarding-card">
          {renderStepContent()}
        </div>
      </main>
    </div>
  );
};

const OnboardingPage = () => {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  );
};

export default OnboardingPage;
