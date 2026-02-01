'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import styles from './PromoCarousel.module.css';

const promos = [
  {
    id: 1,
    title: "Umrah Reguler Special",
    subtitle: "Liburan Sekolah",
    date: "04 Juli 2026",
    price: "31.9 Jt",
    dp: "5 JT",
    features: ["City Tour Thaif", "Kereta Cepat", "Hotel *4"],
    image: "/promos/mecca.png",
    accent: "var(--accent)"
  },
  {
    id: 2,
    title: "Umrah Hemat",
    subtitle: "Promo Spesial",
    date: "15 Juli 2026",
    price: "28.7 Jt",
    dp: "5 JT",
    features: ["Museum Wahyu", "Peternakan Unta"],
    image: "/promos/madinah.png",
    accent: "var(--accent)"
  },
  {
    id: 3,
    title: "Umrah Akhir Juli",
    subtitle: "City Tour Thaif",
    date: "26 Juli 2026",
    price: "28.9 Jt",
    dp: "5 JT",
    features: ["Garuda Indonesia", "Direct Flight"],
    image: "/promos/hotel.png",
    accent: "var(--accent)"
  },
  {
    id: 4,
    title: "Umrah Plus Turki",
    subtitle: "Jelajah Sejarah",
    date: "10 Agt 2026",
    price: "35.5 Jt",
    dp: "7 JT",
    features: ["Cappadocia", "Istanbul", "Bursa"],
    image: "/promos/turkey.png",
    accent: "var(--accent)"
  }
];

export default function PromoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 6000);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  return (
    <section 
      className={styles.carouselSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <span className={styles.label}>Penawaran Terbatas</span>
            <h2 className={styles.sectionTitle}>
              Promo <span className={styles.highlight}>Spesial</span> Perjalanan Suci
            </h2>
          </div>

          <div className={styles.navGroup}>
            <button className={styles.navButton} onClick={() => scroll('left')}>
              <ChevronLeft size={24} />
            </button>
            <button className={styles.navButton} onClick={() => scroll('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className={styles.carouselContainer} ref={scrollRef}>
          {promos.map((promo) => (
            <div key={promo.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={promo.image} 
                  alt={promo.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className={styles.overlay} />
                <div className={styles.cardBadges}>
                  <div className={styles.dpBadge}>DP {promo.dp}</div>
                </div>
                <div className={styles.dateBadge}>
                  <Calendar size={14} />
                  {promo.date}
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.subtitle}>{promo.subtitle}</span>
                  <h3 className={styles.title}>{promo.title}</h3>
                </div>
                
                <div className={styles.features}>
                  {promo.features.map((f, i) => (
                    <span key={i} className={styles.featureTag}>{f}</span>
                  ))}
                </div>

                <div className={styles.priceSection}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceLabel}>Mulai dari</span>
                    <div className={styles.priceValue}>{promo.price}</div>
                  </div>
                  <button className={styles.actionBtn}>
                    Pesan <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
