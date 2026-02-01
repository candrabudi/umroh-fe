import { Target, Star, Shield, Handshake, Users, HeartHandshake } from 'lucide-react';
import styles from './VisiMisi.module.css';

const misiItems = [
  {
    icon: <Shield size={24} />,
    text: "Menyelenggarakan layanan Umroh yang aman, sesuai syariat, dan berkualitas, dengan pendampingan profesional dari keberangkatan hingga kepulangan."
  },
  {
    icon: <Globe size={24} />,
    text: "Menyediakan paket wisata internasional dan domestik yang inovatif, edukatif, dan berstandar tinggi, sesuai kebutuhan jamaah dan pelanggan."
  },
  {
    icon: <HeartHandshake size={24} />,
    text: "Menghadirkan pelayanan ramah, cepat, dan transparan dengan dukungan sistem manajemen modern dan SDM yang kompeten."
  },
  {
    icon: <Handshake size={24} />,
    text: "Mengutamakan keamanan, kenyamanan, dan kepuasan pelanggan melalui pengelolaan perjalanan yang terstruktur dan terpercaya."
  },
  {
    icon: <Star size={24} />,
    text: "Membangun kemitraan strategis dengan maskapai, hotel, dan mitra global untuk memberikan layanan terbaik dan harga kompetitif."
  },
  {
    icon: <Users size={24} />,
    text: "Berkomitmen terhadap nilai-nilai kejujuran, profesionalisme, serta keberkahan usaha dalam setiap layanan yang diberikan."
  }
];

import { Globe } from 'lucide-react';

export default function VisiMisi() {
  return (
    <section className={styles.section} id="visi-misi">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visiContent}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Tujuan Kami</span>
            </div>
            <h2 className={styles.title}>VISI <span className={styles.accentText}>KAMI</span></h2>
            <div className={styles.visiBox}>
              <p className={styles.visiText}>
                "Umroh dan wisata ternyaman di Indonesia yang memberikan pengalaman ibadah dengan khusuk dan liburan yang berkesan, aman, terpercaya, berkualitas, serta berorientasi pada pelayanan professional."
              </p>
            </div>
          </div>

          <div className={styles.misiContent}>
            <h2 className={styles.title}>MISI <span className={styles.accentText}>KAMI</span></h2>
            <div className={styles.misiGrid}>
              {misiItems.map((item, index) => (
                <div key={index} className={styles.misiItem}>
                  <div className={styles.misiIcon}>{item.icon}</div>
                  <p className={styles.misiText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
