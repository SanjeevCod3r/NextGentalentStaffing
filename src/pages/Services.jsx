import React from 'react';
import {
  Users, Building2, Zap, Factory, PhoneCall,
  ShoppingCart, Truck, TrendingUp, BarChart2,
  FileText, Globe, Settings, Search, ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

/* ── Icon in an octagon / circle badge ── */
const IconBadge = ({ icon: Icon, color = 'var(--primary)' }) => (
  <div style={{
    width: '90px', height: '90px', borderRadius: '50%',
    background: `${color}22`,
    border: `2px solid ${color}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 1.5rem auto',
    transition: 'var(--transition)',
  }}>
    <Icon size={38} color={color} strokeWidth={1.6} />
  </div>
);

/* ── Small icon row item ── */
const ServiceRow = ({ icon: Icon, title, desc, color = 'var(--primary)' }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
    <div style={{
      width: '50px', height: '50px', flexShrink: 0, borderRadius: '12px',
      background: `${color}18`, display: 'flex', alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Icon size={24} color={color} strokeWidth={1.7} />
    </div>
    <div>
      <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '1rem', fontWeight: '600' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{desc}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="services-page">
      <PageBanner 
        title="Services" 
        subtitle="Comprehensive HRMS and manpower solutions designed for modern industries."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <div className="container section-padding">

        {/* ── Section 1 – Top headline + 3 feature cards ── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block', fontSize: '0.78rem', fontWeight: '700',
            letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--secondary)', marginBottom: '1rem',
          }}>
            START FREE CONSULTING
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', lineHeight: '1.15', margin: 0 }}>
            WE DO{' '}
            <span style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--primary)',
              textUnderlineOffset: '6px',
            }}>
              STAFFING &amp; PAYROLL
            </span>
            <br />MANAGEMENT
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '7rem',
        }}>
          {[
            { icon: Users,     color: 'var(--primary)',   title: 'Staffing Solutions',    desc: 'High-quality ITI, Diploma and skilled candidates placed instantly across industries.' },
            { icon: Building2, color: 'var(--secondary)', title: 'Payroll Management',    desc: 'Salary, PF, ESI – we handle all compliance so you can focus on growing your business.' },
            { icon: Zap,       color: 'var(--primary-dark)', title: 'HRMS Software',      desc: 'Attendance, salary slips, employee data – managed through our all-in-one HRMS platform.' },
          ].map(({ icon, color, title, desc }) => (
            <div key={title} className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 2rem', background: 'white', borderRadius: '20px' }}>
              <IconBadge icon={icon} color={color} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Section 2 – Goals / list section ── */}
        <div className="services-split-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'flex-start' }}>

          {/* Left heading */}
          <div className="inspiring-section">
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '800', lineHeight: '1.2', margin: 0 }}>
              INSPIRING YOU TO REACH<br />
              <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--primary)', textUnderlineOffset: '6px' }}>
                BUSINESS &amp; GOALS
              </span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
              NextGen Talent Staffing partners with businesses to deliver end-to-end HR solutions — from sourcing the right talent to managing payroll with precision.
            </p>
          </div>

          {/* Right rows */}
          <div className="services-rows-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 3rem' }}>
            {[
              { icon: Search,    color: 'var(--primary)',   title: 'Talent Acquisition',   desc: 'End-to-end candidate sourcing, screening, and placement.' },
              { icon: FileText,  color: 'var(--secondary)', title: 'Payroll Reports',      desc: 'Accurate monthly reports, PF, ESI, and tax compliance.' },
              { icon: Globe,     color: 'var(--primary)',   title: 'Pan-India Reach',       desc: 'Deploying workforce across Delhi NCR and beyond.' },
              { icon: Settings,  color: 'var(--secondary)', title: 'HRMS Setup',           desc: 'Quick onboarding with our cloud-based HR management tool.' },
              { icon: BarChart2, color: 'var(--primary)',   title: 'Workforce Analytics',   desc: 'Data-driven insights to help you hire smarter.' },
              { icon: TrendingUp,color: 'var(--secondary)', title: 'Business Scaling',     desc: 'Flexible staffing models that grow with your business.' },
            ].map(({ icon, color, title, desc }) => (
              <ServiceRow key={title} icon={icon} color={color} title={title} desc={desc} />
            ))}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .services-split-section { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          .services-rows-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .section-padding { padding: 4rem 0 !important; }
          .glass-card { padding: 2rem 1.5rem !important; }
          
          /* Text spacing fixes */
          .services-page h2 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .services-page p {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .services-page .glass-card {
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
          }
          
          .services-page .glass-card h3 {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
          }
          
          .services-page .glass-card p {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
          }
          
          /* Inspiring section specific fixes */
          .services-page .inspiring-section {
            padding-left: 0.5rem !important;
            padding-right: 1rem !important;
          }
          
          .services-page .inspiring-section h2 {
            padding-left: 0 !important;
            padding-right: 0.5rem !important;
          }
          
          .services-page .inspiring-section p {
            padding-left: 0 !important;
            padding-right: 0.5rem !important;
          }
          
          /* Icon badge responsive */
          .services-page .glass-card > div:first-child {
            width: 70px !important;
            height: 70px !important;
            margin-bottom: 1rem !important;
          }
          
          .services-page .glass-card > div:first-child svg {
            width: 30px !important;
            height: 30px !important;
          }
          
          /* Service row responsive */
          .services-page .services-rows-grid > div {
            padding: 1rem !important;
            margin: 0 0.5rem !important;
          }
          
          .services-page .services-rows-grid > div > div:first-child {
            width: 40px !important;
            height: 40px !important;
          }
          
          .services-page .services-rows-grid > div > div:first-child svg {
            width: 20px !important;
            height: 20px !important;
          }
          
          .services-page .services-rows-grid h4 {
            font-size: 0.95rem !important;
          }
          
          .services-page .services-rows-grid p {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-padding { padding: 3rem 0 !important; }
          .glass-card { padding: 1.5rem 1rem !important; }
          
          /* Smaller text spacing */
          .services-page h2 {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
          }
          
          .services-page p {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
          }
          
          .services-page .glass-card {
            margin-left: 0.25rem !important;
            margin-right: 0.25rem !important;
          }
          
          /* Inspiring section specific fixes for small mobile */
          .services-page .inspiring-section {
            padding-left: 0.25rem !important;
            padding-right: 0.75rem !important;
          }
          
          .services-page .inspiring-section h2 {
            padding-left: 0 !important;
            padding-right: 0.25rem !important;
          }
          
          .services-page .inspiring-section p {
            padding-left: 0 !important;
            padding-right: 0.25rem !important;
          }
          
          /* Even smaller icons */
          .services-page .glass-card > div:first-child {
            width: 60px !important;
            height: 60px !important;
          }
          
          .services-page .glass-card > div:first-child svg {
            width: 26px !important;
            height: 26px !important;
          }
          
          .services-page .glass-card h3 {
            font-size: 1.1rem !important;
            padding-left: 0.15rem !important;
            padding-right: 0.15rem !important;
          }
          
          .services-page .glass-card p {
            font-size: 0.85rem !important;
            padding-left: 0.15rem !important;
            padding-right: 0.15rem !important;
          }
          
          /* Service rows smaller */
          .services-page .services-rows-grid > div {
            padding: 0.8rem !important;
            margin: 0 0.25rem !important;
          }
          
          .services-page .services-rows-grid > div > div:first-child {
            width: 35px !important;
            height: 35px !important;
          }
          
          .services-page .services-rows-grid > div > div:first-child svg {
            width: 18px !important;
            height: 18px !important;
          }
          
          .services-page .services-rows-grid h4 {
            font-size: 0.9rem !important;
          }
          
          .services-page .services-rows-grid p {
            font-size: 0.75rem !important;
          }
        }
      `}} />
    </div>
  );
};

export default Services;

