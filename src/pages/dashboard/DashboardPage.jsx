import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Layout, 
  Layers, 
  Search, 
  Compass, 
  Briefcase, 
  Award, 
  TrendingUp, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight, 
  Plus, 
  Users, 
  CheckSquare, 
  BookOpen, 
  Sparkles, 
  History, 
  User, 
  Settings,
  ArrowUpRight,
  MessageSquare,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import '../../styles/Dashboard.css';

const DashboardPage = () => {
  const navigate = useNavigate();

  // Retrieve onboarding state from localStorage
  const onboardingDataRaw = localStorage.getItem('cranial_onboarding_data');
  const onboardingData = onboardingDataRaw ? JSON.parse(onboardingDataRaw) : {};

  // Form fallbacks using the onboarding data
  const name = onboardingData.name || 'Alex Mercer';
  const avatar = onboardingData.avatar || null;
  const bio = onboardingData.bio || 'Product Designer crafting interactive experiences.';
  const role = onboardingData.role === 'Other' && onboardingData.customRole 
    ? onboardingData.customRole 
    : (onboardingData.role || onboardingData.currentRole || 'Product Designer');
  const experienceLevel = onboardingData.experienceLevel || 'growing';
  const interests = onboardingData.interests || [];
  const goals = onboardingData.goals || [];

  // Local UI states
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleResetOnboarding = () => {
    localStorage.removeItem('cranial_onboarding_completed');
    localStorage.removeItem('cranial_onboarding_step');
    localStorage.removeItem('cranial_onboarding_data');
    window.location.href = '/onboarding';
  };

  const handleLogout = () => {
    // Clear completion state to simulate logout
    localStorage.removeItem('cranial_onboarding_completed');
    navigate('/');
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

  // Sidebar navigation mapping
  const navItemsMain = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'submissions', label: 'My Submissions', icon: History },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'mentorship', label: 'Mentorship', icon: Compass },
    { id: 'feedback', label: 'Feedback', icon: CheckSquare },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const navItemsAccount = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Helper to map interest code to friendly label
  const getInterestFriendlyName = (id) => {
    const mapping = {
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
      'career-growth': 'Career Growth'
    };
    return mapping[id] || id;
  };

  // Personalized dynamic recommendations based on onboarding choices
  const getPersonalizedRecommendations = () => {
    const list = [];
    
    // Check interests
    if (interests.includes('design-systems')) {
      list.push({
        type: 'Resource',
        title: 'Figma Token Architecture Guide',
        desc: 'Learn how to structure design tokens for dark modes, multi-brand themes, and responsive spacing matrices.',
        meta: '20m read'
      });
    }
    if (interests.includes('ui-design') || interests.includes('visual-design')) {
      list.push({
        type: 'Challenge',
        title: 'Micro-interactions & Spring Physics',
        desc: 'Design a springy expandable floating action button (FAB) interaction. Focus on timing functions and visual feedback.',
        meta: 'Active challenge'
      });
    }
    if (interests.includes('ux-research') || interests.includes('product-thinking')) {
      list.push({
        type: 'Resource',
        title: 'Continuous Discovery Frameworks',
        desc: 'A structural guide to running weekly user touchpoints without overloading your research operations.',
        meta: '15m read'
      });
    }
    
    // Goal based recommendations
    if (goals.includes('build-portfolio') || goals.includes('prepare-interviews')) {
      list.push({
        type: 'Article',
        title: 'Decentering the Mockup in UX Cases',
        desc: 'How to structure case study copywriting to emphasize strategic decisions, testing failures, and iterations.',
        meta: '10m read'
      });
    }

    // Fill with defaults if not enough interests/goals selected
    if (list.length < 3) {
      const defaults = [
        {
          type: 'Challenge',
          title: 'Dark Mode SaaS Dashboard Critique',
          desc: 'Analyze visual hierarchies, contrast ratios, and density levels of our active dashboard design challenge.',
          meta: 'Active challenge'
        },
        {
          type: 'Resource',
          title: 'Mental Models in UX Architecture',
          desc: 'Understand spatial layouts, cognitive loads, and user expectations to build intuitive navigational structures.',
          meta: '8m read'
        },
        {
          type: 'Mentorship',
          title: 'Schedule a Mock Case Review',
          desc: 'Book a 1:1 session with Senior Designers to review your portfolio cases before sending applications.',
          meta: '1:1 Session'
        }
      ];
      while (list.length < 3 && defaults.length > 0) {
        list.push(defaults.shift());
      }
    }

    return list.slice(0, 3);
  };

  // Render Sidebar Links
  const renderNavLinks = (items) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isActive = currentView === item.id;
      return (
        <button
          key={item.id}
          type="button"
          className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
          onClick={() => {
            setCurrentView(item.id);
            setIsMobileSidebarOpen(false);
          }}
        >
          <Icon size={18} />
          <span>{item.label}</span>
        </button>
      );
    });
  };

  // Render Placeholder for future tabs
  const renderComingSoon = (title, description, IconComponent) => {
    return (
      <div className="coming-soon-wrapper">
        <div className="coming-soon-icon-box">
          <IconComponent size={32} />
        </div>
        <h2 className="coming-soon-title">{title}</h2>
        <p className="coming-soon-desc">{description}</p>
        <button
          type="button"
          onClick={() => setCurrentView('dashboard')}
          className="btn-header-submit"
          style={{ background: 'transparent', border: '1px solid var(--product-border)', color: 'var(--product-text-secondary)', boxShadow: 'none' }}
        >
          Return to Dashboard
        </button>
      </div>
    );
  };

  // Render Dashboard Content
  const renderDashboardContent = () => {
    const personalizedRecs = getPersonalizedRecommendations();

    return (
      <div className="dashboard-grid-layout">
        {/* Left Column: Wide Primary Content */}
        <div className="dashboard-main-col">
          
          {/* Submit a Design Banner */}
          <div className="workspace-card submit-design-banner">
            <div className="submit-banner-content">
              <span className="submit-banner-kicker">Core Action</span>
              <h2 className="submit-banner-title">Submit a Design for Critique</h2>
              <p className="submit-banner-desc">
                Get instant structural diagnostic audits from our AI system, followed by comprehensive peer critiques from the Cranial Space community.
              </p>
            </div>
            <button
              type="button"
              className="btn-banner-submit"
              onClick={() => setCurrentView('submit')}
            >
              <span>Submit Design</span>
              <Plus size={16} />
            </button>
          </div>

          {/* Continue Journey Widget */}
          <div className="workspace-card continue-journey-card">
            <h3 className="card-title" style={{ marginBottom: '14px' }}>Continue Your Journey</h3>
            <div className="journey-action-row">
              <div className="journey-action-text">
                <span className="welcome-hero-kicker" style={{ fontSize: '0.68rem' }}>Active Challenge</span>
                <span className="journey-action-title">Mobile Checkout Flow Optimization</span>
                <span className="journey-action-desc">Improve completion conversion by redesigning field inputs. 3 days remaining.</span>
              </div>
              <button 
                type="button" 
                className="btn-journey-action"
                onClick={() => setCurrentView('challenges')}
              >
                <span>Resume (65%)</span>
                <ChevronRight size={14} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
              </button>
            </div>
          </div>

          {/* Recommendations based on Onboarding interests */}
          <div className="workspace-card" style={{ background: 'transparent', border: 'none', padding: 0, boxShadow: 'none' }}>
            <div className="card-header-row" style={{ marginBottom: '16px' }}>
              <div className="card-title-group">
                <Sparkles size={16} className="card-title-icon" />
                <h3 className="card-title">Recommended For You</h3>
              </div>
              <span className="welcome-hero-subtitle" style={{ fontSize: '0.8rem' }}>Based on your interests</span>
            </div>
            <div className="recommendations-deck">
              {personalizedRecs.map((rec, idx) => (
                <div key={idx} className="recommendation-card">
                  <span className="recommendation-type">{rec.type}</span>
                  <h4 className="recommendation-title">{rec.title}</h4>
                  <p className="recommendation-desc">{rec.desc}</p>
                  <div className="recommendation-meta-row">
                    <span className="recommendation-badge">{rec.meta}</span>
                    <button 
                      type="button" 
                      className="btn-item-action"
                      onClick={() => setCurrentView('resources')}
                      style={{ padding: 0 }}
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Metrics, Recent feedback, etc */}
        <div className="dashboard-side-col">
          
          {/* UX Score Box */}
          <div className="workspace-card ux-score-card">
            <div>
              <div className="card-title-group" style={{ marginBottom: '14px' }}>
                <TrendingUp size={16} className="card-title-icon" />
                <h3 className="card-title">Cranial UX Score</h3>
              </div>
              <div className="ux-score-wrapper">
                <span className="ux-score-value">84</span>
                <span className="ux-score-trend">+6 this mo</span>
              </div>
            </div>
            <p className="ux-score-interpretation">
              <strong>Excellent.</strong> You are in the top 12% of designers focusing on {interests.length > 0 ? getInterestFriendlyName(interests[0]) : 'Product Design'}.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="supporting-metrics-grid">
            <div className="metric-stat-box">
              <span className="metric-stat-label">Submissions</span>
              <span className="metric-stat-number">14</span>
              <span className="metric-stat-footer">2 active reviews</span>
            </div>
            <div className="metric-stat-box">
              <span className="metric-stat-label">Feedback Recd</span>
              <span className="metric-stat-number">42</span>
              <span className="metric-stat-footer">8 mentor reports</span>
            </div>
            <div className="metric-stat-box">
              <span className="metric-stat-label">Streak</span>
              <span className="metric-stat-number">6 days</span>
              <span className="metric-stat-footer">Personal best: 12</span>
            </div>
            <div className="metric-stat-box">
              <span className="metric-stat-label">Challenges</span>
              <span className="metric-stat-number">3/5</span>
              <span className="metric-stat-footer">Avg. score: 82%</span>
            </div>
          </div>

          {/* Recent Feedback Feed */}
          <div className="workspace-card">
            <div className="card-header-row" style={{ marginBottom: '12px' }}>
              <div className="card-title-group">
                <MessageSquare size={16} className="card-title-icon" />
                <h3 className="card-title">Recent Feedback</h3>
              </div>
              <button 
                type="button" 
                className="btn-summary-edit" 
                style={{ padding: '2px 4px' }}
                onClick={() => setCurrentView('feedback')}
              >
                View All
              </button>
            </div>
            <div className="feedback-list">
              <div className="feedback-item">
                <div className="feedback-item-info">
                  <span className="feedback-item-title">Landing Hero Layout</span>
                  <div className="feedback-item-meta">
                    <span className="feedback-badge feedback-badge-ai">AI Critique</span>
                    <span>2h ago</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-item-action"
                  onClick={() => setCurrentView('feedback')}
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="feedback-item">
                <div className="feedback-item-info">
                  <span className="feedback-item-title">Design System Tokens</span>
                  <div className="feedback-item-meta">
                    <span className="feedback-badge feedback-badge-mentor">Mentor Review</span>
                    <span>1d ago</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-item-action"
                  onClick={() => setCurrentView('feedback')}
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Mentorship Recommendations */}
          <div className="workspace-card">
            <div className="card-header-row" style={{ marginBottom: '12px' }}>
              <div className="card-title-group">
                <Users size={16} className="card-title-icon" />
                <h3 className="card-title">Suggested Mentors</h3>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="mentor-reco-card">
                <div className="mentor-reco-avatar">SJ</div>
                <div className="mentor-reco-details">
                  <span className="mentor-reco-name">Sarah Jenkins</span>
                  <span className="mentor-reco-title">Lead Designer, Stripe</span>
                  <span className="mentor-reco-reason">Matches interests in Design Systems</span>
                </div>
              </div>
              <div className="mentor-reco-card">
                <div className="mentor-reco-avatar">MC</div>
                <div className="mentor-reco-details">
                  <span className="mentor-reco-name">Marcus Chen</span>
                  <span className="mentor-reco-title">Senior UX Lead, Google</span>
                  <span className="mentor-reco-reason">Matches goal of Interview Prep</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Pulse Snapshot */}
          <div className="workspace-card">
            <h3 className="card-title" style={{ marginBottom: '12px' }}>Community Pulse</h3>
            <div className="pulse-items-list">
              <div className="pulse-item">
                <div className="pulse-item-bullet" />
                <span className="pulse-item-text">
                  Critique thread: <a href="#pulse" className="pulse-item-link" onClick={() => setCurrentView('community')}>Auth page Contrast Ratio check</a>
                </span>
              </div>
              <div className="pulse-item">
                <div className="pulse-item-bullet" />
                <span className="pulse-item-text">
                  Discussion: <a href="#pulse" className="pulse-item-link" onClick={() => setCurrentView('community')}>Figma Dev mode alternatives</a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="workspace-shell cranial-product-theme" data-theme="product">
      {/* Decorative glows */}
      <div className="workspace-ambient-glow" />
      <div className="workspace-ambient-glow-bottom" />

      {/* Persistent Sidebar (Desktop) / Slide-over Drawer (Mobile) */}
      <aside className={`workspace-sidebar ${isMobileSidebarOpen ? 'mobile-open' : ''}`}>
        
        {/* Sidebar Brand Logo */}
        <div className="sidebar-brand">
          <div className="sidebar-logo">C</div>
          <span className="sidebar-brand-text">Cranial Space</span>
        </div>

        {/* Sidebar Nav Items */}
        <div className="sidebar-nav-container">
          
          <div className="nav-group">
            <span className="nav-group-label">Main</span>
            {renderNavLinks(navItemsMain)}
          </div>

          <div className="nav-group">
            <span className="nav-group-label">Action</span>
            <button
              type="button"
              className={`sidebar-nav-btn btn-sidebar-submit-action ${currentView === 'submit' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView('submit');
                setIsMobileSidebarOpen(false);
              }}
            >
              <Plus size={18} />
              <span>Submit a Design</span>
            </button>
          </div>

          <div className="nav-group">
            <span className="nav-group-label">Account</span>
            {renderNavLinks(navItemsAccount)}
          </div>

          <div className="nav-group" style={{ marginTop: '12px' }}>
            <button 
              type="button" 
              onClick={handleResetOnboarding}
              className="sidebar-nav-btn"
              style={{ color: '#f87171', background: 'rgba(239, 68, 68, 0.03)', borderColor: 'rgba(239, 68, 68, 0.1)' }}
              title="Restart the onboarding flow"
            >
              <RotateCcw size={16} />
              <span>Reset Onboarding</span>
            </button>
          </div>

        </div>

        {/* User Card (Avatar, Name, Role) */}
        <div className="sidebar-user-card">
          <div className="sidebar-user-avatar">
            {avatar ? (
              <img src={avatar} alt="User Avatar" className="sidebar-user-avatar-img" />
            ) : (
              getInitials(name)
            )}
          </div>
          <div className="sidebar-user-info">
            <span className="sidebar-user-name" title={name}>{name}</span>
            <span className="sidebar-user-role" title={role}>{role}</span>
          </div>
          <button 
            type="button" 
            className="sidebar-btn-logout" 
            onClick={handleLogout}
            title="Log Out of Cranial Space"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileSidebarOpen ? 'mobile-open' : ''}`} 
        onClick={() => setIsMobileSidebarOpen(false)}
      />

      {/* Mobile Header Bar */}
      <header className="mobile-header-bar">
        <button 
          type="button" 
          className="mobile-hamburger" 
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>
        <div className="sidebar-brand" style={{ margin: 0, padding: 0 }}>
          <div className="sidebar-logo" style={{ width: '28px', height: '28px', fontSize: '0.95rem' }}>C</div>
          <span className="sidebar-brand-text" style={{ fontSize: '1.05rem' }}>Cranial Space</span>
        </div>
        <button 
          type="button" 
          className="sidebar-btn-logout" 
          onClick={handleLogout}
        >
          <LogOut size={18} />
        </button>
      </header>

      {/* Main Content Pane */}
      <main className="workspace-content">
        
        {/* Personalized Welcome Header (Only for Dashboard tab) */}
        {currentView === 'dashboard' && (
          <div className="welcome-hero">
            <div className="welcome-hero-text">
              <span className="welcome-hero-kicker">Welcome back</span>
              <h1 className="welcome-hero-title">Good morning, {name.split(' ')[0]}.</h1>
              <p className="welcome-hero-subtitle">Ready to sharpen your design craft today?</p>
            </div>
            <button 
              type="button" 
              className="btn-header-submit"
              onClick={() => setCurrentView('submit')}
            >
              <Plus size={16} />
              <span>Submit Design</span>
            </button>
          </div>
        )}

        {/* Dynamic view rendering */}
        {currentView === 'dashboard' && renderDashboardContent()}
        {currentView === 'community' && renderComingSoon('Community Hub', 'Explore discussions, critiques, and work-in-progress posts shared by the Cranial Space designer community.', Users)}
        {currentView === 'submissions' && renderComingSoon('My Submissions', 'Track and manage your submitted designs, AI diagnostic reports, and peer critiques in one place.', History)}
        {currentView === 'challenges' && renderComingSoon('Design Challenges', 'Test your skills in interactive UI/UX challenges, climb the leaderboard, and earn rare badges.', Award)}
        {currentView === 'mentorship' && renderComingSoon('Mentorship Circle', 'Connect one-on-one with verified design leaders for portfolio reviews, mock interviews, and career guidance.', Compass)}
        {currentView === 'feedback' && renderComingSoon('Critique & Feedback', 'Browse detailed structural critiques, review AI suggestions, and view responses from your design peers.', CheckSquare)}
        {currentView === 'analytics' && renderComingSoon('Growth Analytics', 'Visualize your skill improvements, track UX Score trends, and view detailed diagnostics of your design progress.', TrendingUp)}
        {currentView === 'submit' && renderComingSoon('Submit a Design', 'Select a file or enter a prototype link to generate an instant AI critique and request community feedback.', Plus)}
        {currentView === 'profile' && renderComingSoon('My Profile', 'Manage your designer card, showcase your highest UX scores, and update your public designer identity.', User)}
        {currentView === 'settings' && renderComingSoon('Account Settings', 'Configure notifications, manage integrations, adjust privacy preferences, and edit your account details.', Settings)}

      </main>
    </div>
  );
};

export default DashboardPage;
