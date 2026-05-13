export type Product = {
  rank: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  amazonAsin?: string;
  amazonUrl?: string;
  mercadoLivreUrl?: string;
  specs?: Record<string, string>;
  badge?: string;
  idealFor?: string;
  pros: string[];
  cons: string[];
  rating?: number;
  reviewCount?: number;
  highlights?: string[];
};

export type ProductList = {
  slug: string;
  title: string;
  category: string;
  monthYear: string;
  metaDescription: string;
  intro: string;
  conclusion: string;
  publishedAt: string;
  updatedAt: string;
  products: Product[];
  author?: { name: string; role: string };
  faq?: { question: string; answer: string }[];
};
