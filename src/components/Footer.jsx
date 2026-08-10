import React, { useState } from 'react';
import { ArrowRight, Send, Check } from 'lucide-react';
import BorderGlow from './BorderGlow';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const navGroups = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Community', href: '/community' },
        { label: 'Mentorship', href: '/mentorship' },
        { label: 'Resources', href: '/resources' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Changelog', href: '#changelog' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: 'https://discord.gg' },
        { label: 'Events', href: '#events' },
        { label: 'Challenges', href: '#challenges' },
        { label: 'Leaderboard', href: '#leaderboard' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' }
      ]
    }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Top Area: Logo/Brand & Newsletter Card */}
        <div className="footer-top-grid">
          
          <div className="footer-brand-info">
            <div className="footer-logo">
              <div className="footer-logo-icon">C</div>
              <span className="footer-logo-text">Cranial Space</span>
            </div>
            <p className="footer-statement">
              Cranial Space helps Product Designers grow through AI-powered feedback, community critique and measurable design improvement.
            </p>
            
            {/* Social Links */}
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (formerly Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Discord">
                <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.95,54.65,1,77.53a105.15,105.15,0,0,0,32,16.2,77.7,77.7,0,0,0,6.72-11,68.6,68.6,0,0,1-10.64-5.12c.91-.67,1.81-1.37,2.65-2.1a75.22,75.22,0,0,0,94.94,0c.84.73,1.74,1.43,2.65,2.1a68.6,68.6,0,0,1-10.64,5.12,77.7,77.7,0,0,0,6.72,11,105.15,105.15,0,0,0,32-16.2C130.13,50.78,123.63,27.82,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Premium Newsletter Card wrapped with BorderGlow */}
          <BorderGlow
            className="newsletter-card"
            edgeSensitivity={30}
            glowColor="252 80 65"
            backgroundColor="rgba(255, 255, 255, 0.6)"
            borderRadius={24}
            glowRadius={40}
            glowIntensity={0.7}
            colors={['#5227FF', '#6366f1', '#3b82f6']}
          >
            <h3 className="newsletter-title">Stay ahead of product design.</h3>
            <p className="newsletter-description">
              Receive product updates, design insights and community highlights.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                disabled={subscribed}
              />
              <button 
                type="submit" 
                className={`newsletter-btn btn ${subscribed ? 'subscribed' : 'btn-primary'}`}
                disabled={subscribed}
              >
                {subscribed ? (
                  <>
                    <Check size={16} />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </BorderGlow>

        </div>

        <div className="footer-divider" />

        {/* Middle Area: Navigation Columns */}
        <div className="footer-nav-grid">
          {navGroups.map((group) => (
            <div key={group.title} className="footer-nav-col">
              <h4 className="footer-nav-title">{group.title}</h4>
              <ul className="footer-nav-links">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider" />

        {/* Bottom Bar Area */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="copyright">&copy; 2026 Cranial Space.</span>
            <span className="footer-credo">Helping Product Designers grow with confidence.</span>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-meta-item">
              <span className="meta-label">Version</span>
              <span className="meta-value">v1.0.0</span>
            </div>
            
            <div className="footer-meta-divider" />
            
            <div className="footer-meta-item">
              <span className="status-indicator"></span>
              <span className="meta-value">All Systems Operational</span>
            </div>
            
            <div className="footer-meta-divider" />
            
            <div className="footer-meta-item designer-love">
              Made with ❤️ for Designers
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
