import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';

/* ── Enhanced Info card ── */
const InfoCard = ({ icon: Icon, iconBg, title, children, delay }) => (
  <div
    className="glass-card"
    style={{
      display: 'flex', gap: '1rem', alignItems: 'flex-start',
      padding: '1.25rem',
      animation: `fadeInUp 0.6s ease-out forwards ${delay}s`,
      opacity: 0,
      border: '1px solid rgba(15, 98, 254, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
    }}
  >
    <div style={{
      width: '56px', height: '56px', borderRadius: '16px', flexShrink: 0,
      background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }}>
      <Icon size={24} color="white" strokeWidth={2} />
    </div>
    <div>
      <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>{title}</h4>
      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{children}</div>
    </div>
  </div>
);

const Contact = () => {
  const faqs = [
    { q: "What is your typical response time?", a: "We aim to respond to all inquiries within 24 business hours." },
    { q: "Do you charge job seekers for placements?", a: "No, we provide genuine job opportunities to candidates absolutely free of charge." },
    { q: "Where can we find your office?", a: "We are located at Plot No. J-57, First Floor, Ramesh Nagar, New Delhi – 110015." }
  ];

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageBanner 
        title="Get in Touch" 
        subtitle="Ready to build your dream team or find your next career milestone? We're here to make it happen."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 1.3fr', gap: '2rem' }}>
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <InfoCard delay={0.1} icon={MapPin} iconBg="linear-gradient(135deg, var(--primary), var(--primary-dark))" title="Visit Our Office">
              Plot No. J-57, First Floor<br />
              Ramesh Nagar, New Delhi – 110015
            </InfoCard>

            <InfoCard delay={0.2} icon={Phone} iconBg="linear-gradient(135deg, var(--secondary), var(--secondary-dark))" title="Talk to Us">
              <a href="tel:+918383061237" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>+91 83830 61237</a>
            </InfoCard>

            <InfoCard delay={0.3} icon={Mail} iconBg="linear-gradient(135deg, #6366f1, #4f46e5)" title="Email Support">
              <a href="mailto:recruitment@nextgentalentstaffing.com" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', wordBreak: 'break-all' }}>
                recruitment@nextgentalentstaffing.com
              </a>
            </InfoCard>

            <InfoCard delay={0.4} icon={Clock} iconBg="linear-gradient(135deg, #10b981, #059669)" title="Working Hours">
              Mon – Sat: 9 AM – 7 PM<br />
              Sun: By Appointment Only
            </InfoCard>

            {/* SOCIAL CONNECTS */}
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px dashed rgba(15, 98, 254, 0.2)', background: 'rgba(15, 98, 254, 0.03)', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 1rem', fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect With Us</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                <a href="#" className="social-icon" style={{ background: 'var(--primary)', border: 'none' }}></a>
                <a href="#" className="social-icon" style={{ background: '#E4405F', border: 'none' }}></a>
                <a href="https://wa.me/918383061237" className="social-icon" style={{ background: '#25D366', border: 'none' }}><MessageSquare size={18} /></a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INQUIRY FORM */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', background: 'white' }}>
            <div style={{ marginBottom: '1.8rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Inquiry Form</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0.3rem 0 0.8rem', lineHeight: 1.1 }}>Send Us a <span className="text-gradient">Message</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '550px', lineHeight: '1.5' }}>
                Have a specific requirement? Fill out the details below and our talent acquisition experts will reach out to you within 24 hours.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* FAQ SECTION */}
        <div style={{ marginTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Need Help?</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0.3rem 0' }}>Quick <span className="text-gradient">Answers</span></h2>
            <div style={{ width: '40px', height: '3px', background: 'var(--secondary)', borderRadius: '2px', margin: '0.8rem auto' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.8rem', borderLeft: '4px solid var(--secondary)', background: 'white' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(255, 131, 43, 0.1)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <HelpCircle size={20} color="var(--secondary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-main)' }}>{faq.q}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 991px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .glass-card { padding: 2.5rem !important; }
        }
        @media (max-width: 768px) {
          .glass-card { padding: 1.5rem !important; }
        }
      `}} />
    </div>
  );
};

export default Contact;

