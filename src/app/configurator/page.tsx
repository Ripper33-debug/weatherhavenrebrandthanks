'use client';

import { useState, useEffect } from 'react';
import ShelterMenu from '../../components/ShelterMenu';
import Header from '../../components/Header';

export default function ConfiguratorPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('Configurator page loaded');
  }, []);

  if (!mounted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '2rem'
      }}>
        Loading Configurator...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      padding: '120px 24px 60px 24px',
      fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Header />
      <ShelterMenu />
    </div>
  );
}
