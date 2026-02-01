'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Link2 } from 'lucide-react';
import Link from 'next/link';
import styles from './BlogDetail.module.css';

const allArticles = [
  {
    id: 1,
    title: "Tips Persiapan Fisik dan Mental Sebelum Berangkat Umroh",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "12 Januari 2026",
    category: "Tips & Trik",
    author: "Admin Sanur",
    readTime: "5 Menit",
    content: `
      <p>Ibadah Umroh bukan sekadar perjalanan biasa, melainkan perjalanan spiritual yang memerlukan kesiapan matang, baik secara fisik maupun mental. Mengingat cuaca di Arab Saudi yang seringkali ekstrem dan rangkaian ibadah yang padat, persiapan sejak dini adalah kunci kelancaran ibadah Anda.</p>
      
      <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Ibadah di Masjidil Haram" class="${styles.articleImage}" />

      <h2>Persiapan Fisik yang Utama</h2>
      <p>Rangkaian ibadah Umroh seperti Thawaf dan Sa'i melibatkan aktivitas berjalan kaki yang cukup jauh. Oleh karena itu, sangat disarankan untuk mulai membiasakan diri berjalan santai atau jogging minimal 30 menit setiap hari satu bulan sebelum keberangkatan.</p>
      
      <p>Selain olahraga, menjaga pola makan yang sehat dan istirahat yang cukup juga sangat penting. Pastikan Anda melakukan check-up kesehatan dan berkonsultasi dengan dokter mengenai kondisi fisik Anda, terutama jika memiliki riwayat penyakit tertentu.</p>

      <h2>Menjaga Kesiapan Mental dan Hati</h2>
      <p>Niat adalah fondasi dari setiap ibadah. Bersihkan hati dari rasa sombong, riya, atau tujuan keduniawian lainnya. Perbanyak membaca buku panduan manasik Umroh agar Anda memahami setiap rukun dan wajib Umroh dengan benar.</p>
      
      <p>Psikologi selama perjalanan juga perlu dijaga. Kesabaran akan diuji saat menghadapi kerumunan jamaah dari berbagai belahan dunia. Cobalah untuk selalu berpikir positif dan fokus pada tujuan utama Anda, yaitu beribadah kepada Allah SWT.</p>
    `
  },
  {
    id: 2,
    title: "Keutamaan Ibadah di Masjid Nabawi Madinah yang Luar Biasa",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    date: "10 Januari 2026",
    category: "Wawasan Islam",
    author: "Ust. Ahmad",
    readTime: "7 Menit",
    content: `<p>Daftar konten artikel tentang Masjid Nabawi...</p>`
  }
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const article = allArticles.find(a => a.id === Number(id)) || allArticles[0];

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={article.image} alt={article.title} />
        </div>
        <div className={styles.heroContent}>
          <Link href="/blog" style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', textDecoration: 'none', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Kembali ke Artikel
          </Link>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
          
          <div className={styles.meta}>
            <div className={styles.metaItem}><Calendar size={18} /> {article.date}</div>
            <div className={styles.metaItem}><User size={18} /> {article.author}</div>
            <div className={styles.metaItem}><Clock size={18} /> {article.readTime}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleBody}>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }}></div>
        
        <div className={styles.shareBox}>
          <div className={styles.tags}>
            <span className={styles.tag}>#Umroh2026</span>
            <span className={styles.tag}>#HajiKhusus</span>
            <span className={styles.tag}>#TipsIbadah</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafb', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877F2' }}><Facebook size={20} /></button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafb', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1DA1F2' }}><Twitter size={20} /></button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafb', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}><Link2 size={20} /></button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
