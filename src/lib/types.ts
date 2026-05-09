export type Product = {
  rank: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  amazonAsin?: string;
  amazonUrl?: string;
  mercadoLivreUrl?: string;
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
  faq?: { question: string; answer: string }[];
};
