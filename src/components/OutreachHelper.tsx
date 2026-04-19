'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

export default function OutreachHelper() {
  const [creatorName, setCreatorName] = useState('');
  const [contentTitle, setContentTitle] = useState('');
  const [copied, setCopied] = useState(false);

  const emailTemplate = `
Subject: Collaboration Request: Featuring your work in Design Help Desk Magazine

Hi ${creatorName || '[Creator Name]'},

I'm reaching out from Design Help Desk, a new digital magazine focused on high-end interior architecture and trends for the Singapore market.

We came across your recent work/video titled "${contentTitle || '[Content Title]'}" and absolutely loved the direction. We'd love to feature a breakdown of it in our upcoming 2026 Trends issue.

Our goal is to help homeowners understand the process behind great design while giving original creators like yourself more exposure. We will:
1. Provide a direct link to your original content.
2. Credit you as the "Verified Creator" in a glassmorphic featured module.
3. Share your work with our curated audience of high-intent homeowners.

Do you mind if we feature a preview of your work? If you're okay with this, we'll proceed. If not, we'll leave it out.

Looking forward to potentially collaborating!

Best regards,
The Design Help Desk Team
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="outreach-container glass">
      <div className="outreach-header">
        <Mail className="text-blue" size={24} />
        <h3 className="serif italic">Creator Outreach Helper</h3>
      </div>

      <div className="input-grid">
        <div className="input-group">
          <label className="label">Creator Name</label>
          <input 
            type="text" 
            placeholder="e.g. Aurelia Design" 
            className="outreach-input"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Content Title</label>
          <input 
            type="text" 
            placeholder="e.g. Modern Landed Kitchen" 
            className="outreach-input"
            value={contentTitle}
            onChange={(e) => setContentTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="template-preview glass">
        <pre className="template-text">{emailTemplate}</pre>
        <button className={`copy-btn glass ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'COPIED!' : 'COPY TEMPLATE'}
        </button>
      </div>

      <style jsx>{`
        .outreach-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 40px;
          border-radius: 32px;
        }

        .outreach-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .outreach-header h3 {
          font-size: 1.5rem;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .outreach-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px 20px;
          border-radius: 12px;
          color: white;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .outreach-input:focus {
          border-color: var(--accent-blue);
        }

        .template-preview {
          position: relative;
          background: rgba(0,0,0,0.2);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .template-text {
          white-space: pre-wrap;
          font-family: inherit;
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-height: 400px;
          overflow-y: auto;
        }

        .copy-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 100px;
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .copy-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        .copy-btn.copied {
          background: var(--accent-blue);
          border-color: var(--accent-blue);
        }
      `}</style>
    </div>
  );
}
