'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BriefModal({ isOpen, onClose }: BriefModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const themes = [
    { id: 'min', label: 'Modern Minimalist', desc: 'Silence, light, and monolithic forms.' },
    { id: 'lux', label: 'Luxury Sanctuary', desc: 'Opulence through raw textures.' },
    { id: 'ind', label: 'Industrial Refined', desc: 'Concrete meets polished elegance.' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="overlay-system"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="modal-document"
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={onClose}
              style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5 }}
            >
              <X size={24} />
            </button>

            <span className="tech-label">DIAGNOSTIC INQUIRY // MODULE_01</span>
            <h2 className="editorial-serif" style={{ fontSize: '3rem', margin: '10px 0 40px' }}>
              Access Your Brief.
            </h2>

            {step === 1 ? (
              <div className="modal-content">
                <p style={{ opacity: 0.6, marginBottom: '30px' }}>Select your primary design pain point or theme focus:</p>
                {themes.map((theme) => (
                  <div 
                    key={theme.id}
                    className={`diagnostic-option ${selectedTheme === theme.id ? 'active' : ''}`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 className="editorial-serif" style={{ fontSize: '1.2rem' }}>{theme.label}</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{theme.desc}</p>
                      </div>
                      {selectedTheme === theme.id && <CheckCircle2 size={20} color="var(--accent-blue)" />}
                    </div>
                  </div>
                ))}
                
                <button 
                  className="cta-btn" 
                  style={{ width: '100%', marginTop: '30px', padding: '20px' }}
                  disabled={!selectedTheme}
                  onClick={() => setStep(2)}
                >
                  Confirm Selection
                </button>
              </div>
            ) : (
              <div className="modal-content" style={{ textAlign: 'center', padding: '40px 0' }}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle2 size={64} color="var(--accent-blue)" style={{ margin: '0 auto 20px' }} />
                  <h3 className="editorial-serif" style={{ fontSize: '2rem' }}>Diagnostic Complete.</h3>
                  <p style={{ opacity: 0.6, marginTop: '10px' }}>Our reasoning engine is generating your custom technical brief. It will arrive shortly.</p>
                  <button className="cta-btn" style={{ marginTop: '40px', background: 'none', border: '1px solid var(--glass-border)' }} onClick={onClose}>
                    Return to Journal
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
