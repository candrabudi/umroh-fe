import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { 
  Shield, Target, Heart, Users, Award, 
  BookOpen, Fingerprint, Sparkles, Quote, 
  CheckCircle2, Globe2, Compass, ShieldCheck,
  Star, Trophy, Users2
} from 'lucide-react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* --- Elegant Cinematic Hero --- */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Spiritual Sanctuary" 
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Excellence • Reliability • Integrity</span>
          </div>
          <h1 className={styles.heroTitle}>
            Crafting Journeys <br />
            <span className={styles.accent}>to the Divine</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Dedicated to providing the ultimate Umrah and Hajj experiences 
            with spiritual guidance rooted in the prophetic tradition.
          </p>
          <div className={styles.heroScroll}>
            <div className={styles.mouseIndicator}>
              <div className={styles.mouseWheel} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Legacy & Vision --- */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyTextWrapper}>
              <div className={styles.labelHighlight}>Our Legacy</div>
              <h2 className={styles.sectionTitle}>
                More Than Just <br />
                <span className={styles.accent}>Travel Experiences</span>
              </h2>
              <div className={styles.storyParagraphs}>
                <p>
                  <strong>Sanur Indah Travel</strong> was founded on a singular commitment: 
                  restoring the essence of pilgrimage to supreme comfort and strict 
                  adherence to Sharia principles.
                </p>
                <div className={styles.quoteBox}>
                  <Quote size={32} className={styles.quoteIcon} />
                  <p>
                    The trust placed in us by thousands of pilgrims every year is a sacred 
                    amanah we safeguard with high integrity and professionalism.
                  </p>
                </div>
                <p>
                  With guidance from specialized scholars, we ensure every step of your 
                  pilgrimage—from rituals to the stay in the holy lands—aligns with 
                  authentic tradition.
                </p>
              </div>
            </div>

            <div className={styles.storyVisual}>
              <div className={styles.visualMain}>
                <img 
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Pilgrim Experience" 
                />
                <div className={styles.floatingAward}>
                  <Trophy size={20} />
                  <span>Certified Excellence</span>
                </div>
              </div>
              <div className={styles.visualDecor} />
            </div>
          </div>

          {/* Precision Stats */}
          <div className={styles.statsPanel}>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <div className={styles.statIcon}><Compass size={24} /></div>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statSub}>Years of Service</span>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon}><Users2 size={24} /></div>
                <span className={styles.statNum}>15K+</span>
                <span className={styles.statSub}>Satisfied Pilgrims</span>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon}><ShieldCheck size={24} /></div>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statSub}>Legal & Certified</span>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon}><Star size={24} /></div>
                <span className={styles.statNum}>4.9/5</span>
                <span className={styles.statSub}>Service Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Values - Prestige Grid --- */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <div className={styles.labelHighlight}>Core Pillars</div>
            <h2 className={styles.sectionTitle}>Why Choose Sanur?</h2>
            <p className={styles.sectionDesc}>
              We set the gold standard in pilgrimage services through unwavering 
              dedication to these fundamental principles.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.vIconContainer}>
                <BookOpen size={28} />
              </div>
              <h3>Sharia Guidance</h3>
              <p>Every program is strictly curated by our Sharia board to ensure all rituals comply with the prophetic Sunnah.</p>
              <ul className={styles.vList}>
                <li><CheckCircle2 size={16} /> Authentic Rituals</li>
                <li><CheckCircle2 size={16} /> Specialized Mentors</li>
              </ul>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.vIconContainer}>
                <ShieldCheck size={28} />
              </div>
              <h3>Legal Security</h3>
              <p>Fully licensed by the Ministry of Religious Affairs (PPIU & PIHK). Your funds and departure are legally protected and guaranteed.</p>
              <ul className={styles.vList}>
                <li><CheckCircle2 size={16} /> Official Licensing</li>
                <li><CheckCircle2 size={16} /> Financial Integrity</li>
              </ul>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.vIconContainer}>
                <Sparkles size={28} />
              </div>
              <h3>Premium Logistics</h3>
              <p>Handpicked 5-star accommodations with minimal distance to the Holy Mosques, prioritizing your stamina and worship focus.</p>
              <ul className={styles.vList}>
                <li><CheckCircle2 size={16} /> 5-Star Hospitality</li>
                <li><CheckCircle2 size={16} /> Elite Transportation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Strategic Partners --- */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnerHeader}>
            <div className={styles.labelHighlight}>Global Alliance</div>
            <h2 className={styles.sectionTitle}>Global Quality <span className={styles.accent}>Standards</span></h2>
          </div>
          
          <div className={styles.partnersGrid}>
            <div className={styles.pLogoBox}><span>SAUDIA</span></div>
            <div className={styles.pLogoBox}><span>GARUDA</span></div>
            <div className={styles.pLogoBox}><span>HILTON</span></div>
            <div className={styles.pLogoBox}><span>MARRIOTT</span></div>
            <div className={styles.pLogoBox}><span>ACCOR</span></div>
            <div className={styles.pLogoBox}><span>EMIRATES</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
