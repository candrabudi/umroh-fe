'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { 
  Calendar, Clock, Hotel, Users, MapPin, Plane, 
  CheckCircle2, XCircle, MessageCircle, ArrowLeft,
  Share2, ShieldCheck, HeartPulse
} from 'lucide-react';
import Link from 'next/link';
import styles from './PackageDetail.module.css';

// This would normally come from an API
const allPackages = [
  {
    id: 1,
    category: "Umroh Eksklusif",
    title: "SPECIAL UMROH EKSKLUSIF 26 DESEMBER 2026",
    price: "49.800.000",
    jadwal: "26 Desember 2026",
    durasi: "9 Hari",
    hotel: "Bintang 5 (Mekkah & Madinah)",
    seat: "40 pax",
    dari: "JAKARTA (CGK)",
    maskapai: "SAUDIA AIRLINES",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Nikmati perjalanan ibadah di akhir tahun dengan kenyamanan maksimal. Paket ini dirancang khusus bagi Anda yang mengutamakan kekhusyukan dengan bimbingan ustadz berpengalaman dan fasilitas hotel yang sangat dekat dengan Masjidil Haram.",
    itinerary: [
      { day: 1, activity: "Keberangkatan dari Jakarta menuju Jeddah, dilanjutkan perjalanan ke Madinah." },
      { day: 2, activity: "Ziarah Raudhah dan memperbanyak ibadah di Masjid Nabawi." },
      { day: 3, activity: "Ziarah Kota Madinah (Masjid Quba, Kebun Kurma, Jabal Uhud)." },
      { day: 4, activity: "Persiapan Umroh, mengambil Miqat di Bir Ali, dan menuju Mekkah." },
      { day: 5, activity: "Pelaksanaan Ibadah Umroh Pertama dan istirahat." },
    ],
    included: ["Tiket Pesawat PP", "Visa Umroh", "Hotel Bintang 5", "Makan 3x Sehari", "Bus AC Terbaru", "Mutawwif Berpengalaman"],
    excluded: ["Paspor", "Suntik Meningitis", "Kebutuhan Pribadi", "Kelebihan Bagasi"]
  },
  {
    id: 2,
    category: "Umroh Plus",
    title: "PAKET UMROH PLUS THAIF 14 NOVEMBER 2026",
    price: "28.900.000",
    jadwal: "14 November 2026",
    durasi: "9 Hari",
    hotel: "Bintang 4 (Mekkah & Madinah)",
    seat: "40 pax",
    dari: "JAKARTA",
    maskapai: "GARUDA INDONESIA",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Umrah yang dibarengi dengan kunjungan ke kota Thaif yang sejuk dan bersejarah. Pengalaman spiritual yang lengkap dengan pelayanan profesional dari Sanur Indah Travel.",
    itinerary: [
      { day: 1, activity: "Berkumpul di Bandara Soekarno-Hatta menuju Jeddah." },
      { day: 2, activity: "Perjalanan menuju Madinah dan check-in hotel." },
      { day: 3, activity: "Ziarah dalam dan Raudhah." },
      { day: 4, activity: "City Tour Thaif dan mengambil Miqat." },
      { day: 5, activity: "Tiba di Mekkah dan melaksanakan Umroh." },
    ],
    included: ["Tiket Garuda PP", "Visa Umroh", "City Tour Thaif", "Hotel Bintang 4", "Makan Prasmanan"],
    excluded: ["Handling & Perlengkapan", "Pengeluaran Pribadi", "Tips Guide"]
  }
];

export default function PackageDetailPage() {
  const { id } = useParams();
  
  // Find the package, fallback to the first one if not found for demo purposes
  const pkg = allPackages.find(p => p.id === Number(id)) || allPackages[0];

  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={pkg.image} alt={pkg.title} />
        </div>
        <div className={styles.heroContent}>
          <Link href="/packages" className={styles.category} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Kembali ke Paket
          </Link>
          <span className={styles.category}>{pkg.category}</span>
          <h1 className={styles.title}>{pkg.title}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          {/* Left Side: Details */}
          <div className={styles.sections}>
            
            {/* Overview */}
            <div>
              <h2 className={styles.sectionTitle}>Ringkasan <span className={styles.accent}>Perjalanan</span></h2>
              <div className={styles.descText}>
                {pkg.description}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className={styles.sectionTitle}>Rencana <span className={styles.accent}>Harian</span></h2>
              <div className={styles.itineraryList}>
                {pkg.itinerary.map((item) => (
                  <div key={item.day} className={styles.itineraryItem}>
                    <div className={styles.dayCircle}>{item.day}</div>
                    <div className={styles.dayContent}>
                      <h4>Hari {item.day}</h4>
                      <p>{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h2 className={styles.sectionTitle}>Fasilitas <span className={styles.accent}>Paket</span></h2>
              <div className={styles.facGrid}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#28c840' }}>Sudah Termasuk:</h4>
                  {pkg.included.map((item, idx) => (
                    <div key={idx} className={styles.facItem}>
                      <CheckCircle2 size={18} /> {item}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ff5f57' }}>Belum Termasuk:</h4>
                  {pkg.excluded.map((item, idx) => (
                    <div key={idx} className={`${styles.facItem} ${styles.excluded}`}>
                      <XCircle size={18} /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Price & CTA */}
          <aside className={styles.sidePanel}>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Investasi Akhirat</span>
              <div className={styles.priceValue}>
                Rp{pkg.price} <span>/ pax</span>
              </div>

              <div className={styles.bookingGrid}>
                <div className={styles.bookingItem}>
                  <div className={styles.iconBox}><Calendar size={20} /></div>
                  <div>
                    <span className={styles.itemLabel}>Berangkat</span>
                    <span className={styles.itemValue}>{pkg.jadwal}</span>
                  </div>
                </div>
                <div className={styles.bookingItem}>
                  <div className={styles.iconBox}><Plane size={20} /></div>
                  <div>
                    <span className={styles.itemLabel}>Maskapai</span>
                    <span className={styles.itemValue}>{pkg.maskapai}</span>
                  </div>
                </div>
                <div className={styles.bookingItem}>
                  <div className={styles.iconBox}><Hotel size={20} /></div>
                  <div>
                    <span className={styles.itemLabel}>Hotel</span>
                    <span className={styles.itemValue}>{pkg.hotel}</span>
                  </div>
                </div>
                <div className={styles.bookingItem}>
                  <div className={styles.iconBox}><Users size={20} /></div>
                  <div>
                    <span className={styles.itemLabel}>Sisa Kursi</span>
                    <span className={styles.itemValue}>{pkg.seat} Tersedia</span>
                  </div>
                </div>
              </div>

              <button className={styles.btnBook}>Daftar Sekarang</button>
              <button className={styles.btnContact}>
                <MessageCircle size={20} /> Konsultasi via WhatsApp
              </button>
              
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eef1f1', display: 'flex', gap: '1rem' }}>
                <Link href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Share2 size={16} /> Bagikan
                </Link>
                <div style={{ color: 'var(--accent)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
                  <ShieldCheck size={16} /> Resmi Kemenag
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
