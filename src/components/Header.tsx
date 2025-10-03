'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMilitary = () => {
    const militarySection = document.getElementById('military-section');
    if (militarySection) {
      militarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't render until client-side to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.95)' 
          : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        padding: '20px 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '1.8rem',
            fontWeight: '900',
            color: '#ffffff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: '"SF Pro Display", "Helvetica Neue", Arial, sans-serif'
          }}
        >
          Weatherhaven
        </motion.div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {/* Products Button */}
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
              }}
            >
              Products
            </motion.button>
          </Link>

          {/* Configurator Button */}
          <Link href="/configurator" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.8) 0%, rgba(77, 166, 255, 0.6) 100%)',
                border: '2px solid rgba(0, 102, 204, 0.6)',
                borderRadius: '12px',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0, 102, 204, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 1) 0%, rgba(77, 166, 255, 0.8) 100%)';
                e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.8)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 102, 204, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.8) 0%, rgba(77, 166, 255, 0.6) 100%)';
                e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.6)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 102, 204, 0.3)';
              }}
            >
              Configurator
            </motion.button>
          </Link>

          {/* Military Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMilitary}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.8) 0%, rgba(255, 153, 51, 0.6) 100%)',
              border: '2px solid rgba(255, 102, 0, 0.6)',
              borderRadius: '12px',
              padding: '12px 24px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 16px rgba(255, 102, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 102, 0, 1) 0%, rgba(255, 153, 51, 0.8) 100%)';
              e.currentTarget.style.borderColor = 'rgba(255, 102, 0, 0.8)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 102, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 102, 0, 0.8) 0%, rgba(255, 153, 51, 0.6) 100%)';
              e.currentTarget.style.borderColor = 'rgba(255, 102, 0, 0.6)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 102, 0, 0.3)';
            }}
          >
            Military
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
