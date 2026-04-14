import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="glass-card" 
        style={{ width: '90%', maxWidth: '400px', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
      >
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
        >
          <X size={24} />
        </button>

        <h2 className="text-center text-gradient mb-4">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <div className="auth-toggle mb-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className={`btn ${isLogin ? 'btn-primary' : 'btn-outline'}`} 
            onClick={() => setIsLogin(true)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            Login
          </button>
          <button 
            className={`btn ${!isLogin ? 'btn-secondary' : 'btn-outline'}`} 
            onClick={() => setIsLogin(false)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            Signup
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert(isLogin ? 'Login Request Sent!' : 'Signup Request Sent!'); onClose(); }}>
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <div className="input-group">
                  <label>Mobile Number</label>
                  <input type="tel" className="input-control" placeholder="Enter your mobile number" required />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input type="password" className="input-control" placeholder="Enter password" required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Password se Login karein</button>
              </motion.div>
            ) : (
              <motion.div key="signup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" className="input-control" placeholder="Naam" required />
                </div>
                <div className="input-group">
                  <label>Mobile Number</label>
                  <input type="tel" className="input-control" placeholder="Mobile Number" required />
                </div>
                <div className="input-group">
                  <label>Qualification</label>
                  <select className="input-control" required>
                    <option value="">Select Qualification</option>
                    <option value="10th">10th / 12th Pass</option>
                    <option value="iti">ITI / Diploma</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>Register Karein</button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthModal;
