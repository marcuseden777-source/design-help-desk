'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, X, Terminal } from 'lucide-react';

export default function HelpDeskUI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger */}
      <motion.div 
        className="help-desk-trigger"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="help-desk-pulse" />
        <MessageSquare size={16} />
        <span>Reasoning Engine</span>
      </motion.div>

      {/* Reasoning Module */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{ 
              position: 'fixed', 
              bottom: '100px', 
              right: '40px', 
              width: '380px',
              background: 'var(--background)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: '24px',
              zIndex: 2000,
              boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(30px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={16} color="var(--accent-blue)" />
                <span className="tech-label" style={{ margin: 0 }}>SYSTEM_REASONING_v1.5</span>
              </div>
              <X size={18} cursor="pointer" onClick={() => setIsOpen(false)} opacity={0.5} />
            </div>

            <div style={{ padding: '20px', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <Sparkles size={18} color="var(--accent-blue)" />
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.8 }}>
                  Designing for "Luxury Sanctuary" involves balancing raw subterranean textures with high-diffraction lighting.
                </p>
              </div>
              <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>
                {">"} Analyzing sqft requirements...<br />
                {">"} Cross-referencing material durability...<br />
                {">"} Optimizing for atmospheric ROI...
              </div>
            </div>

            <button 
              className="cta-btn" 
              style={{ width: '100%', marginTop: '20px', fontSize: '0.7rem' }}
            >
              Start Diagnostic Interaction
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
