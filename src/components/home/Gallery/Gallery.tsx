'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Maximize2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryImages = [
  { id: 1, src: "/promos/mecca.png", title: "Masjidil Haram", loc: "Mekkah", date: "Terbaru", size: 'large' },
  { id: 2, src: "/promos/madinah.png", title: "Masjid Nabawi", loc: "Madinah", date: "Terbaru", size: 'tall' },
  { id: 3, src: "/promos/turkey.png", title: "Cappadocia", loc: "Turkiye", date: "Terbaru", size: 'medium' },
  { id: 4, src: "/promos/hotel.png", title: "Luxury Hotel", loc: "Mekkah", date: "Bintang 5", size: 'medium' },
  { id: 5, src: "/promos/flyer1.png", title: "Manasik Umrah", loc: "Jakarta", date: "Januari 2024", size: 'wide' },
  { id: 6, src: "/promos/flyer2.png", title: "City Tour", loc: "Thaif", date: "Desember 2023", size: 'medium' },
  { id: 7, src: "/promos/mecca.png", title: "Jabal Rahmah", loc: "Arafah", date: "Momen Spiritual", size: 'medium' },
  { id: 8, src: "/promos/madinah.png", title: "Raudhah", loc: "Madinah", date: "Ziarah", size: 'medium' }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Arsip Terbaru</span>
            </div>
            <h2 className={styles.title}>Galeri Perjalanan <span className={styles.accentText}>Terbaru</span></h2>
          </div>
          <div className={styles.sliderControls}>
             <button onClick={scrollLeft} className={styles.slideBtn} aria-label="Slide Left"><ChevronLeft size={24} /></button>
             <button onClick={scrollRight} className={styles.slideBtn} aria-label="Slide Right"><ChevronRight size={24} /></button>
          </div>
        </div>

        {/* Horizontal Slider for Thumbnails */}
        <div className={styles.sliderWrapper}>
           <div className={styles.bentoSlider} ref={scrollRef}>
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`${styles.item} ${styles[image.size]}`}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.imageInner}>
                    <Image 
                      src={image.src} 
                      alt={image.title} 
                      fill 
                      className={styles.image}
                      sizes="400px"
                    />
                    <div className={styles.overlay}>
                      <div className={styles.overlayTop}>
                        <div className={styles.tag}>{image.date}</div>
                        <div className={styles.iconBtn}><Maximize2 size={18} /></div>
                      </div>
                      <div className={styles.overlayBottom}>
                        <h3 className={styles.imgTitle}>{image.title}</h3>
                        <div className={styles.imgLoc}>
                          <MapPin size={14} />
                          <span>{image.loc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Lightbox with Slide functionality */}
      {currentIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxHeader}>
             <div className={styles.lightboxMeta}>
                <h3>{galleryImages[currentIndex].title}</h3>
                <p>{galleryImages[currentIndex].loc} • {galleryImages[currentIndex].date}</p>
             </div>
             <button className={styles.closeBtn} onClick={closeLightbox}>
               <X size={32} />
             </button>
          </div>
          
          <div className={styles.lightboxMain}>
             <button className={styles.navBtn} onClick={prevImage} aria-label="Previous image"><ChevronLeft size={48} /></button>
             
             <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <Image 
                  src={galleryImages[currentIndex].src} 
                  alt={galleryImages[currentIndex].title} 
                  fill 
                  className={styles.fullImage}
                  priority
                />
             </div>

             <button className={styles.navBtn} onClick={nextImage} aria-label="Next image"><ChevronRight size={48} /></button>
          </div>
          
          <div className={styles.lightboxFooter}>
             Gambar {currentIndex + 1} dari {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
