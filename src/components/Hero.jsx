import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ padding: 'clamp(6rem, 10vh, 10rem) 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container hero-content-wrap" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* Left Content Area */}
        <motion.div className="hero-text-block" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ flex: '1 1 350px' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'left', lineHeight: 1.1 }}>
            Fast Job ya <span className="text-gradient">Fast Hiring</span><br />
            Dono yahan milega!
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', textAlign: 'left', lineHeight: 1.6 }}>
            ITI, Diploma, Skilled & Unskilled manpower – sab ek jagah.
          </p>

          <div className="power-badge-container" style={{ justifyContent: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '10px' }}>
            <span className="power-badge" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}><Zap size={14} /> 1000+ Jobs Available</span>
            <span className="power-badge" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}><Zap size={14} /> 24–48 Hours Me Hiring</span>
            <span className="power-badge" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}><Zap size={14} /> Zero Fees Placement</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Link to="/jobseeker" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem', flex: '1 1 auto', minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Briefcase size={20} /> Job Search
            </Link>
            <Link to="/employer" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem', flex: '1 1 auto', minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Users size={20} /> Staff Hire
            </Link>
          </div>
        </motion.div>

        {/* Right Visual Image Composition */}
        <motion.div className="hero-image-block" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: 'clamp(350px, 50vh, 500px)' }}>
            {/* Background shape */}
            <div style={{ 
              position: 'absolute', 
              top: '10%', 
              bottom: '10%', 
              left: '10%', 
              right: '-5%', 
              backgroundColor: 'var(--primary-light)', 
              borderRadius: '20px 80px 20px 20px', 
              opacity: 0.1,
              zIndex: 0
            }}></div>

            {/* Top rectangle image */}
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '5%',
              width: '60%',
              height: '45%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '3px solid white',
              zIndex: 2
            }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team Happy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Bottom main rectangle image */}
            <div style={{
              position: 'absolute',
              bottom: '5%',
              left: '0%',
              width: '70%',
              height: '50%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '3px solid white',
              zIndex: 3
            }}>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Decorative dots simplified for mobile visibility */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '-20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '6px',
              zIndex: 1
            }}>
               {[...Array(25)].map((_, i) => (
                 <div key={i} style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary)', borderRadius: '50%', opacity: 0.3 }}></div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Blobs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}></div>
    </section>
  );
};

export default Hero;
