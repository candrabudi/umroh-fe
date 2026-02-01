# 🕌 Sanur Indah Travel - Website Resmi

Website premium untuk layanan umroh, haji, dan wisata religi dengan desain modern dan user experience terbaik.

## ✨ Fitur Utama

- 🎨 **Modern Design**: Glassmorphism, micro-animations, premium typography
- 📱 **Fully Responsive**: Mobile-first approach, no horizontal scroll
- ⚡ **Performance Optimized**: Next.js 14 App Router, Image optimization
- ♿ **Accessible**: WCAG compliant, keyboard navigation
- 🔍 **SEO Ready**: Meta tags, semantic HTML, structured data
- 🎯 **API Ready**: Clean data structure untuk integrasi backend

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

Lihat [STRUCTURE.md](./STRUCTURE.md) untuk dokumentasi lengkap struktur folder dan arsitektur.

```
src/
├── app/              # Next.js pages & routing
├── components/       # Reusable components
│   ├── layout/      # Header, Footer, TopBar
│   └── home/        # Homepage sections
└── public/          # Static assets
```

## 🎨 Design System

### Color Palette

- **Primary**: `#1a2327` (Deep Slate)
- **Accent**: `#b4db33` (Electric Lime)
- **Text**: `#1a2327` (Main), `#5c6e76` (Muted)

### Typography

- **Display**: Outfit (Headings)
- **Body**: Plus Jakarta Sans (Content)

### Spacing Scale

```css
--spacing-xs: 0.5rem /* 8px */ --spacing-sm: 1rem /* 16px */ --spacing-md: 2rem
  /* 32px (16px on mobile) */ --spacing-lg: 6rem /* 96px (48px on mobile) */
  --spacing-xl: 10rem /* 160px (64px on mobile) */ --spacing-xxl: 14rem
  /* 224px (80px on mobile) */;
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb config
- **Prettier**: Auto-formatting
- **CSS Modules**: Scoped styling

### Component Pattern

```tsx
// Component.tsx
import styles from "./Component.module.css";

export default function Component() {
  return <div className={styles.container}>{/* content */}</div>;
}
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach

```css
/* Mobile styles (default) */
.element {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    padding: 2rem;
  }
}
```

## 🔌 API Integration

### Data Structure

Lihat [STRUCTURE.md](./STRUCTURE.md) untuk interface TypeScript lengkap.

### Example: Fetch Packages

```typescript
// services/packages.ts
export async function getPackages() {
  const res = await fetch("/api/packages");
  return res.json();
}

// app/packages/page.tsx
const packages = await getPackages();
```

### Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
```

## 🎯 Best Practices

### 1. Performance

- ✅ Use Next.js `<Image>` component
- ✅ Lazy load images below the fold
- ✅ Minimize bundle size
- ✅ Use dynamic imports for heavy components

### 2. SEO

- ✅ Unique meta tags per page
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ Proper heading hierarchy

### 3. Accessibility

- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Color contrast ratio > 4.5:1
- ✅ Focus indicators

### 4. Code Quality

- ✅ TypeScript for type safety
- ✅ Reusable components
- ✅ Clean, readable code
- ✅ Consistent naming conventions

## 🐛 Troubleshooting

### Horizontal Scroll Issue

Semua grid sudah menggunakan `minmax(min(100%, Xpx), 1fr)` untuk mencegah overflow.

### Hydration Mismatch

`suppressHydrationWarning` sudah ditambahkan di `layout.tsx` untuk mengatasi warning dari browser extensions.

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Copyright © 2024 Sanur Indah Travel. All rights reserved.

## 📞 Support

- Website: [www.sanurindahtravel.com](https://www.sanurindahtravel.com)
- Email: info@sanurindahtravel.com
- Phone: +62 812 3456 7890

---

**Built with ❤️ using Next.js 14, TypeScript, and modern web technologies**
