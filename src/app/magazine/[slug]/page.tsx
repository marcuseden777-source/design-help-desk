'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ARTICLES } from '@/lib/articles';
import { ArrowLeft, User, ExternalLink, Play } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import SEO from '@/components/SEO';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="article-wrapper">
      <SEO 
        title={`${article.title} | Design Help Desk`}
        description={article.subtitle}
        image={article.coverImage}
        article={{
          publishedTime: article.publishedAt,
          authorName: article.creatorName,
          category: article.category
        }}
      />
      <nav className="article-nav glass">
        <Link href="/" className="back-link">
          <ArrowLeft size={18} />
          BACK TO MAGAZINE
        </Link>
      </nav>

      {/* Article Hero */}
      <header className="article-header">
        <div className="article-cover-container">
          <img src={article.coverImage} alt={article.title} className="article-cover-bg" />
          <div className="article-cover-overlay"></div>
        </div>
        
        <div className="article-title-stack">
          <span className="article-category">{article.category}</span>
          <h1 className="article-main-title serif italic">{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="article-main">
        <div className="article-layout">
          {/* Creator Sidebar (Desktop) */}
          <aside className="creator-sidebar glass">
            <div className="creator-profile">
              <div className="creator-avatar glass">
                <User size={32} />
              </div>
              <div className="creator-info">
                <span className="label">Verified Creator</span>
                <h4>{article.creatorName}</h4>
                <a href={article.creatorLink} target="_blank" className="creator-link">
                  VIEW FULL PORTFOLIO <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="article-details">
              <div className="detail-item">
                <span className="label">Budget Tier</span>
                <span className="value">{article.budgetTier} ({article.budgetRange})</span>
              </div>
              <div className="detail-item">
                <span className="label">Published</span>
                <span className="value">{article.publishedAt}</span>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <div className="article-body">
            {article.content.map((block, idx) => {
              if (block.type === 'text') {
                return <p key={idx} className="body-text">{block.body}</p>;
              }
              if (block.type === 'image') {
                return (
                  <figure key={idx} className="body-figure">
                    <img src={block.url} alt={block.caption} className="body-img" />
                    <figcaption className="body-caption">
                      {block.caption} 
                      {block.creatorName && (
                        <span className="credit"> / Image by {block.creatorName}</span>
                      )}
                    </figcaption>
                  </figure>
                );
              }
              if (block.type === 'video') {
                return (
                  <div key={idx} className="body-video-container glass">
                    <div className="video-placeholder">
                      <Play size={48} className="text-blue" />
                      <span>EXTERNAL MEDIA PREVIEW</span>
                    </div>
                    <div className="video-caption">
                      <p>{block.caption}</p>
                      <button className="watch-btn glass">WATCH ORIGINAL CONTENT</button>
                    </div>
                  </div>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="body-quote serif italic">
                    "{block.text}"
                    <cite>— {block.author}</cite>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        </div>
      </main>

    </div>
  );
}
