import styles from "./Hero.module.css";
import { ChevronDown, MapPin, Star, ShieldCheck, Sparkles, MoveRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video with refined filter */}
      <div className={styles.videoBackground}>
        <iframe
          src="https://www.youtube.com/embed/lOt0TjkiS5E?autoplay=1&mute=1&loop=1&playlist=lOt0TjkiS5E&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.heroOverlay} />
      <div className={styles.heroGlow} />
      
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <Sparkles size={14} className={styles.sparkle} />
          <span>Official Ministry License No. 183/2020</span>
        </div>
        
        <h1 className={styles.tagline}>
          Experience the <br/>
          <span className={styles.accentText}>Sacred Serenity</span>
        </h1>

        <p className={styles.heroDescription}>
          Beyond travel, we curate spiritual transformations. Immerse 
          yourself in a 5-star pilgrimage experience guided by authentic prophetic traditions.
        </p>

        <div className={styles.heroActions}>
          <button className={styles.primaryBtn}>
            Discover Packages
            <MoveRight size={18} className={styles.btnIcon} />
          </button>
          <button className={styles.outlineBtn}>
            <PlayCircle size={18} />
            Watch Ceremony
          </button>
        </div>

        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}><ShieldCheck size={18} /></div>
            <div className={styles.trustLabel}>
              <strong>Certified</strong>
              <span>Kemenag Official</span>
            </div>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}><Star size={18} /></div>
            <div className={styles.trustLabel}>
              <strong>Ultra-Premium</strong>
              <span>5-Star Hospitality</span>
            </div>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}><MapPin size={18} /></div>
            <div className={styles.trustLabel}>
              <strong>Prime Access</strong>
              <span>Haramain Locations</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Explore Heritage</span>
      </div>
      
    </section>
  );
}
