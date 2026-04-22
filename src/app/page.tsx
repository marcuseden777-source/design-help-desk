'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  ArrowDown,
  Terminal,
  ShieldCheck,
  Zap,
  Layout
} from 'lucide-react';
import { articles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import SEO from '@/components/SEO';
import BriefModal from '@/components/BriefModal';
import HelpDeskUI from '@/components/HelpDeskUI';

export default function MagazineHome() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
    const timer = setTimeout(() => setLoading(false), 2000);
    
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  if (!mounted) return null;

  return (
    <main className="layout-wrapper" style={{ background: 'var(--background)' }}>
      <SEO 
        title="DESIGN HELP DESK | Premium Interior Editorial"
        description="Architectural reasoning and curated lifestyle magazine for the Singapore design market."
      />

      {/* Cinematic Reveal Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="liquid-reveal"
            exit={{ y: '-100%' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="tech-label" style={{ textAlign: 'center' }}>SYSTEM_REASONING_INIT</div>
              <div style={{ width: '400px', height: '1px', background: 'var(--accent-dim)', position: 'relative', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '100%', height: '100%', background: 'var(--accent-blue)', position: 'absolute' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vogue Navigation */}
      <nav className="system-nav" style={{ 
        opacity: scrolled ? 1 : 0, 
        transition: 'opacity 0.8s var(--liquid-ease)',
        pointerEvents: scrolled ? 'auto' : 'none'
      }}>
        <div className="nav-logo editorial-serif" style={{ fontSize: '1.2rem', color: 'white' }}>DESIGN</div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button className="nav-link" onClick={() => setShowModal(true)}>Diagnostic Brief</button>
          <button className="nav-link" style={{ opacity: 0.5 }}>Journal Index</button>
        </div>
      </nav>

      {/* The Designer's Matrix (Home) */}
      <div className="reveal-wrapper" style={{ animationDelay: '2s' }}>
        
        {/* Extreme Hero */}
        <section className="hero-cover-section" style={{ minHeight: '100vh', justifyContent: 'flex-end', paddingBottom: '15vh' }}>
          <div className="page-container">
            <h1 className="title-display">DESIGN</h1>
            <div style={{ marginTop: '5vh', maxWidth: '800px', paddingLeft: '2vw' }}>
              <span className="tech-label">MANIFESTO // 01.PAIN_TO_PLAN</span>
              <h2 className="mission-headline">
                We understand the pain. <br />
                We're here to solve the problem.
              </h2>
              <p className="mission-subtext" style={{ fontSize: '1.5rem', opacity: 1 }}>
                From bare floors to high-end architectural clinches. 
                We use intelligence to bridge the visionary gap.
              </p>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }}>
            <ArrowDown size={32} />
          </div>
        </section>

        {/* The Broken Editorial Matrix */}
        <section className="editorial-matrix">
          
          {/* Main Feature - Large */}
          <div className="matrix-item matrix-span-large">
             <ArticleCard article={articles[0]} layout="large" />
          </div>

          {/* Side Feature - Small Offset */}
          <div className="matrix-item matrix-span-small matrix-offset-top">
             <ArticleCard article={articles[1]} layout="small" />
          </div>

          {/* Center Feature - Medium Offset */}
          <div className="matrix-item matrix-span-medium matrix-offset-bottom" style={{ gridColumnStart: 5 }}>
             <ArticleCard article={articles[2]} layout="medium" />
          </div>

          {/* Right Feature - Medium */}
          <div className="matrix-item matrix-span-medium" style={{ gridColumnStart: 9, gridRowStart: 2 }}>
             <ArticleCard article={articles[3] || articles[0]} layout="medium" />
          </div>

        </section>

        {/* System Process: Vertical Study */}
        <section style={{ padding: '20vh 5vw', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <span className="tech-label">OPERATION_PROTOCOL // HELP_DESK</span>
            <h2 className="editorial-serif" style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '10vh' }}>
              Turning lifestyle friction into <br /><i>architectural profit.</i>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '80px' }}>
              <div>
                <ShieldCheck size={28} color="var(--accent-blue)" style={{ marginBottom: '20px' }} />
                <h4 className="tech-label" style={{ fontSize: '0.6rem' }}>01 / DIAGNOSIS</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>Deconstructing the pain points of the modern Singapore lifestyle environment.</p>
              </div>
              <div>
                <Layout size={28} color="var(--accent-blue)" style={{ marginBottom: '20px' }} />
                <h4 className="tech-label" style={{ fontSize: '0.6rem' }}>02 / CURATION</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>Selective architectural reasoning applied to material science and theme depth.</p>
              </div>
              <div>
                <Zap size={28} color="var(--accent-blue)" style={{ marginBottom: '20px' }} />
                <h4 className="tech-label" style={{ fontSize: '0.6rem' }}>03 / REVOLUTION</h4>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>Bridging the technical gap between initial vision and final high-fidelity clinch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Brief Lead Capture */}
        <section style={{ padding: '20vh 5vw', background: 'var(--foreground)', color: 'var(--background)' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="tech-label" style={{ color: 'inherit', opacity: 0.4 }}>INQUIRY_PORTAL</span>
            <h2 className="editorial-serif" style={{ fontSize: '6rem', lineHeight: 0.9, margin: '40px 0' }}>
              Join the <br />System.
            </h2>
            <p style={{ opacity: 0.6, marginBottom: '60px' }}>Daily technical briefs for the visionary homeowner.</p>
            <button 
              className="cta-btn" 
              style={{ background: 'var(--background)', color: 'var(--foreground)', padding: '25px 60px' }}
              onClick={() => setShowModal(true)}
            >
              Access Initial Brief
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '10vh 5vw', opacity: 0.5 }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div className="editorial-serif" style={{ fontSize: '1.5rem' }}>DESIGN</div>
             <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>© 2026 DESIGN HELP DESK // SYSTEM ARCHITECTURE.</div>
           </div>
        </footer>

      </div>

      {/* Floating UX */}
      <HelpDeskUI />
      <BriefModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Theme */}
      <button 
        className="theme-switch" 
        onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

    </main>
  );
}
