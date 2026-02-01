'use client';

import { useState, useRef } from 'react';
import { ShieldCheck, Award, ChevronLeft, ChevronRight, Play, Sparkles, MoveRight, History } from 'lucide-react';
import styles from './Features.module.css';

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/lOt0TjkiS5E",
    title: "Cinematic Pilgrimage Experience",
    location: "Makkah & Madinah"
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/HQzbjtUKjeA",
    title: "Spiritual Moments in the Holy Land",
    location: "Masjidil Haram"
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/HrMQ6gbe1Fw",
    title: "Comfort in Worship at Nabawi",
    location: "Masjid Nabawi, Madinah"
  }
];

export default function Features() {
  const [activeVideo, setActiveVideo] = useState(0);

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className={styles.featuresSection} id="about" suppressHydrationWarning>
       <div className={styles.container}>
           <div className={styles.mainGrid}>
              
              <div className={styles.textContent}>
                  <div className={styles.badgeLabel}>
                    <Sparkles size={14} className={styles.sparkle} />
                    <span>The Sanur Legacy</span>
                  </div>
                  
                  <h2 className={styles.brandTitle}>
                    Pioneering <span className={styles.accent}>Spiritual Excellence</span>
                  </h2>
                  
                  <p className={styles.brandSubtitle}>
                    <strong>SANUR INDAH TRAVEL</strong> represents a decade of unwavering dedication to the sacred journey. 
                    We harmonize traditional spiritual guidance with ultra-modern logistics, ensuring your 
                    pilgrimage is as serene as it is significant.
                  </p>

                  <div className={styles.highlightList}>
                    <div className={styles.highlightItem}>
                      <div className={styles.iconBox}><ShieldCheck size={24} /></div>
                      <div className={styles.itemText}>
                        <h4>Absolute Compliance</h4>
                        <p>Certified by the Ministry of Religion for your peace of mind.</p>
                      </div>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.iconBox}><History size={24} /></div>
                      <div className={styles.itemText}>
                        <h4>Prophetic Tradition</h4>
                        <p>Every ritual is guided by experts committed to the Sunnah.</p>
                      </div>
                    </div>
                  </div>

                  <button className={styles.readMoreBtn}>
                    Explore Our Heritage
                    <MoveRight size={18} />
                  </button>
              </div>

              <div className={styles.visualSide}>
                  <div className={styles.videoWindow}>
                    <div className={styles.windowHeader}>
                      <div className={styles.dots}>
                        <span></span><span></span><span></span>
                      </div>
                      <div className={styles.status}>LIVE • HOLY CITIES</div>
                    </div>
                    
                    <div className={styles.frame}>
                        <iframe 
                          src={videos[activeVideo].url + "?autoplay=0&mute=1&controls=0"} 
                          title={videos[activeVideo].title} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                        
                        <div className={styles.overlayInfo}>
                           <div className={styles.vidMeta}>
                             <h3>{videos[activeVideo].title}</h3>
                             <p>{videos[activeVideo].location}</p>
                           </div>
                           <div className={styles.vidNav}>
                             <button onClick={prevVideo} className={styles.navCirc}><ChevronLeft size={18} /></button>
                             <span className={styles.count}>{activeVideo + 1} / {videos.length}</span>
                             <button onClick={nextVideo} className={styles.navCirc}><ChevronRight size={18} /></button>
                           </div>
                        </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={styles.floatingTag}>
                     <Award size={18} />
                     <span>Awarded Agency 2024</span>
                  </div>
              </div>

           </div>
       </div>
    </section>
  );
}
