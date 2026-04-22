export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  coverImage: string;
  videoUrl?: string;
  author: {
    name: string;
    role: string;
  };
  content: Array<{
    type: 'text' | 'image' | 'video' | 'pull-quote';
    value: string;
    caption?: string;
    features?: string[];
  }>;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const articles: Article[] = [
  {
    id: 'ISSUE-01',
    slug: 'modern-minimalist-mastery',
    title: 'Minimalist Mastery',
    subtitle: 'The art of silence in modern architecture.',
    category: 'MODERN MINIMALIST',
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    author: { name: 'Julian Chen', role: 'Principal Architect' },
    content: [
      {
        type: 'text',
        value: 'Minimalism is about the relationship between space and light. We understand the pain of a cluttered home; we are here to solve it.'
      },
      { type: 'pull-quote', value: 'Design is how it works.' }
    ],
    seo: { metaTitle: 'Minimalist Mastery', metaDescription: 'Design Help Desk.', keywords: [] }
  },
  {
    id: 'ISSUE-02',
    slug: 'the-luxury-sanctuary',
    title: 'Luxury Sanctuary',
    subtitle: 'Redefining opulence.',
    category: 'LUXURY',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    author: { name: 'Sarah Tan', role: 'Creative Director' },
    content: [],
    seo: { metaTitle: 'Luxury Sanctuary', metaDescription: 'Design Help Desk.', keywords: [] }
  },
  {
    id: 'ISSUE-03',
    slug: 'industrial-refined',
    title: 'Industrial Refined',
    subtitle: 'Raw concrete meets elegance.',
    category: 'INDUSTRIAL',
    coverImage: 'https://images.unsplash.com/photo-1512918766775-d56aebb309f9?q=80&w=2070&auto=format&fit=crop',
    author: { name: 'Mark Wu', role: 'Design Lead' },
    content: [],
    seo: { metaTitle: 'Industrial Refined', metaDescription: 'Design Help Desk.', keywords: [] }
  },
  {
    id: 'ISSUE-04',
    slug: 'biophilic-living',
    title: 'Biophilic Living',
    subtitle: 'Urban nature.',
    category: 'BIOPHILIC',
    coverImage: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?q=80&w=2070&auto=format&fit=crop',
    author: { name: 'Elena Lim', role: 'Green Architect' },
    content: [],
    seo: { metaTitle: 'Biophilic Living', metaDescription: 'Design Help Desk.', keywords: [] }
  },
  {
    id: 'ISSUE-05',
    slug: 'scandinavian-skies',
    title: 'Scandinavian Skies',
    subtitle: 'Warm wood and light.',
    category: 'SCANDINAVIAN',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
    author: { name: 'Nordic Team', role: 'Design Studio' },
    content: [],
    seo: { metaTitle: 'Scandinavian Skies', metaDescription: 'Design Help Desk.', keywords: [] }
  }
];
