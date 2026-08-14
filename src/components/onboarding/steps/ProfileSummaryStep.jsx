import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Camera, 
  Trash2, 
  User, 
  CheckCircle,
  Edit2
} from 'lucide-react';
import { useOnboarding } from '../../../context/OnboardingContext';

const getInterestLabel = (id) => {
  const options = {
    'ui-design': 'UI Design',
    'ux-design': 'UX Design',
    'design-systems': 'Design Systems',
    'interaction-design': 'Interaction Design',
    'ux-research': 'UX Research',
    'accessibility': 'Accessibility',
    'product-thinking': 'Product Thinking',
    'prototyping': 'Prototyping',
    'visual-design': 'Visual Design',
    'design-strategy': 'Design Strategy',
    'portfolio-building': 'Portfolio Building',
    'career-growth': 'Career Growth',
  };
  return options[id] || id;
};

const getGoalLabel = (id) => {
  const options = {
    'improve-skills': 'Improve Design Skills',
    'ux-feedback': 'Get Better UX Feedback',
    'build-portfolio': 'Build My Portfolio',
    'prepare-interviews': 'Prepare for Interviews',
    'find-mentor': 'Find a Mentor',
    'participate-challenges': 'Participate in Challenges',
    'learn-designers': 'Learn from Designers',
    'grow-network': 'Grow My Network',
  };
  return options[id] || id;
};

const getExperienceLabel = (level) => {
  switch (level) {
    case 'fun': return 'Designing for Fun';
    case 'early-career': return 'Early Career';
    case 'growing': return 'Growing Designer';
    case 'experienced': return 'Experienced Designer';
    case 'senior-lead': return 'Senior / Lead';
    default: return level || 'Not selected';
  }
};

