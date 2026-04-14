import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does NextGen Talent Staffing provide?",
      answer: "We offer comprehensive staffing solutions, including ITI/Diploma candidate recruitment, skilled and unskilled worker supply, payroll management, and customized HRMS software for businesses."
    },
    {
      question: "Is there any fee for job seekers?",
      answer: "No, we provide genuine job opportunities to candidates absolutely free of cost. Our goal is to connect talent with the right departments without any financial burden on the job seekers."
    },
    {
      question: "How quickly can you provide manpower for my business?",
      answer: "Our agile hiring process allows us to source, verify, and deploy candidates pan-India in record time. We maintain a large database of pre-screened talent to ensure rapid fulfillment of your staffing needs."
    },
    {
      question: "Where is NextGen Talent Staffing based?",
      answer: "We are headquartered in New Delhi (Ramesh Nagar), but we have an extensive network that spans across India, allowing us to serve clients and candidates nationwide."
    },
    {
      question: "How can I track employee attendance and payroll?",
      answer: "We provide an integrated HRMS (Human Resource Management System) software that handles attendance tracking, salary computation, PF, ESI, and other statutory compliances seamlessly for your business."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding" style={{ background: '#fcfdff' }}>
      <div className="container">
        
        {/* Header Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
             <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Frequently
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '800', color: 'var(--text-main)', margin: 0, lineHeight: 1.1 }}>
              Asked<br />
              <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Find answers to common questions about our recruitment process, services, and how we help both businesses and candidates succeed in India's competitive market.
            </p>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={18} /> Get Started Free
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                background: 'white', 
                borderRadius: '16px', 
                marginBottom: '1rem', 
                overflow: 'hidden',
                border: activeIndex === index ? '1.5px solid var(--primary-light)' : '1px solid var(--border-color)',
                boxShadow: activeIndex === index ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transition: 'var(--transition)'
              }}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                style={{ 
                  width: '100%', 
                  padding: '1.8rem 2.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: '700', 
                  color: activeIndex === index ? 'var(--primary)' : 'var(--text-main)',
                  transition: 'var(--transition)'
                }}>
                  {item.question}
                </span>
                <span style={{ 
                  background: activeIndex === index ? 'var(--primary)' : 'rgba(0,0,0,0.05)', 
                  color: activeIndex === index ? 'white' : 'var(--text-main)',
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }}>
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div style={{ 
                maxHeight: activeIndex === index ? '200px' : '0', 
                overflow: 'hidden', 
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: activeIndex === index ? 1 : 0
              }}>
                <div style={{ padding: '0 2.5rem 2rem 2.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
