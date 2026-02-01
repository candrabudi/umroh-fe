# Sanur Indah Travel - Frontend Structure

## 📁 Struktur Folder

```
src/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── about-us/            # Halaman Tentang Kami
│   │   ├── blog/                # Halaman Blog & Detail
│   │   ├── contact/             # Halaman Kontak
│   │   ├── keagenan/            # Halaman Kemitraan Agen
│   │   └── packages/            # Halaman Paket & Detail
│   ├── layout.tsx               # Root layout dengan fonts
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles & CSS variables
│
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer dengan map
│   │   └── TopBar.tsx           # Top announcement bar
│   │
│   └── home/                    # Homepage sections
│       ├── Hero/                # Hero section dengan video
│       ├── VisiMisi/            # Visi & Misi
│       ├── Features/            # Fitur unggulan
│       ├── PromoCarousel/       # Carousel promo paket
│       ├── Products/            # Produk layanan
│       ├── WhyChooseUs/         # Keunggulan
│       ├── SavingsProgram/      # Program tabungan
│       ├── Testimonials/        # Testimoni jamaah
│       ├── Gallery/             # Galeri foto
│       ├── Branches/            # Cabang kantor
│       └── Blog/                # Blog preview
│
└── public/                      # Static assets
    └── images/                  # Gambar & icons

```

## 🎨 Design System

### CSS Variables (globals.css)

- **Colors**: `--primary`, `--accent`, `--text-main`, `--text-muted`
- **Spacing**: `--spacing-xs` to `--spacing-xxl` (responsive)
- **Fonts**: `--font-sans` (Plus Jakarta Sans), `--font-display` (Outfit)
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`

### Responsive Breakpoints

- Mobile: `max-width: 768px`
- Tablet: `max-width: 1024px`
- Desktop: `> 1024px`

## 🔄 Component Reusability

### Layout Components

Semua halaman menggunakan komponen layout yang sama:

```tsx
<TopBar />
<Header />
<main>{content}</main>
<Footer />
```

### CSS Modules Pattern

Setiap komponen memiliki file `.module.css` sendiri untuk scoped styling:

```
Component.tsx
Component.module.css
```

## 🚀 API Integration Ready

### Struktur Data yang Sudah Disiapkan

#### 1. Packages (Paket Umroh/Haji)

```typescript
interface Package {
  id: string;
  title: string;
  category: "umrah" | "haji" | "tour";
  price: number;
  duration: string;
  departure: string;
  image: string;
  features: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
}
```

#### 2. Blog Articles

```typescript
interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}
```

#### 3. Testimonials

```typescript
interface Testimonial {
  id: string;
  name: string;
  image: string;
  caption: string;
}
```

### API Integration Steps

1. **Create API Service Layer**

```typescript
// src/services/api.ts
export const packageService = {
  getAll: () => fetch("/api/packages"),
  getById: (id: string) => fetch(`/api/packages/${id}`),
  // ...
};
```

2. **Update Components**

```tsx
// Ganti static data dengan API call
const packages = await packageService.getAll();
```

3. **Add Loading States**

```tsx
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);
```

## 📱 Mobile Responsive Checklist

✅ Overflow-x hidden globally
✅ Grid menggunakan `minmax(min(100%, Xpx), 1fr)`
✅ Responsive spacing variables
✅ Horizontal scroll untuk carousel
✅ Touch-friendly button sizes (min 44px)
✅ Readable font sizes (min 16px untuk body)

## 🎯 Best Practices

### 1. Clean Code

- Gunakan TypeScript untuk type safety
- Pisahkan logic dan UI
- Reusable components

### 2. Performance

- Next.js Image optimization
- Lazy loading untuk images
- Code splitting otomatis

### 3. SEO

- Metadata di setiap page
- Semantic HTML
- Alt text untuk images

### 4. Accessibility

- ARIA labels
- Keyboard navigation
- Color contrast ratio

## 🔧 Development Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`)
- **CSS Modules**: camelCase (e.g., `.heroSection`)
- **Files**: kebab-case untuk folders (e.g., `about-us/`)
- **Variables**: camelCase (e.g., `const packageList`)

## 🎨 Modern Design Principles

1. **Glassmorphism**: Blur effects untuk depth
2. **Micro-animations**: Smooth transitions
3. **Premium Typography**: Outfit + Plus Jakarta Sans
4. **Vibrant Colors**: Electric lime accent (#b4db33)
5. **Clean Spacing**: Generous whitespace
6. **Card-based Layout**: Elevated surfaces
