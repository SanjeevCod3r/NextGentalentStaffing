import React from 'react';
import { CheckCircle2, Send, PhoneCall, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const JobSeeker = () => {
  return (
    <div className="jobseeker-page">
      <PageBanner
        title="For Job Seekers"
        subtitle="Apna career grow karein with India's most trusted staffing agency. Free registration and fast results."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Job Seeker' }]}
      />
      <div className="container section-padding">

        <div className="grid grid-2 jobseeker-grid" style={{ marginTop: '3rem', gap: '2rem' }}>
          <motion.div className="glass-card" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Why Apply With Us?</h2>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <CheckCircle2 color="var(--primary)" size={24} /> Free Registration
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <CheckCircle2 color="var(--primary)" size={24} /> Fresher welcome
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <CheckCircle2 color="var(--primary)" size={24} /> Fast placement
              </li>
            </ul>
          </motion.div>

          <motion.div className="glass-card" style={{ background: 'var(--primary)', color: 'white' }} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Resume Apply</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>Apna resume yahan bheje. Jaldi naukri payein!</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:recruitment@nextgentalentstaffing.com" className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%', justifyContent: 'flex-start' }}>
                <Mail size={20} /> recruitment@nextgentalentstaffing.com
              </a>
              <a href="tel:+918383061237" className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%', justifyContent: 'flex-start' }}>
                <PhoneCall size={20} /> +91 8383061237
              </a>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Ya direct WhatsApp par contact karein</p>
                <a href="https://wa.me/918383061237" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                  <Send size={20} /> WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .jobseeker-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; margin-top: 1rem !important; }
          .section-padding { padding: 3rem 0 !important; }
          h2 { font-size: 1.5rem !important; }
          .glass-card { padding: 1.5rem !important; }
        }
      `}} />
    </div>
  );
};

export default JobSeeker;
