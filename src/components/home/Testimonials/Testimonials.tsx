import styles from './Testimonials.module.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: "/promos/flyer1.png",
    caption: "Testimoni Jamaah Umroh 22 November 2025"
  },
  {
    id: 2,
    image: "/promos/flyer2.png",
    caption: "Testimoni Jamaah Umroh 27 September 2025 Plus Dubai"
  },
  {
    id: 3,
    image: "/promos/mecca.png",
    caption: "Testimoni Jamaah Umroh 25 September 2025"
  },
  {
    id: 4,
    image: "/promos/madinah.png",
    caption: "Testimoni Jamaah Umroh 07 September 2025"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h2 className={styles.title}>Apa yang mereka katakan ?</h2>
            <p className={styles.subtitle}>
              Beberapa testimonial dari mereka yang telah mempercayakan Kami sebagai teman Perjalanan Anda
            </p>
          </div>
          <button className={styles.btnLihatSemua}>
            Lihat Semua <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testi) => (
            <div key={testi.id} className={styles.testiCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={testi.image} 
                  alt={testi.caption} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className={styles.cardOverlay} />
              </div>
              <p className={styles.caption}>{testi.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
