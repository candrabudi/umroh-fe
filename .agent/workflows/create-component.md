---
description: Menciptakan komponen baru dengan standar project (TSX + Module CSS)
---

Ikuti langkah-langkah ini untuk membuat komponen baru:

1. **Tentukan Lokasi**:
   - `src/components/common` untuk komponen reusable kecil (Button, Card, dll).
   - `src/components/home/[SectionName]` untuk section besar di homepage.
   - `src/components/layout` untuk elemen layouting global.

2. **Buat Folder Komponen** (Jika belum ada):

   ```bash
   mkdir -p src/components/path/to/ComponentName
   ```

3. **Buat File .tsx**:
   Gunakan template berikut:

   ```tsx
   import styles from "./ComponentName.module.css";

   interface ComponentNameProps {
     // props definition
   }

   export default function ComponentName({}: ComponentNameProps) {
     return <div className={styles.container}>{/* Content */}</div>;
   }
   ```

4. **Buat File .module.css**:
   Gunakan variabel dari `globals.css`:

   ```css
   .container {
     padding: var(--spacing-md);
     background: var(--surface);
     border-radius: 16px;
   }
   ```

5. **Daftarkan Komponen**:
   Impor dan gunakan komponen di `src/app/page.tsx` atau layout yang sesuai.
