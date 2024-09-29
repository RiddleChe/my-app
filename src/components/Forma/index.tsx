//import Link from 'next/link';
import styles from './form.module.scss';
import Image from 'next/image';

export default function Forma() {
    return (
        <div className={styles.formaSection}>
          <div className={styles.contacts}>
            <h3 className={styles.title}>МЫ ГОТОВЫ НАЧАТЬ!</h3>
            <p className={styles.titlep}>Заполните форму, чтобы получить консультацию</p>
            <div className={styles.contact}>
              <Image src="/forma/DeviceMobile.svg" width={36} height={36} alt="" />
              <p>+7 981 03-81-762</p>
            </div>
            <div className={styles.contact}>
              <Image src="/forma/EnvelopeOpen.svg" width={36} height={36} alt="" />
              <p>info@interhash.ru</p>
            </div>
            <div className={styles.contact}>
              <Image src="/forma/MapTrifold.svg" width={36} height={36} alt="" />
              <p>г. Москва, 1-й Красногвардейский пр-д, 22 стр. 1</p>
            </div>
            
          </div>
          <div className={styles.feedbeack}>
            <h3>А ВЫ?</h3>
            <input
              type="text"
              placeholder="Имя"
              className={styles['contact-input']}
            />
            <input
              type="text"
              placeholder="+7 999 99-99-999"
              className={styles['contact-input']}
            />
            <form>
              <label className={styles.checkboxcontainer}>
                <input type="checkbox" className={styles.privacycheckbox}/>
                <p>Я соглашаюсь с политикой конфиденциальности</p>
                
                <span className={styles.checkmark}></span>
              </label>
            </form>

            <button className={styles.button}>Заказать консультацию</button>
          </div>
        </div>
      );

}

