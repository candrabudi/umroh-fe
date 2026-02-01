/**
 * Type definitions untuk Sanur Indah Travel
 * Gunakan interfaces ini untuk integrasi API
 */

// ============================================
// PACKAGES (Paket Umroh/Haji/Tour)
// ============================================

export interface Package {
  id: string;
  title: string;
  category: 'umrah' | 'haji' | 'tour';
  price: number;
  priceLabel?: string; // e.g., "/pax"
  duration: string; // e.g., "9 Hari 8 Malam"
  departure: string; // e.g., "15 Maret 2024"
  image: string;
  features: string[];
  description?: string;
  itinerary: PackageItinerary[];
  included: string[];
  excluded: string[];
  quota?: number;
  availableSeats?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

// ============================================
// BLOG & ARTICLES
// ============================================

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  excerpt: string;
  content: string; // HTML or Markdown
  image: string;
  author: Author;
  publishedAt: string; // ISO date string
  updatedAt?: string;
  readTime: string; // e.g., "5 min"
  tags?: string[];
  featured?: boolean;
  views?: number;
  seo?: SEOMetadata;
}

export type ArticleCategory = 
  | 'umrah'
  | 'haji'
  | 'tips'
  | 'destinasi'
  | 'panduan'
  | 'berita';

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  caption: string;
  location?: string;
  packageId?: string; // Reference to package
  rating?: number; // 1-5
  createdAt?: string;
}

// ============================================
// BRANCHES (Cabang Kantor)
// ============================================

export interface Branch {
  id: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  operatingHours?: string;
}

// ============================================
// CONTACT & FORMS
// ============================================

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  packageId?: string; // If inquiring about specific package
}

export interface BookingInquiry extends ContactForm {
  packageId: string;
  departureDate: string;
  numberOfPeople: number;
  specialRequests?: string;
}

// ============================================
// GALLERY
// ============================================

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  location: string;
  category?: 'umrah' | 'haji' | 'tour' | 'office';
  tags?: string[];
}

// ============================================
// PROMOS & OFFERS
// ============================================

export interface Promo {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  discount?: number; // Percentage
  discountAmount?: number; // Fixed amount
  validFrom: string;
  validUntil: string;
  packageIds?: string[]; // Applicable packages
  code?: string; // Promo code
  terms?: string[];
}

// ============================================
// AGENT/PARTNERSHIP (Keagenan)
// ============================================

export interface AgentLevel {
  id: string;
  name: string;
  minSales: number;
  maxSales?: number;
  commission: number; // Percentage
  bonuses: AgentBonus[];
  benefits: string[];
}

export interface AgentBonus {
  type: 'direct' | 'activity' | 'milestone' | 'regional';
  amount: number;
  description: string;
  condition?: string;
}

export interface AgentRegistration {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  province: string;
  idCardNumber: string;
  bankName: string;
  bankAccountNumber: string;
  bankAccountName: string;
  referralCode?: string;
}

// ============================================
// SEO & METADATA
// ============================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// ============================================
// API RESPONSES
// ============================================

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    total: number;
  };
}

// ============================================
// FILTERS & QUERIES
// ============================================

export interface PackageFilters {
  category?: Package['category'];
  minPrice?: number;
  maxPrice?: number;
  month?: string;
  search?: string;
  sortBy?: 'price' | 'date' | 'popular';
  sortOrder?: 'asc' | 'desc';
}

export interface ArticleFilters {
  category?: ArticleCategory;
  tag?: string;
  search?: string;
  featured?: boolean;
  sortBy?: 'date' | 'views' | 'title';
  sortOrder?: 'asc' | 'desc';
}
