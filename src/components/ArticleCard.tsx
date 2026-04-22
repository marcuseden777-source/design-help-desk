'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  layout?: 'large' | 'medium' | 'small';
}

export default function ArticleCard({ article, layout = 'medium' }: ArticleCardProps) {
  return (
    <Link href={`/magazine/${article.slug}`} style={{ textDecoration: 'none' }}>
      <motion.div 
        className="technical-frame"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        <span className="vertical-title">{article.category}</span>
        
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: layout === 'large' ? '16/9' : '9/12',
          overflow: 'hidden',
          background: 'var(--accent-dim)'
        }}>
          <motion.img 
            src={article.coverImage} 
            alt={article.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="editorial-caption" style={{ padding: '20px 0' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '10px' }}>
            <span className="tech-label" style={{ fontSize: '0.6rem', marginBottom: 0 }}>ID // {article.id.split('-')[1] || 'REF'}</span>
            <span style={{ fontSize: '0.65rem', opacity: 0.4, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Issue 01</span>
          </div>
          
          <h4 className="editorial-serif" style={{ 
            fontSize: layout === 'large' ? '2.5rem' : '1.8rem', 
            fontWeight: 400, 
            lineHeight: 1,
            color: 'var(--foreground)'
          }}>
            {article.title}
          </h4>
          
          <p style={{ 
            fontSize: '0.85rem', 
            opacity: 0.5, 
            marginTop: '15px', 
            lineHeight: 1.5,
            maxWidth: '400px',
            color: 'var(--foreground)'
          }}>
            An in-depth study into the architectural reasoning of {article.category.toLowerCase()} environments.
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
