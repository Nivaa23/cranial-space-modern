import React, { useState } from 'react';
import { 
  Users, MessageSquare, Award, GraduationCap, TrendingUp, Sparkles, 
  ArrowRight, ThumbsUp, Eye, CheckCircle2, Clock, Flame, Calendar,
  Filter, Search, Star, Shield, Zap, Check, ChevronRight, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BorderGlow from '../components/BorderGlow';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  const glowColors = ['#7C3AED', '#A855F7', '#3B82F6'];
  const glowHSL = '258 89 60';

  // Forum state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [forumSort, setForumSort] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThreadModal, setActiveThreadModal] = useState(null);

  // Leaderboard timeframe state
  const [leaderboardTimeframe, setLeaderboardTimeframe] = useState('month');

  // Mentorship booking modal state
  const [bookingMentor, setBookingMentor] = useState(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  // Challenges state
  const [joinedChallenges, setJoinedChallenges] = useState({});

  // Forum categories data
  const categories = [
    { id: 'all', label: 'All Discussions', count: 148 },
    { id: 'critique', label: 'UI Critique & Heuristics', count: 56 },
    { id: 'systems', label: 'Design Systems & Tokens', count: 32 },
    { id: 'conversion', label: 'UX Flow & Conversion', count: 24 },
    { id: 'career', label: 'Career & Portfolio Reviews', count: 19 },
    { id: 'figma', label: 'Figma Workflows & Tools', count: 17 }
  ];

  // Forum threads data
  const threads = [
    {
      id: 1,
      category: 'critique',
      author: 'Marcus Vance',
      avatar: 'MV',
      role: 'Staff UI Designer',
      time: '14m ago',
      status: 'score',
      statusLabel: 'AI SCORE: 96',
      title: 'Auditing B2B Dashboard: Resolved 4 Contrast Violations in Dark Mode',
      preview: 'Re-architected our high-density telemetry table using 8pt grid tokens. Looking for feedback on touch-target heights and badge hierarchy.',
      tags: ['#DesignSystems', '#WCAG_AAA', '#DarkTheme'],
      upvotes: 42,
      replies: 18,
      views: 340
    },
    {
      id: 2,
      category: 'systems',
      author: 'Elena Rostova',
      avatar: 'ER',
      role: 'Principal UX Architect',
      time: '1h ago',
      status: 'solved',
      statusLabel: 'SOLVED ✓',
      title: 'How we structured multi-brand semantic spacing tokens in Figma Variables',
      preview: 'Sharing our open-source token schema for compact vs spacious component sets. Mentor verified by Jessica Duong.',
      tags: ['#FigmaVariables', '#DesignTokens', '#Architecture'],
      upvotes: 89,
      replies: 34,
      views: 920
    },
    {
      id: 3,
      category: 'conversion',
      author: 'David Kim',
      avatar: 'DK',
      role: 'Product Lead',
      time: '3h ago',
      status: 'hot',
      statusLabel: 'HOT 🔥',
      title: 'Checkout Conversion Lift (+18.4%): Reducing Step Fatigue with Inline Accordions',
      preview: 'Complete teardown of our 4-step mobile payment funnel. Here are the before/after heuristic benchmarks and conversion analytics.',
      tags: ['#Conversion', '#FinTech', '#UXResearch'],
      upvotes: 112,
      replies: 47,
      views: 1420
    },
    {
      id: 4,
      category: 'career',
      author: 'Sofia Rossi',
      avatar: 'SR',
      role: 'Senior Product Designer',
      time: '5h ago',
      status: 'solved',
      statusLabel: 'MENTOR SIGNED',
      title: 'Portfolio Defense: How to present complex algorithmic products to non-design recruiters',
      preview: 'Synthesized 5 actionable tips from my 1:1 session with Stripe Design Leads. Focus on measurable UX velocity rather than aesthetic mockups.',
      tags: ['#CareerGrowth', '#PortfolioReview', '#CaseStudy'],
      upvotes: 76,
      replies: 22,
      views: 780
    },
    {
      id: 5,
      category: 'figma',
      author: 'Liam O\'Connor',
      avatar: 'LO',
      role: 'Design Engineer',
      time: '8h ago',
      status: 'score',
      statusLabel: 'AI AUDITED',
      title: 'Automating Cranial Space UX Heuristic Scans directly inside CI/CD Pipelines',
      preview: 'Built a GitHub Action that parses Figma frame changes, calculates WCAG contrast ratios, and blocks PRs with spacing violations.',
      tags: ['#DevOpsForDesign', '#FigmaAPI', '#Automation'],
      upvotes: 64,
      replies: 15,
      views: 610
    }
  ];

  // Filtered threads
  const filteredThreads = threads.filter(t => {
    const matchCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        t.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Mentors data
  const mentors = [
    {
      name: 'Jessica Duong',
      company: 'Design Director @ Figma',
      avatar: 'JD',
      rating: '5.0',
      reviews: 142,
      bio: 'Specializing in complex design systems, zero-to-one design tooling, and executive portfolio defense.',
      specialties: ['Design Systems', 'Tooling UX', 'Leadership'],
      slots: '2 slots this week'
    },
    {
      name: 'Alexandre Mercer',
      company: 'Staff Designer @ Stripe',
      avatar: 'AM',
      rating: '4.9',
      reviews: 98,
      bio: 'FinTech UX architect focusing on checkout micro-interactions, high-trust flows, and heuristic audits.',
      specialties: ['FinTech UX', 'Conversion', 'Micro-interactions'],
      slots: '3 slots this week'
    },
    {
      name: 'Elena Rostova',
      company: 'Principal UX @ Linear',
      avatar: 'ER',
      rating: '5.0',
      reviews: 114,
      bio: 'Crafting high-density keyboard-first interfaces, rapid information architecture, and telemetry dashboards.',
      specialties: ['High-Density UI', 'Information Arch', 'Keyboard Nav'],
      slots: '1 slot this week'
    },
    {
      name: 'Kavita Patel',
      company: 'Head of Product Design @ Airbnb',
      avatar: 'KP',
      rating: '4.9',
      reviews: 86,
      bio: 'Expert in narrative-driven product storytelling, UX research synthesis, and cross-functional team leadership.',
      specialties: ['Design Strategy', 'Storytelling', 'UX Research'],
      slots: '4 slots this week'
    }
  ];

  // Challenges data
  const challenges = [
    {
      id: 'iam-overhaul',
      title: 'B2B IAM Permission Matrix Overhaul',
      difficulty: 'lead',
      diffLabel: 'Senior / Lead',
      deadline: '3d 14h left',
      participants: 284,
      brief: 'Transform a cluttered 40-row IAM role permissions table into an intuitive, zero-error access management experience.',
      reward: '+500 XP • "IA Master" Badge',
      status: 'Active Sprint'
    },
    {
      id: 'mobile-checkout',
      title: '1-Thumb Mobile Checkout & WCAG AAA',
      difficulty: 'senior',
      diffLabel: 'Senior Tier',
      deadline: '6d left',
      participants: 412,
      brief: 'Eliminate 4 touch-target violations in a payment modal while maintaining strict 100% WCAG AAA contrast compliance.',
      reward: '+350 XP • "Accessibility Specialist" Badge',
      status: 'Active Sprint'
    },
    {
      id: 'onboarding-compression',
      title: '7-Step Enterprise Onboarding Compression',
      difficulty: 'apprentice',
      diffLabel: 'All Levels',
      deadline: '11d left',
      participants: 530,
      brief: 'Compress a tedious enterprise setup wizard into 3 progressive disclosure moments with verified 0% user drop-off.',
      reward: '+400 XP • "Conversion Architect" Badge',
      status: 'Active Sprint'
    }
  ];

  // Leaderboard data
  const leaderboardPodium = [
    {
      rank: 2,
      badge: 'silver',
      name: 'Maya Lin',
      title: 'Staff UX Architect',
      score: '9,420 XP',
      critiques: 132,
      wins: 5,
      avatar: 'ML'
    },
    {
      rank: 1,
      badge: 'gold',
      name: 'David Kim',
      title: 'Grandmaster Heuristician',
      score: '9,840 XP',
      critiques: 148,
      wins: 6,
      avatar: 'DK'
    },
    {
      rank: 3,
      badge: 'bronze',
      name: 'Tobias Vance',
      title: 'Lead UI Engineer',
      score: '8,980 XP',
      critiques: 119,
      wins: 4,
      avatar: 'TV'
    }
  ];

  const leaderboardTable = [
    { rank: 4, name: 'Sofia Rossi', role: 'Senior Product Designer', critiques: 98, score: '8,410 XP', badge: 'Accessibility Lead' },
    { rank: 5, name: 'Liam O\'Connor', role: 'Design Systems Lead', critiques: 92, score: '8,150 XP', badge: 'Token Architect' },
    { rank: 6, name: 'Carlos Gomez', role: 'Senior UX Specialist', critiques: 84, score: '7,920 XP', badge: 'Flow Master' },
    { rank: 7, name: 'Hannah Wright', role: 'Product Designer', critiques: 79, score: '7,680 XP', badge: 'Heuristic Pro' },
    { rank: 8, name: 'Naveen Kumar', role: 'Staff UI Designer', critiques: 71, score: '7,340 XP', badge: 'Visual Master' }
  ];

  const handleJoinChallenge = (id) => {
    setJoinedChallenges(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookMentor = (mentor) => {
    setBookingMentor(mentor);
    setBookedSuccess(false);
  };

  const confirmBooking = () => {
    setBookedSuccess(true);
    setTimeout(() => {
      setBookingMentor(null);
      setBookedSuccess(false);
    }, 2000);
  };

  return (
    <div className="community-page-container">
      
      {/* =========================================================
          1. COMMUNITY HERO: MULTIPLAYER DESIGN NEXUS
          ========================================================= */}
      <section className="comm-hero-section">
        <div className="comm-hero-intro">
          <div className="comm-live-pill">
            <span className="live-pulse-dot" />
            <span>2,418 Designers Online • 48 Active Critiques Today</span>
          </div>

          <h1 className="comm-hero-title">
            Where uncompromising designers <br />
            <span className="gradient-text">critique, compete, and accelerate.</span>
          </h1>

          <p className="comm-hero-desc">
            Step into a high-conviction ecosystem of product designers, staff UX leads, and design engineers. Gain real-time feedback on your WIPs, learn 1:1 from industry mentors, conquer weekly heuristic challenges, and earn verified craft badges.
          </p>

          <div className="comm-hero-actions">
            <a href="#forums" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              Explore Designer Forums
              <ArrowRight size={16} />
            </a>
            <a href="#challenges" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              View Active Challenges
            </a>
          </div>
        </div>

        {/* Hero Interactive Radar Board */}
        <div className="comm-radar-board">
          <div className="radar-header-strip">
            <div className="radar-title-group">
              <Zap size={18} color="#7C3AED" />
              <span>LIVE TELEMETRY: REAL-TIME COMMUNITY ACTIVITY</span>
            </div>
            <div className="radar-stat-chips">
              <span className="radar-chip highlight">● Sub-second AI Audits: Online</span>
              <span className="radar-chip">120+ Verified Mentors</span>
              <span className="radar-chip">94.2% Sprint Completion</span>
            </div>
          </div>

          <div className="radar-cards-grid">
            
            {/* Card 1 */}
            <div className="radar-live-card">
              <div className="radar-card-top">
                <div className="radar-avatar purple">MV</div>
                <div className="radar-user-meta">
                  <span className="radar-username">Marcus Vance <CheckCircle2 size={13} color="#7C3AED" /></span>
                  <span className="radar-role-tag">Staff UI @ Linear</span>
                </div>
              </div>
              <p className="radar-action-text">
                Annotated <strong>3 layout fixes</strong> on the B2B Dashboard Dark Mode thread.
              </p>
              <div className="radar-card-badge-row">
                <span className="radar-status-tag critique">CRITIQUE POSTED</span>
                <span style={{ color: 'var(--text-dim)' }}>2m ago</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="radar-live-card">
              <div className="radar-card-top">
                <div className="radar-avatar emerald">JD</div>
                <div className="radar-user-meta">
                  <span className="radar-username">Jessica Duong <CheckCircle2 size={13} color="#10B981" /></span>
                  <span className="radar-role-tag">Design Director @ Figma</span>
                </div>
              </div>
              <p className="radar-action-text">
                Opened <strong>2 new 1:1 mentorship slots</strong> for Design Systems & Token Architecture.
              </p>
              <div className="radar-card-badge-row">
                <span className="radar-status-tag active">SLOTS AVAILABLE</span>
                <span style={{ color: 'var(--text-dim)' }}>8m ago</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="radar-live-card">
              <div className="radar-card-top">
                <div className="radar-avatar amber">DK</div>
                <div className="radar-user-meta">
                  <span className="radar-username">David Kim <Award size={13} color="#F59E0B" /></span>
                  <span className="radar-role-tag">Grandmaster Heuristician</span>
                </div>
              </div>
              <p className="radar-action-text">
                Surpassed <strong>9,800 Reputation XP</strong> following the IAM Permissions sprint win.
              </p>
              <div className="radar-card-badge-row">
                <span className="radar-status-tag sprint">HALL OF FAME #1</span>
                <span style={{ color: 'var(--text-dim)' }}>15m ago</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. DESIGNER FORUMS & CRITIQUE HUB
          ========================================================= */}
      <section id="forums" className="comm-forum-section">
        <div className="comm-section-header">
          <span className="comm-section-tag">HIGH-SIGNAL DISCUSSIONS</span>
          <h2 className="comm-section-title">Designer Forums & Critique Hub</h2>
          <p className="comm-section-desc">
            No endless noise or generic chatter. Every thread is structured around objective heuristics, Figma prototypes, and measurable design system token reviews.
          </p>
        </div>

        <div className="forum-workspace-layout">
          
          {/* Sidebar categories */}
          <aside className="forum-sidebar">
            <span className="forum-sidebar-header">Discussion Hubs</span>
            <div className="forum-nav-list">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`forum-nav-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="nav-count-badge">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="forum-post-cta-box">
              <MessageSquare size={20} color="#7C3AED" style={{ margin: '0 auto' }} />
              <span>Need high-signal critique on a live prototype?</span>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 14px', fontSize: '0.78rem', width: '100%' }}
                onClick={() => alert('Thread creation modal initialized! Connect your Figma URL to proceed.')}
              >
                + Post Design For Audit
              </button>
            </div>
          </aside>

          {/* Main Forum Feed */}
          <main className="forum-feed-main">
            
            {/* Filter & Search Bar */}
            <div className="forum-feed-filter-bar">
              <div className="feed-sort-group">
                <button 
                  className={`feed-sort-btn ${forumSort === 'trending' ? 'active' : ''}`}
                  onClick={() => setForumSort('trending')}
                >
                  Trending 🔥
                </button>
                <button 
                  className={`feed-sort-btn ${forumSort === 'latest' ? 'active' : ''}`}
                  onClick={() => setForumSort('latest')}
                >
                  Latest
                </button>
                <button 
                  className={`feed-sort-btn ${forumSort === 'top' ? 'active' : ''}`}
                  onClick={() => setForumSort('top')}
                >
                  Top Voted
                </button>
              </div>

              <div className="feed-search-input-wrap">
                <Search size={14} />
                <input 
                  type="text" 
                  placeholder="Search topics, tokens, tags..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Thread Cards */}
            {filteredThreads.map((thread) => (
              <div 
                key={thread.id} 
                className="forum-thread-card"
                onClick={() => setActiveThreadModal(thread)}
              >
                <div className="thread-header-row">
                  <div className="thread-author-group">
                    <div className="thread-author-avatar">{thread.avatar}</div>
                    <div className="thread-author-info">
                      <span className="author-name">{thread.author}</span>
                      <span className="author-badge">{thread.role}</span>
                      <span className="thread-time">• {thread.time}</span>
                    </div>
                  </div>
                  <span className={`thread-status-tag ${thread.status}`}>
                    {thread.statusLabel}
                  </span>
                </div>

                <h3 className="thread-title">{thread.title}</h3>
                <p className="thread-preview-text">{thread.preview}</p>

                <div className="thread-tags-list">
                  {thread.tags.map(tag => (
                    <span key={tag} className="thread-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="thread-footer-meta">
                  <div className="thread-stats-group">
                    <span className="stat-item upvote-btn" onClick={(e) => { e.stopPropagation(); alert(`Upvoted "${thread.title}"!`); }}>
                      <ThumbsUp size={13} /> {thread.upvotes}
                    </span>
                    <span className="stat-item">
                      <MessageSquare size={13} /> {thread.replies} Replies
                    </span>
                    <span className="stat-item">
                      <Eye size={13} /> {thread.views} Views
                    </span>
                  </div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Open Thread <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}

          </main>
        </div>
      </section>

      {/* =========================================================
          3. MENTORSHIP PROGRAM
          ========================================================= */}
      <section id="mentorship" className="comm-mentorship-section">
        <div className="comm-section-header">
          <span className="comm-section-tag">DIRECT 1:1 CRAFT GUIDANCE</span>
          <h2 className="comm-section-title">Learn from the industry's finest.</h2>
          <p className="comm-section-desc">
            Book unvarnished 1:1 portfolio walkthroughs, frame-by-frame critique sessions, and career leveling roadmaps with verified Design Directors and Staff UX leads.
          </p>
        </div>

        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <BorderGlow
              key={mentor.name}
              className="mentor-profile-card"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="mentor-card-top-row">
                <div className="mentor-avatar-box">{mentor.avatar}</div>
                <div className="mentor-rating-chip">
                  <Star size={12} fill="#d97706" color="#d97706" />
                  <span>{mentor.rating}</span>
                  <span style={{ color: 'var(--text-dim)' }}>({mentor.reviews})</span>
                </div>
              </div>

              <div className="mentor-name-title">
                <h3 className="mentor-name">{mentor.name}</h3>
                <span className="mentor-company-role">{mentor.company}</span>
              </div>

              <p className="mentor-bio">{mentor.bio}</p>

              <div className="mentor-specialties-wrap">
                {mentor.specialties.map(spec => (
                  <span key={spec} className="spec-pill">{spec}</span>
                ))}
              </div>

              <div className="mentor-card-footer">
                <span className="mentor-availability">● {mentor.slots}</span>
                <button 
                  className="mentor-book-btn"
                  onClick={() => handleBookMentor(mentor)}
                >
                  Book 1:1
                </button>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* =========================================================
          4. ONGOING DESIGN CHALLENGES ARENA
          ========================================================= */}
      <section id="challenges" className="comm-challenges-section">
        <div className="comm-section-header">
          <span className="comm-section-tag">COMPETITIVE SPRINTS</span>
          <h2 className="comm-section-title">Weekly Heuristic Arenas</h2>
          <p className="comm-section-desc">
            Solve flawed real-world interfaces under realistic constraints. Earn verified platform badges, climb the Hall of Fame, and build irrefutable proof-of-work.
          </p>
        </div>

        <div className="challenges-arena-grid">
          {challenges.map((ch) => (
            <BorderGlow
              key={ch.id}
              className="challenge-arena-card"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={26}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="challenge-card-top">
                <span className={`challenge-diff-tag ${ch.difficulty}`}>{ch.diffLabel}</span>
                <div className="challenge-deadline-badge">
                  <Clock size={12} />
                  <span>{ch.deadline}</span>
                </div>
              </div>

              <h3 className="challenge-title">{ch.title}</h3>

              <div className="challenge-brief-box">
                {ch.brief}
              </div>

              <div className="challenge-stats-grid">
                <div className="challenge-stat-col">
                  <span className="challenge-stat-label">Participants</span>
                  <span className="challenge-stat-val">{ch.participants} Enrolled</span>
                </div>
                <div className="challenge-stat-col">
                  <span className="challenge-stat-label">Reward Pool</span>
                  <span className="challenge-stat-val" style={{ color: '#7C3AED' }}>{ch.reward}</span>
                </div>
              </div>

              <div className="challenge-action-row">
                <button 
                  className={`btn ${joinedChallenges[ch.id] ? 'btn-secondary' : 'btn-primary'}`}
                  style={{ width: '100%', padding: '10px 16px', fontSize: '0.82rem' }}
                  onClick={() => handleJoinChallenge(ch.id)}
                >
                  {joinedChallenges[ch.id] ? '✓ Enrolled in Sprint' : 'Join Challenge Arena'}
                </button>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* =========================================================
          5. LEADERBOARD & HALL OF FAME
          ========================================================= */}
      <section id="leaderboard" className="comm-leaderboard-section">
        <div className="comm-section-header">
          <span className="comm-section-tag">HALL OF FAME</span>
          <h2 className="comm-section-title">Recognizing Craft Excellence</h2>
          <p className="comm-section-desc">
            Rankings are determined by objective UX score audits, verified community critique quality, and heuristic sprint victories.
          </p>
        </div>

        <div className="leaderboard-shell">
          
          {/* Controls Strip */}
          <div className="leaderboard-controls-strip">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 850, fontSize: '0.9rem' }}>
              <Award size={20} color="#F59E0B" />
              <span>GLOBAL DESIGNER LEADERBOARD</span>
            </div>

            <div className="timeframe-tabs-group">
              <button 
                className={`timeframe-btn ${leaderboardTimeframe === 'weekly' ? 'active' : ''}`}
                onClick={() => setLeaderboardTimeframe('weekly')}
              >
                Weekly Sprint
              </button>
              <button 
                className={`timeframe-btn ${leaderboardTimeframe === 'month' ? 'active' : ''}`}
                onClick={() => setLeaderboardTimeframe('month')}
              >
                This Month
              </button>
              <button 
                className={`timeframe-btn ${leaderboardTimeframe === 'all' ? 'active' : ''}`}
                onClick={() => setLeaderboardTimeframe('all')}
              >
                All-Time Legends
              </button>
            </div>
          </div>

          {/* Podium Top 3 */}
          <div className="podium-deck-grid">
            
            {/* Rank 2 - Silver */}
            <div className="podium-card rank-2">
              <span className="podium-rank-badge silver">#2 SILVER</span>
              <div className="podium-avatar">{leaderboardPodium[0].avatar}</div>
              <h4 className="podium-user-name">{leaderboardPodium[0].name}</h4>
              <span className="podium-title-tag">{leaderboardPodium[0].title}</span>
              <div className="podium-score-val">{leaderboardPodium[0].score}</div>
              <div className="podium-stats-strip">
                <span>{leaderboardPodium[0].critiques} Critiques</span>
                <span>•</span>
                <span>{leaderboardPodium[0].wins} Wins</span>
              </div>
            </div>

            {/* Rank 1 - Gold */}
            <div className="podium-card rank-1">
              <span className="podium-rank-badge gold">👑 #1 GRANDMASTER</span>
              <div className="podium-avatar" style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
                {leaderboardPodium[1].avatar}
              </div>
              <h4 className="podium-user-name">{leaderboardPodium[1].name}</h4>
              <span className="podium-title-tag" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                {leaderboardPodium[1].title}
              </span>
              <div className="podium-score-val" style={{ color: '#7C3AED' }}>{leaderboardPodium[1].score}</div>
              <div className="podium-stats-strip">
                <span>{leaderboardPodium[1].critiques} Critiques</span>
                <span>•</span>
                <span>{leaderboardPodium[1].wins} Sprint Wins</span>
              </div>
            </div>

            {/* Rank 3 - Bronze */}
            <div className="podium-card rank-3">
              <span className="podium-rank-badge bronze">#3 BRONZE</span>
              <div className="podium-avatar">{leaderboardPodium[2].avatar}</div>
              <h4 className="podium-user-name">{leaderboardPodium[2].name}</h4>
              <span className="podium-title-tag">{leaderboardPodium[2].title}</span>
              <div className="podium-score-val">{leaderboardPodium[2].score}</div>
              <div className="podium-stats-strip">
                <span>{leaderboardPodium[2].critiques} Critiques</span>
                <span>•</span>
                <span>{leaderboardPodium[2].wins} Wins</span>
              </div>
            </div>

          </div>

          {/* Table Ranks 4-8 */}
          <div className="leaderboard-table-wrap">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Designer</th>
                  <th>Specialty Title</th>
                  <th>Verified Critiques</th>
                  <th>Reputation Score</th>
                  <th>Badges Earned</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardTable.map((row) => (
                  <tr key={row.rank}>
                    <td style={{ fontWeight: 900, color: 'var(--text-dim)' }}>#{row.rank}</td>
                    <td style={{ fontWeight: 850, color: 'var(--text-primary)' }}>{row.name}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{row.role}</td>
                    <td style={{ fontWeight: 800 }}>{row.critiques} audited</td>
                    <td style={{ fontWeight: 900, color: '#7C3AED' }}>{row.score}</td>
                    <td>
                      <span className="bento-pill-tag" style={{ background: 'rgba(124, 58, 237, 0.08)' }}>
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================
          6. COMMUNITY TELEMETRY & SOCIAL PROOF
          ========================================================= */}
      <section className="comm-activity-section">
        <div className="comm-section-header">
          <span className="comm-section-tag">COMMUNITY VELOCITY</span>
          <h2 className="comm-section-title">The Community in Motion</h2>
          <p className="comm-section-desc">
            Real metrics, active reviews, and tangible career growth happening across the network right now.
          </p>
        </div>

        <div className="activity-telemetry-shell">
          
          {/* Live Activity Stream */}
          <div className="activity-feed-stream-box">
            <div className="feed-stream-header">
              <span style={{ fontWeight: 850, fontSize: '0.9rem' }}>⚡ Real-time Audit Stream</span>
              <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 800 }}>LIVE WEBSOCKET ACTIVE</span>
            </div>

            <div className="feed-stream-list">
              <div className="feed-event-item">
                <div className="event-bullet-icon purple"><Zap size={14} /></div>
                <div className="event-content-meta">
                  <span className="event-text"><strong>Liam O'Connor</strong> unlocked the <em>"WCAG AAA Perfectionist"</em> badge.</span>
                  <span className="event-timestamp">Just now</span>
                </div>
              </div>

              <div className="feed-event-item">
                <div className="event-bullet-icon emerald"><CheckCircle2 size={14} /></div>
                <div className="event-content-meta">
                  <span className="event-text"><strong>Sofia Rossi</strong> submitted her solution to <em>IAM Permission Matrix</em>.</span>
                  <span className="event-timestamp">4 mins ago</span>
                </div>
              </div>

              <div className="feed-event-item">
                <div className="event-bullet-icon blue"><MessageSquare size={14} /></div>
                <div className="event-content-meta">
                  <span className="event-text"><strong>Jessica Duong</strong> left 3 frame annotations on <em>Fintech Onboarding v4</em>.</span>
                  <span className="event-timestamp">12 mins ago</span>
                </div>
              </div>

              <div className="feed-event-item">
                <div className="event-bullet-icon amber"><TrendingUp size={14} /></div>
                <div className="event-content-meta">
                  <span className="event-text"><strong>Carlos Gomez's</strong> UX Score escalated from <strong>78 → 94 / 100</strong>.</span>
                  <span className="event-timestamp">18 mins ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="community-impact-grid">
            <BorderGlow
              className="impact-tile"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={22}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="impact-metric-val">14,800+</div>
              <div>
                <h4 className="impact-metric-label">Audited Screens Reviewed</h4>
                <p className="impact-metric-desc">High-signal design reviews across mobile apps, SaaS tools, and design systems.</p>
              </div>
            </BorderGlow>

            <BorderGlow
              className="impact-tile"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={22}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="impact-metric-val">&lt; 18 min</div>
              <div>
                <h4 className="impact-metric-label">Average Critique Speed</h4>
                <p className="impact-metric-desc">Sub-second AI heuristics combined with prompt feedback from verified community peers.</p>
              </div>
            </BorderGlow>

            <BorderGlow
              className="impact-tile"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={22}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="impact-metric-val">94.2%</div>
              <div>
                <h4 className="impact-metric-label">Career Advancement Rate</h4>
                <p className="impact-metric-desc">Designers who reported receiving interview invitations or promotions within 90 days.</p>
              </div>
            </BorderGlow>

            <BorderGlow
              className="impact-tile"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={22}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div className="impact-metric-val">120+</div>
              <div>
                <h4 className="impact-metric-label">Vetted Staff Mentors</h4>
                <p className="impact-metric-desc">Active design leaders from Linear, Stripe, Figma, Apple, Airbnb, and OpenAI.</p>
              </div>
            </BorderGlow>
          </div>

        </div>
      </section>

      {/* =========================================================
          7. FINAL COMMUNITY CTA
          ========================================================= */}
      <section className="comm-final-cta-container">
        <div className="comm-cta-pill">
          <Sparkles size={14} />
          <span>Elevate Your Design Authority</span>
        </div>
        <h2 className="comm-cta-headline">
          Ready to join the highest-signal design community on the web?
        </h2>
        <p className="comm-cta-desc">
          Stop designing in isolation. Connect your Figma account, upload your first draft for sub-second critique, and level up alongside ambitious product designers worldwide.
        </p>
        <div className="comm-cta-buttons">
          <a 
            href="#forums" 
            className="btn btn-primary" 
            style={{ padding: '14px 28px', fontSize: '0.95rem' }}
          >
            Join the Community
            <ArrowRight size={16} />
          </a>
          <Link 
            to="/product" 
            className="btn btn-secondary" 
            style={{ padding: '14px 28px', fontSize: '0.95rem' }}
          >
            Explore Product Tour
          </Link>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE THREAD MODAL PREVIEW
          ========================================================= */}
      {activeThreadModal && (
        <div className="interactive-modal-backdrop" onClick={() => setActiveThreadModal(null)}>
          <div className="interactive-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveThreadModal(null)}>
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="thread-author-avatar">{activeThreadModal.avatar}</div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 850 }}>{activeThreadModal.author}</h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 750 }}>{activeThreadModal.role}</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 900 }}>{activeThreadModal.title}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{activeThreadModal.preview}</p>

            <div style={{ background: 'rgba(124, 58, 237, 0.04)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(124, 58, 237, 0.15)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 850, color: '#7C3AED', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} /> Cranial Space Automated Heuristic Summary:
              </span>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Verified 100% WCAG AAA contrast ratio compliance (6.8:1) on primary CTAs. Zero padding overlaps detected.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 750 }}>
                {activeThreadModal.replies} Active Discussion Replies
              </span>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                onClick={() => { alert('Reply submitted to thread!'); setActiveThreadModal(null); }}
              >
                Post Reply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          INTERACTIVE MENTOR BOOKING MODAL
          ========================================================= */}
      {bookingMentor && (
        <div className="interactive-modal-backdrop" onClick={() => setBookingMentor(null)}>
          <div className="interactive-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setBookingMentor(null)}>
              <X size={16} />
            </button>

            {bookedSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900 }}>1:1 Mentorship Session Confirmed!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  A calendar invite and Figma critique workspace link have been dispatched for your session with {bookingMentor.name}.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="mentor-avatar-box" style={{ width: '48px', height: '48px', fontSize: '0.95rem' }}>{bookingMentor.avatar}</div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900 }}>Schedule with {bookingMentor.name}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 750 }}>{bookingMentor.company}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)' }}>Select Focus Area:</label>
                  <select style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(15, 23, 42, 0.12)', fontSize: '0.82rem', background: '#f8fafc' }}>
                    <option>Portfolio Walkthrough & Narrative Defense</option>
                    <option>Figma Design System & Token Architecture</option>
                    <option>Frame-by-Frame Usability Audit</option>
                    <option>Career Strategy & Staff Promotion Guidance</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)' }}>Upcoming Available Slot:</label>
                  <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', fontSize: '0.82rem', fontWeight: 750, color: 'var(--primary)' }}>
                    📅 Thursday, 4:00 PM – 4:45 PM (EST) • 45 min 1:1
                  </div>
                </div>

                <button 
                  className="btn btn-primary" 
                  style={{ padding: '12px', width: '100%', marginTop: '6px', fontSize: '0.88rem' }}
                  onClick={confirmBooking}
                >
                  Confirm & Reserve 1:1 Slot
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default CommunityPage;
