import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    // ... data remains same
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, TechSolutions Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
      text: "NextGen Talent Staffing provided us with over 50 verified ITI pass candidates within just 48 hours. Their agile recruitment process and understanding of technical requirements are truly unmatched in the industry.",
      rating: 5,
      tag: "Staffing Solution"
    },
    {
      id: 2,
      name: "Anjali Sharma",
      role: "HR Manager, RetailHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
      text: "Switching to NextGen for our payroll management and HRMS software was the best decision for our operations. They handled all ESI/PF compliances perfectly, allowing our core team to focus on growth.",
      rating: 4,
      tag: "Payroll Management"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Diploma Engineer (Candidate)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
      text: "I was struggling to find a legitimate job until I contacted NextGen. They placed me in a top manufacturing unit without charging any fees. Their transparency and support for candidates are exceptional.",
      rating: 5,
      tag: "Job Placement"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex]); // Reset interval if user manually changes slide

  return (
    <section className="section-padding" style={{ background: '#f8faff', overflow: 'hidden' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 1rem' }}>
            What our <span className="text-gradient">client say</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '50px' }}></div>
        </div>

        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Main Carousel Wrapper */}
          <div style={{ 
            display: 'flex', 
            transition: 'transform 0.5s ease-out', 
            transform: `translateX(-${activeIndex * 100}%)`,
            alignItems: 'center'
          }}>
            {testimonials.map((item) => (
              <div key={item.id} style={{ minWidth: '100%', padding: '0 0.5rem' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: '24px', 
                  padding: 'clamp(1.5rem, 5vw, 3rem)', 
                  boxShadow: '0 20px 50px rgba(15, 98, 254, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  position: 'relative',
                  border: '1px solid rgba(15, 98, 254, 0.05)',
                  minHeight: '350px'
                }}>
                  
                  {/* Card Header: Avatar & Info */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: 'clamp(60px, 10vw, 80px)', height: 'clamp(60px, 10vw, 80px)', borderRadius: '50%', objectFit: 'cover', border: '3px solid white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} 
                      />
                      <div>
                        <h4 style={{ margin: 0, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', color: 'var(--text-main)' }}>{item.name}</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.role}</p>
                        <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < item.rating ? "var(--primary)" : "none"} 
                              color={i < item.rating ? "var(--primary)" : "#ddd"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(15, 98, 254, 0.08)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {item.tag}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.7', color: 'var(--text-main)', fontStyle: 'italic', margin: '0.5rem 0' }}>
                    "{item.text}"
                  </p>

                  {/* Quote Decoration */}
                  <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', opacity: 0.08 }}>
                    <Quote size={48} color="var(--primary)" />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
            <button 
              onClick={prevSlide}
              style={{ 
                width: '44px', height: '44px', borderRadius: '50%', background: 'white', border: '1px solid var(--border-color)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ChevronLeft size={20} color="var(--text-main)" />
            </button>

            {/* Progress/Dots Container */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{ 
                    width: activeIndex === i ? '40px' : '10px', 
                    height: '10px', 
                    borderRadius: '50px', 
                    background: activeIndex === i ? 'var(--primary)' : 'var(--border-color)',
                    transition: '0.4s',
                    cursor: 'pointer'
                  }}
                ></div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              style={{ 
                width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '1px solid var(--border-color)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <ChevronRight size={24} color="var(--text-main)" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
