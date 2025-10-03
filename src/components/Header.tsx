'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
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
        background: 'transparent',
        padding: '20px 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {/* Home Button */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Home
            </button>
          </Link>

          {/* Products Button */}
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Products
            </button>
          </Link>

          {/* Configurator Button */}
          <Link href="/configurator" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Configurator
            </button>
          </Link>

          {/* Military Button */}
          <button
            onClick={scrollToMilitary}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '12px 24px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            Military
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
