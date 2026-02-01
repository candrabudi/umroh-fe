import { 
  ShieldCheck, BookOpen, Users, Handshake, 
  Bus, Award, GraduationCap, Star, 
  Sparkles, Fingerprint, Crown
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Official Compliance",
    desc: "Formally registered with the Ministry of Religious Affairs RI under License No. 183 Year 2020."
  },
  {
    icon: <Fingerprint size={28} />,
    title: "Syariah Integrity",
    desc: "Every phase of our pilgrimage, from training to rituals, strictly adheres to authentic Prophetic Sunnah."
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Spiritual Enrichment",
    desc: "Active religious lectures and circles during the stay in Saudi Arabia to deepen spiritual understanding."
  },
  {
    icon: <Users size={28} />,
    title: "Certified Field Experts",
    desc: "Our Muthawif and field team are Indonesian residents with official permits and religious mastery."
  },
  {
    icon: <Crown size={28} />,
    title: "Elite Mentorship",
    desc: "Guided by competent, trustworthy mentors with decades of experience in Holy Land logistics."
  },
  {
    icon: <Bus size={28} />,
    title: "Premier Logistics",
    desc: "IATA-certified flights, climate-controlled transport, and hotels within walking distance of the Harams."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <div className={styles.badgeLabel}>
            <Sparkles size={14} className={styles.sparkle} />
            <span>Unrivaled Excellence</span>
          </div>
          <h2 className={styles.title}>Why Strategic Partners <br/><span className={styles.accent}>Choose Sanur?</span></h2>
          <p className={styles.subtitle}>
            A decade of delivering excellence, integrity, and spiritual comfort to thousands of families.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
              
              <div className={styles.cardIndicator}>
                 <Star size={12} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
