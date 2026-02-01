import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import styles from './Blog.module.css';

const articles = [
  {
    id: 1,
    title: "Tips Persiapan Fisik dan Mental Sebelum Berangkat Umroh",
    excerpt: "Ibadah Umroh memerlukan stamina yang prima. Simak panduan lengkap mempersiapkan diri agar ibadah lebih khusyuk.",
    image: "/promos/mecca.png",
    date: "12 Januari 2026",
    author: "Admin Sanur",
    category: "Tips & Trik",
    readTime: "5 Menit"
  },
  {
    id: 2,
    title: "Keutamaan Ibadah di Masjid Nabawi Madinah yang Luar Biasa",
    excerpt: "Menjelajahi keindahan dan keberkahan beribadah di tempat peristirahatan terakhir Rasulullah SAW.",
    image: "/promos/madinah.png",
    date: "10 Januari 2026",
    author: "Ust. Ahmad",
    category: "Wawasan Islam",
    readTime: "7 Menit"
  },
  {
    id: 3,
    title: "5 Destinasi Wisata Halal Terbaik di Turki Selain Cappadocia",
    excerpt: "Turki menyimpan sejuta pesona sejarah Islam. Temukan destinasi wajib kunjung lainnya untuk liburan keluarga.",
    image: "/promos/turkey.png",
    date: "08 Januari 2026",
    author: "Travel Guide",
    category: "Wisata Halal",
    readTime: "6 Menit"
  }
];

export default function Blog() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Artikel & Berita</span>
            </div>
            <h2 className={styles.title}>Wawasan Perjalanan <span className={styles.accentText}>Suci</span></h2>
            <p className={styles.subtitle}>
              Dapatkan informasi terbaru, tips ibadah, dan panduan wisata halal langsung dari tim profesional kami.
            </p>
          </div>
          <button className={styles.btnLihatSemua}>
            Baca Semua Artikel <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className={styles.categoryBadge}>{article.category}</div>
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
                  Selengkapnya <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
