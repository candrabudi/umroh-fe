'use client';

import { useState } from 'react';
import styles from './Products.module.css';
import { Plane, Globe, Map, CheckCircle2, ArrowRight } from 'lucide-react';

const products = {
  umroh: {
    title: "Program Umroh",
    description: "Pilihan paket ibadah umroh dengan pelayanan terbaik dan bimbingan sesuai sunnah.",
    items: [
      { name: "Umroh Bronze", price: "29 Juta", highlight: "Hemat & Nyaman" },
      { name: "Umroh Silver *4", price: "32 Juta", highlight: "Paket Reguler" },
      { name: "Umroh Gold *5", price: "36 Juta", highlight: "Premium Luxury" },
      { name: "Umroh + Turki", price: "40 Juta", highlight: "Ibadah & Wisata" }
    ]
  },
  internasional: {
    title: "Wisata Internasional",
    description: "Menjelajahi keindahan dunia dengan konsep wisata halal yang nyaman.",
    items: [
      { name: "Tour Eropa + Umroh", cost: "Contact Us" },
      { name: "Wisata Halal Internasional", cost: "Berbagai Destinasi" },
      { name: "Tour Asia 3 Negara", detail: "Singapura, Thailand, Malaysia" }
    ]
  },
  domestik: {
    title: "Wisata Domestik / Edu Trip",
    description: "Eksplorasi keindahan nusantara dan perjalanan edukatif yang berkesan.",
    items: [
      { name: "Jogjakarta", type: "Budaya & Sejarah" },
      { name: "Bali", type: "Keindahan Alam" },
      { name: "Pulau Seribu", type: "Wisata Bahari" },
      { name: "Bandung", type: "City Tour & Kuliner" },
      { name: "Malang", type: "Pegunungan & Edukasi" }
    ]
  }
};

export default function Products() {
  const [activeTab, setActiveTab] = useState<'umroh' | 'internasional' | 'domestik'>('umroh');

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeLine}>
            <span className={styles.dot}></span>
            <span className={styles.badgeText}>Layanan Unggulan</span>
          </div>
          <h2 className={styles.title}>PRODUK <span className={styles.accentText}>KAMI</span></h2>
          <p className={styles.subtitle}>
            Kami menyediakan berbagai pilihan program perjalanan yang dirancang khusus untuk memenuhi kebutuhan spiritual dan wisata Anda.
          </p>
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'umroh' ? styles.active : ''}`}
            onClick={() => setActiveTab('umroh')}
          >
            <Plane size={20} />
            <span>Program Umroh</span>
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'internasional' ? styles.active : ''}`}
            onClick={() => setActiveTab('internasional')}
          >
            <Globe size={20} />
            <span>Internasional</span>
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'domestik' ? styles.active : ''}`}
            onClick={() => setActiveTab('domestik')}
          >
            <Map size={20} />
            <span>Domestik / Edu Trip</span>
          </button>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.categoryInfo}>
            <h3 className={styles.categoryTitle}>{products[activeTab].title}</h3>
            <p className={styles.categoryDesc}>{products[activeTab].description}</p>
          </div>

          <div className={styles.productGrid}>
            {products[activeTab].items.map((item, idx) => (
              <div key={idx} className={styles.productCard}>
                <div className={styles.cardHeader}>
                  <CheckCircle2 className={styles.checkIcon} size={24} />
                  <h4 className={styles.itemName}>{item.name}</h4>
                </div>
                
                {'price' in item && (
                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>Mulai dari</span>
                    <div className={styles.priceValue}>Rp {item.price}</div>
                    <div className={styles.itemHighlight}>{item.highlight}</div>
                  </div>
                )}
                
                {'detail' in item && <p className={styles.itemDetail}>{item.detail}</p>}
                {'type' in item && <p className={styles.itemType}>{item.type}</p>}
                {'cost' in item && <p className={styles.itemCost}>{item.cost}</p>}
                
                <button className={styles.btnInquire}>
                  Tanya Detail <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className={styles.note}>
            * Kerjasama dengan biro yang sudah berjalan terpercaya untuk menjamin kualitas layanan Anda.
          </div>
        </div>
      </div>
    </section>
  );
}
