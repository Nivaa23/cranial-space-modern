import React, { useState } from 'react';
import { 
  Check, ArrowRight, Sparkles, Zap, Shield, Users, 
  GraduationCap, Layers, Activity, Award, FileText, 
  HelpCircle, ChevronDown, CheckCircle2, Clock, Globe, 
  BookOpen, Lock, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BorderGlow from '../components/BorderGlow';
import '../styles/PricingPage.css';

const PricingPage = () => {
  // Billing cycle toggle: 'monthly' | 'annual'
  const [billingCycle, setBillingCycle] = useState('annual');

  // FAQ accordion active state
  const [openFaq, setOpenFaq] = useState(0);

  // Student discount modal state
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  // BorderGlow settings for PRO card
  const proGlowColors = ['#7C3AED', '#A855F7', '#3B82F6'];
  const proGlowHSL = '258 89 60';

  // 1. Plan Data
  const plans = [
    {
      id: 'free',
      name: 'Free',
      badge: null,
      description: 'For designers getting started with foundational craft benchmarking.',
      price: {
        monthly: '$0',
        annual: '$0',
        period: 'free forever',
        subtext: 'No credit card required'
      },
      icon: <Sparkles size={20} />,
      iconClass: 'free',
      features: [
        { text: 'Basic UX Score (100-pt usability overview)', highlight: false },
        { text: 'Limited AI Feedback (3 frame audits/month)', highlight: false },
        { text: '10 Feedback Credits / month', highlight: false },
        { text: 'Community Sandbox Access', highlight: false },
        { text: 'Basic Portfolio Public Link', highlight: false },
        { text: 'Community Design Challenges', highlight: false }
      ],
      ctaText: 'Start Free',
      ctaType: 'secondary',
      ctaHref: '/product'
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'RECOMMENDED',
      description: 'For designers serious about improving their craft and career velocity.',
      price: {
        monthly: '$29',
        annual: '$24',
        period: '/ month',
        subtext: billingCycle === 'annual' ? 'Billed annually ($288/yr)' : 'Billed monthly'
      },
      icon: <Zap size={20} />,
      iconClass: 'pro',
      features: [
        { text: 'Advanced Multi-Pillar UX Score & Sub-Metrics', highlight: true },
        { text: 'Expanded AI Design Critique (Unlimited scans)', highlight: true },
        { text: '100 Feedback Credits / month', highlight: true },
        { text: 'Advanced Portfolio Tools & Iteration Sliders', highlight: true },
        { text: 'Design Challenges, Tier Ranks & Rewards', highlight: true },
        { text: 'Priority Community Feedback Queue', highlight: true },
        { text: 'Mentor Session Access & Video Critiques', highlight: true }
      ],
      ctaText: 'Start Pro',
      ctaType: 'primary',
      ctaHref: '/product'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'COMING SOON',
      description: 'For design teams, agencies, and organizations scaling craft discipline.',
      price: {
        monthly: 'Scale',
        annual: 'Scale',
        period: 'team tier',
        subtext: 'Launching Q4 2026'
      },
      icon: <Users size={20} />,
      iconClass: 'enterprise',
      features: [
        { text: 'Team Design Reviews & Shared Sandboxes', future: true },
        { text: 'Centralized Design System Sync & Tokens', future: true },
        { text: 'Advanced Team Analytics & Velocity Radar', future: true },
        { text: 'Dedicated Principal Mentor Office Hours', future: true },
        { text: 'Custom Feedback Workflows & Webhooks', future: true },
        { text: 'Organization-Level Usability Reporting', future: true }
      ],
      ctaText: 'Coming Soon',
      ctaType: 'coming-soon',
      ctaHref: '#waitlist'
    }
  ];

  // 2. Value Pillars Data
  const pillars = [
    {
      title: 'UX Score',
      tagline: 'Objective Quality',
      desc: 'Measure and track design quality with algorithmic 100-point benchmarks spanning contrast, 8pt grid, and visual hierarchy.',
      icon: <Activity size={22} />,
      colorClass: 'purple',
      chip: '4-Pillar Algorithmic Audit'
    },
    {
      title: 'Feedback Credits',
      tagline: 'Actionable Input',
      desc: 'Get structured feedback on demand. Use credits for instant computer vision heuristic scans and verified peer annotations.',
      icon: <Zap size={22} />,
      colorClass: 'blue',
      chip: 'On-Demand Canvas Telemetry'
    },
    {
      title: 'Portfolio Access',
      tagline: 'Hiring Proof',
      desc: 'Build and showcase your design work. Transform audits into 1-click hiring-ready case studies with before/after sliders.',
      icon: <Layers size={22} />,
      colorClass: 'emerald',
      chip: 'Verified Recruiter Transcripts'
    },
    {
      title: 'Mentor Reviews',
      tagline: 'Elite Guidance',
      desc: 'Get direct feedback from experienced practitioners. Async video breakdowns from Staff & Principal designers at top tech firms.',
      icon: <GraduationCap size={22} />,
      colorClass: 'amber',
      chip: '1-on-1 Async Video Critiques'
    }
  ];

  // 3. Comparison Matrix Rows
  const matrixData = [
    {
      category: 'Core Usability Intelligence',
      rows: [
        {
          feature: 'UX Score Engine',
          caption: 'Algorithmic 100-point usability index',
          free: 'Basic Overview',
          pro: 'Advanced 4-Pillar Breakdown',
          proHighlight: true,
          enterprise: 'Custom Org Benchmarks'
        },
        {
          feature: 'AI Design Critique',
          caption: 'Sub-second computer vision frame parser',
          free: '3 Audits / mo',
          pro: 'Unlimited Audits',
          proHighlight: true,
          enterprise: 'Dedicated AI Model Pool'
        },
        {
          feature: 'Feedback Credits',
          caption: 'Tokens for on-demand audits & reviews',
          free: '10 Credits / mo',
          pro: '100 Credits / mo',
          proHighlight: true,
          enterprise: 'Pooled Team Credits'
        },
        {
          feature: 'Accessibility & WCAG Check',
          caption: 'Automated contrast & touch-target scan',
          free: 'AA Level',
          pro: 'AAA + Full Compliance Matrix',
          proHighlight: true,
          enterprise: 'Custom Compliance Rules'
        }
      ]
    },
    {
      category: 'Community & Peer Sandboxes',
      rows: [
        {
          feature: 'Community Feedback',
          caption: 'Pinpoint annotations from verified designers',
          free: 'Standard Sandbox',
          pro: 'Priority Review Queue',
          proHighlight: true,
          enterprise: 'Private Team Sandbox'
        },
        {
          feature: 'Design Challenges',
          caption: 'Weekly curated interface redesign prompts',
          free: 'Basic Sprints',
          pro: 'Pro Challenges & Badges',
          proHighlight: true,
          enterprise: 'Custom Internal Sprints'
        },
        {
          feature: 'Progress Tracking',
          caption: 'Longitudinal craft velocity telemetry',
          free: '7-Day History',
          pro: 'Full 5-Axis Radar Telemetry',
          proHighlight: true,
          enterprise: 'Org-Level Skill Matrix'
        }
      ]
    },
    {
      category: 'Mentorship & Career Growth',
      rows: [
        {
          feature: 'Mentor Access',
          caption: 'Direct reviews from Principal & Staff Designers',
          free: 'Public AMAs',
          pro: 'Async 1-on-1 Video Reviews',
          proHighlight: true,
          enterprise: 'Dedicated Staff Mentor'
        },
        {
          feature: 'Portfolio Builder',
          caption: '1-Click hiring-ready case studies',
          free: 'Standard Link',
          pro: 'Interactive Sliders & Badges',
          proHighlight: true,
          enterprise: 'Custom Domain & Whitelabel'
        },
        {
          feature: 'Case Study Submission',
          caption: 'Multi-screen end-to-end user flows',
          free: 'Single Screen',
          pro: 'Multi-Screen Flows (10 screens)',
          proHighlight: true,
          enterprise: 'Full App Design Systems'
        }
      ]
    },
    {
      category: 'Team & Infrastructure',
      rows: [
        {
          feature: 'Team Design System Sync',
          caption: 'Centralized tokens and component tracking',
          free: '—',
          pro: '—',
          enterprise: 'Coming Soon'
        },
        {
          feature: 'Custom Feedback Workflows',
          caption: 'Figma plugins & Slack/Notion webhooks',
          free: '—',
          pro: '—',
          enterprise: 'Coming Soon'
        }
      ]
    }
  ];

  // 4. FAQ Data
  const faqs = [
    {
      q: 'Can I use Cranial Space for free?',
      a: 'Yes, absolutely. Our Free plan includes core access to the 100-point UX Score overview, community sandboxes, weekly design sprints, and 10 monthly feedback credits. It is free forever with no credit card required.'
    },
    {
      q: "What's included in the Free plan?",
      a: 'The Free plan gives you up to 3 AI design audits per month, 10 feedback credits, standard community peer reviews, access to public AMAs, and basic portfolio case study exports.'
    },
    {
      q: 'How does the Pro plan differ from Free?',
      a: 'The Pro plan unlocks unlimited AI frame audits, 100 monthly feedback credits, deep sub-pillar analytics (WCAG AAA, 8pt Grid discipline, Typographic scale), priority community feedback queues, interactive portfolio sliders, and direct 1-on-1 async video reviews from verified mentors.'
    },
    {
      q: 'Can I upgrade or downgrade later?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your account settings. When you upgrade, your credits and features unlock immediately on a prorated basis.'
    },
    {
      q: 'Do unused feedback credits expire?',
      a: 'On the Free plan, credits refresh each calendar month. On the Pro plan, unused feedback credits roll over for up to 3 billing cycles, ensuring you never lose credits during busy weeks.'
    },
    {
      q: 'Are mentor sessions included in every plan?',
      a: 'Community AMAs and public critique sessions are available on all tiers. Dedicated 1-on-1 async video teardowns and mentor sign-offs require a Pro subscription or mentor credit redemption.'
    },
    {
      q: 'Do you offer student or educator discounts?',
      a: 'Yes! We believe design education should be accessible to all future practitioners. We provide a 50% discount on the Pro plan for active students, educators, and accredited bootcamp attendees.'
    },
    {
      q: 'Is Enterprise available yet?',
      a: 'Enterprise is currently in private technical preview with selected partner design teams and agencies. It will launch publicly in Q4 2026. You can join our waitlist for early access and team pilot onboarding.'
    }
  ];

  return (
    <div className="pricing-page-container">
      
      {/* =========================================================
          1. PRICING HERO & BILLING TOGGLE
          ========================================================= */}
      <section className="pricing-hero-section">
        <div className="pricing-hero-badge">
          <span className="pricing-badge-pulse" />
          <span>PLANS FOR EVERY DESIGNER</span>
        </div>
        <h1 className="pricing-hero-title">
          Invest in <span className="gradient-text">better design decisions</span>.
        </h1>
        <p className="pricing-hero-desc">
          Start free, build your craft, and unlock deeper feedback, advanced insights, and expert mentorship as you grow.
        </p>

        {/* Interactive Billing Cycle Toggle */}
        <div className="pricing-billing-toggle-wrap">
          <button 
            className={`billing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
            type="button"
          >
            Monthly Billing
          </button>
          <button 
            className={`billing-toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
            type="button"
          >
            Annual Billing
            <span className="discount-tag">Save 20%</span>
          </button>
        </div>
      </section>

      {/* =========================================================
          2. THREE-TIER PRICING CARDS
          ========================================================= */}
      <section className="pricing-cards-section">
        <div className="pricing-cards-grid">
          {plans.map((plan) => {
            const isPro = plan.id === 'pro';
            const isEnterprise = plan.id === 'enterprise';

            const cardContent = (
              <div className={`pricing-plan-card ${isPro ? 'pro-card' : ''} ${isEnterprise ? 'enterprise-card' : ''}`}>
                {plan.badge && (
                  <div className="recommended-pill">
                    <Sparkles size={12} />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="plan-header">
                    {isEnterprise && (
                      <span className="coming-soon-badge">
                        <Clock size={11} />
                        Coming Q4 2026
                      </span>
                    )}
                    <div className="plan-name-row">
                      <h3 className="plan-name">{plan.name}</h3>
                      <div className={`plan-icon-wrap ${plan.iconClass}`}>
                        {plan.icon}
                      </div>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  {/* Pricing Details */}
                  <div className="plan-pricing-box">
                    {!isEnterprise && <span className="plan-price-currency">$</span>}
                    <span className="plan-price-amount">
                      {billingCycle === 'annual' ? plan.price.annual.replace('$', '') : plan.price.monthly.replace('$', '')}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="plan-price-period">{plan.price.period}</span>
                      <span className="plan-price-subtext">{plan.price.subtext}</span>
                    </div>
                  </div>

                  {/* Feature Inclusions */}
                  <ul className="plan-features-list">
                    {plan.features.map((feat, fIdx) => (
                      <li 
                        key={fIdx} 
                        className={`plan-feature-item ${feat.highlight ? 'highlight' : ''} ${feat.future ? 'future' : ''}`}
                      >
                        <div className="plan-check-icon">
                          {feat.future ? <Clock size={11} /> : <Check size={11} />}
                        </div>
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Action */}
                <div>
                  {isEnterprise ? (
                    <button 
                      className="plan-cta-btn btn-plan-coming-soon"
                      onClick={() => alert('Enterprise waitlist opened! We will notify you when team workspaces launch.')}
                      type="button"
                    >
                      {plan.ctaText}
                    </button>
                  ) : isPro ? (
                    <Link to={plan.ctaHref} className="plan-cta-btn btn-plan-primary">
                      {plan.ctaText}
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <Link to={plan.ctaHref} className="plan-cta-btn btn-plan-secondary">
                      {plan.ctaText}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            );

            // Wrap Pro Plan in BorderGlow for premium visual emphasis
            if (isPro) {
              return (
                <div key={plan.id} className="pro-card-glow-wrapper">
                  <BorderGlow
                    edgeSensitivity={35}
                    glowColor={proGlowHSL}
                    backgroundColor="rgba(255, 255, 255, 0.9)"
                    borderRadius={26}
                    glowRadius={45}
                    glowIntensity={1.0}
                    colors={proGlowColors}
                  >
                    {cardContent}
                  </BorderGlow>
                </div>
              );
            }

            return <div key={plan.id}>{cardContent}</div>;
          })}
        </div>
      </section>

      {/* =========================================================
          3. WHAT'S INCLUDED (4 VALUE PILLARS)
          ========================================================= */}
      <section className="pricing-pillars-section">
        <div className="pricing-section-header">
          <span className="pricing-section-tag">CORE CAPABILITIES</span>
          <h2 className="pricing-section-title">What you get inside the ecosystem.</h2>
          <p className="pricing-section-desc">
            Cranial Space is built around four foundational pillars designed to eliminate subjective guesswork and fast-track design mastery.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card">
              <div className={`pillar-icon-box ${pillar.colorClass}`}>
                {pillar.icon}
              </div>
              <div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <div className="pillar-tagline">{pillar.tagline}</div>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
              <div className="pillar-telemetry-chip">
                <CheckCircle2 size={13} color="var(--primary)" />
                <span>{pillar.chip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          4. PLAN COMPARISON MATRIX TABLE
          ========================================================= */}
      <section className="pricing-matrix-section">
        <div className="pricing-section-header">
          <span className="pricing-section-tag">FULL FEATURE BREAKDOWN</span>
          <h2 className="pricing-section-title">Compare plan capabilities.</h2>
          <p className="pricing-section-desc">
            Detailed side-by-side matrix of every tool, feature, and review mechanism available across tiers.
          </p>
        </div>

        <div className="matrix-table-card">
          <div className="matrix-table-wrapper">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th className="col-feature">Features & Capabilities</th>
                  <th className="col-tier">Free</th>
                  <th className="col-tier highlight">Pro (Recommended)</th>
                  <th className="col-tier">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {matrixData.map((cat, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <tr className="matrix-category-header">
                      <td colSpan={4}>{cat.category}</td>
                    </tr>
                    {cat.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="col-feature">
                          <div className="feature-info">
                            <span className="feature-title">{row.feature}</span>
                            <span className="feature-caption">{row.caption}</span>
                          </div>
                        </td>
                        
                        {/* Free Tier Cell */}
                        <td className="col-tier">
                          {row.free === '—' ? (
                            <span className="matrix-dash">—</span>
                          ) : (
                            <span className="matrix-val-text">{row.free}</span>
                          )}
                        </td>

                        {/* Pro Tier Cell */}
                        <td className="col-tier highlight">
                          {row.pro === '—' ? (
                            <span className="matrix-dash">—</span>
                          ) : (
                            <span className="matrix-val-text" style={{ color: '#7C3AED', fontWeight: 800 }}>
                              {row.pro}
                            </span>
                          )}
                        </td>

                        {/* Enterprise Tier Cell */}
                        <td className="col-tier">
                          {row.enterprise === 'Coming Soon' ? (
                            <span className="matrix-badge-tag blue">Coming Soon</span>
                          ) : (
                            <span className="matrix-val-text">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. STUDENT / EDUCATOR DISCOUNTS
          ========================================================= */}
      <section className="pricing-discount-section">
        <div className="pricing-discount-card">
          <div className="discount-left-content">
            <div className="discount-icon-box">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="discount-title">Design education should be accessible.</h3>
              <p className="discount-text">
                Eligible students, educators, and accredited design bootcamp participants receive <strong>50% off the Pro plan</strong> for 12 months with verified .edu or enrollment proof.
              </p>
              <div className="discount-perks-row">
                <span className="discount-perk-pill">
                  <CheckCircle2 size={12} color="#10b981" /> 50% Off Annual / Monthly
                </span>
                <span className="discount-perk-pill">
                  <CheckCircle2 size={12} color="#10b981" /> Full Pro Features Included
                </span>
                <span className="discount-perk-pill">
                  <CheckCircle2 size={12} color="#10b981" /> Renewable Annually
                </span>
              </div>
            </div>
          </div>

          <button 
            className="btn-discount-cta"
            onClick={() => setShowDiscountModal(true)}
            type="button"
          >
            <BookOpen size={16} />
            Learn About Eligibility
          </button>
        </div>
      </section>

      {/* Interactive Student Discount Modal */}
      {showDiscountModal && (
        <div className="discount-modal-overlay" onClick={() => setShowDiscountModal(false)}>
          <div className="discount-modal-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="discount-modal-close" 
              onClick={() => setShowDiscountModal(false)}
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="discount-icon-box" style={{ width: '42px', height: '42px' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 850, margin: 0 }}>Academic Verification</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cranial Space Academic Grant Program</span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              To claim your 50% academic grant, follow these quick steps:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8125rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>1</span>
                <span>Sign up with your verified university <strong>.edu</strong> or educational email address.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>2</span>
                <span>Alternatively, submit proof of active enrollment or student ID through support.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>3</span>
                <span>Receive your 50% discount coupon code automatically applied to your checkout.</span>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  alert('Verification link sent to your active session!');
                  setShowDiscountModal(false);
                }}
              >
                Apply with Student Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          6. PRICING FAQ ACCORDION
          ========================================================= */}
      <section className="pricing-faq-section" id="faq">
        <div className="pricing-section-header">
          <span className="pricing-section-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="pricing-section-title">Common questions about pricing.</h2>
          <p className="pricing-section-desc">
            Everything you need to know about billing, credit usage, upgrades, and platform access.
          </p>
        </div>

        <div className="pricing-faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className={`pricing-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="pricing-faq-trigger"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="pricing-faq-question">{faq.q}</span>
                  <div className="pricing-faq-icon">
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="pricing-faq-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          7. FINAL PRICING CTA
          ========================================================= */}
      <section className="pricing-final-cta-section">
        <div className="pricing-cta-glow-backdrop" />
        <div className="pricing-cta-content">
          <span className="pricing-cta-badge">UNCOMPROMISING CRAFT</span>
          <h2 className="pricing-cta-headline">
            Start improving your design craft today.
          </h2>
          <p className="pricing-cta-subtext">
            Join Cranial Space for free and upgrade when you're ready to go deeper.
          </p>
          <div className="pricing-cta-buttons">
            <Link to="/product" className="pricing-cta-primary">
              Start Free
              <ArrowRight size={16} />
            </Link>
            <Link to="/product" className="pricing-cta-secondary">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
