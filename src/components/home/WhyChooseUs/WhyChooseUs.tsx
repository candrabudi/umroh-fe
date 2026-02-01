import { ShieldCheck, BookOpen, Users, Handshake, Bus, Award, GraduationCap } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Terpercaya",
    desc: "Resmi terdaftar di Kementrian Agama Republik Indonesia dengan Izin Umrah Nomor 183 Tahun 2020"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Sesuai Syariat Islam",
    desc: "Semua kegiatan yang dilakukan mulai dari Manasik hingga Ibadah Umrah atau Haji InsyaAllah sesuai Al-Quran dan As-sunnah"
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Kajian Agama di Saudi",
    desc: "Aktifitas Jemaah selama di Saudi akan dipenuhi dengan kajian Majelis ilmu untuk memperdalam pemahaman ibadah."
  },
  {
    icon: <Users size={32} />,
    title: "Tim Lapangan Berizin",
    desc: "Muthawif dan Tim Lapangan adalah Orang Indonesia yang berizin tinggal resmi dan memahami keilmuan Sunnah."
  },
  {
    icon: <Award size={32} />,
    title: "Pembimbing Profesional",
    desc: "Dibimbing oleh pembimbing amanah, berkompeten dan berpengalaman selama bertahun-tahun di bidangnya."
  },
  {
    icon: <Bus size={32} />,
    title: "Fasilitas Terbaik",
    desc: "Penerbangan IATA, Bus Full AC, dan Hotel berbintang yang dekat dengan Masjidil Haram & Masjid Nabawi."
  },
  {
    icon: <Handshake size={32} />,
    title: "Kemitraan Resmi LA",
    desc: "Bekerjasama dengan Muasasah berizin resmi Kementrian Haji & Umrah Saudi sebagai penyedia Land Arrangement."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <div className={styles.badgeLine}>
            <span className={styles.dot}></span>
            <span className={styles.badgeText}>Keunggulan Kami</span>
          </div>
          <h2 className={styles.title}>Mengapa Memilih Kami?</h2>
          <p className={styles.subtitle}>
            Membantu saudara muslim sebanyak-banyaknya untuk bisa berangkat Umrah & Haji dengan mudah dan nyaman.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
