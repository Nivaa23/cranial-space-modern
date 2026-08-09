import React, { useState, useMemo } from 'react';
import { 
  BookOpen, FileText, Download, Sparkles, ArrowRight, CheckCircle, 
  Clock, Calendar, Search, Star, Bookmark, Check, ExternalLink, 
  Layers, ShieldCheck, Eye, TrendingUp, ArrowUpRight, X, Filter,
  Share2, Zap, Sliders, Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BorderGlow from '../components/BorderGlow';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  // Topic Filter State
  const [selectedTopic, setSelectedTopic] = useState('All Resources');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Download States
  const [downloadedItems, setDownloadedItems] = useState({});

  // Modal State for Article / Case Study Deep Dive
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Categories list for filter toolbar
  const topicsList = [
    'All Resources',
    'Design Systems',
    'UX Tips',
    'Portfolio Building',
    'Feedback & Critique',
    'AI in Design',
    'Checklists & Templates',
    'Case Studies'
  ];

  // 1. FEATURED ARTICLES DATA
  const primaryFeaturedArticle = {
    id: 'art-primary-1',
    title: 'The Anatomy of a Staff-Level Design System: Architecture, Governance, and Token Scale',
    category: 'Design Systems',
    categoryTheme: 'purple',
    excerpt: 'How leading software teams transition from fragmented UI component kits to multi-platform semantic tokens, CI/CD automated visual regression testing, and cross-functional governance.',
    readTime: '8 min read',
    date: 'August 2026',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Jessica Duong',
      role: 'Design Director @ Figma • Ex-Airbnb',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80'
    },
    fullContent: [
      'As design systems mature, the bottleneck shifts from drawing components to maintaining architectural integrity across hundreds of engineers and designers.',
      'A true Staff-level design system is not a Figma sticker sheet—it is an operating contract between design, brand, front-end engineering, and accessibility compliance.',
      'Key architectural pillars discussed in this breakdown:',
      '1. Three-Tier Token Hierarchies: Global primitives (color, space, radius) mapping to semantic aliases (surface-primary, text-danger), which feed component-scoped tokens.',
      '2. Automated Accessibility CI/CD: Integrating headless WCAG contrast assertions directly into Figma plugin webhooks before branches merge.',
      '3. Non-Destructive Deprecation Lifecycles: How to soft-deprecate legacy patterns without breaking live product surfaces or causing team-wide friction.'
    ]
  };

  const supportingFeaturedArticles = [
    {
      id: 'art-supp-1',
      title: '10 Micro-Heuristic Blindspots That Silently Kill B2B SaaS Conversions',
      category: 'UX Tips',
      categoryTheme: 'blue',
      excerpt: 'Subtle typographic hierarchy misalignments, ambiguous button states, and cognitive load traps uncovered through analyzing 1,200+ Cranial Space heuristic audits.',
      readTime: '6 min read',
      date: 'July 2026',
      author: {
        name: 'Marcus Vance',
        role: 'Staff UI Designer @ Linear',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
      },
      fullContent: [
        'Conversion friction in complex software rarely stems from a missing feature; it stems from micro-friction accumulated across secondary interactive states.',
        '1. Visual Weight Imbalance: Primary action buttons competing with noisy badges and secondary navigation triggers.',
        '2. Ambiguous Disabled States: Disabling buttons without inline tooltip explanations creates immediate dead ends for users.',
        '3. Focus Ring Neglect: Keyboard users lose orientation when focus outlines are stripped for aesthetic minimalism.'
      ]
    },
    {
      id: 'art-supp-2',
      title: 'Portfolio Architecture: Structuring Case Studies That Win Senior & Staff IC Roles',
      category: 'Portfolio Building',
      categoryTheme: 'purple',
      excerpt: 'Replace chronological "design thinking double-diamond" essays with high-impact problem framing, commercial telemetry, and defensible tradeoff narratives.',
      readTime: '9 min read',
      date: 'July 2026',
      author: {
        name: 'Alexandre Mercer',
        role: 'Staff Designer @ Stripe',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
      },
      fullContent: [
        'Hiring managers at top-tier tier SaaS companies review dozens of portfolios a week. They do not want to read generic university-style persona cards.',
        'They look for three signals: commercial acumen, systems thinking under pressure, and how you articulate hard technical tradeoffs.',
        'Structure your next case study using the Cranial Space Executive Format: Context & Baseline Metric -> Architectural Constraint -> Core UX Hypothesis -> Validated Outcome.'
      ]
    },
    {
      id: 'art-supp-3',
      title: 'The Architecture of Feedback: Why Canvas Annotations Beat Slack Post-Its',
      category: 'Feedback & Critique',
      categoryTheme: 'emerald',
      excerpt: 'Unstructured comments create noise. Discover how structured heuristic markers and precision coordinate pins turn team critiques into actionable iteration vectors.',
      readTime: '5 min read',
      date: 'June 2026',
      author: {
        name: 'Elena Rostova',
        role: 'Principal UX @ Datadog',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80'
      },
      fullContent: [
        'Unanchored feedback like "can we make this feel punchier?" wastes countless iteration cycles.',
        'When designers critique using pinned heuristic categories—such as Typographic Contrast, Touch Target Ergonomics, or Information Scent—discussions instantly elevate from subjective opinion to measurable craft standards.'
      ]
    },
    {
      id: 'art-supp-4',
      title: 'AI in Design: Augmenting Human Taste with Real-Time Heuristic Telemetry',
      category: 'AI in Design',
      categoryTheme: 'purple',
      excerpt: 'Why AI will not replace product designers, but designers who leverage real-time spatial scanning and WCAG telemetry will drastically outpace those who do not.',
      readTime: '7 min read',
      date: 'June 2026',
      author: {
        name: 'Kavita Patel',
        role: 'Head of Product Design @ Vercel',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&h=120&q=80'
      },
      fullContent: [
        'The role of AI in modern product design is not to generate generic cookie-cutter artboards—it is to eliminate mundane audit overhead.',
        'By automating token validation, accessibility checks, and responsive breakpoint stress-tests in milliseconds, designers can devote 100% of their cognition to user empathy and strategy.'
      ]
    }
  ];

  // 2. DESIGN TEMPLATES & CHECKLISTS DATA
  const templatesList = [
    {
      id: 'temp-1',
      title: 'Comprehensive UX & Usability Audit Matrix',
      type: 'Checklist & Framework',
      description: 'A 42-point structured heuristic evaluation framework covering Nielsen Norman rules, WCAG 2.2 AA/AAA contrast ratios, visual weight, and interaction friction.',
      format: '.FIG + NOTION',
      downloads: '4,820 downloads',
      color: '258 89 60',
      theme: 'purple',
      icon: <CheckCircle size={22} />,
      highlights: [
        '42 categorized heuristic test items',
        'Built-in score calculation matrix',
        'Figma auto-annotation stickers included'
      ]
    },
    {
      id: 'temp-2',
      title: 'Senior & Staff Portfolio Review Rubric',
      type: 'Evaluation Rubric',
      description: 'The exact 28-point assessment rubric used by hiring managers at Stripe, Figma, and Linear to evaluate case study storytelling, craft depth, and business impact.',
      format: 'NOTION + PDF',
      downloads: '6,140 downloads',
      color: '220 89 60',
      theme: 'blue',
      icon: <Star size={22} />,
      highlights: [
        'Staff IC storytelling template',
        'Commercial impact framing guide',
        'Interactive self-assessment calculator'
      ]
    },
    {
      id: 'temp-3',
      title: 'Live Design Critique & Sandbox Guidelines',
      type: 'Facilitation Guide',
      description: 'A structured 45-minute synchronous design critique blueprint designed to eliminate subjective opinion and focus feedback on telemetry, heuristics, and user intent.',
      format: 'FIGJAM + PDF',
      downloads: '3,290 downloads',
      color: '160 84 45',
      theme: 'emerald',
      icon: <Sliders size={22} />,
      highlights: [
        '45-minute structured timing roadmap',
        'Annotation pin iconography pack',
        'Action item resolution tracker'
      ]
    },
    {
      id: 'temp-4',
      title: 'UX Research & Usability Interview Starter Kit',
      type: 'Research Toolkit',
      description: 'Ready-to-use user interview scripts, task observation synthesis grids, and qualitative affinity mapping templates for rapid usability testing rounds.',
      format: 'NOTION + MIRO',
      downloads: '2,950 downloads',
      color: '38 92 50',
      theme: 'amber',
      icon: <BookOpen size={22} />,
      highlights: [
        '14 interview script scenario templates',
        'Insight tag matrix with auto-sorting',
        'Stakeholder executive summary slide'
      ]
    },
    {
      id: 'temp-5',
      title: 'Staff-Level Product Case Study Narrative Kit',
      type: 'Storytelling Template',
      description: 'A modular storytelling scaffold for Figma and Notion with pre-styled layouts for before/after comparison slides, tradeoff diagrams, and telemetry logs.',
      format: 'FIGMA + NOTION',
      downloads: '5,310 downloads',
      color: '240 85 62',
      theme: 'indigo',
      icon: <Layers size={22} />,
      highlights: [
        'High-converting case study wireframes',
        'Metric visualization widget components',
        'Recruiter-ready responsive layout'
      ]
    },
    {
      id: 'temp-6',
      title: 'Design System Token Spec & Handoff Matrix',
      type: 'Engineering Handoff',
      description: 'Complete token governance template linking design variables, semantic color maps, typography scales, and zero-drift developer handoff checklists.',
      format: 'FIGMA + GITHUB',
      downloads: '4,120 downloads',
      color: '340 85 60',
      theme: 'rose',
      icon: <ShieldCheck size={22} />,
      highlights: [
        'Three-tier token nomenclature guide',
        'Component prop specification tables',
        'Zero-drift QA checklist for engineers'
      ]
    }
  ];

  // 3. CASE STUDY SHOWCASE DATA
  const caseStudiesList = [
    {
      id: 'cs-1',
      title: 'Re-architecting Enterprise Cloud Telemetry & IAM Permissions UX',
      category: 'B2B SaaS & Security',
      description: 'How complex hierarchical permission grids and role inheritance were transformed into a human-readable visual policy simulator with zero cognitive overload.',
      impactMetric: '68% Less Config Errors',
      keyOutcome: 'Reduced enterprise misconfiguration tickets by 68% and accelerated customer admin onboarding from 14 minutes to 90 seconds.',
      designer: {
        name: 'Elena Rostova',
        role: 'Principal UX @ Datadog • Cranial Space Mentor',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80'
      },
      tags: ['Permission Grids', 'Information Architecture', 'Developer Tooling'],
      fullStory: 'In enterprise telemetry infrastructure, configuring IAM roles is notorious for causing catastrophic access misconfigurations. By introducing a visual simulation sandbox and progressive disclosure heuristics, we gave security engineers instant visual feedback on effective permissions before deployment.'
    },
    {
      id: 'cs-2',
      title: 'High-Velocity 1-Click Checkout Engine & Conversion Architecture',
      category: 'FinTech & Growth',
      description: 'Redesigning multi-step payment flows into an adaptive, single-key conversion experience with real-time card validation and WCAG AAA compliance.',
      impactMetric: '+14.2% Conversion Lift',
      keyOutcome: 'Delivered an authenticated conversion rate increase of +14.2% across 4.2M monthly transactions, saving 3.8 seconds per checkout session.',
      designer: {
        name: 'Alexandre Mercer',
        role: 'Staff Designer @ Stripe • Cranial Space Mentor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
      },
      tags: ['Conversion Science', 'Micro-Interactions', 'Payment Security'],
      fullStory: 'Checkout friction is fatal. We audited every millisecond of user input, redesigned keyboard focus behavior on mobile devices, and eliminated cognitive drag by consolidating address autofill with instant tokenized payment authentication.'
    },
    {
      id: 'cs-3',
      title: 'Unified Multi-Brand Design Token Engine Across 18 Surfaces',
      category: 'Design Systems',
      description: 'Scaling a cross-platform design token architecture supporting Web, iOS, and Android with automated semantic aliases and zero visual drift.',
      impactMetric: '18 Unified Platforms',
      keyOutcome: 'Eliminated manual design token drift across 120+ designers and cut cross-functional engineering handoff syncs from 4 hours/wk to zero.',
      designer: {
        name: 'Jessica Duong',
        role: 'Design Director @ Figma • Cranial Space Mentor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80'
      },
      tags: ['Design Tokens', 'Cross-Platform', 'Governance'],
      fullStory: 'When managing multiple product brands, manual CSS syncing is unsustainable. We engineered a centralized token compiler in Figma that synchronizes design variables directly to GitHub repositories on branch release.'
    },
    {
      id: 'cs-4',
      title: 'Keyboard-First Ergonomics & Spatial Density in Desktop Workspaces',
      category: 'Productivity & Pro UX',
      description: 'Engineering an ultra-responsive, high-density issue tracker interface tuned for keyboard navigation, sub-50ms latency, and ergonomic delight.',
      impactMetric: '3.4x Faster Task Velocity',
      keyOutcome: 'Power users achieved a 3.4x speed increase in triage workflows with 92% of actions performed purely via global keyboard shortcuts.',
      designer: {
        name: 'Marcus Vance',
        role: 'Staff UI Designer @ Linear • Cranial Space Mentor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
      },
      tags: ['Keyboard Navigation', 'High-Density UI', 'Desktop Ergonomics'],
      fullStory: 'Software for experts requires radical respect for efficiency. We redesigned the command palette, spatial navigation grids, and layout density to eliminate unnecessary mouse journeys and keep users in a state of continuous flow.'
    }
  ];

  // Filtered lists based on search and topic
  const filteredTemplates = useMemo(() => {
    return templatesList.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.type.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (selectedTopic === 'All Resources' || selectedTopic === 'Checklists & Templates') return true;
      if (selectedTopic === 'Design Systems' && item.title.includes('Token')) return true;
      if (selectedTopic === 'Portfolio Building' && item.title.includes('Portfolio')) return true;
      if (selectedTopic === 'Feedback & Critique' && item.title.includes('Critique')) return true;
      if (selectedTopic === 'UX Tips' && item.title.includes('UX')) return true;
      return true;
    });
  }, [searchQuery, selectedTopic]);

  const handleDownload = (id) => {
    setDownloadedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      // Keep downloaded confirmation state active
    }, 2000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const glowColors = ['#7C3AED', '#A855F7', '#3B82F6'];
  const glowHSL = '258 89 60';

  return (
    <div className="resources-page-container">
      
      {/* ==========================================================================
          1. HERO SECTION
          ========================================================================== */}
      <section className="res-hero-section">
        <div className="res-hero-badge">
          <span className="res-pulse-dot" />
          <span>The Designer's Resource Library</span>
        </div>

        <h1 className="res-hero-headline">
          Resources to <span className="gradient-text">sharpen</span> your craft.
        </h1>

        <p className="res-hero-subtitle">
          Practical insights, templates, case studies, and heuristics frameworks built to help you master product design, pass rigorous critiques, and accelerate your career.
        </p>

        {/* Quick Topic Filter & Search Bar */}
        <div className="res-filter-toolbar">
          <div className="res-topic-pills">
            {topicsList.map(topic => (
              <button
                key={topic}
                type="button"
                className={`res-topic-btn ${selectedTopic === topic ? 'active' : ''}`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="res-search-box">
            <Search size={15} color="var(--text-dim)" />
            <input 
              type="text" 
              placeholder="Search guides, tools..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. FEATURED ARTICLES (ASYMMETRIC EDITORIAL LAYOUT)
          ========================================================================== */}
      {(selectedTopic === 'All Resources' || selectedTopic === 'Design Systems' || selectedTopic === 'UX Tips' || selectedTopic === 'Portfolio Building' || selectedTopic === 'Feedback & Critique' || selectedTopic === 'AI in Design') && (
        <section className="featured-articles-section" id="articles">
          <div className="res-section-header split-header">
            <div className="res-header-left">
              <span className="res-category-tag">Curated Publication</span>
              <h2 className="res-section-title">Featured Editorial & Insights</h2>
              <p className="res-section-desc">
                In-depth essays and tactical tear-downs on design systems, UX heuristics, career mobility, and the future of product craft.
              </p>
            </div>
          </div>

          <div className="editorial-bento-layout">
            {/* Primary Heroic Article Card (Full-width Horizontal Bento Card) */}
            <BorderGlow
              className="primary-article-card"
              edgeSensitivity={30}
              glowColor={glowHSL}
              backgroundColor="var(--card-bg)"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.0}
              colors={glowColors}
            >
              <div 
                className="primary-article-inner"
                onClick={() => setActiveModalItem(primaryFeaturedArticle)}
              >
                <div className="primary-article-media">
                  <img 
                    src={primaryFeaturedArticle.coverImage} 
                    alt={primaryFeaturedArticle.title}
                    loading="lazy"
                  />
                  <span className="media-tag-overlay">{primaryFeaturedArticle.category}</span>
                  <span className="media-read-badge">
                    <Clock size={12} /> {primaryFeaturedArticle.readTime}
                  </span>
                </div>

                <div className="primary-article-content">
                  <div className="primary-article-body">
                    <div className="article-meta-row">
                      <span>{primaryFeaturedArticle.date}</span>
                      <span className="meta-dot" />
                      <span>Lead Architectural Essay</span>
                    </div>

                    <h3 className="primary-article-title">{primaryFeaturedArticle.title}</h3>
                    
                    <p className="primary-article-excerpt">{primaryFeaturedArticle.excerpt}</p>
                  </div>

                  <div className="article-author-strip">
                    <div className="author-info-group">
                      <img 
                        src={primaryFeaturedArticle.author.avatar} 
                        alt={primaryFeaturedArticle.author.name} 
                        className="author-avatar-img"
                      />
                      <div className="author-text-col">
                        <span className="author-name-text">{primaryFeaturedArticle.author.name}</span>
                        <span className="author-role-text">{primaryFeaturedArticle.author.role}</span>
                      </div>
                    </div>

                    <span className="read-action-btn">
                      Read Essay <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </BorderGlow>

            {/* Supporting Articles 2x2 Bento Grid */}
            <div className="secondary-articles-grid">
              {supportingFeaturedArticles.map(art => (
                <BorderGlow
                  key={art.id}
                  className="secondary-article-card"
                  edgeSensitivity={30}
                  glowColor={glowHSL}
                  backgroundColor="var(--card-bg)"
                  borderRadius={24}
                  glowRadius={40}
                  glowIntensity={1.0}
                  colors={glowColors}
                >
                  <div 
                    className="secondary-article-inner"
                    onClick={() => setActiveModalItem(art)}
                  >
                    <div className="secondary-top-row">
                      <span className={`secondary-category-pill ${art.categoryTheme}`}>
                        {art.category}
                      </span>
                      <span className="secondary-read-time">
                        <Clock size={11} /> {art.readTime}
                      </span>
                    </div>

                    <div className="secondary-body-block">
                      <h4 className="secondary-article-title">{art.title}</h4>
                      <p className="secondary-article-excerpt">{art.excerpt}</p>
                    </div>

                    <div className="secondary-footer-row">
                      <div className="secondary-author-info">
                        <img 
                          src={art.author.avatar} 
                          alt={art.author.name}
                          className="secondary-author-avatar" 
                        />
                        <span className="secondary-author-text">{art.author.name} ({art.author.role.split('•')[0]})</span>
                      </div>
                      <span className="read-action-btn compact">
                        Read <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================================
          3. DESIGN TEMPLATES & CHECKLISTS SECTION
          ========================================================================== */}
      {(selectedTopic === 'All Resources' || selectedTopic === 'Checklists & Templates' || selectedTopic === 'Design Systems' || selectedTopic === 'Portfolio Building' || selectedTopic === 'Feedback & Critique' || selectedTopic === 'UX Tips') && (
        <section className="templates-section" id="templates">
          <div className="res-section-header split-header">
            <div className="res-header-left">
              <span className="res-category-tag">Production Toolkits</span>
              <h2 className="res-section-title">Design Templates & Checklists</h2>
              <p className="res-section-desc">
                Battle-tested frameworks, audit matrices, and handoff checklists designed to elevate your daily workflows immediately.
              </p>
            </div>
          </div>

          <div className="templates-grid">
            {filteredTemplates.map(tpl => (
              <BorderGlow
                key={tpl.id}
                className="template-card"
                edgeSensitivity={30}
                glowColor={glowHSL}
                backgroundColor="var(--card-bg)"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1.0}
                colors={glowColors}
              >
                <div className="template-card-inner">
                  <div className="template-card-content">
                    <div className="template-header-row">
                      <div className={`template-icon-box ${tpl.theme}`}>
                        {tpl.icon}
                      </div>
                      <span className="format-pill-tag">{tpl.format}</span>
                    </div>

                    <div className="template-body-block">
                      <span className="template-type-label">{tpl.type}</span>
                      <h3 className="template-title">{tpl.title}</h3>
                      <p className="template-description">{tpl.description}</p>
                    </div>

                    <ul className="template-highlights-list">
                      {tpl.highlights.map(h => (
                        <li key={h}>
                          <span className="template-check-dot" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="template-footer-strip">
                    <div className="template-stats-meta">
                      <span className="template-downloads-count">{tpl.downloads}</span>
                    </div>

                    <button
                      type="button"
                      className={`download-action-btn ${downloadedItems[tpl.id] ? 'downloaded' : ''}`}
                      onClick={() => handleDownload(tpl.id)}
                    >
                      {downloadedItems[tpl.id] ? (
                        <>
                          <Check size={14} strokeWidth={3} />
                          <span>Ready (.zip)</span>
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          <span>Download</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          4. CASE STUDY SHOWCASE SECTION
          ========================================================================== */}
      {(selectedTopic === 'All Resources' || selectedTopic === 'Case Studies' || selectedTopic === 'Design Systems' || selectedTopic === 'UX Tips') && (
        <section className="case-studies-section" id="case-studies">
          <div className="res-section-header split-header">
            <div className="res-header-left">
              <span className="res-category-tag">Ecosystem Spotlight</span>
              <h2 className="res-section-title">Case Study Showcase</h2>
              <p className="res-section-desc">
                Real-world product design transformations and teardowns authored by verified practitioners within the Cranial Space ecosystem.
              </p>
            </div>
          </div>

          <div className="case-studies-editorial-grid">
            {caseStudiesList.map(cs => (
              <BorderGlow
                key={cs.id}
                className="case-study-card"
                edgeSensitivity={30}
                glowColor={glowHSL}
                backgroundColor="var(--card-bg)"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1.0}
                colors={glowColors}
              >
                <div className="case-study-inner">
                  <div className="case-study-top-strip">
                    <span className="case-study-category">{cs.category}</span>
                    <span className="case-metric-badge">
                      <TrendingUp size={13} /> {cs.impactMetric}
                    </span>
                  </div>

                  <div className="case-study-main">
                    <h3 className="case-study-title">{cs.title}</h3>
                    <p className="case-study-desc">{cs.description}</p>
                    
                    <div className="case-study-impact-box">
                      <span className="impact-label">Key Measured Outcome</span>
                      <span className="impact-value">{cs.keyOutcome}</span>
                    </div>
                  </div>

                  <div className="case-study-footer">
                    <div className="case-designer-info">
                      <img 
                        src={cs.designer.avatar} 
                        alt={cs.designer.name}
                        className="case-designer-avatar"
                      />
                      <div className="case-designer-names">
                        <span className="case-designer-name">{cs.designer.name}</span>
                        <span className="case-designer-role">{cs.designer.role}</span>
                      </div>
                    </div>

                    <button 
                      type="button" 
                      className="view-case-btn"
                      onClick={() => setActiveModalItem(cs)}
                    >
                      View Breakdown <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          5. NEWSLETTER SIGNUP SECTION
          ========================================================================== */}
      <section className="newsletter-section-wrapper" id="newsletter">
        <div className="newsletter-card-container">
          <div className="newsletter-aurora-glow" />
          
          <div className="newsletter-content-layout">
            <div className="newsletter-left-text">
              <div className="newsletter-kicker-badge">
                <Sparkles size={13} />
                <span>Weekly Publication</span>
              </div>
              <h2 className="newsletter-heading">The Weekly Heuristic Dispatch</h2>
              <p className="newsletter-desc">
                Curated product design breakdowns, downloadable Figma checklists, Staff-level career lessons, and community highlights delivered directly to your inbox every Tuesday.
              </p>

              <div className="newsletter-topics-row">
                <span className="topic-chip">⚡ UX Teardowns</span>
                <span className="topic-chip">📐 Figma Token Guides</span>
                <span className="topic-chip">🎯 Staff Career Maps</span>
                <span className="topic-chip">📋 Downloadable Checklists</span>
              </div>
            </div>

            <div className="newsletter-right-form-wrap">
              {newsletterSubscribed ? (
                <div className="subscribed-success-card">
                  <div className="success-check-badge">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <div className="success-text">
                    <h4>You're subscribed!</h4>
                    <p>We've sent your welcome kit and first 3 downloadable checklists to your inbox.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="newsletter-interactive-form">
                  <div className="newsletter-input-group">
                    <input 
                      type="email" 
                      placeholder="Enter your design email..." 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="newsletter-submit-btn">
                      Subscribe Free
                      <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="newsletter-trust-meta">
                    <ShieldCheck size={14} color="#10b981" />
                    <span>Joined by 14,000+ designers at Figma, Linear, Stripe, and Apple. Zero spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          6. MODAL ARTICLE & CASE STUDY PREVIEW
          ========================================================================== */}
      <AnimatePresence>
        {activeModalItem && (
          <div 
            className="resource-modal-overlay"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div 
              className="resource-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              {activeModalItem.coverImage && (
                <div className="modal-hero-cover">
                  <img src={activeModalItem.coverImage} alt={activeModalItem.title} />
                </div>
              )}

              <div className="modal-content-body">
                <div className="modal-header-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="res-category-tag">{activeModalItem.category}</span>
                    {activeModalItem.readTime && (
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {activeModalItem.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="modal-title">{activeModalItem.title}</h2>
                  
                  {activeModalItem.author && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                      <img 
                        src={activeModalItem.author.avatar} 
                        alt={activeModalItem.author.name}
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>{activeModalItem.author.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{activeModalItem.author.role}</div>
                      </div>
                    </div>
                  )}

                  {activeModalItem.designer && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                      <img 
                        src={activeModalItem.designer.avatar} 
                        alt={activeModalItem.designer.name}
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>{activeModalItem.designer.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{activeModalItem.designer.role}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="modal-article-prose">
                  {activeModalItem.fullContent ? (
                    activeModalItem.fullContent.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  ) : activeModalItem.fullStory ? (
                    <>
                      <div className="modal-callout-box">
                        <strong>Commercial Impact: </strong>{activeModalItem.keyOutcome}
                      </div>
                      <p>{activeModalItem.fullStory}</p>
                      <h4>Key Architectural Highlights</h4>
                      <p>{activeModalItem.description}</p>
                    </>
                  ) : (
                    <p>{activeModalItem.excerpt || activeModalItem.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResourcesPage;
