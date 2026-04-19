'use client';

import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authorName: string;
    category: string;
  };
}

export default function SEO({ title, description, image, article }: SEOProps) {
  const siteName = "Design Help Desk";
  const baseUrl = "https://designhelpdesk.sg"; // Placeholder domain

  const jsonLd = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "/assets/logo.png",
    "author": {
      "@type": "Person",
      "name": article.authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/assets/logo.png`
      }
    },
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "articleSection": article.category
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 
         Note: Meta tags (Title, Description, OG) are handled by 
         Next.js Metadata API in layout.tsx and page.tsx. 
         This component specifically injects JSON-LD for rich snippets.
      */}
    </>
  );
}
