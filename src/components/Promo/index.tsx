//import Link from 'next/link';
import styles from './PromoSection.module.scss';
import Image from 'next/image';

export default function Promo() {
    return (
        <div className={styles.promoSection}>
          <div className={styles.content}>
            <h2 className={styles.title}>Подключение к пулу на выгодных <br />условиях</h2>
            <button className={styles.button}>Подключиться к пулу</button>
          </div>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <Image src="/promoimg/icon-uptime.svg" width={46} height={46} alt="Высокий аптайм" />
              <p>Высокий аптайм</p>
            </div>
            <div className={styles.featureItem}>
              <Image src="/promoimg/icon-security.svg" width={46} height={46} alt="Надежность" />
              <p>Надежность</p>
            </div>
            <div className={styles.featureItem}>
              <Image src="/promoimg/icon-support.svg" width={46} height={46} alt="Техподдержка 24/7" />
              <p>Техподдержка 24/7</p>
            </div>
            <div className={styles.featureItem}>
              <Image src="/promoimg/icon-payout.svg" width={46} height={46} alt="Автовывод без комиссии" />
              <p>Автовывод без комиссии</p>
            </div>
          </div>
        </div>
      );

}

