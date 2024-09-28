//import Link from 'next/link';
import styles from './EquipmentSelection.module.scss';
import Image from 'next/image';

export default function EquipmentSelection() {
    return (
        <div className={styles.equipment}>
          <div className={styles.title}>
            <h2>Подберите свое оборудование <br />для майнинга</h2>
            </div>
          <div className={styles.advantages}>
            <div className={styles.advantage}>
              <Image src="/equipment_selection/truck.svg" width={70} height={70} alt="truck" />
              <h3>Удобная доставка</h3>
              <p>По всей России и СНГ</p>
            </div>
            <div className={styles.advantage}>
              <Image src="/equipment_selection/mani.svg" width={70} height={70} alt="mani" />
              <h3>Оптовые цены</h3>
              <p>Работаем с крупными поставщиками</p>
            </div>
            <div className={styles.advantage}>
              <Image src="/equipment_selection/rocket.svg" width={70} height={70} alt="rocket" />
              <h3>Быстрая консультация</h3>
              <p>Находимся онлайн 24/7</p>
            </div>
            <div className={styles.advantage}>
              <Image src="/equipment_selection/lock.svg" width={70} height={70} alt="lock" />
              <h3>Гарантия на оборудование</h3>
              <p>Действует на все наше оборудование</p>
            </div>
          </div>
          <button className={styles.CallButton}>Заказать звонок</button>
        </div>
      );

}

