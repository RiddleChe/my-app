//import Link from 'next/link';
import styles from './BestSellers.module.scss';
import Image from 'next/image';

export default function BestSellers() {
  return (
    <div className={styles.productsection}>
      <h2>Хиты продаж</h2>
      <h4>Цена указана в розницу. Больше устройств — больше скидка</h4>
      <div className={styles.productcards}>
        <div className={styles.productcard}>
          <Image src="/asic/asic1.png" width={1000} height={1000} alt="Product 1" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>ANTMINER S19 90TH</h3>
        </div>
        <div className={styles.productcard}>
          <Image src="/asic/asic2.png" width={1000} height={1000} alt="Product 2" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>WHATMINER M30S++</h3>
        </div>
        <div className={styles.productcard}>
          <Image src="/asic/asic1.png" width={1000} height={1000} alt="Product 3" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>ANTMINER S19 90TH</h3>
        </div>
        <div className={styles.productcard}>
          <Image src="/asic/asic2.png" width={1000} height={1000} alt="Product 4" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>WHATMINER M30S++</h3>
        </div>
        <div className={styles.productcard}>
          <Image src="/asic/asic1.png" width={1000} height={1000} alt="Product 5" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>ANTMINER S19 90TH</h3>
        </div>
      </div>
      <button className={styles.CatalogButton}>Перейти в каталог</button>
    </div>
  );

}

