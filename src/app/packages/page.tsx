'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Calendar, Clock, Hotel, Users, MapPin, Plane, Star, Search, Filter } from 'lucide-react';
import styles from './Packages.module.css';

const allPackages = [
  {
    id: 1,
    category: "Umroh Eksklusif",
    title: "SPECIAL UMROH EKSKLUSIF 26 DESEMBER 2026",
    price: "49.800.000",
    jadwal: "26 Des 2026",
    durasi: "9 Hari",
    hotel: 5,
    seat: "40 pax",
    dari: "JAKARTA",
    maskapai: "SAUDIA AIRLINES",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Umroh Plus",
    title: "PAKET UMROH PLUS THAIF 14 NOVEMBER 2026",
    price: "28.900.000",
    jadwal: "14 Nov 2026",
    durasi: "9 Hari",
    hotel: 4,
    seat: "40 pax",
    dari: "JAKARTA",
    maskapai: "GARUDA INDONESIA",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Umroh Plus",
    title: "SPECIAL UMROH PLUS DUBAI 21 NOVEMBER 2026",
    price: "32.300.000",
    jadwal: "21 Nov 2026",
    durasi: "12 Hari",
    hotel: 4,
    seat: "40 pax",
    dari: "JAKARTA",
    maskapai: "EMIRATES",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Haji",
    title: "HAJI KHUSUS MASA TUNGGU SINGKAT 2027",
    price: "255.000.000",
    jadwal: "Juni 2027",
    durasi: "25 Hari",
    hotel: 5,
    seat: "20 pax",
    dari: "JAKARTA",
    maskapai: "SAUDIA AIRLINES",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "Wisata Halal",
    title: "JELAJAH JEJAK RASUL TURKIYE 10 HARI",
    price: "22.500.000",
    jadwal: "15 Okt 2026",
    durasi: "10 Hari",
    hotel: 4,
    seat: "30 pax",
    dari: "JAKARTA",
    maskapai: "TURKISH AIRLINES",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "Umroh Hemat",
    title: "UMROH HEMAT AWAL RAMADHAN 1448H",
    price: "26.500.000",
    jadwal: "Maret 2027",
    durasi: "9 Hari",
    hotel: 3,
    seat: "45 pax",
    dari: "SURABAYA",
    maskapai: "LION AIR",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["Semua Paket", "Umroh Eksklusif", "Umroh Plus", "Umroh Hemat", "Haji", "Wisata Halal"];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("Semua Paket");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = allPackages.filter(pkg => {
    const matchesCategory = activeCategory === "Semua Paket" || pkg.category === activeCategory;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent} style={{ marginTop: '4rem' }}>
          <span className={styles.heroBadge}>Pilih Keberangkatan</span>
          <h1 className={styles.heroTitle}>
            Paket Perjalanan <span className={styles.accent}>Terbaik</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '1.1rem' }}>
            Temukan jadwal keberangkatan yang sesuai dengan rencana ibadah dan liburan Anda.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Package Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={pkg.image} alt={pkg.title} />
                  <div className={styles.priceTag}>Rp{pkg.price}</div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                  
                  <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Berangkat</span>
                      <div className={styles.infoValue}>
                        <Calendar size={16} /> {pkg.jadwal}
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Durasi</span>
                      <div className={styles.infoValue}>
                        <Clock size={16} /> {pkg.durasi}
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Hotel</span>
                      <div className={styles.infoValue}>
                        {[...Array(pkg.hotel)].map((_, i) => (
                          <Star key={i} size={14} fill="var(--accent)" stroke="var(--accent)" />
                        ))}
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Maskapai</span>
                      <div className={styles.infoValue}>
                        <Plane size={16} /> {pkg.maskapai.split(' ')[0]}
                      </div>
                    </div>
                  </div>

                  <Link href={`/packages/${pkg.id}`} className={styles.btnDetail} style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                    Lihat Detail Paket
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <Search size={48} style={{ opacity: 0.2, marginBottom: '1.5rem' }} />
              <h3 style={{ color: 'var(--primary)' }}>Paket tidak ditemukan</h3>
              <p style={{ color: 'var(--text-muted)' }}>Coba cari dengan kategori atau kata kunci lain.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
