'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';

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

        {/* Features Section */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '900',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Global Leader in Deployable Solutions
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#cccccc',
              fontWeight: '300',
              letterSpacing: '0.05em'
            }}>
              Advanced shelter systems for military, emergency response, and remote operations.
            </p>
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
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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

        {/* SEXY Military Section */}
        <div id="military-section" style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 20px',
          position: 'relative'
        }}>
          {/* Dimmed Background Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%)',
            borderRadius: '32px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }}></div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                marginBottom: '80px'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '24px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Military Solutions
              </h2>
              <p style={{
                fontSize: '1.4rem',
                color: '#e0e7ff',
                fontWeight: '300',
                letterSpacing: '0.05em',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Battle-tested shelter systems designed for extreme conditions and rapid deployment in combat environments.
              </p>
            </motion.div>

            {/* 3 Photo Modules with Bullet Points */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px',
              marginBottom: '80px'
            }}>
              {/* Module 1 - TRECC */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -8 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(0, 102, 204, 0.05) 100%)',
                  border: '2px solid rgba(0, 102, 204, 0.3)',
                  borderRadius: '24px',
                  padding: '40px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0, 102, 204, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* TRECC Product Image */}
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundImage: 'url(/models/trecc-military-deployment.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '16px',
                  marginBottom: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0, 102, 204, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Image overlay for better text readability */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                    padding: '20px',
                    color: '#ffffff'
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '4px'
                    }}>
                      TRECC Military Deployment
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      opacity: 0.9
                    }}>
                      Rapid deployment in extreme conditions
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  TRECC
                </h3>

                {/* Bullet Points */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                    }}></div>
                    <span>3-minute rapid deployment</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                    }}></div>
                    <span>6-personnel capacity</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                    }}></div>
                    <span>Extreme weather protection</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                    }}></div>
                    <span>Military-grade construction</span>
                  </div>
                </div>
              </motion.div>

              {/* Module 2 - Field Command */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -8 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, rgba(255, 102, 0, 0.05) 100%)',
                  border: '2px solid rgba(255, 102, 0, 0.3)',
                  borderRadius: '24px',
                  padding: '40px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(255, 102, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Field Command Product Image */}
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundImage: 'url(/models/field-command-center.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '16px',
                  marginBottom: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(255, 102, 0, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Image overlay for better text readability */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                    padding: '20px',
                    color: '#ffffff'
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '4px'
                    }}>
                      Field Command Center
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      opacity: 0.9
                    }}>
                      Advanced command and control operations
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Field Command
                </h3>

                {/* Bullet Points */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(249, 115, 22, 0.5)'
                    }}></div>
                    <span>Command center operations</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(249, 115, 22, 0.5)'
                    }}></div>
                    <span>Secure communications</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(249, 115, 22, 0.5)'
                    }}></div>
                    <span>8-personnel capacity</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(249, 115, 22, 0.5)'
                    }}></div>
                    <span>Advanced electronics</span>
                  </div>
                </div>
              </motion.div>

              {/* Module 3 - Tactical Operations */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -8 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)',
                  border: '2px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '24px',
                  padding: '40px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Tactical Operations Product Image */}
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundImage: 'url(/models/tactical-operations-shelter.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '16px',
                  marginBottom: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(34, 197, 94, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Image overlay for better text readability */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                    padding: '20px',
                    color: '#ffffff'
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '4px'
                    }}>
                      Tactical Operations Shelter
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      opacity: 0.9
                    }}>
                      Special operations and stealth deployment
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Tactical Ops
                </h3>

                {/* Bullet Points */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)'
                    }}></div>
                    <span>Special operations ready</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)'
                    }}></div>
                    <span>Stealth deployment</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)'
                    }}></div>
                    <span>Modular configuration</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#e0e7ff'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)'
                    }}></div>
                    <span>Rapid response capability</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Professional Military Operations Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{
                width: '100%',
                height: '500px',
                backgroundImage: 'url(/models/military-operations-global.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 32px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Professional overlay for text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
                zIndex: 1
              }}></div>
              
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                textAlign: 'center',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                zIndex: 2
              }}>
                Military Operations
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: '300',
                  marginTop: '16px',
                  letterSpacing: '0.1em',
                  color: '#e0e7ff'
                }}>
                  Deploy Anywhere • Anytime • Any Conditions
                </div>
              </div>
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
