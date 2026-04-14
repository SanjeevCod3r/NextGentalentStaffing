import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Search, Send } from 'lucide-react';

/* ── Star rating ── */
const Stars = ({ count = 4 }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13}
        fill={i < count ? 'var(--secondary)' : 'none'}
        color={i < count ? 'var(--secondary)' : '#ccc'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

/* ── Job Card ── */
const JobCard = ({ image, category, title, location, type, rating, openings, urgent }) => (
  <div
    style={{
      background: 'white', borderRadius: '20px', overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
      border: '1px solid rgba(0,0,0,0.06)',
      transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s, border-color 0.3s',
      cursor: 'pointer', display: 'flex', flexDirection: 'column',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(15,98,254,0.15)';
      e.currentTarget.style.borderColor = 'rgba(15,98,254,0.25)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)';
      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
    }}
  >
    {/* Image area */}
    <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
      <img src={image} alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)',
      }} />
      {/* Category badge */}
      <span style={{
        position: 'absolute', top: '12px', left: '12px',
        background: 'rgba(255,131,43,0.92)', color: 'white',
        padding: '0.25rem 0.85rem', borderRadius: '50px',
        fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.5px',
      }}>{category}</span>
      {/* Urgent badge */}
      {urgent && (
        <span style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'var(--primary)', color: 'white',
          padding: '0.25rem 0.85rem', borderRadius: '50px',
          fontSize: '0.72rem', fontWeight: '700',
        }}>🔥 Urgent</span>
      )}
      {/* Apply now overlay btn */}
      <a href={`mailto:recruitment@nextgentalentstaffing.com?subject=Apply for ${title}`}
        style={{
          position: 'absolute', bottom: '12px', right: '12px',
          background: 'var(--primary)', color: 'white',
          padding: '0.35rem 1rem', borderRadius: '50px',
          fontSize: '0.78rem', fontWeight: '700', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          boxShadow: '0 4px 12px rgba(15,98,254,0.4)',
        }}>
        Apply now <ArrowRight size={12} />
      </a>
    </div>

    {/* Card body */}
    <div style={{ padding: '1.3rem 1.4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
      <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1.3' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <MapPin size={13} color="var(--primary)" /> {location}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <Clock size={13} color="var(--secondary)" /> {type}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      </div>
    </div>
  </div>
);

const ALL_JOBS = [
  { image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80', category: 'BPO', title: 'Telecaller / Customer Support', location: 'New Delhi', type: 'Full Time', rating: 4, openings: 15, urgent: false },
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80', category: 'Sales', title: 'Field Sales Executive', location: 'Delhi / NCR', type: 'Full Time', rating: 5, openings: 10, urgent: false },
  { image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80', category: 'Manufacturing', title: 'Factory / Production Worker', location: 'Multiple Locations', type: 'Shift Based', rating: 4, openings: 30, urgent: false },
  { image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80', category: 'Logistics', title: 'Helper / Packing Staff', location: 'New Delhi', type: 'Full Time', rating: 4, openings: 20, urgent: false },
  { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', category: 'Admin', title: 'Office Assistant / Data Entry', location: 'Ramesh Nagar, Delhi', type: 'Full Time', rating: 5, openings: 8, urgent: false },
  { image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?auto=format&fit=crop&w=600&q=80', category: 'ITI / Diploma', title: 'Technical / Maintenance Staff', location: 'Pan India', type: 'Contract', rating: 4, openings: 12, urgent: false },
];

const CATEGORIES = ['All', 'BPO', 'Sales', 'Manufacturing', 'Logistics', 'Admin', 'ITI / Diploma'];

const Jobs = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ALL_JOBS : ALL_JOBS.filter(j => j.category === active);

  return (
    <div style={{ background: 'var(--bg-color)' }}>

      {/* ── Hero Banner ── */}
      <div style={{
        position: 'relative',
        background: '#030712',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #030712 0%, rgba(3,7,18,0.7) 50%, transparent 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '6rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

            {/* Left — text */}
            <div>
              <span style={{
                display: 'inline-block', background: 'rgba(255,131,43,0.15)',
                color: 'var(--secondary)', padding: '0.35rem 1.2rem', borderRadius: '50px',
                fontSize: '0.78rem', fontWeight: '700', letterSpacing: '1.5px',
                textTransform: 'uppercase', marginBottom: '1.2rem',
                border: '1px solid rgba(255,131,43,0.2)'
              }}>Active Openings</span>

              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', lineHeight: '1.15', margin: '0 0 1rem', color: 'white' }}>
                Unlock Your Career<br />
                <span className="text-gradient">Potential</span> With Us
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '500px' }}>
                Upgrade your skills and achieve your goals with expert staffing support. Browse live openings and apply for free — Freshers welcome!
              </p>

              <a href="mailto:recruitment@nextgentalentstaffing.com?subject=Job Application"
                className="btn btn-primary"
                style={{ borderRadius: '10px', padding: '1rem 2.2rem', fontSize: '1rem', textDecoration: 'none' }}>
                Explore All Jobs
              </a>
            </div>

            {/* Right — person in circle */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              {/* Decorative shapes */}
              <div style={{ position: 'absolute', top: '10%', right: '12%', width: '22px', height: '22px', border: '2px solid rgba(15,98,254,0.4)', borderRadius: '4px', transform: 'rotate(30deg)' }} />
              <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: '18px', height: '18px', border: '2px solid rgba(255,131,43,0.6)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '25%', left: '5%', width: '12px', height: '12px', background: 'rgba(15,98,254,0.3)', borderRadius: '3px', transform: 'rotate(15deg)' }} />

              <div style={{
                width: '380px', height: '380px', borderRadius: '50%',
                background: 'rgba(15,98,254,0.1)',
                border: '8px solid rgba(255,255,255,0.03)',
                boxShadow: '0 0 50px rgba(15,98,254,0.15)',
                overflow: 'hidden', flexShrink: 0,
              }}>
                <img
                  src="public/asset/FindJobs.jpeg"
                  alt="Job seeker"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container section-padding">

        {/* ── Section header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{
              display: 'inline-block', background: 'rgba(255,131,43,0.1)',
              color: 'var(--secondary)', padding: '0.35rem 1.2rem', borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '0.8rem',
            }}>Hiring Now</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', margin: 0 }}>
              Jobs Available For You
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', borderRadius: '2px', marginTop: '0.75rem' }} />
          </div>
          {/* Search hint */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            background: 'white', border: '1.5px solid rgba(15,98,254,0.18)',
            borderRadius: '50px', padding: '0.6rem 1.2rem',
            fontSize: '0.85rem', color: 'var(--text-muted)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>
            <Search size={15} color="var(--primary)" />
            Contact us to apply for any role
          </div>
        </div>

        {/* ── Category filter pills ── */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: '0.5rem 1.3rem', borderRadius: '50px', border: 'none',
                fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer',
                transition: 'all 0.25s',
                background: active === cat ? 'var(--primary)' : 'white',
                color: active === cat ? 'white' : 'var(--text-muted)',
                boxShadow: active === cat
                  ? '0 4px 14px rgba(15,98,254,0.35)'
                  : '0 2px 8px rgba(0,0,0,0.06)',
                transform: active === cat ? 'translateY(-2px)' : 'none',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.8rem' }}>
          {filtered.map(job => <JobCard key={job.title} {...job} />)}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            marginTop: '6rem',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            borderRadius: '32px',
            padding: '4rem 2rem',
            overflow: 'hidden',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(15, 98, 254, 0.25)',
            border: '1px solid rgba(255,255,255,0.15)'
          }}
        >
          {/* Decorative Background Elements */}
          <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: 0.08, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: 0.08, pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '650px', marginInline: 'auto' }}>
            <div style={{ 
              width: '70px', height: '70px', borderRadius: '20px', 
              background: 'rgba(255,255,255,0.12)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 2rem',
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              color: '#ffffff'
            }}>
              <Briefcase size={32} />
            </div>

            <h2 style={{ margin: '0 0 1rem', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '850', color: 'white', letterSpacing: '-1px', lineHeight: 1.1 }}>
              Don't see the right job for you?
            </h2>
            
            <p style={{ margin: '0 0 2.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Our job board is updated daily, but we often have roles that move fast. Send us your resume and we'll match you with the <span style={{ color: 'white', fontWeight: '600' }}>best opening available.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:recruitment@nextgentalentstaffing.com?subject=Job Application"
                className="btn btn-secondary"
                style={{ 
                  borderRadius: '14px', 
                  padding: '1.1rem 2.8rem', 
                  fontSize: '1.05rem', 
                  fontWeight: '700',
                  boxShadow: '0 10px 25px rgba(255,131,43,0.3)'
                }}
              >
                Send Resume &nbsp;<Send size={18} />
              </motion.a>
              
              <motion.a 
                whileHover={{ background: 'rgba(255,255,255,0.1)', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="btn btn-outline"
                style={{ 
                  borderRadius: '14px', 
                  padding: '1.1rem 2.8rem', 
                  fontSize: '1.05rem', 
                  fontWeight: '700',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                Contact Us
              </motion.a>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>
              ✨ 100% Free Placement — No Hidden Charges
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Jobs;

