//import Link from 'next/link';
import styles from './ProductOfferings.module.scss';
import Image from 'next/image';
function ProductOfferings() {
    return (
        <section className={styles.offerings}>
          <h2>Предлагаем готовые решения</h2>
          <div className={styles.offersGrid}>
            <div className={styles.offer}>
              <Image src="/icons/rozetca.svg" width={56} height={56} alt="Продажа оборудования" className={styles.icon} />
              <div className={styles.text}>
                <h3>Продажа оборудования</h3>
                <p>Доставка в любую точку мира. Оптовые цены на оборудование. Гарантия на все наши товары.</p>
              </div>
            </div>
            <div className={styles.offer}>
              <Image src="/icons/like.svg" width={56} height={56} alt="Размещение на хостинге" className={styles.icon} />
              <div className={styles.text}>
                <h3>Размещение на хостинге</h3>
                <p>Дата-центры от 3.5 рублей за кВт*ч. Майнинг отели по всей России. Бесплатная установка оборудования.</p>
              </div>
            </div>
            <div className={styles.offer}>
              <Image src="/icons/zepi.svg" width={56} height={56} alt="Подключение к пулу" className={styles.icon} />
              <div className={styles.text}>
                <h3>Подключение к пулу</h3>
                <p>Официальные представители ViaBTC. Выгодные условия сотрудничества. Техподдержка онлайн 24/7.</p>
              </div>
            </div>
          </div>
          <button className={styles.learnMoreButton}>Хочу узнать больше</button>
        </section>
      );
}

export default ProductOfferings;
