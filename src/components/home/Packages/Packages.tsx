import styles from './Packages.module.css';
import Image from 'next/image';
import { Calendar, Clock, Hotel, Users, MapPin, Plane, ArrowRight, Star } from 'lucide-react';

const packageData = [
  {
    id: 1,
    title: "SPECIAL UMROH EKSKLUSIF 26 DESEMBER 2026",
    subtitle: "Nikmati akhir tahun di Baitullah dengan pelayanan eksklusif dan bimbingan ibadah terbaik.",
    image: "/promos/flyer1.png",
    price: "49.800.000",
    details: {
      jadwal: "26 December 2026, 15:06",
      durasi: "9 Hari",
      hotel: 5,
      totalSeat: "40 pax",
      availableSeat: "40 pax",
      dari: "JAKARTA",
      maskapai: "SAUDIA AIRLINES"
    }
  },
  {
    id: 2,
    title: "PAKET UMROH PLUS THAIF 14 NOVEMBER 2026",
    subtitle: "Perjalanan spiritual yang berkesan ditambah dengan City Tour Thaif yang sejuk.",
    image: "/promos/flyer2.png",
    price: "28.900.000",
    details: {
      jadwal: "14 November 2026, 14:48",
      durasi: "9 Hari",
      hotel: 4,
      totalSeat: "40 pax",
      availableSeat: "40 pax",
      dari: "JAKARTA",
      maskapai: "GARUDA INDONESIA"
    }
  },
  {
    id: 3,
    title: "SPECIAL UMROH PLUS DUBAI 21 NOVEMBER 2026",
    subtitle: "Dua perjalanan dalam satu keberangkatan: Ibadah Umrah dan Wisata Dubai yang megah.",
    image: "/promos/flyer1.png",
    price: "32.300.000",
    details: {
      jadwal: "21 November 2026, 14:12",
      durasi: "10 Hari",
      hotel: 4,
      totalSeat: "40 pax",
      availableSeat: "32 pax",
      dari: "JAKARTA",
      maskapai: "EMIRATES"
    }
  }
];

export default function Packages() {
  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h2 className={styles.title}>Paket Tersedia</h2>
            <p className={styles.subtitle}>
              Allah tidak memanggil orang - orang yang mampu tapi Allah memampukan orang - orang yang terpanggil untuk berkunjung ke Baitullah
            </p>
          </div>
          <button className={styles.btnLihatSemua}>
            Lihat Semua Paket <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.grid}>
          {packageData.map((pkg) => (
            <div key={pkg.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src={pkg.image} alt={pkg.title} fill className={styles.image} />
                <div className={styles.overlay} />
                <div className={styles.priceTag}>
                  Rp{pkg.price},- <span>/ pax QUAD</span>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <Calendar size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Jadwal Berangkat</span>
                    <span className={styles.infoValue}>{pkg.details.jadwal}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Clock size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Durasi Perjalanan</span>
                    <span className={styles.infoValue}>{pkg.details.durasi}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Hotel size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Kelas Hotel</span>
                    <div className={styles.stars}>
                      {[...Array(pkg.details.hotel)].map((_, i) => (
                        <Star key={i} size={14} fill="var(--accent)" stroke="var(--accent)" />
                      ))}
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <Users size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Total Seat</span>
                    <span className={styles.infoValue}>{pkg.details.totalSeat}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Users size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Available Seat</span>
                    <span className={pkg.details.availableSeat.includes('0') ? styles.seatWarning : styles.seatInfo}>
                      {pkg.details.availableSeat}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <MapPin size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Berangkat dari</span>
                    <span className={styles.infoValue}>{pkg.details.dari}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Plane size={16} className={styles.icon} />
                    <span className={styles.infoLabel}>Maskapai</span>
                    <span className={styles.infoValue}>{pkg.details.maskapai}</span>
                  </div>
                </div>

                <button className={styles.btnDetail}>Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
