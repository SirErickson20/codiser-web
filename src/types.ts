export type PageTab = 'inicio' | 'nosotros' | 'servicios' | 'trabajos' | 'contacto';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: 'digital' | 'traditional' | 'branding' | 'strategy';
  deliverables: string[];
  isHighlighted?: boolean;
  isWide?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  image: string;
  summary: string;
  client: string;
  year: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface DistinctionItem {
  title: string;
  description: string;
  icon: string;
}

export interface MarketTarget {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  badge?: string;
  type: 'large-image' | 'standard' | 'split';
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
