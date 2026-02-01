'use client';

import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight, Search, Sparkles, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  isFeatured?: boolean;
}

// ============================================
// DATA - Nanti ganti dengan API call
// ============================================

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'tips-persiapan-fisik-mental-umroh',
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
    slug: 'keutamaan-ibadah-masjid-nabawi',
    title: "Keutamaan Ibadah di Masjid Nabawi Madinah yang Luar Biasa",
    excerpt: "Menjelajahi keindahan dan keberkahan beribadah di tempat peristirahatan terakhir Rasulullah SAW yang menenangkan jiwa yang religius.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "10 Jan 2026",
    category: "Wawasan Islam",
    author: "Ust. Ahmad",
    readTime: "7 Menit"
  },
  {
    id: 3,
    slug: 'destinasi-wisata-halal-turki',
    title: "5 Destinasi Wisata Halal Terbaik di Turki Selain Cappadocia",
    excerpt: "Turki menyimpan sejuta pesona sejarah Islam. Temukan destinasi wajib kunjung lainnya untuk liburan keluarga yang berkesan dan penuh hikmah.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "08 Jan 2026",
    category: "Wisata Halal",
    author: "Travel Guide",
    readTime: "6 Menit"
  },
  {
    id: 4,
    slug: 'panduan-visa-umroh-2026',
    title: "Mengenal Jenis-Jenis Visa Umroh dan Cara Pembuatannya",
    excerpt: "Panduan lengkap mengenai persyaratan visa umroh terbaru tahun 2026 untuk warga negara Indonesia agar prosesnya lancar dan tenang.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "05 Jan 2026",
    category: "Panduan",
    author: "Admin Sanur",
    readTime: "8 Menit"
  },
  {
    id: 5,
    slug: 'barang-bawaan-umroh-wanita',
    title: "Barang Bawaan Wajib Saat Umroh untuk Wanita",
    excerpt: "Checklist lengkap barang bawaan agar perjalanan ibadah Anda lebih praktis, nyaman, dan tetap sesuai dengan aturan syar'i yang berlaku.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "03 Jan 2026",
    category: "Tips & Trik",
    author: "Team Muslimah",
    readTime: "4 Menit"
  },
  {
    id: 6,
    slug: 'sejarah-jazirah-arab',
    title: "Sejarah Jazirah Arab: Perjalanan Spiritual yang Menginspirasi",
    excerpt: "Menelusuri jejak perjuangan para Nabi dan Rasul di tanah suci melalui kacamata sejarah yang kaya akan hikmah dan pelajaran mendalam.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "01 Jan 2026",
    category: "Sejarah",
    author: "Ust. Zaid",
    readTime: "10 Menit"
  }
];

const CATEGORIES = ["Semua", "Tips & Trik", "Wawasan Islam", "Wisata Halal", "Panduan", "Sejarah"];

// ============================================
// MAIN COMPONENT
// ============================================

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        activeCategory === "Semua" || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const featuredPost = ARTICLES.find(a => a.isFeatured);
  
  // Reset to first page when filtering
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const articlesToShow = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredArticles, currentPage]);

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Insight & Story</span>
          </div>
          <h1 className={styles.heroTitle}>
            Jendela Inspirasi <br/>
            Ibadah <span className={styles.accentText}>Berpahala</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Temukan panduan ibadah, sejarah Islam, dan tips perjalanan halal terbaik bersama Sanur Indah Travel.
          </p>
        </div>
      </section>

      {/* Control Panel: Search & Categories */}
      <section className={styles.controlSection}>
        <div className={styles.container}>
          <div className={styles.controlGrid}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                placeholder="Cari artikel inspirasi..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.categoryWrapper}>
              <div className={styles.filterIcon}><Filter size={18} /></div>
              <div className={styles.categoryNav}>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          
          {/* Featured Article - Only on "Semua" and no search */}
          {featuredPost && activeCategory === "Semua" && !searchTerm && (
            <div className={styles.featuredSection}>
              <FeaturedArticle article={featuredPost} />
            </div>
          )}

          {/* Articles Grid */}
          <div className={styles.gridSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchTerm || activeCategory !== "Semua" ? 'Hasil Pencarian' : 'Artikel Terbaru'}
              </h2>
              <div className={styles.resultsCount}>
                <span>{articlesToShow.length}</span> Artikel ditemukan
              </div>
            </div>

            {articlesToShow.length > 0 ? (
              <>
                <div className={styles.grid}>
                  {articlesToShow.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button 
                      className={styles.pageArrow}
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.pageBtnActive : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button 
                      className={styles.pageArrow}
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}><Search size={48} /></div>
                <h3>Pencarian Tidak Ditemukan</h3>
                <p>Maaf, kami tidak menemukan artikel yang sesuai dengan kriteria Anda. Coba gunakan kata kunci lain.</p>
                <button 
                  className={styles.resetBtn}
                  onClick={() => {setSearchTerm(""); setActiveCategory("Semua");}}
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ============================================
// SUB-COMPONENTS
// ============================================

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className={styles.featured}>
      <Link href={`/blog/${article.slug}`} className={styles.featuredCard}>
        <div className={styles.featuredImage}>
          <img src={article.image} alt={article.title} />
          <span className={styles.categoryTag}>{article.category}</span>
        </div>
        <div className={styles.featuredContent}>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Calendar size={16} /> {article.date}
            </span>
            <span className={styles.metaItem}>
              <Clock size={16} /> {article.readTime} reading
            </span>
          </div>
          <h2 className={styles.featuredTitle}>{article.title}</h2>
          <p className={styles.featuredExcerpt}>{article.excerpt}</p>
          <div className={styles.readMore}>
            Baca Artikel <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    </article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${article.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <img src={article.image} alt={article.title} />
          <span className={styles.categoryTag}>{article.category}</span>
        </div>
        
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Calendar size={14} /> {article.date}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h3 className={styles.postTitle}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>
          
          <div className={styles.cardFooter}>
            <span className={styles.readMoreBtn}>
              Detail <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
