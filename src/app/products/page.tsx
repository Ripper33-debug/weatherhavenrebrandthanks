'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const products = [
    {
      id: 'trecc',
      name: 'TRECC',
      category: 'Military Solutions',
      description: 'Advanced deployable shelter system with multiple configuration options for military, emergency response, and remote operations.',
      features: ['Multiple configurations', 'Rapid deployment', 'Modular design', 'Extreme weather protection', 'Military-grade construction'],
      deploymentTime: '3 minutes',
      capacity: '4-6 personnel',
      weatherRating: 'Extreme',
      image: '/models/trecc-preview.jpg'
    },
    {
      id: 'herconn',
      name: 'HERCONN',
      category: 'Emergency Response',
      description: 'High-capacity emergency response shelter designed for disaster relief and humanitarian aid operations.',
      features: ['High capacity', 'Quick setup', 'Durable construction', 'Weather resistant', 'Modular expansion'],
      deploymentTime: '5 minutes',
      capacity: '8-12 personnel',
      weatherRating: 'High',
      image: '/models/herconn-preview.jpg'
    },
    {
      id: 'field-command',
      name: 'Field Command',
      category: 'Military Solutions',
      description: 'Command and control shelter system for military operations and tactical headquarters.',
      features: ['Command center', 'Secure communications', 'Tactical deployment', 'Advanced electronics', 'Security features'],
      deploymentTime: '4 minutes',
      capacity: '6-8 personnel',
      weatherRating: 'Extreme',
      image: '/models/field-command-preview.jpg'
    },
    {
      id: 'research-station',
      name: 'Research Station',
      category: 'Remote Operations',
      description: 'Specialized shelter system for remote research stations and scientific operations.',
      features: ['Research facilities', 'Equipment integration', 'Extended deployment', 'Environmental control', 'Data connectivity'],
      deploymentTime: '6 minutes',
      capacity: '4-6 personnel',
      weatherRating: 'High',
      image: '/models/research-station-preview.jpg'
    }
  ];

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
      
      {/* Hero Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(255, 102, 0, 0.1) 100%)',
        zIndex: 0,
        opacity: 0.3
      }}></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          position: 'relative',
          zIndex: 1
        }}
      >
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
          Our Products
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
        
        <p style={{
          fontSize: '1.3rem',
          color: '#cccccc',
          fontWeight: '300',
          letterSpacing: '0.05em',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Advanced deployable shelter systems for military, emergency response, and remote operations.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.03, y: -8 }}
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '40px',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Category Badge */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.8) 0%, rgba(77, 166, 255, 0.6) 100%)',
              border: '1px solid rgba(0, 102, 204, 0.4)',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#ffffff',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {product.category}
            </div>

            {/* Product Name */}
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              {product.name}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              lineHeight: '1.6',
              fontWeight: '300',
              marginBottom: '30px'
            }}>
              {product.description}
            </p>

            {/* Specifications */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '4px'
                }}>
                  {product.deploymentTime}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#cccccc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Deployment
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '4px'
                }}>
                  {product.capacity}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#cccccc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Capacity
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '4px'
                }}>
                  {product.weatherRating}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#cccccc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Weather
                </div>
              </div>
            </div>

            {/* Features */}
            <div style={{
              marginBottom: '30px'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Key Features
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {product.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '0.8rem',
                      color: '#ffffff',
                      fontWeight: '500'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <Link href={`/configurator/${product.id}`} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                Configure {product.name}
              </motion.div>
            </Link>
          </motion.div>
        ))}
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
      </motion.div>
    </div>
  );
}
