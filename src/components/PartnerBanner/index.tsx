//import Link from 'next/link';
import styles from './PartnerBanner.module.scss';
import Image from 'next/image';

export default function PartnerBanner() {
    return (
        <div className={styles.partnerBanner}>
          <p className={styles.text}>
            Мы являемся эксклюзивным партнером
          </p>
          <Image
            src="/viabtc.svg" // Путь к логотипу ViaBTC
            width={119}
            height={33}
            alt="ViaBTC"
            className={styles.logo}
          />
        </div>
      );

}

