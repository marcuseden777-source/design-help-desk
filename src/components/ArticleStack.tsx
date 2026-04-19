'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  description: string;
}

const articles: Article[] = [
  {
    title: "Monolithic Materiality",
    category: "2026 TRENDS",
    description: "Exploring the seamless integration of raw stone and timber in luxury residential architecture."
  },
  {
    title: "Adaptive Glass Layers",
    category: "TECHNOLOGY",
    description: "How smart glass is replacing traditional curtains for dynamic privacy and light control."
  },
  {
    title: "Subterranean Sanctuary",
    category: "LIFESTYLE",
    description: "Designing high-end basement retreats that focus on extreme silence and air quality."
  }
];

export default function ArticleStack() {
  return (
    <div className="article-stack-container">
      <div className="stack-header">
        <BookOpen size={20} className="text-blue mr-2" />
        <h3 className="serif italic">Curated Article Stack</h3>
      </div>
      
      <div className="articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="article-item glass"
          >
            <div className="article-meta">
              <span className="category-tag">{article.category}</span>
              <ArrowUpRight size={16} className="text-muted" />
            </div>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .article-stack-container {
          margin-top: 30px;
          width: 100%;
        }

        .stack-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-left: 10px;
        }

        .text-blue { color: var(--accent-blue); }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .article-item {
          padding: 24px;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .article-item:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .category-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent-blue);
          text-transform: uppercase;
        }

        .article-item h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .article-item p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
