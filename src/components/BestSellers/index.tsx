//import Link from 'next/link';
import styles from './BestSellers.module.scss';

export default function BestSellers() {
  return (
    <div className={styles.productsection}>
      <h2>Хиты продаж</h2>
      <h4>Цена указана в розницу. Больше устройств — больше скидка</h4>
      <div className={styles.productcards}>
        <div className={styles.productcard}>
          <img src="/asic/asic1.png" alt="Product 1" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 1</h3>
        </div>
        <div className={styles.productcard}>
          <img src="/asic/asic2.png" alt="Product 2" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 2</h3>
        </div>
        <div className={styles.productcard}>
          <img src="/asic/asic1.png" alt="Product 3" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 3</h3>
        </div>
        <div className={styles.productcard}>
          <img src="/asic/asic2.png" alt="Product 4" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 4</h3>
        </div>
        <div className={styles.productcard}>
          <img src="/asic/asic1.png" alt="Product 5" />
          <p className={styles.smalltext}>BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 5</h3>
        </div>
      </div>
    </div>
  );

}

