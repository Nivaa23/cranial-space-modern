import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle2, RotateCcw } from 'lucide-react';
import '../../styles/Onboarding.css';

const DashboardPage = () => {
  const onboardingDataRaw = localStorage.getItem('cranial_onboarding_data');
  const onboardingData = onboardingDataRaw ? JSON.parse(onboardingDataRaw) : {};

  const handleResetOnboarding = () => {
    localStorage.removeItem('cranial_onboarding_completed');
    localStorage.removeItem('cranial_onboarding_step');
    localStorage.removeItem('cranial_onboarding_data');
    window.location.href = '/onboarding';
  };

  return (
    <div className="onboarding-page-wrapper cranial-product-theme" data-theme="product">
      <div className="onboarding-ambient-glow-top" />
      <div className="onboarding-grid-bg" />

      <header className="onboarding-header">
        <div className="onboarding-header-brand">
          <Link to="/" className="onboarding-logo-link">
            <div className="onboarding-logo-icon">C</div>
            <span className="onboarding-logo-text">Cranial Space</span>
          </Link>
          <span className="onboarding-badge">
            <Sparkles size={11} className="onboarding-badge-icon" />
            <span>Product Workspace</span>
          </span>
        </div>

        <div className="onboarding-header-actions">
          <button 
            type="button" 
            onClick={handleResetOnboarding}
            className="btn-onboarding-skip-all"
            title="Restart the onboarding flow"
          >
            <RotateCcw size={13} />
            <span>Restart Onboarding</span>
          </button>
        </div>
      </header>

      <main className="onboarding-main-container">
        <div className="onboarding-card" style={{ textAlign: 'center', padding: '48px 36px' }}>
          <div className="welcome-kicker" style={{ margin: '0 auto 16px auto' }}>
            <CheckCircle2 size={13} color="#22c55e" />
            <span>Authenticated Product Environment</span>
          </div>

          <h1 className="welcome-title" style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            Designer Dashboard
          </h1>
          <p className="welcome-subtitle" style={{ maxWidth: '480px', margin: '0 auto 28px auto' }}>
            Welcome to your personalized workspace. The full product dashboard will be designed and implemented in subsequent stages.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-onboarding-secondary">
              <ArrowLeft size={15} />
              <span>Back to Home</span>
            </Link>
            <button 
              type="button" 
              onClick={handleResetOnboarding} 
              className="btn-onboarding-primary"
            >
              <RotateCcw size={15} />
              <span>Re-run Onboarding</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
