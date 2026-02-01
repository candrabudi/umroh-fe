'use client';

import { useState, useRef } from 'react';
import { ShieldCheck, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import styles from './Features.module.css';

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/lOt0TjkiS5E",
    title: "Cinematic Perjalanan Umrah",
    location: "Mekkah & Madinah"
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/HQzbjtUKjeA",
    title: "Momen Spiritual di Tanah Suci",
    location: "Masjidil Haram"
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/HrMQ6gbe1Fw",
    title: "Kenyamanan Ibadah di Nabawi",
    location: "Masjid Nabawi, Madinah"
  }
];

export default function Features() {
  const [activeVideo, setActiveVideo] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className={styles.featuresSection} id="about" suppressHydrationWarning>
       <div className={styles.container}>
           <div className={styles.grid}>
              <div className={styles.textContent}>
                  <div className={styles.badgeLine}>
                    <span className={styles.dot}></span>
                    <span className={styles.badgeText}>Tentang Kami</span>
                  </div>
                  <h2 className={styles.brandTitle}>TENTANG KAMI</h2>
                  <p className={styles.brandSubtitle}>
                    <strong>SANUR INDAH TRAVEL</strong> adalah perusahaan perjalanan ibadah Umroh yang berkomitmen memberikan pelayanan terbaik, amanah, dan sesuai syariat Islam. Kami hadir untuk membantu umat Muslim menunaikan ibadah Umroh dengan proses yang mudah, transparan, dan penuh kenyamanan, berkantor pusat di Jl. Kayu Putih Utara I No.55 12, Pulo Gadung, Jakarta Timur.
                  </p>

                  <div className={styles.trustGrid}>
                    <div className={styles.trustItem}>
                      <ShieldCheck className={styles.trustIcon} size={28} />
                      <div>
                        <div className={styles.trustTitle}>Resmi & Aman</div>
                        <div className={styles.trustDesc}>Izin Kemenag RI</div>
                      </div>
                    </div>
                    <div className={styles.trustItem}>
                      <Award className={styles.trustIcon} size={28} />
                      <div>
                        <div className={styles.trustTitle}>Layanan Prima</div>
                        <div className={styles.trustDesc}>Fasilitas Bintang 5</div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className={styles.videoSlider}>
                  <div className={styles.videoFrame}>
                    <div className={styles.videoHeader}>
                      <div className={styles.videoDots}>
                        <span></span><span></span><span></span>
                      </div>
                      <div className={styles.videoUrl}>live.sanurtravel.com</div>
                    </div>
                    
                    <div className={styles.videoTrack}>
                      <div className={styles.actualVideo}>
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={videos[activeVideo].url} 
                          title={videos[activeVideo].title} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className={styles.videoInfoBar}>
                      <div className={styles.videoMeta}>
                        <div className={styles.vidTitle}>{videos[activeVideo].title}</div>
                        <div className={styles.vidLoc}>{videos[activeVideo].location}</div>
                      </div>
                      <div className={styles.videoNav}>
                        <button onClick={prevVideo} className={styles.navBtn} aria-label="Previous video">
                          <ChevronLeft size={20} />
                        </button>
                        <div className={styles.counter}>
                          {activeVideo + 1} / {videos.length}
                        </div>
                        <button onClick={nextVideo} className={styles.navBtn} aria-label="Next video">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.videoOrnament}></div>
              </div>
           </div>
       </div>
    </section>
  );
}
