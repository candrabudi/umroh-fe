import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import { Users, Target, Award, TrendingUp, DollarSign, Gift, Star, ShieldCheck, MapPin, Zap } from 'lucide-react';
import styles from './keagenan.module.css';

export default function KeagenanPage() {
  return (
    <div className={styles.pageWrapper}>
      <TopBar />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Sistem Keagenan Modern</span>
            </div>
            <h1 className={styles.heroTitle}>Program Kemitraan <br/><span className={styles.accentText}>Loyal+</span></h1>
            <p className={styles.heroDesc}>
              Bukan sekadar omzet, kami menghargai loyalitas dan pembinaan. Bergabunglah dengan sistem bagi hasil progresif yang dirancang untuk keberlanjutan jangka panjang.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.intro}>
           <div className={styles.container}>
              <div className={styles.introGrid}>
                 <div className={styles.introContent}>
                    <h2 className={styles.sectionTitle}>Apa itu Loyal+?</h2>
                    <p className={styles.text}>
                      <strong>Loyal+</strong> adalah skema keagenan dengan sistem bagi hasil progresif dan penghargaan berbasis loyalitas. Kami percaya bahwa Agen bukan hanya penjual, melainkan mitra dalam membina jamaah menuju Baitullah.
                    </p>
                    <div className={styles.objectiveGrid}>
                       <div className={styles.objItem}>
                          <Target size={24} className={styles.objIcon} />
                          <div>
                             <h4>Meningkatkan Loyalitas</h4>
                             <p>Membangun hubungan jangka panjang antara agen dan perusahaan.</p>
                          </div>
                       </div>
                       <div className={styles.objItem}>
                          <Users size={24} className={styles.objIcon} />
                          <div>
                             <h4>Pembinaan Jamaah</h4>
                             <p>Mendorong agen aktif dalam membimbing, bukan hanya menjual.</p>
                          </div>
                       </div>
                       <div className={styles.objItem}>
                          <Award size={24} className={styles.objIcon} />
                          <div>
                             <h4>Penghargaan Kinerja</h4>
                             <p>Reward berbasis kinerja jangka panjang dan dedikasi.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className={styles.introVisual}>
                    <div className={styles.visualCard}>
                       <div className={styles.visualIcon}><TrendingUp size={40} /></div>
                       <h3>Progresif & Transparan</h3>
                       <p>Sistem bagi hasil yang adil dan terus berkembang seiring dedikasi Anda.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Level Agenisasi */}
        <section className={styles.levels}>
           <div className={styles.container}>
              <div className={styles.sectionHeaderCenter}>
                 <h2 className={styles.sectionTitle}>Level Agenisasi</h2>
                 <p className={styles.sectionSubtitle}>Jenjang karir yang jelas untuk setiap mitra Sanur Indah Travel</p>
              </div>

              <div className={styles.levelGrid}>
                 {[
                   { 
                     name: "Agen Starter", 
                     range: "0 - 300 Juta", 
                     desc: "Agen awal yang terdaftar dan mengikuti akademi agen (online/offline).",
                     icon: <Zap />
                   },
                   { 
                     name: "Agen Aktif", 
                     range: "300 - 600 Juta", 
                     desc: "Agen yang konsisten dalam penjualan dan pembinaan jamaah setiap musim.",
                     icon: <Star />
                   },
                   { 
                     name: "Agen Profesional", 
                     range: "600 Juta+", 
                     desc: "Level tertinggi untuk agen dengan kapasitas penjualan dan kepemimpinan yang matang.",
                     icon: <Award />
                   },
                   { 
                     name: "Mitra Sanur", 
                     range: "Kantor Perwakilan", 
                     desc: "Ditunjuk resmi oleh manajemen untuk menjadi perwakilan daerah dengan biaya operasional pusat.",
                     icon: <MapPin />
                   }
                 ].map((level, idx) => (
                   <div key={idx} className={styles.levelCard}>
                      <div className={styles.levelIcon}>{level.icon}</div>
                      <h3 className={styles.levelName}>{level.name}</h3>
                      <div className={styles.levelRange}>{level.range}</div>
                      <p className={styles.levelDesc}>{level.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Bonus Structure */}
        <section className={styles.bonus}>
           <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Sistem Kompensasi & Bonus</h2>
              
              <div className={styles.bonusGrid}>
                 {/* Bonus Langsung */}
                 <div className={styles.bonusCardLarge}>
                    <div className={styles.bonusHeader}>
                       <DollarSign size={32} />
                       <h3>Bonus Langsung (Per Jamaah)</h3>
                    </div>
                    <p className={styles.bonusIntro}>Bonus yang didapat langsung berdasarkan level keagenan Anda:</p>
                    <div className={styles.percentageGrid}>
                       <div className={styles.percItem}><span>Level 1</span> <strong>4%</strong></div>
                       <div className={styles.percItem}><span>Level 2</span> <strong>5%</strong></div>
                       <div className={styles.percItem}><span>Level 3</span> <strong>6%</strong></div>
                       <div className={styles.percItem}><span>Level 4</span> <strong>6%</strong></div>
                    </div>
                    <div className={styles.exampleBox}>
                       <strong>Simulasi:</strong> Paket Reguler (32jt) x 4% = <strong>Rp 1.280.000 / Jamaah</strong>
                    </div>
                 </div>

                 {/* Other Bonuses */}
                 <div className={styles.bonusList}>
                    <div className={styles.bonusListItem}>
                       <div className={styles.bonusListIcon}><Gift /></div>
                       <div>
                          <h4>Bonus Aktivitas (Daily Mission)</h4>
                          <p>Dapatkan poin (1 Poin = Rp 1.000) dengan menyelesaikan misi harian di Media Sosial. Min. WD: 500 Poin.</p>
                       </div>
                    </div>
                    <div className={styles.bonusListItem}>
                       <div className={styles.bonusListIcon}><TrendingUp /></div>
                       <div>
                          <h4>Bonus Reward 6 Bulan</h4>
                          <p>Bonus 1% dari harga paket dikali jumlah jamaah selama periode 6 bulan. Capai potensi belasan juta rupiah.</p>
                       </div>
                    </div>
                    <div className={styles.bonusListItem}>
                       <div className={styles.bonusListIcon}><Award /></div>
                       <div>
                          <h4>Bonus Reward 1 Tahun</h4>
                          <p>Bonus 1% (Misal: 1000 jamaah x 320rb) yang akan dibagikan kepada 10 Agen Terbaik musim tersebut.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Mitra Leader Bonus */}
              <div className={styles.mitraBonus}>
                 <div className={styles.mitraContent}>
                    <ShieldCheck size={40} className={styles.mitraIcon} />
                    <div>
                       <h3>Bonus Leader MITRA</h3>
                       <p>Bonus khusus mitra wilayah sebesar 1% dari total jamaah di wilayah tersebut selama satu musim (Dibagikan setiap pertengahan musim).</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
           <div className={styles.container}>
              <div className={styles.ctaBox}>
                 <h2>Siap Menjadi Bagian dari Perjalanan Suci?</h2>
                 <p>Daftar sekarang dan jadilah mitra Sanur Indah Travel untuk menebarkan keberkahan.</p>
                 <button className={styles.primaryBtn}>Daftar Keagenan Sekarang</button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
