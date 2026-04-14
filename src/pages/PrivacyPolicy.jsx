import React from 'react';
import PageBanner from '../components/PageBanner';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="container section-padding">
        <div className="glass-card" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Last updated: April 14, 2026
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>1. Information We Collect</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            We may collect personal information such as your name, phone number, email address,
            resume details, and employment preferences when you submit forms on our website or
            contact us directly.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>2. How We Use Information</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Your information is used to respond to inquiries, process recruitment requirements,
            match candidates with suitable roles, and provide staffing and payroll services.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>3. Sharing of Information</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            We do not sell personal information. We may share limited details with clients,
            partners, or service providers only when needed to deliver requested services
            or comply with legal obligations.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>4. Data Security</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            We apply reasonable technical and organizational measures to protect your data.
            However, no digital platform can guarantee complete security at all times.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>5. Cookies and Analytics</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            This website may use basic cookies and analytics tools to improve site performance,
            user experience, and service quality.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>6. Your Rights</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            You can request access, correction, or deletion of your personal information by
            contacting us at recruitment@nextgentalentstaffing.com.
          </p>

          <h3 style={{ marginBottom: '0.6rem' }}>7. Policy Updates</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            We may update this policy from time to time. The revised version will be posted
            on this page with an updated effective date.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
