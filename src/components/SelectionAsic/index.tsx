//import Link from 'next/link';
import styles from './SelAsic.module.scss';
import Image from 'next/image';

export default function SelectionAsic() {
    return (
      <div className={styles.selasicSection}>
        <div>
          <Image src="/asic/asic3.png" className={styles.asicc} width={403} height={339} alt="asic" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>ПОДБЕРЕМ НУЖНЫЙ ASIC</h2>
            <p>Закажите консультацию и мы поможем вам в подборе <br />оборудования</p>
            <button className={styles.button}>Заказать консультацию</button>
          </div>
        </div>
      </div>
      );

}

