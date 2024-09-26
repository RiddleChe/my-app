

//import Link from 'next/link';
import styles from './Baner.module.scss';

const Baner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Оборудование для майнинга</h1>
        <p className={styles.heroSubtitle}>По оптовым ценам</p>
        <button className={styles.ctaButton}>Получить актуальные цены</button>
      </div>
      <div>
        <img 
          src="/mining.svg"
          alt="Mining Equipment"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Baner;
