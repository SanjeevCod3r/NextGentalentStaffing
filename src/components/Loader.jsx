import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-logo">
          <img src="/asset/nextgentalentstaffing logo.png" alt="NextGen Talent Staffing" />
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loader-text">
          <h2>NextGen Talent Staffing</h2>
          <p>Empowering Careers, Building Futures</p>
        </div>
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      
      <style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f62fe 0%, #ff832b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .loader-overlay::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 10s linear infinite;
        }

        .loader-container {
          position: relative;
          text-align: center;
          z-index: 1;
          animation: fadeInUp 0.8s ease;
        }

        .loader-logo {
          margin-bottom: 2rem;
          animation: pulse 2s ease-in-out infinite;
        }

        .loader-logo img {
          width: 120px;
          height: auto;
          filter: brightness(0) invert(1);
          animation: float 3s ease-in-out infinite;
        }

        .loader-spinner {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top: 3px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .spinner-ring:nth-child(1) {
          animation-delay: 0s;
        }

        .spinner-ring:nth-child(2) {
          animation-delay: 0.2s;
          width: 60px;
          height: 60px;
          top: 10px;
          left: 10px;
          border-top-color: rgba(255, 255, 255, 0.7);
        }

        .spinner-ring:nth-child(3) {
          animation-delay: 0.4s;
          width: 40px;
          height: 40px;
          top: 20px;
          left: 20px;
          border-top-color: rgba(255, 255, 255, 0.5);
        }

        .loader-text {
          color: white;
          margin-bottom: 2rem;
        }

        .loader-text h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .loader-text p {
          font-size: 1rem;
          margin: 0;
          opacity: 0.9;
          text-shadow: 0 1px 5px rgba(0,0,0,0.3);
        }

        .loader-progress {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
          border-radius: 2px;
          animation: progress 2s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .loader-logo img {
            width: 100px;
          }

          .loader-spinner {
            width: 60px;
            height: 60px;
          }

          .spinner-ring:nth-child(2) {
            width: 45px;
            height: 45px;
            top: 7.5px;
            left: 7.5px;
          }

          .spinner-ring:nth-child(3) {
            width: 30px;
            height: 30px;
            top: 15px;
            left: 15px;
          }

          .loader-text h2 {
            font-size: 1.5rem;
          }

          .loader-text p {
            font-size: 0.9rem;
          }

          .loader-progress {
            width: 150px;
          }
        }

        @media (max-width: 480px) {
          .loader-logo img {
            width: 80px;
          }

          .loader-spinner {
            width: 50px;
            height: 50px;
          }

          .spinner-ring:nth-child(2) {
            width: 37.5px;
            height: 37.5px;
            top: 6.25px;
            left: 6.25px;
          }

          .spinner-ring:nth-child(3) {
            width: 25px;
            height: 25px;
            top: 12.5px;
            left: 12.5px;
          }

          .loader-text h2 {
            font-size: 1.3rem;
          }

          .loader-text p {
            font-size: 0.8rem;
          }

          .loader-progress {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
