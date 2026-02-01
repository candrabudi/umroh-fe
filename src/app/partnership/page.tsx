import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import { 
  Users, Target, Award, TrendingUp, DollarSign, 
  Gift, Star, ShieldCheck, MapPin, Zap, 
  ChevronRight, Sparkles, Rocket, Crown
} from 'lucide-react';
import styles from './partnership.module.css';

export default function KeagenanPage() {
  return (
    <div className={styles.pageWrapper}>
      <TopBar />
      <Header />
      
      <main>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.overlay} />
          </div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <Sparkles size={14} />
                <span>Modern Strategic Partnership</span>
              </div>
              <h1 className={styles.heroTitle}>
                Exclusivity Redefined with <br/>
                <span className={styles.accentText}>Loyal+ Program</span>
              </h1>
              <p className={styles.heroDesc}>
                We prioritize legacy over mere transactions. Join a progressive ecosystem 
                built on integrity, sustainable growth, and spiritual excellence.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.mainBtn}>Join the Alliance</button>
                <button className={styles.outlineBtn}>Explore Benefits</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Philosophy Section --- */}
        <section className={styles.philosophy}>
           <div className={styles.container}>
              <div className={styles.gridTwo}>
                 <div className={styles.philoContent}>
                    <div className={styles.sectionLabel}>The Core Concept</div>
                    <h2 className={styles.sectionTitle}>What is Loyal+?</h2>
                    <p className={styles.textLarge}>
                      <strong>Loyal+</strong> is a sophisticated agency framework designed for progressive growth. 
                      We believe every partner is a spiritual guardian, guiding pilgrims 
                      on their most significant life journey.
                    </p>
                    
                    <div className={styles.featureList}>
                       <div className={styles.featureItem}>
                          <div className={styles.featureIcon}><Target size={22} /></div>
                          <div className={styles.featureText}>
                             <h4>Strategic Loyalty</h4>
                             <p>Cultivating deep, long-term bonds between partners and the brand.</p>
                          </div>
                       </div>
                       <div className={styles.featureItem}>
                          <div className={styles.featureIcon}><Users size={22} /></div>
                          <div className={styles.featureText}>
                             <h4>Pilgrim Mentorship</h4>
                             <p>Shifting focus from simple sales to comprehensive spiritual guidance.</p>
                          </div>
                       </div>
                       <div className={styles.featureItem}>
                          <div className={styles.featureIcon}><Award size={22} /></div>
                          <div className={styles.featureText}>
                             <h4>Performance Legacy</h4>
                             <p>Rewarding consistent excellence and dedication to quality service.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className={styles.philoVisual}>
                    <div className={styles.visualStack}>
                       <div className={styles.glassCard}>
                          <TrendingUp size={32} className={styles.accent} />
                          <h3>Transparent & Progressive</h3>
                          <p>Fair revenue distribution that evolves with your commitment level.</p>
                       </div>
                       <div className={styles.floatingTag}>
                          <ShieldCheck size={16} />
                          Secure & Reliable
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- Tiered Progression --- */}
        <section className={styles.tiers}>
           <div className={styles.container}>
              <div className={styles.headerCenter}>
                 <div className={styles.sectionLabel}>Career Path</div>
                 <h2 className={styles.sectionTitle}>Progression Tiers</h2>
                 <p className={styles.sectionSubtitle}>Clear milestones for every strategic partner at Sanur Indah Travel</p>
              </div>

              <div className={styles.tierGrid}>
                 {[
                   { 
                     name: "Starter Associate", 
                     range: "$0 - $20K Revenue", 
                     desc: "Entry-level partners undergoing intensive academy training and certification.",
                     icon: <Zap size={24} />,
                     color: "rgba(180, 219, 51, 0.1)"
                   },
                   { 
                     name: "Active Partner", 
                     range: "$20K - $40K Revenue", 
                     desc: "Validated partners with consistent seasonal performance and pilgrim engagement.",
                     icon: <Rocket size={24} />,
                     color: "rgba(180, 219, 51, 0.15)"
                   },
                   { 
                     name: "Professional Elite", 
                     range: "$40K+ Revenue", 
                     desc: "Premier tier for partners demonstrating exceptional leadership and sales mastery.",
                     icon: <Crown size={24} />,
                     color: "rgba(180, 219, 51, 0.2)"
                   },
                   { 
                     name: "Regional Strategic Partner", 
                     range: "Exclusive Representative", 
                     desc: "Officially appointed regional hubs with full operational support from HQ.",
                     icon: <MapPin size={24} />,
                     color: "rgba(238, 241, 241, 0.5)"
                   }
                 ].map((tier, idx) => (
                   <div key={idx} className={styles.tierCard}>
                      <div className={styles.tierIcon} style={{ background: tier.color }}>{tier.icon}</div>
                      <h3 className={styles.tierName}>{tier.name}</h3>
                      <div className={styles.tierRange}>{tier.range}</div>
                      <p className={styles.tierDesc}>{tier.desc}</p>
                      <div className={styles.tierFooter}>
                        <ChevronRight size={18} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- Reward Structure --- */}
        <section className={styles.rewards}>
           <div className={styles.container}>
              <div className={styles.rewardLayout}>
                 {/* Main Commission */}
                 <div className={styles.commissionBox}>
                    <div className={styles.boxHeader}>
                       <div className={styles.iconBox}><DollarSign size={28} /></div>
                       <h3>Direct Commission Shell</h3>
                    </div>
                    <p className={styles.boxDesc}>Instant rewards automatically calculated based on your tier:</p>
                    
                    <div className={styles.percentGrid}>
                       <div className={styles.percentItem}>
                          <span className={styles.pLabel}>Tier 1</span>
                          <span className={styles.pValue}>4%</span>
                       </div>
                       <div className={styles.percentItem}>
                          <span className={styles.pLabel}>Tier 2</span>
                          <span className={styles.pValue}>5%</span>
                       </div>
                       <div className={styles.percentItem}>
                          <span className={styles.pLabel}>Tier 3</span>
                          <span className={styles.pValue}>6%</span>
                       </div>
                       <div className={styles.percentItem}>
                          <span className={styles.pLabel}>Tier 4</span>
                          <span className={styles.pValue}>6%</span>
                       </div>
                    </div>
                    
                    <div className={styles.simBox}>
                       <span className={styles.simLabel}>Live Simulation:</span>
                       <p>Regular Package ($2,000) x 4% = <strong>$80 / Pilgrim</strong></p>
                    </div>
                 </div>

                 {/* Secondary Incentives */}
                 <div className={styles.incentiveGrid}>
                    <div className={styles.incentiveCard}>
                       <div className={styles.incIcon}><Gift size={22} /></div>
                       <div>
                          <h4>Daily Momentum Bonus</h4>
                          <p>Accumulate points through digital engagement missions.</p>
                       </div>
                    </div>
                    <div className={styles.incentiveCard}>
                       <div className={styles.incIcon}><TrendingUp size={22} /></div>
                       <div>
                          <h4>Bi-Annual Performance Bonus</h4>
                          <p>Additional 1% retroactive bonus on total volume every 6 months.</p>
                       </div>
                    </div>
                    <div className={styles.incentiveCard}>
                       <div className={styles.incIcon}><Award size={22} /></div>
                       <div>
                          <h4>Annual Master Circle</h4>
                          <p>Exclusive profit-sharing pool for top-tier year-round performers.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Leader Bonus Highlight */}
              <div className={styles.highlightCard}>
                 <div className={styles.highlightContent}>
                    <div className={styles.hIcon}><ShieldCheck size={32} /></div>
                    <div className={styles.hText}>
                       <h3>Regional Leader Dividend</h3>
                       <p>A specialized 1% gross regional volume dividend distributed to authorized regional partners mid-season.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- Final CTA --- */}
        <section className={styles.appCta}>
           <div className={styles.container}>
              <div className={styles.ctaGlass}>
                 <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Build Your <br/>Spiritual Legacy?</h2>
                    <p className={styles.ctaSubtitle}>
                       Partner with Sanur Indah Travel and transform your passion 
                       into a meaningful, high-performance career.
                    </p>
                    <div className={styles.ctaButtons}>
                       <button className={styles.btnPremium}>Apply for Partnership</button>
                       <button className={styles.btnText}>View Partnership PDF <ChevronRight size={18} /></button>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
