'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Scroll3DModel from '../components/Scroll3DModel';
import Simple3DTest from '../components/Simple3DTest';

export default function WeatherhavenHomePage() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url(/mountain.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      padding: '120px 24px 60px 24px',
      fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
        }}>
          <Header />
          <Scroll3DModel />
          <Simple3DTest />
          
          {/* Site Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
        zIndex: 0
      }}></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: '200',
            color: '#ffffff',
            marginBottom: '30px',
            letterSpacing: '0.25em',
            lineHeight: '1.0',
            position: 'relative',
            fontFamily: '"SF Pro Display", "Helvetica Neue", Arial, sans-serif',
            textTransform: 'uppercase'
          }}>
            Weatherhaven
          </h1>
          
          {/* Divider Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{
              width: '300px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
              margin: '0 auto 40px auto',
              borderRadius: '1px'
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >

        {/* Features Section - Overlay Style */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 7vw, 5.2rem)',
              fontWeight: 900,
              marginBottom: '0',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              lineHeight: '1.08',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
              whiteSpace: 'normal',
              wordBreak: 'keep-all',
              background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 40%, #60a5fa 60%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 12px 40px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)'
            }}>
              Rapidly Deploying Mobile Infrastructure Anywhere in the World.
            </h1>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Military Solutions */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Military Solutions
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#cccccc',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                Battle-tested shelter systems designed for extreme conditions and rapid deployment in combat environments.
              </p>
            </motion.div>

            {/* Emergency Response */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Emergency Response
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#cccccc',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                Rapid deployment shelters for disaster relief, humanitarian aid, and emergency field operations.
              </p>
            </motion.div>

            {/* Remote Operations */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Remote Operations
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#cccccc',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                Specialized shelter systems for research stations, mining operations, and remote infrastructure projects.
              </p>
            </motion.div>
          </div>
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '60px 40px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 16px 64px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Explore Our Solutions
          </h3>
          <p style={{
            fontSize: '1.3rem',
            color: '#cccccc',
            fontWeight: '300',
            letterSpacing: '0.05em',
            marginBottom: '40px'
          }}>
            Discover our range of deployable shelter systems and configure your perfect solution.
          </p>
          <Link href="/configurator" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '12px',
                padding: '20px 40px',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                display: 'inline-block'
              }}
            >
              View Configurator
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '40px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <p style={{
          color: '#ffffff',
          fontSize: '0.9rem',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          marginBottom: '20px',
          fontWeight: '700'
        }}>
          Weatherhaven - Global Leader in Deployable Shelter Solutions
        </p>
        
        {/* Powered by Nexraft */}
        <a 
          href="https://nexraft.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '8px',
            padding: '8px 12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ opacity: 0.6 }}>Powered by</span>
          <span style={{ 
            color: '#60a5fa', 
            fontWeight: '700',
            fontFamily: '"Space Grotesk", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
            letterSpacing: '0.5px',
            opacity: 1 
          }}>
            Nexraft
          </span>
        </a>
      </motion.div>
    </div>
  );
}
