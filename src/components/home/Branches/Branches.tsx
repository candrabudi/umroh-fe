import { MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Branches.module.css';

const branches = [
  {
    city: "Solo",
    phone: "0812-2700-5177",
    address: "Jl. Bane Barat 3 No.19, Banyuanyar, Kec. Banjarsari, Surakarta, Jawa Tengah 57137"
  },
  {
    city: "Semarang",
    phone: "0853-2631-3006",
    address: "Jalan Prof. Soedarto, Ruko A No 1, Tembalang, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50725"
  },
  {
    city: "Majalengka",
    phone: "0813-2400-3885",
    address: "Jl. Gerakan Koperasi No. 03, Kel. Majalengka Wetan, Kec. Majalengka, Kab. Majalengka, Jawa Barat 45411"
  },
  {
    city: "Cianjur",
    phone: "0851-8689-7400",
    address: "Ruko Belka, Jl. KH Abdullah Bin Nuh No.4, RT.01/RW.19, Pamoyanan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43211"
  },
  {
    city: "Tuban",
    phone: "081231414497",
    address: "Jl. Raya Bulu - Jatirogo No. 355, Sukolilo, Bancar, Tuban, Jawa Timur 62354"
  },
  {
    city: "Surabaya",
    phone: "085819855486",
    address: "Jl. Siwalankerto No. 27, Kelurahan Siwalankerto, Kecamatan Wonocolo, Kota Surabaya"
  }
];

export default function Branches() {
  return (
    <section className={styles.section} id="branches">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Jangkauan Kami</span>
            </div>
            <h2 className={styles.title}>Cabang Sanur Indah Travel</h2>
            <p className={styles.subtitle}>
              Daftar kantor cabang kami dimana anda dapat membeli paket umroh dan haji secara langsung dengan pelayanan terbaik.
            </p>
          </div>
          <button className={styles.btnLihatSemua}>
            Lihat Semua Cabang <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.grid}>
          {branches.map((branch, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.city}>{branch.city}</h3>
                <a 
                  href={`https://wa.me/${branch.phone.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.waLink}
                >
                  <MessageCircle size={16} />
                  <span>{branch.phone}</span>
                </a>
              </div>
              <div className={styles.addressArea}>
                <MapPin size={18} className={styles.pinIcon} />
                <p className={styles.address}>{branch.address}</p>
              </div>
              <div className={styles.cardHoverDecor}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
