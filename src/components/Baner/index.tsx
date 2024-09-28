

//import Link from 'next/link';
import styles from './Baner.module.scss';
import Image from 'next/image';
const Baner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>ОБОРУДОВАНИЕ ДЛЯ МАЙНИНГА</h1>
        <p className={styles.heroSubtitle}>По оптовым ценам</p>
        <button className={styles.ctaButton}>Получить актуальные цены</button>
      </div>
      <div>
        <Image 
          width={467}
          height={469}
          src="/mining.svg"
          alt="Mining Equipment"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Baner;
