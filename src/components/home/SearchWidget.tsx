import styles from './SearchWidget.module.css';

export default function SearchWidget() {
  return (
    <div className={styles.searchWidget}>
      <div className={styles.searchItem}>
        <label>Tujuan</label>
        <select>
          <option>Semua Domestik & Internasional</option>
          <option>Umroh</option>
          <option>Turki</option>
          <option>Jepang</option>
        </select>
      </div>
      <div className={styles.searchItem}>
        <label>Bulan Keberangkatan</label>
        <select>
          <option>Semua Bulan</option>
          <option>Januari 2026</option>
          <option>Februari 2026</option>
        </select>
      </div> 
      <button className="btn btn-primary" style={{ height: '100%', borderRadius: '8px', minHeight: '48px' }}>Cari Paket</button>
    </div>
  );
}
