import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Layout, 
  Layers, 
  Search, 
  Sparkles, 
  MousePointer, 
  GraduationCap, 
  Briefcase, 
  MoreHorizontal,
  Check
} from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';

const DESIGN_ROLES = [
  { id: 'Product Designer', label: 'Product Designer', icon: Layers, desc: 'End-to-end product strategy & UX' },
  { id: 'UI/UX Designer', label: 'UI/UX Designer', icon: Layout, desc: 'Interface aesthetics & user flows' },
  { id: 'UX Researcher', label: 'UX Researcher', icon: Search, desc: 'User insights, testing & synthesis' },
  { id: 'Visual Designer', label: 'Visual Designer', icon: Sparkles, desc: 'Brand systems, graphics & craft' },
  { id: 'Interaction Designer', label: 'Interaction Designer', icon: MousePointer, desc: 'Micro-animations & prototypes' },
  { id: 'Design Student', label: 'Design Student', icon: GraduationCap, desc: 'Building skills & entering craft' },
  { id: 'Design Manager', label: 'Design Manager', icon: Briefcase, desc: 'Team leadership & design ops' },
  { id: 'Other', label: 'Other', icon: MoreHorizontal, desc: 'Custom discipline or hybrid craft' }
];

const EXPERIENCE_LEVELS = [
  { id: 'Student / Beginner', label: 'Student / Beginner', subtitle: 'Learning foundations & core principles' },
  { id: 'Junior Designer', label: 'Junior Designer', subtitle: '1–3 years • Refining craft & workflows' },
  { id: 'Mid-level Designer', label: 'Mid-level Designer', subtitle: '3–5 years • Autonomous execution & delivery' },
  { id: 'Senior Designer', label: 'Senior Designer', subtitle: '5–8 years • Complex systems & mentoring' },
  { id: 'Lead / Principal Designer', label: 'Lead / Principal Designer', subtitle: '8+ years • Strategic vision & design ops' }
];

const ExperienceStep = () => {
  const { data, updateData, nextStep, prevStep } = useOnboarding();

  const [selectedRole, setSelectedRole] = useState(data.role || data.currentRole || '');
  const [customRole, setCustomRole] = useState(data.customRole || '');
  const [selectedExperience, setSelectedExperience] = useState(data.experienceLevel || '');
  
  const customInputRef = useRef(null);

  // Sync state if context changes
  useEffect(() => {
    if (data.role || data.currentRole) {
      setSelectedRole(data.role || data.currentRole);
    }
    if (data.customRole) {
      setCustomRole(data.customRole);
    }
    if (data.experienceLevel) {
      setSelectedExperience(data.experienceLevel);
    }
  }, [data]);

  // Focus custom input if "Other" is chosen
  useEffect(() => {
    if (selectedRole === 'Other' && customInputRef.current) {
      customInputRef.current.focus();
    }
  }, [selectedRole]);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    updateData({ 
      role: roleId, 
      currentRole: roleId === 'Other' ? (customRole.trim() || 'Other') : roleId 
    });
  };

  const handleCustomRoleChange = (e) => {
    const val = e.target.value;
    setCustomRole(val);
    updateData({ 
      customRole: val, 
      currentRole: val.trim() || 'Other' 
    });
  };

  const handleExperienceSelect = (expId) => {
    setSelectedExperience(expId);
    updateData({ experienceLevel: expId });
  };

  const isRoleValid = selectedRole && (selectedRole !== 'Other' || customRole.trim().length > 0);
  const isExpValid = Boolean(selectedExperience);
  const isFormValid = isRoleValid && isExpValid;

  const handleContinue = () => {
    if (!isFormValid) return;
    updateData({
      role: selectedRole,
      currentRole: selectedRole === 'Other' ? customRole.trim() : selectedRole,
      customRole: customRole.trim(),
      experienceLevel: selectedExperience
    });
    nextStep();
  };

  return (
    <div className="onboarding-step-content experience-step-container">
      {/* Step Kicker */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <span>Step 2 • Design Experience</span>
      </div>

      {/* Header Group */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          What kind of <span className="welcome-gradient-accent">designer</span> are you?
        </h1>
        <p className="welcome-subtitle">
          Tell us a little about where you are in your design journey so we can tailor Cranial Space to you.
        </p>
      </div>

      {/* SECTION 1: PRIMARY DESIGN ROLE */}
      <div className="step-section">
        <div className="step-section-header">
          <h2 className="step-section-title">Primary Role</h2>
          <span className="step-section-hint">Select one</span>
        </div>

        <div className="role-selection-grid">
          {DESIGN_ROLES.map((role) => {
            const isSelected = selectedRole === role.id;
            const IconComponent = role.icon;
            return (
              <button
                key={role.id}
                type="button"
                className={`role-option-card ${isSelected ? 'role-card-selected' : ''}`}
                onClick={() => handleRoleSelect(role.id)}
                aria-pressed={isSelected}
              >
                <div className="role-card-top">
                  <div className={`role-card-icon-box ${isSelected ? 'icon-box-active' : ''}`}>
                    <IconComponent size={18} />
                  </div>
                  <div className={`role-radio-indicator ${isSelected ? 'radio-active' : ''}`}>
                    {isSelected && <Check size={11} strokeWidth={3.5} />}
                  </div>
                </div>
                <div className="role-card-info">
                  <span className="role-card-label">{role.label}</span>
                  <span className="role-card-desc">{role.desc}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Conditional Custom Role Input if 'Other' is selected */}
        {selectedRole === 'Other' && (
          <div className="custom-role-wrapper">
            <label htmlFor="custom-role-input" className="custom-role-label">
              Specify your design title / discipline:
            </label>
            <input
              id="custom-role-input"
              ref={customInputRef}
              type="text"
              className="custom-role-input"
              placeholder="e.g. Design Systems Engineer, Creative Technologist..."
              value={customRole}
              onChange={handleCustomRoleChange}
              maxLength={60}
            />
          </div>
        )}
      </div>

      {/* SECTION 2: EXPERIENCE LEVEL */}
      <div className="step-section">
        <div className="step-section-header">
          <h2 className="step-section-title">Experience Level</h2>
          <span className="step-section-hint">Select one</span>
        </div>

        <div className="experience-selection-list">
          {EXPERIENCE_LEVELS.map((exp) => {
            const isSelected = selectedExperience === exp.id;
            return (
              <button
                key={exp.id}
                type="button"
                className={`experience-option-pill ${isSelected ? 'exp-pill-selected' : ''}`}
                onClick={() => handleExperienceSelect(exp.id)}
                aria-pressed={isSelected}
              >
                <div className="exp-pill-left">
                  <div className={`exp-radio-indicator ${isSelected ? 'radio-active' : ''}`}>
                    {isSelected && <div className="radio-inner-dot" />}
                  </div>
                  <span className="exp-pill-label">{exp.label}</span>
                </div>
                <span className="exp-pill-subtitle">{exp.subtitle}</span>
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
          id="btn-experience-continue"
        >
          <span>Continue</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceStep;
