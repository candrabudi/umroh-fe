'use client';

import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { 
  Mail, Phone, MapPin, Send, Clock, 
  MessageSquare, Sparkles, Globe2, ShieldCheck,
  ChevronRight, Headset
} from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* --- Cinematic Hero --- */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Support Excellence • 24/7 Availability</span>
          </div>
          <h1 className={styles.heroTitle}>
            Let's Start Your <br />
            <span className={styles.accent}>Spiritual Journey</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Our dedicated team of pilgrimage experts is ready to assist you 
            with any inquiries or professional consultations.
          </p>
        </div>
      </section>

      {/* --- Main Interaction Section --- */}
      <section className={styles.interactionSection}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            
            {/* Left Side: Contact Intelligence */}
            <div className={styles.infoColumn}>
              <div className={styles.labelHighlight}>Contact Intelligence</div>
              <h2 className={styles.sectionTitle}>Global Support <br/>Network</h2>
              
              <div className={styles.infoList}>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}><MapPin size={22} /></div>
                  <div className={styles.cardBody}>
                    <h4>Headquarters</h4>
                    <p>Jl. Kayu Putih Utara I No.55 12, Pulo Gadung, Jakarta Timur, DKI Jakarta 13210</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}><Phone size={22} /></div>
                  <div className={styles.cardBody}>
                    <h4>Direct Assistance</h4>
                    <p>Hotline: +62 812 3456 7890</p>
                    <p>WhatsApp: +62 812 9876 5432</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}><Mail size={22} /></div>
                  <div className={styles.cardBody}>
                    <h4>Official Inquiry</h4>
                    <p>concierge@sanurindahtravel.com</p>
                    <p>support@sanurindahtravel.com</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}><Clock size={22} /></div>
                  <div className={styles.cardBody}>
                    <h4>Operational Hours</h4>
                    <p>Mon - Fri: 08:30 - 17:00</p>
                    <p>Sat: 08:30 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className={styles.trustBanner}>
                <ShieldCheck size={20} className={styles.accent} />
                <span>Encrypted & Secured Communication</span>
              </div>
            </div>

            {/* Right Side: High-Precision Form */}
            <div className={styles.formContainer}>
              <div className={styles.formGlass}>
                <div className={styles.formHeader}>
                  <div className={styles.headerIcon}><Headset size={28} /></div>
                  <div className={styles.headerText}>
                    <h3>Send us a Message</h3>
                    <p>Our strategic team will reach out within 24 hours.</p>
                  </div>
                </div>

                <form className={styles.contactForm}>
                  <div className={styles.inputGrid}>
                    <div className={styles.fieldGroup}>
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+62..." />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label>Consultation Subject</label>
                      <input type="text" placeholder="Package Inquiry" />
                    </div>
                    <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                      <label>Your Message</label>
                      <textarea rows={6} placeholder="How can we assist your spiritual journey?"></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className={styles.btnPremium}>
                    Initiate Contact
                    <div className={styles.btnIcon}><Send size={18} /></div>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Visual Map Section --- */}
      <section className={styles.mapContainer}>
        <div className={styles.mapCard}>
          <div className={styles.mapLabel}>
            <MapPin size={16} /> Locate Our Office
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.627365242676!2d106.89422019999999!3d-6.180604799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c692345d03%3A0x9e7141e34c6562de!2sSANUR%20INDAH%20TRAVEL!5e0!3m2!1id!2sid!4v1769967253075!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
