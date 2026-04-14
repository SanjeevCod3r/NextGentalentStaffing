import React from 'react';
import { Users, Zap, Building2, ShoppingBag, PenTool, PieChart, Monitor, DollarSign, Briefcase, Megaphone } from 'lucide-react';
import Hero from '../components/Hero';
import QuickApply from '../components/QuickApply';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';

const Home = () => {
  const categories = [
    { name: 'Retail & Product', jobs: '3 Jobs Available', icon: <ShoppingBag size={24} color="var(--primary)" /> },
    { name: 'Content Writer', jobs: '8 Jobs Available', icon: <PenTool size={24} color="var(--primary)" /> },
    { name: 'Human Resource', jobs: '3 Jobs Available', icon: <Users size={24} color="var(--primary)" /> },
    { name: 'Market Research', jobs: '4 Jobs Available', icon: <PieChart size={24} color="var(--primary)" /> },
    { name: 'Software', jobs: '4 Jobs Available', icon: <Monitor size={24} color="var(--primary)" /> },
    { name: 'Finance', jobs: '5 Jobs Available', icon: <DollarSign size={24} color="var(--primary)" /> },
    { name: 'Management', jobs: '5 Jobs Available', icon: <Briefcase size={24} color="var(--primary)" /> },
    { name: 'Marketing & Sale', jobs: '4 Jobs Available', icon: <Megaphone size={24} color="var(--primary)" /> }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* ──────── ABOUT SECTION ──────── */}
      <section style={{ background: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div className="about-grid">

            {/* LEFT — label + headline + items */}
            <div>
              <p style={{
                color: 'var(--primary)', fontWeight: '700', fontSize: '0.82rem',
                letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem',
              }}>
                About Your Company
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: '800', lineHeight: '1.2', color: 'var(--text-main)', margin: '0 0 2.5rem' }}>
                We Execute Ideas<br />
                <span className="text-gradient">From Start to Finish</span>
              </h2>

              {/* Item 1 */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.8rem' }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0, borderRadius: '12px',
                  background: 'rgba(15,98,254,0.08)', border: '1.5px solid rgba(15,98,254,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}>🎯</div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>We Provide</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    ITI / Diploma Candidates, Skilled &amp; Unskilled Workers, Telecaller &amp; Sales Staff — ready to deploy.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.8rem' }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0, borderRadius: '12px',
                  background: 'rgba(255,131,43,0.08)', border: '1.5px solid rgba(255,131,43,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}>🚀</div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>Our Goal</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    Companies ko fast hiring aur candidates ko genuine job opportunities provide karna.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0, borderRadius: '12px',
                  background: 'rgba(15,98,254,0.08)', border: '1.5px solid rgba(15,98,254,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}>🏆</div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>Trusted Company</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    NextGen Talent Staffing &amp; Payroll Management Pvt Ltd — New Delhi based, pan-India reach.
                  </p>
                </div>
              </div>

              <a href="/about" className="btn btn-outline" style={{ borderRadius: '8px', padding: '0.8rem 2rem', fontWeight: '700' }}>
                Know More →
              </a>
            </div>

            {/* MIDDLE — overlapping photo collage */}
            <div className="collage-container">
              {/* Back / left photo */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Team working"
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '78%', height: '72%', objectFit: 'cover',
                  borderRadius: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
              />
              {/* Front / right photo */}
              <img
                src="public/asset/home.png"
                alt="Office environment"
                style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: '72%', height: '64%', objectFit: 'cover',
                  borderRadius: '20px', boxShadow: '0 12px 32px rgba(15,98,254,0.18)',
                  border: '5px solid white',
                }}
              />
              {/* Stats badge */}
            </div>

            {/* RIGHT — single photo + description */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Professional team"
                style={{
                  width: '100%', height: '240px', objectFit: 'cover',
                  borderRadius: '20px', marginBottom: '1.8rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                }}
              />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
                NextGen Talent Staffing And Payroll Management Pvt Ltd ek trusted manpower company hai jo New Delhi se operate karti hai. Hum companies ko fast &amp; reliable hiring solutions dete hain aur candidates ko genuine job opportunities provide karte hain — bilkul free mein.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="section-padding" style={{ background: 'var(--bg-color)' }}>
        <div className="container">

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: 'var(--text-main)', margin: 0, lineHeight: '1.2', fontWeight: '800' }}>
                Services We Provide to<br />
                <span className="text-gradient">Elevate Your Business</span>
              </h2>
            </div>
            <div>
              <button onClick={() => window.location.href = "/services"} className="btn btn-primary" style={{ borderRadius: '50px', padding: '1rem 2.2rem', fontWeight: '600', fontSize: '0.95rem' }}>
                View All Services
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            <div style={{ background: 'white', padding: '3rem 2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'var(--transition)' }}>
              <div style={{ background: 'var(--primary)', color: 'white', width: '64px', height: '64px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Users size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Staffing Solutions</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', flex: 1 }}>
                ITI, Diploma, 10th/12th pass candidates and skilled workers readily available for your business operations.
              </p>
              <a href="/services" className="text-gradient" style={{ fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Learn more <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>→</span>
              </a>
            </div>

            <div style={{ background: 'white', padding: '3rem 2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'var(--transition)' }}>
              <div style={{ background: 'var(--secondary)', color: 'white', width: '64px', height: '64px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Building2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Payroll Management</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', flex: 1 }}>
                Salary, PF, ESI sab hum handle karte hain. Comprehensive and accurate compliance specifically tailored for you.
              </p>
              <a href="/services" className="text-gradient" style={{ fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Learn more <span style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>→</span>
              </a>
            </div>

            <div style={{ background: 'white', padding: '3rem 2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'var(--transition)' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', width: '64px', height: '64px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Zap size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>HRMS Software</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', flex: 1 }}>
                Attendance tracking, salary computation, and employee data management – all bundled in one powerful system.
              </p>
              <a href="/services" className="text-gradient" style={{ fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Learn more <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <Clients />

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ background: '#f4f7ff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
              SOME REASONS
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>
              Why Choose Us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

            {/* Item 1 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>01</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Verified Candidates</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                We use a rigorous screening process to ensure only the most qualified ITI, Diploma, and skilled pass candidates are presented.
              </p>
            </div>

            {/* Item 2 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>02</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>24/7 Support</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                Our dedicated recruitment team is available around the clock to address your staffing needs and resolve any issues promptly.
              </p>
            </div>

            {/* Item 3 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>03</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Zero Cost Placements</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                We believe in fair opportunities; hence, we provide genuine job placements to candidates without any charges or hidden fees.
              </p>
            </div>

            {/* Item 4 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>04</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Agile Hiring Style</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                Our streamlined approach helps industries scale their workforce rapidly without compromising on quality or compliance.
              </p>
            </div>

            {/* Item 5 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>05</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Pan-India Reach</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                Headquartered in New Delhi, we have an extensive network that spans across India to source top talent for your needs.
              </p>
            </div>

            {/* Item 6 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>06</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Integrated HRMS</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                Beyond staffing, we offer powerful software solutions to handle attendance, payroll, and statutory compliance seamlessly.
              </p>
            </div>

            {/* Item 7 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>07</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Flexible Engagement</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                From temporary staffing to permanent hires, we offer flexible business models that adapt to your specific operational cycles and budget.
              </p>
            </div>

            {/* Item 8 */}
            <div className="why-choose-item" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>08</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.3 }}></div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Quality Expertise</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, paddingLeft: '4.5rem' }}>
                With years of domain expertise, we ensure every candidate goes through multiple rounds of rigorous assessment before they reach you.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />

      <Faq />
    </div>
  );
};

export default Home;
