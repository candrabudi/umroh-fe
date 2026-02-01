'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import Link from 'next/link';
import styles from './BlogDetail.module.css';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface Article {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  content: string;
  tags?: string[];
}

// ============================================
// DATA
// ============================================

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'tips-persiapan-fisik-mental-umroh',
    title: "Tips Persiapan Fisik dan Mental Sebelum Berangkat Umroh",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "12 Januari 2026",
    category: "Tips & Trik",
    author: "Admin Sanur",
    readTime: "5 Menit",
    tags: ["Umroh2026", "TipsIbadah", "Persiapan"],
    content: `
      <p>Ibadah Umroh bukan sekadar perjalanan biasa, melainkan perjalanan spiritual yang memerlukan kesiapan matang, baik secara fisik maupun mental. Mengingat cuaca di Arab Saudi yang seringkali ekstrem dan rangkaian ibadah yang padat, persiapan sejak dini adalah kunci kelancaran ibadah Anda.</p>
      <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Ibadah di Masjidil Haram" />
      <h2>Persiapan Fisik yang Utama</h2>
      <p>Rangkaian ibadah Umroh seperti Thawaf dan Sa'i melibatkan aktivitas berjalan kaki yang cukup jauh. Oleh karena itu, sangat disarankan untuk mulai membiasakan diri berjalan santai atau jogging minimal 30 menit setiap hari satu bulan sebelum keberangkatan.</p>
      <blockquote>"Ibadah yang khusyuk berawal dari tubuh yang sehat dan hati yang tenang."</blockquote>
      <h2>Menjaga Kesiapan Mental dan Hati</h2>
      <p>Niat adalah fondasi dari setiap ibadah. Bersihkan hati dari rasa sombong, riya, atau tujuan keduniawian lainnya. Perbanyak membaca buku panduan manasik Umroh agar Anda memahami setiap rukun dan wajib Umroh dengan benar.</p>
    `
  },
  {
    id: 2,
    slug: 'keutamaan-ibadah-masjid-nabawi',
    title: "Keutamaan Ibadah di Masjid Nabawi Madinah yang Luar Biasa",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "10 Januari 2026",
    category: "Wawasan Islam",
    author: "Ust. Ahmad",
    readTime: "7 Menit",
    tags: ["MasjidNabawi", "Madinah", "Sejarah"],
    content: `<p>Masjid Nabawi adalah pusat peradaban Islam yang menyejukkan hati setiap pengunjungnya...</p>`
  },
  {
    id: 3,
    slug: 'destinasi-wisata-halal-turki',
    title: "5 Destinasi Wisata Halal Terbaik di Turki Selain Cappadocia",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "08 Januari 2026",
    category: "Wisata Halal",
    author: "Travel Guide",
    readTime: "6 Menit",
    tags: ["Turki", "WisataHalal", "Destinasi"],
    content: `<p>Turki menyimpan sejuta pesona sejarah Islam yang menakjubkan...</p>`
  },
  {
    id: 4,
    slug: 'panduan-visa-umroh-2026',
    title: "Mengenal Jenis-Jenis Visa Umroh dan Cara Pembuatannya",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "05 Januari 2026",
    category: "Panduan",
    author: "Admin Sanur",
    readTime: "8 Menit",
    tags: ["Visa", "Panduan", "Umroh2026"],
    content: `<p>Panduan lengkap mengenai persyaratan visa umroh terbaru...</p>`
  },
  {
    id: 5,
    slug: 'barang-bawaan-umroh-wanita',
    title: "Barang Bawaan Wajib Saat Umroh untuk Wanita",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "03 Januari 2026",
    category: "Tips & Trik",
    author: "Team Muslimah",
    readTime: "4 Menit",
    tags: ["Wanita", "Packing", "TipsUmroh"],
    content: `<p>Checklist lengkap barang bawaan untuk jamaah wanita saat di tanah suci...</p>`
  },
  {
    id: 6,
    slug: 'sejarah-jazirah-arab',
    title: "Sejarah Jazirah Arab: Perjalanan Spiritual yang Menginspirasi",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "01 Januari 2026",
    category: "Sejarah",
    author: "Ust. Zaid",
    readTime: "10 Menit",
    tags: ["Sejarah", "JazirahArab", "Islam"],
    content: `<p>Menelusuri jejak perjuangan para Nabi dan Rasul di tanah jazirah...</p>`
  }
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={article.image} alt={article.title} />
          <div className={styles.heroOverlay} />
        </div>
        
        <div className={styles.heroContent}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={18} />
            <span>Kembali ke Artikel</span>
          </Link>
          
          <h1 className={styles.title}>{article.title}</h1>
          
          <div className={styles.meta}>
            <div className={styles.categoryBadge}>{article.category}</div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className={styles.metaItem}>
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className={styles.articleBody}>
        <div className={styles.container}>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className={styles.articleFooter}>
            {article.tags && article.tags.length > 0 && (
              <div className={styles.tags}>
                {article.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
            
            <div className={styles.actions}>
              <button className={styles.actionBtn}>
                <Heart size={20} />
                <span>Suka</span>
              </button>
              <button className={styles.actionBtn}>
                <Bookmark size={20} />
                <span>Simpan</span>
              </button>
              <button className={styles.actionBtn}>
                <Share2 size={20} />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
