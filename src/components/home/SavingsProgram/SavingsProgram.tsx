import { Wallet, Smartphone, UserCheck, FileUp, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './SavingsProgram.module.css';

const steps = [
  {
    icon: <Smartphone size={24} />,
    text: "Menghubungi Customer Service Sanur Indah Travel"
  },
  {
    icon: <Smartphone size={24} />,
    text: "Mengisi Pendaftaran Tabungan Umroh Melalui Aplikasi Sanur Indah Travel"
  },
  {
    icon: <UserCheck size={24} />,
    text: "Lengkapi Data diri & Jumlah Nominal yang ingin di Tabungkan"
  },
  {
    icon: <FileUp size={24} />,
    text: "Upload Bukti Transfer di dalam Aplikasi"
  },
  {
    icon: <ShieldCheck size={24} />,
    text: "Pembayaran Tabungan umroh di Verifikasi Oleh Finance Sanur Indah Travel"
  }
];

export default function SavingsProgram() {
  return (
    <section className={styles.section} id="savings">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <div className={styles.badgeLine}>
              <span className={styles.dot}></span>
              <span className={styles.badgeText}>Program Eksklusif</span>
            </div>
            <h2 className={styles.title}>Program Paket Tabungan</h2>
            <p className={styles.subtitle}>
              Sanur Indah Travel Bekerjasama Dengan <strong>Bank Syariah Indonesia</strong>
            </p>
            
            <div className={styles.bankTag}>
              <div className={styles.bankIcon}>
                <Wallet size={32} />
              </div>
              <div>
                <div className={styles.bankName}>Partner Perbankan Resmi</div>
                <div className={styles.bankSub}>Bank Syariah Indonesia (BSI)</div>
              </div>
            </div>

            <div className={styles.companyStamp}>
              PT. SANUR INDAH TRAVEL
            </div>
          </div>

          <div className={styles.stepsContent}>
            <h3 className={styles.stepsTitle}>Cara Pendaftaran Tabungan Umroh :</h3>
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <div className={styles.stepNumber}>
                    {index + 1}
                  </div>
                  <div className={styles.stepCard}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                  {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
