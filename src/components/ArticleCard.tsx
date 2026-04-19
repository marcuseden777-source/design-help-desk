'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Article } from '@/lib/articles';

export default function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="magazine-card group"
    >
      <Link href={`/magazine/${article.slug}`}>
        <div className="card-image-wrapper">
          <img src={article.coverImage} alt={article.title} className="card-image" />
          <div className="card-overlay glass">
            <span className="card-budget">{article.budgetRange}</span>
          </div>
        </div>
        <div className="card-info">
          <span className="card-category">{article.category}</span>
          <h3 className="card-title serif italic">{article.title}</h3>
          <p className="card-subtitle">{article.subtitle}</p>
          <div className="card-meta">
            <span className="creator">Verified Content by {article.creatorName}</span>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .magazine-card {
          cursor: pointer;
          break-inside: avoid;
          margin-bottom: 40px;
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #1a1a1a;
          aspect-ratio: 3/4;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .magazine-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 8px 16px;
          border-radius: 100px;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.4s ease;
        }

        .magazine-card:hover .card-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .card-budget {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-blue);
          letter-spacing: 0.1em;
        }

        .card-info {
          padding: 20px 0;
        }

        .card-category {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-blue);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .card-title {
          font-size: 1.6rem;
          margin-bottom: 10px;
          line-height: 1.1;
          color: white;
        }

        .card-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .card-meta {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 15px;
        }

        .creator {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </motion.div>
  );
}
