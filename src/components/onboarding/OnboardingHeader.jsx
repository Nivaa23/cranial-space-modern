import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, LogOut, ArrowRight } from 'lucide-react';
import { useOnboarding } from '../../context/OnboardingContext';

const OnboardingHeader = () => {
  const navigate = useNavigate();
  const { completeOnboarding } = useOnboarding();

  const handleSkipToDashboard = () => {
    // Allows user to skip setup and visit dashboard directly
    completeOnboarding();
    navigate('/dashboard');
  };

  return (
    <header className="onboarding-header">
      <div className="onboarding-header-brand">
        <Link to="/" className="onboarding-logo-link" title="Cranial Space Homepage">
          <div className="onboarding-logo-icon">C</div>
          <span className="onboarding-logo-text">Cranial Space</span>
        </Link>
        <span className="onboarding-badge">
          <Sparkles size={11} className="onboarding-badge-icon" />
          <span>Product Onboarding</span>
        </span>
      </div>

      <div className="onboarding-header-actions">
        <button 
          type="button" 
          onClick={handleSkipToDashboard}
          className="btn-onboarding-skip-all"
          title="Skip setup and go directly to Dashboard"
        >
          <span>Skip to Dashboard</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </header>
  );
};

export default OnboardingHeader;