const ProfileSummaryStep = () => {
  const { data, updateData, prevStep, goToStep, completeOnboarding } = useOnboarding();
  const navigate = useNavigate();

  const [name, setName] = useState(data.name || '');
  const [bio, setBio] = useState(data.bio || '');
  const [photoPreview, setPhotoPreview] = useState(data.avatar || null);

  // Sync state if context changes
  useEffect(() => {
    if (data.name !== undefined) setName(data.name);
    if (data.bio !== undefined) setBio(data.bio);
    if (data.avatar !== undefined) setPhotoPreview(data.avatar);
  }, [data]);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    updateData({ name: val });
  };

  const handleBioChange = (e) => {
    const val = e.target.value;
    if (val.length <= 160) {
      setBio(val);
      updateData({ bio: val });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
      updateData({ avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    updateData({ avatar: null });
  };

  const getInitials = (fullName) => {
    if (!fullName || !fullName.trim()) return 'CS';
    return fullName
      .trim()
      .split(/\s+/)
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const isFormValid = Boolean(name.trim());

  const handleFinish = () => {
    if (!isFormValid) return;
    completeOnboarding();
    navigate('/dashboard');
  };

  // Safe role value parsing
  const displayRole = data.role === 'Other' && data.customRole 
    ? data.customRole 
    : (data.role || data.currentRole || 'Not selected');

  return (
    <div className="onboarding-step-content profile-summary-container">
      {/* Step Kicker */}
      <div className="welcome-kicker">
        <span className="welcome-kicker-dot" />
        <span>Step 6 • Complete Your Profile</span>
      </div>

      {/* Header Group */}
      <div className="welcome-header-group">
        <h1 className="welcome-title">
          Make your profile <span className="welcome-gradient-accent">yours</span>.
        </h1>
        <p className="welcome-subtitle">
          Add a few final details so other designers can understand who you are and your Cranial Space experience feels more personal.
        </p>
      </div>

      {/* Split layout (Profile input on left, Summary box on right) */}
      <div className="profile-summary-split-layout">
        
        {/* Stage 1: Profile Setup (Left Column) */}
        <div className="profile-setup-column">
          {/* Avatar Upload */}
          <div className="form-input-group">
            <span className="form-label">Profile Photo</span>
            <div className="photo-upload-group">
              <div className="avatar-preview-container">
                {photoPreview ? (
                  <img src={photoPreview} alt="Profile Preview" className="avatar-preview-img" />
                ) : (
                  <div className="avatar-preview-fallback">
                    {getInitials(name)}
                  </div>
                )}
              </div>
              <div className="photo-upload-controls">
                <label className="btn-photo-upload">
                  <Camera size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  <span>Choose Image</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handlePhotoChange} 
                  />
                </label>
                {photoPreview && (
                  <button 
                    type="button" 
                    className="btn-photo-remove" 
                    onClick={handleRemovePhoto}
                  >
                    <Trash2 size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Name Field */}
          <div className="form-input-group">
            <label htmlFor="display-name-input" className="form-label">Your Name *</label>
            <input
              id="display-name-input"
              type="text"
              className="form-text-input"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              maxLength={50}
              required
            />
          </div>

          {/* Bio Field */}
          <div className="form-input-group">
            <label htmlFor="bio-input" className="form-label">Short Bio</label>
            <textarea
              id="bio-input"
              className="form-text-input form-textarea"
              placeholder="Tell the community a little about yourself..."
              value={bio}
              onChange={handleBioChange}
            />
            <span className="textarea-counter">{bio.length} / 160</span>
          </div>
        </div>

        {/* Stage 2: Personalization Summary (Right Column) */}
        <div className="profile-summary-column">
          <h2 className="summary-header">Personalization Summary</h2>

          {/* Role Summary */}
          <div className="summary-item">
            <div className="summary-item-header">
              <span className="summary-item-title">Design Role</span>
              <button 
                type="button" 
                className="btn-summary-edit" 
                onClick={() => goToStep(2)}
              >
                <Edit2 size={10} style={{ marginRight: '3px' }} />
                <span>Edit</span>
              </button>
            </div>
            <div className="summary-value-text">{displayRole}</div>
          </div>

          {/* Experience Summary */}
          <div className="summary-item">
            <div className="summary-item-header">
              <span className="summary-item-title">Experience Level</span>
              <button 
                type="button" 
                className="btn-summary-edit" 
                onClick={() => goToStep(5)}
              >
                <Edit2 size={10} style={{ marginRight: '3px' }} />
                <span>Edit</span>
              </button>
            </div>
            <div className="summary-value-text">
              {getExperienceLabel(data.experienceLevel)}
            </div>
          </div>

          {/* Interests Summary */}
          <div className="summary-item">
            <div className="summary-item-header">
              <span className="summary-item-title">Areas of Interest</span>
              <button 
                type="button" 
                className="btn-summary-edit" 
                onClick={() => goToStep(3)}
              >
                <Edit2 size={10} style={{ marginRight: '3px' }} />
                <span>Edit</span>
              </button>
            </div>
            <div className="summary-tags-group">
              {Array.isArray(data.interests) && data.interests.length > 0 ? (
                data.interests.map((interestId) => (
                  <span key={interestId} className="summary-tag">
                    {getInterestLabel(interestId)}
                  </span>
                ))
              ) : (
                <span className="summary-tag-empty">No interests selected</span>
              )}
            </div>
          </div>

          {/* Goals Summary */}
          <div className="summary-item">
            <div className="summary-item-header">
              <span className="summary-item-title">Primary Goals</span>
              <button 
                type="button" 
                className="btn-summary-edit" 
                onClick={() => goToStep(4)}
              >
                <Edit2 size={10} style={{ marginRight: '3px' }} />
                <span>Edit</span>
              </button>
            </div>
            <div className="summary-tags-group">
              {Array.isArray(data.goals) && data.goals.length > 0 ? (
                data.goals.map((goalId) => (
                  <span key={goalId} className="summary-tag">
                    {getGoalLabel(goalId)}
                  </span>
                ))
              ) : (
                <span className="summary-tag-empty">No goals selected</span>
              )}
            </div>
          </div>

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
          onClick={handleFinish}
          disabled={!isFormValid}
          className={`btn-onboarding-primary ${!isFormValid ? 'btn-disabled' : ''}`}
          id="btn-profile-finish"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          <span>Enter Cranial Space</span>
          <CheckCircle size={16} style={{ marginLeft: '6px' }} />
        </button>
      </div>
    </div>
  );
};

export default ProfileSummaryStep;
