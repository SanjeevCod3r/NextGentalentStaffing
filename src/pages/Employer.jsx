import React from 'react';
import {
  UserCheck, Users, Headphones, CheckCircle2,
  Building2, PhoneCall, TrendingUp, Zap, ArrowRight, Phone
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

/* ── Service card — all white, all hover equally ── */
const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div
    style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2.2rem',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      border: '1px solid rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s ease, border-color 0.3s ease',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 16px 36px rgba(15,98,254,0.14)';
      e.currentTarget.style.borderColor = 'rgba(15,98,254,0.28)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
    }}
  >
    <div style={{
      width: '64px', height: '64px', borderRadius: '50%',
      background: 'rgba(15,98,254,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '2px solid rgba(15,98,254,0.15)',
    }}>
      <Icon size={28} color="var(--primary)" strokeWidth={1.7} />
    </div>
    <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)' }}>
      {title}
    </h3>
    <p style={{ margin: 0, fontSize: '0.87rem', lineHeight: '1.65', color: 'var(--text-muted)' }}>
      {desc}
    </p>
  </div>
);

const Employer = () => {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      <PageBanner
        title="For Employers"
        subtitle="Customized staffing and payroll solutions to scale your business workforce effectively."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'For Employers' }]}
      />

      {/* ── HERO SPLIT SECTION ── */}
      <div className="container section-padding" style={{ padding: '6rem 2rem 5rem' }}>
        <div className="employer-hero-block" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Left – image + badge */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Employers hiring"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', display: 'block', boxShadow: '0 16px 48px rgba(15,98,254,0.15)' }}
            />
            {/* Experience badge */}
            <div className="experience-badge" style={{
              position: 'absolute', top: '2rem', right: '-1.5rem',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              color: 'white', padding: '1.4rem 1.8rem', borderRadius: '16px',
              textAlign: 'center', boxShadow: '0 8px 24px rgba(15,98,254,0.4)',
              minWidth: '130px',
            }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.78rem', fontWeight: '600', opacity: 0.85, marginTop: '0.3rem', letterSpacing: '0.5px' }}>Years of Experience</div>
            </div>
          </div>

          {/* Right – content */}
          <div>
            <span style={{
              display: 'inline-block', background: 'rgba(15,98,254,0.08)',
              color: 'var(--primary)', padding: '0.4rem 1.2rem', borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1.5px',
              textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              For Employers
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', lineHeight: '1.2', margin: '0 0 1.2rem 0', color: 'var(--text-main)' }}>
              Your Staffing Strategy <br />
              <span className="text-gradient">Starts Here</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We provide fast, reliable, and cost-effective staffing solutions for businesses. You'll never be left scrambling for the right talent — we match skilled candidates to your exact requirements within 24–48 hours.
            </p>

            {/* Checkmarks */}
            <div className="employer-check-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 2rem', marginBottom: '2.5rem' }}>
              {['Skilled & ITI Candidates', 'Pan-India Deployment', 'Payroll Management', 'Compliance Assured'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} color="var(--primary)" strokeWidth={2.2} />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:recruitment@nextgentalentstaffing.com?subject=Employer%20Inquiry"
                className="btn btn-primary"
                style={{ borderRadius: '10px', padding: '0.9rem 2rem', fontSize: '0.95rem' }}
              >
                Hire Now &nbsp;<ArrowRight size={18} />
              </a>
              <a
                href="tel:+919310342514"
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', textDecoration: 'none' }}
              >
                <div style={{
                  width: '46px', height: '46px', background: 'rgba(15,98,254,0.08)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Phone size={20} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Call Us Now</div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>+91 8383061237</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES CARD GRID ── */}
      <div style={{ background: 'rgba(15,98,254,0.03)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(255,131,43,0.1)',
              color: 'var(--secondary)', padding: '0.35rem 1.2rem', borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Our Services
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', margin: 0 }}>
              Tailored Staffing Guidance
            </h2>
          </div>

          <div className="employer-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
            <ServiceCard
              icon={UserCheck}
              title="Skilled Workforce"
              desc="ITI & Diploma holders, factory workers, and technical staff ready to deploy in your facility."
            />
            <ServiceCard
              icon={Users}
              highlighted
              title="Complete Hiring Solutions"
              desc="End-to-end recruitment — from sourcing and screening to onboarding — managed by our expert team."
            />
            <ServiceCard
              icon={Building2}
              title="Payroll & Compliance"
              desc="We handle PF, ESI, salary processing, and all statutory compliance so you stay focused on growth."
            />
            <ServiceCard
              icon={Headphones}
              title="BPO / Telecalling Staff"
              desc="Trained telecallers and customer support executives for your BPO and call-center requirements."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Sales Force Deployment"
              desc="High-energy field and inside sales executives to boost revenue and expand your market reach."
            />
            <ServiceCard
              icon={Zap}
              title="Express Turnaround"
              desc="Urgent staffing needs? We deliver shortlisted candidates within 24–48 hours, guaranteed."
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .employer-hero-block { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .employer-check-grid { gap: 1rem !important; }
        }
        @media (max-width: 768px) {
          .employer-hero-block { padding: 0 !important; }
          .experience-badge { position: relative !important; top: -1.5rem !important; right: 0 !important; margin: 0 auto !important; width: fit-content !important; min-width: 200px !important; }
          .employer-check-grid { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
          .employer-services-grid { grid-template-columns: 1fr !important; }
          img { height: 300px !important; }
        }
      `}} />
    </div>
  );
};

export default Employer;
