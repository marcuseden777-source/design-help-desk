export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  budgetTier: 'Essential' | 'Standard' | 'Premium' | 'Signature';
  budgetRange: string;
  coverImage: string;
  creatorName: string;
  creatorLink: string;
  publishedAt: string;
  content: ContentBlock[];
}

export type ContentBlock = 
  | { type: 'text'; body: string }
  | { type: 'image'; url: string; caption: string; creatorName?: string; creatorLink?: string }
  | { type: 'video'; url: string; caption: string }
  | { type: 'quote'; text: string; author: string };

export const ARTICLES: Article[] = [
  {
    slug: 'monolithic-materiality-2026',
    title: 'MONOLITHIC MATERIALITY',
    subtitle: 'The 2026 Trend Redefining Luxury HDB Renovations',
    category: 'Architecture',
    budgetTier: 'Premium',
    budgetRange: '$80k - $150k',
    coverImage: '/assets/mag/cover_01.webp',
    creatorName: 'Aurelia Design Studio',
    creatorLink: 'https://behance.net/aurelia',
    publishedAt: '2026-04-19',
    content: [
      { type: 'text', body: 'In the heart of Singapore, a new architectural movement is taking root. Monolithic Materiality focus on seamless transitions between stone and timber...' },
      { type: 'image', url: '/assets/mag/stone_detail.webp', caption: 'Seamless marble transitions in a Signature Condo.', creatorName: 'Aurelia', creatorLink: '#' },
      { type: 'quote', text: 'Design is not just what it looks like, but how it feels to touch the raw Earth within a home.', author: 'Chief Architect, Aurelia' }
    ]
  },
  {
    slug: 'hdb-roi-secrets',
    title: 'HDB ROI SECRETS',
    subtitle: 'maximizing Home Value with Strategic Essential Renos',
    category: 'Budget Hacks',
    budgetTier: 'Essential',
    budgetRange: '$20k - $40k',
    coverImage: '/assets/mag/cover_02.webp',
    creatorName: 'ID Engineering Lab',
    creatorLink: 'https://youtube.com/idengineering',
    publishedAt: '2026-04-18',
    content: [
      { type: 'text', body: 'Renovating on a budget doesn\'t mean sacrificing style. It means investing in high-impact zones like the kitchen backsplash and lighting...' },
    ]
  }
];
