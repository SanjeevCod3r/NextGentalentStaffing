import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, image, breadcrumbs = [] }) => {
  return (
    <div style={{
      position: 'relative',
      height: 'clamp(260px, 32vh, 320px)',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: '#030712', // Clean deep navy base
    }}>
      {/* Background Image — Brighter and more visible */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.65, // Increased opacity for an "attractive" look
          zIndex: 0,
        }}
      />

      {/* Side-Loaded Gradient Mask — Only dark on the left where text is */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(3,7,18,0.9) 0%, rgba(3,7,18,0.6) 30%, transparent 80%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(3,7,18,0.4) 0%, transparent 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }}>
          
          {/* Clean Typography — Floating directly on the background */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
              fontWeight: '900', 
              color: 'white', 
              margin: 0, 
              lineHeight: 1.1,
              letterSpacing: '-1.5px'
            }}
          >
            {title.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: '0.6rem' }}>
                {i === title.split(' ').length - 1 ? <span className="text-gradient">{word}</span> : word}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle with elegant weight */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '1rem',
                maxWidth: '550px',
                lineHeight: 1.5,
                fontWeight: '400'
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Modern Accent Line */}
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: '50px' }} 
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ 
              height: '3px', 
              background: 'var(--secondary)', 
              marginTop: '1.8rem', 
              borderRadius: '50px',
              boxShadow: '0 0 10px var(--secondary)'
            }} 
          />
        </div>
      </div>

      {/* Decorative Blobs — Very subtle and professional */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          right: '8%',
          top: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default PageBanner;
