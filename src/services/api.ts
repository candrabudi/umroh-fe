/**
 * API Service Layer
 * Centralized API calls untuk semua endpoints
 * 
 * Usage:
 * import { packageService } from '@/services/api';
 * const packages = await packageService.getAll();
 */

import type {
  Package,
  Article,
  Testimonial,
  Branch,
  ContactForm,
  BookingInquiry,
  GalleryImage,
  Promo,
  AgentRegistration,
  APIResponse,
  PaginatedResponse,
  PackageFilters,
  ArticleFilters,
} from '@/types';

// Base API URL - ganti dengan URL backend Anda
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Helper function untuk fetch dengan error handling
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}

// ============================================
// PACKAGE SERVICE
// ============================================

export const packageService = {
  /**
   * Get all packages with optional filters
   */
  async getAll(filters?: PackageFilters): Promise<PaginatedResponse<Package>> {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.search) params.append('search', filters.search);
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

    const query = params.toString();
    return fetchAPI<PaginatedResponse<Package>>(
      `/packages${query ? `?${query}` : ''}`
    );
  },

  /**
   * Get single package by ID
   */
  async getById(id: string): Promise<APIResponse<Package>> {
    return fetchAPI<APIResponse<Package>>(`/packages/${id}`);
  },

  /**
   * Get featured packages
   */
  async getFeatured(): Promise<APIResponse<Package[]>> {
    return fetchAPI<APIResponse<Package[]>>('/packages/featured');
  },

  /**
   * Get packages by category
   */
  async getByCategory(category: Package['category']): Promise<APIResponse<Package[]>> {
    return fetchAPI<APIResponse<Package[]>>(`/packages/category/${category}`);
  },
};

// ============================================
// ARTICLE SERVICE
// ============================================

export const articleService = {
  /**
   * Get all articles with optional filters
   */
  async getAll(filters?: ArticleFilters): Promise<PaginatedResponse<Article>> {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.tag) params.append('tag', filters.tag);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.featured !== undefined) params.append('featured', filters.featured.toString());
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

    const query = params.toString();
    return fetchAPI<PaginatedResponse<Article>>(
      `/articles${query ? `?${query}` : ''}`
    );
  },

  /**
   * Get single article by ID or slug
   */
  async getById(id: string): Promise<APIResponse<Article>> {
    return fetchAPI<APIResponse<Article>>(`/articles/${id}`);
  },

  /**
   * Get featured articles
   */
  async getFeatured(): Promise<APIResponse<Article[]>> {
    return fetchAPI<APIResponse<Article[]>>('/articles/featured');
  },

  /**
   * Get related articles
   */
  async getRelated(articleId: string): Promise<APIResponse<Article[]>> {
    return fetchAPI<APIResponse<Article[]>>(`/articles/${articleId}/related`);
  },
};

// ============================================
// TESTIMONIAL SERVICE
// ============================================

export const testimonialService = {
  /**
   * Get all testimonials
   */
  async getAll(): Promise<APIResponse<Testimonial[]>> {
    return fetchAPI<APIResponse<Testimonial[]>>('/testimonials');
  },

  /**
   * Get testimonials by package
   */
  async getByPackage(packageId: string): Promise<APIResponse<Testimonial[]>> {
    return fetchAPI<APIResponse<Testimonial[]>>(`/testimonials/package/${packageId}`);
  },

  /**
   * Submit new testimonial
   */
  async create(data: Omit<Testimonial, 'id'>): Promise<APIResponse<Testimonial>> {
    return fetchAPI<APIResponse<Testimonial>>('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// ============================================
// BRANCH SERVICE
// ============================================

export const branchService = {
  /**
   * Get all branches
   */
  async getAll(): Promise<APIResponse<Branch[]>> {
    return fetchAPI<APIResponse<Branch[]>>('/branches');
  },

  /**
   * Get branch by city
   */
  async getByCity(city: string): Promise<APIResponse<Branch>> {
    return fetchAPI<APIResponse<Branch>>(`/branches/city/${city}`);
  },
};

// ============================================
// CONTACT SERVICE
// ============================================

export const contactService = {
  /**
   * Submit contact form
   */
  async submitContact(data: ContactForm): Promise<APIResponse<void>> {
    return fetchAPI<APIResponse<void>>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Submit booking inquiry
   */
  async submitBooking(data: BookingInquiry): Promise<APIResponse<void>> {
    return fetchAPI<APIResponse<void>>('/contact/booking', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// ============================================
// GALLERY SERVICE
// ============================================

export const galleryService = {
  /**
   * Get all gallery images
   */
  async getAll(): Promise<APIResponse<GalleryImage[]>> {
    return fetchAPI<APIResponse<GalleryImage[]>>('/gallery');
  },

  /**
   * Get gallery by category
   */
  async getByCategory(category: string): Promise<APIResponse<GalleryImage[]>> {
    return fetchAPI<APIResponse<GalleryImage[]>>(`/gallery/category/${category}`);
  },
};

// ============================================
// PROMO SERVICE
// ============================================

export const promoService = {
  /**
   * Get all active promos
   */
  async getActive(): Promise<APIResponse<Promo[]>> {
    return fetchAPI<APIResponse<Promo[]>>('/promos/active');
  },

  /**
   * Get promo by code
   */
  async getByCode(code: string): Promise<APIResponse<Promo>> {
    return fetchAPI<APIResponse<Promo>>(`/promos/code/${code}`);
  },

  /**
   * Validate promo code
   */
  async validateCode(code: string, packageId?: string): Promise<APIResponse<{
    valid: boolean;
    discount: number;
    message: string;
  }>> {
    return fetchAPI<APIResponse<any>>('/promos/validate', {
      method: 'POST',
      body: JSON.stringify({ code, packageId }),
    });
  },
};

// ============================================
// AGENT SERVICE
// ============================================

export const agentService = {
  /**
   * Register new agent
   */
  async register(data: AgentRegistration): Promise<APIResponse<void>> {
    return fetchAPI<APIResponse<void>>('/agents/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get agent levels/tiers
   */
  async getLevels(): Promise<APIResponse<any[]>> {
    return fetchAPI<APIResponse<any[]>>('/agents/levels');
  },
};

// ============================================
// EXPORT ALL SERVICES
// ============================================

export const api = {
  packages: packageService,
  articles: articleService,
  testimonials: testimonialService,
  branches: branchService,
  contact: contactService,
  gallery: galleryService,
  promos: promoService,
  agents: agentService,
};

export default api;
