import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Features', href: '/features' },
    { label: 'Community', href: '/community' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <>
      <nav className={`navbar-wrapper glass-panel ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          <div className="logo-icon">C</div>
          <span>Cranial Space</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" onMouseLeave={() => setHoveredIdx(null)}>
          {navItems.map((item, idx) => (
            <li 
              key={item.label}
              onMouseEnter={() => setHoveredIdx(idx)}
              style={{ position: 'relative' }}
            >
              {item.href.startsWith('/#') ? (
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              ) : (
                <Link to={item.href} className="nav-link">
                  {item.label}
                </Link>
              )}
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="nav-hover-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn btn-primary btn-nav-cta">
            Join the Community
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-menu-links">
              {navItems.map((item, idx) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  {item.href.startsWith('/#') ? (
                    <a 
                      href={item.href} 
                      className="mobile-menu-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="mobile-menu-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="mobile-menu-actions">
              <button className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </button>
              <button className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Join the Community
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
