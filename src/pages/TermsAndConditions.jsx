import React from 'react';
import PageBanner from '../components/PageBanner';

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <PageBanner
        title="Terms & Conditions"
        subtitle="The rules and conditions for using our website and services."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="container section-padding">
        <div className="glass-card" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Last updated: April 14, 2026
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>1. Acceptance of Terms</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            By accessing or using this website, you agree to these Terms & Conditions.
            If you do not agree, please do not use this website.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>2. Services</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            NextGen Talent Staffing provides staffing, recruitment support, and payroll-related
            services. Service scope may vary based on client and candidate requirements.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>3. User Responsibilities</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Users must provide accurate information, use the website lawfully, and avoid
            activities that may disrupt website functionality or compromise security.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>4. Intellectual Property</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            All content on this website, including text, graphics, branding, and design,
            is owned by or licensed to NextGen Talent Staffing and may not be reused
            without prior written permission.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>5. Limitation of Liability</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            We aim to keep information accurate and up to date, but we do not guarantee
            completeness or uninterrupted availability. We are not liable for indirect
            or consequential losses from use of this website.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>6. Third-Party Links</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            This website may include links to third-party websites. We are not responsible
            for the content, practices, or policies of external websites.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>7. Changes to Terms</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            We may revise these Terms & Conditions at any time. Continued use of the website
            after updates means you accept the revised terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
