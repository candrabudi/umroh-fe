'use client';

import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, User, ArrowRight, ChevronRight, Share2, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

const allArticles = [
  {
    id: 1,
    title: "Tips Persiapan Fisik dan Mental Sebelum Berangkat Umroh",
    excerpt: "Ibadah Umroh memerlukan stamina yang prima. Simak panduan lengkap mempersiapkan diri agar ibadah lebih khusyuk dan bermakna bagi setiap jamaah.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "12 Jan 2026",
    category: "Tips & Trik",
    author: "Admin Sanur",
    readTime: "5 Menit",
    isFeatured: true
  },
  {
    id: 2,
    title: "Keutamaan Ibadah di Masjid Nabawi Madinah yang Luar Biasa",
    excerpt: "Menjelajahi keindahan dan keberkahan beribadah di tempat peristirahatan terakhir Rasulullah SAW yang menenangkan jiwa.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "10 Jan 2026",
    category: "Wawasan Islam",
    author: "Ust. Ahmad",
    readTime: "7 Menit"
  },
  {
    id: 3,
    title: "5 Destinasi Wisata Halal Terbaik di Turki Selain Cappadocia",
    excerpt: "Turki menyimpan sejuta pesona sejarah Islam. Temukan destinasi wajib kunjung lainnya untuk liburan keluarga yang berkesan.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "08 Jan 2026",
    category: "Wisata Halal",
    author: "Travel Guide",
    readTime: "6 Menit"
  },
  {
    id: 4,
    title: "Mengenal Jenis-Jenis Visa Umroh dan Cara Pembuatannya",
    excerpt: "Panduan lengkap mengenai persyaratan visa umroh terbaru tahun 2026 untuk warga negara Indonesia agar prosesnya lancar.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "05 Jan 2026",
    category: "Panduan",
    author: "Admin Sanur",
    readTime: "8 Menit"
  },
  {
    id: 5,
    title: "Barang Bawaan Wajib Saat Umroh untuk Wanita",
    excerpt: "Checklist lengkap barang bawaan agar perjalanan ibadah Anda lebih praktis, nyaman, dan tetap sesuai dengan aturan syar'i.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "03 Jan 2026",
    category: "Tips & Trik",
    author: "Team Muslimah",
    readTime: "4 Menit"
  },
  {
    id: 6,
    title: "Sejarah Jazirah Arab: Perjalanan Spiritual yang Menginspirasi",
    excerpt: "Menelusuri jejak perjuangan para Nabi dan Rasul di tanah suci melalui kacamata sejarah yang kaya akan hikmah dan pelajaran.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "01 Jan 2026",
    category: "Sejarah",
    author: "Ust. Zaid",
    readTime: "10 Menit"
  }
];

const categories = ["Semua", "Tips & Trik", "Wawasan Islam", "Wisata Halal", "Panduan", "Sejarah"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredArticles = allArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredArticles.find(a => a.isFeatured);
  const regularPosts = filteredArticles.filter(a => !a.isFeatured);

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Insight & Story</span>
          <h1 className={styles.heroTitle}>Jendela Inspirasi <br/>Ibadah <span style={{ color: 'var(--accent)' }}>Anda</span></h1>
          <p className={styles.heroSubtitle}>
            Temukan koleksi artikel mendalam mengenai panduan ibadah, sejarah Islam, 
            hingga tips perjalanan halal di seluruh dunia bersama Sanur Indah Travel.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <Search size={20} color="var(--text-muted)" />
              <input 
                type="text" 
                placeholder="Cari artikel inspirasi..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className={styles.categoryFilter}>
              <Filter size={18} color="var(--text-muted)" />
              <span className={styles.filterLabel}>Kategori</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          
          {/* Category Nav */}
          <div className={styles.categoryNav}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article Section */}
          {featuredPost && searchTerm === "" && activeCategory === "Semua" && (
            <div className={styles.featured}>
              <div className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <span className={styles.categoryTag}>{featuredPost.category}</span>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}><Calendar size={16} /> {featuredPost.date}</div>
                    <div className={styles.metaItem}><Clock size={16} /> {featuredPost.readTime} Baca</div>
                  </div>
                  <h2 className={styles.postTitle} style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className={styles.excerpt} style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                    {featuredPost.excerpt}
                  </p>
                  <Link href={`/blog/${featuredPost.id}`} className={styles.readMore}>
                    Baca Selengkapnya <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <div className={styles.grid}>
            {(searchTerm !== "" || activeCategory !== "Semua" ? filteredArticles : regularPosts).map((article) => (
              <article key={article.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={article.image} alt={article.title} />
                  <span className={styles.categoryTag}>{article.category}</span>
                </div>
                
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className={styles.postTitle}>
                    <Link href={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  
                  <Link href={`/blog/${article.id}`} className={styles.readMore}>
                    Selengkapnya <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Professional Pagination */}
          <div className={styles.pagination}>
             <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
             <button className={styles.pageBtn}>2</button>
             <button className={styles.pageBtn}>3</button>
             <button className={styles.pageBtn}>
               <ChevronRight size={20} />
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
