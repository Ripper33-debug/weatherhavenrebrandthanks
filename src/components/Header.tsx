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
        padding: '20px 0',
        pointerEvents: 'auto'
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
          gap: '32px',
          position: 'relative',
          zIndex: 1001
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
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1002,
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
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
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1002,
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              Products
            </button>
          </Link>

          {/* Configurator Button */}
          <button
            onClick={() => {
              console.log('Configurator button clicked');
              window.location.href = '/configurator';
            }}
            style={{
              background: 'rgba(0, 102, 204, 0.2)',
              border: '2px solid rgba(0, 102, 204, 0.5)',
              padding: '12px 24px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1002,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              borderRadius: '8px'
            }}
          >
            Configurator
          </button>

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
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1002,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            Military
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
