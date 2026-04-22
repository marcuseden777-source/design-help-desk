'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Share2, 
  ExternalLink, 
  Play, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';
import { articles, Article } from '@/lib/articles';
import { trackAndRedirect } from '@/lib/crm';

export default function ArticleTemplate() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const found = articles.find(a => a.slug === slug);
    if (found) setArticle(found);
  }, [slug]);

  if (!article) return null;

  const liquidTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <article className="article-wrapper" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Editorial Navigation */}
      <nav className="main-nav" style={{ position: 'fixed', mixBlendMode: 'difference' }}>
        <Link href="/" className="back-link" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={16} /> <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem' }}>Index</span>
        </Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Share2 size={18} color="white" cursor="pointer" />
        </div>
      </nav>

      {/* Cinematic Header */}
      <header className="article-header" style={{ height: '90vh' }}>
        <div className="article-cover-container">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={article.coverImage} 
            alt={article.title} 
            className="article-cover-bg" 
          />
          <div className="article-cover-overlay" />
        </div>
        
        <motion.div 
          className="article-title-stack"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={liquidTransition}
        >
          <span className="article-category editorial-serif">ISSUE 01 // {article.category}</span>
          <h1 className="article-main-title editorial-serif">{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>
        </motion.div>
      </header>

      {/* Editorial Content */}
      <main className="article-main">
        <div className="article-layout">
          {/* Scientific/Design Context Sidebar */}
          <aside className="creator-sidebar glass" style={{ padding: '40px', background: 'var(--glass-bg)' }}>
            <div className="creator-profile" style={{ borderBottom: '1px solid var(--glass-border)' }}>
              <div className="creator-avatar">
                <CheckCircle2 size={32} color="var(--accent-blue)" />
              </div>
              <div className="creator-info">
                <span style={{ fontSize: '0.6rem', opacity: 0.5, letterSpacing: '0.1em' }}>ARCHITECTURAL CURATOR</span>
                <h4 className="editorial-serif"> {article.author.name}</h4>
                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{article.author.role}</p>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <div className="detail-item">
                <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block' }}>DESIGN THEME</span>
                <p className="value">{article.category}</p>
              </div>
              <div className="detail-item">
                <span style={{ fontSize: '0.6rem', opacity: 0.4, display: 'block' }}>READ TIME</span>
                <p className="value">4 MIN</p>
              </div>
              
              <button 
                className="cta-btn" 
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => trackAndRedirect(article.slug, 'article_sidebar')}
              >
                Inquire Theme
              </button>
            </div>
          </aside>

          {/* Main Editorial Text */}
          <div className="article-body">
            {article.content.map((block, i) => {
              if (block.type === 'text') {
                return (
                  <motion.p 
                    key={i} 
                    className="body-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...liquidTransition, delay: i * 0.1 }}
                  >
                    {block.value}
                  </motion.p>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={i} className="body-figure">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={liquidTransition}
                      src={block.value} 
                      alt="" 
                      className="body-img" 
                    />
                    <figcaption className="body-caption">{block.caption}</figcaption>
                  </figure>
                );
              }
              if (block.type === 'video') {
                return (
                  <div key={i} className="body-video-container glass" style={{ border: '1px solid var(--glass-border)' }}>
                    <div className="video-placeholder">
                      <Play size={44} style={{ opacity: 0.5 }} />
                      <span className="editorial-serif" style={{ letterSpacing: '0.1em', opacity: 0.6 }}>LIVING THEME PREVIEW</span>
                    </div>
                    <div className="video-caption">
                      <p>View Modern Minimalist Motion Study</p>
                      <button className="watch-btn" onClick={() => window.open(block.value, '_blank')}>
                        Open Video
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {/* Premium Editorial Conclusion */}
            <div style={{ padding: '80px 0', borderTop: '1px solid var(--glass-border)', marginTop: '60px' }}>
              <h3 className="editorial-serif" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                The Solvable Problem.
              </h3>
              <p className="body-text">
                Every design challenge has an architectural solution. By understanding the pain points of 
                modern living, we curate spaces that not only look stunning but function as a sanctuary.
              </p>
              <button 
                className="cta-btn" 
                style={{ background: 'none', border: '1px solid var(--accent)', padding: '20px 60px' }}
              >
                Request Custom Design Brief
              </button>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}
