# Developer & AI Guide - Agen Travel

Selamat datang di proyek Agen Travel! Dokumen ini dirancang untuk memberikan pemahaman cepat tentang struktur folder, gaya pengkodean, dan konvensi yang digunakan dalam project ini agar pengembangan selanjutnya (baik oleh manusia maupun AI) tetap konsisten.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library UI**: React 19
- **Styling**: Vanilla CSS Modules (dengan CSS Variables)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (Sans) & Outfit (Display)

---

## 📁 Folder Structure

```text
/
├── public/              # Statik aset (images, fonts, svg)
├── src/
│   ├── app/             # Next.js App Router (Pages & Layout)
│   │   ├── globals.css  # Design system (CSS Variables & Global Styles)
│   │   ├── layout.tsx   # Root Layout
│   │   └── page.tsx     # Homepage
│   └── components/      # UI Components
│       ├── common/      # Reusable UI elements (Button, Input, Card)
│       ├── home/        # Section-specific components for Homepage
│       │   ├── Hero/
│       │   ├── Packages/
│       │   └── ...
│       └── layout/      # Layout components (Header, Footer, TopBar)
├── .agent/              # AI-specific workflows and instructions
└── package.json         # Dependencies & Scripts
```

---

## 🎨 Design System (Gunakan CSS Variables!)

Hindari hardcoding warna atau spacing. Selalu gunakan variabel yang didefinisikan di `src/app/globals.css`.

### Colors & Gradients

- `--primary`: `#263238` (Deep Slate - Utama)
- `--accent`: `#A4C639` (Lime Green - Sekunder)
- `--secondary`: `#DFE2E2` (Silver Gray - Pendukung)
- `--gradient-hero`: Gradient Slate yang elegan untuk nuansa premium.
- `--gradient-accent`: Gradient Lime Green untuk elemen interaktif.

### Typography

- Gunakan `var(--font-sans)` untuk body text.
- Gunakan `var(--font-display)` untuk headings (`h1`-`h6`).

### Tips Desain Premium

1. **Glassmorphism**: Gunakan `backdrop-filter: blur()` untuk efek kaca pada navbar atau overlay.
2. **Smooth Interactions**: Gunakan `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` untuk hover effects.
3. **Animated Background**: Project ini sudah memiliki animated orbs di background global. Pastikan elemen UI memiliki kontras yang baik di atasnya.

---

## 🛠 Konvensi Komponen

Setiap komponen baru harus mengikuti struktur berikut:

1.  **Lokasi**:
    - `src/components/common`: Komponen atomik (Button, Badge).
    - `src/components/home/[SectionName]`: Section besar. Gunakan subfolder jika komponennya kompleks.
2.  **Files**:
    - `ComponentName.tsx`
    - `ComponentName.module.css`
3.  **Naming**: PascalCase untuk file/folder.
4.  **Client Component**: Gunakan `'use client';` di baris pertama jika menggunakan `useState`, `useEffect`, atau browser APIs (seperti `PromoCarousel`).

### Contoh Struktur Komponen:

```tsx
import styles from "./MyComponent.module.css";

export default function MyComponent() {
  return <div className={styles.wrapper}>...</div>;
}
```

---

## 🤖 Instruksi Khusus untuk AI Selanjutnya

Jika Anda adalah AI Agent (seperti Claude, GPT, atau Copilot) yang melanjutkan tugas ini:

1.  **Baca Context**: Sebelum mulai, lihat `src/app/globals.css` untuk memahami "mood" desain.
2.  **Gunakan /create-component**: Kami memiliki workflow otomatis di `.agent/workflows/create-component.md`.
3.  **Visual Excellence**: Jangan buat UI yang terlihat seperti template standar. Tambahkan shadow halus, border-radius yang modern (12px-24px), dan micro-animations.
4.  **Icons**: Gunakan `lucide-react`. Impor hanya yang dibutuhkan.
5.  **Aset Gambar**: Jika membutuhkan gambar, gunakan tool generator gambar dengan prompt yang mendeskripsikan "Luxury Travel", "Cinematic Photography", atau "Islamic Architecture" sesuai kebutuhan Agen Travel.

---

## 🏃 Cara Menjalankan

```bash
npm run dev   # Menjalankan server development
npm run build # Membuat production build
```

---

_Dokumen ini dibuat otomatis oleh Antigravity untuk memastikan kontinuitas pengembangan._
