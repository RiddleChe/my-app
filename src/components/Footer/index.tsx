//import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';
export default function Footer() {

    return (
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerSection}>
              <h4>Связаться с нами</h4>
              <ul>
                <li><a href="https://t.me/viainterhash_bot"><Image src="/telegram_mini.svg" alt="Telegram" /> @viainterhash_bot</a></li>
                <li><a href="mailto:info@interhash.ru"><Image src="/mail.svg" alt="Email" /> info@interhash.ru</a></li>
                <li><a href="tel:+79810381762"><Image src="/phone.svg" alt="Phone" /> +7 981 03 81 762</a></li>
                <li>ООО &quot;Интерхеш&quot;</li>
                <li>г. Москва, ул. Доброслободская, д. 7/1</li>
                <li>ИНН: 9701207352</li>
              </ul>
            </div>
    
            <div className={styles.footerSection}>
              <h4>Каталог</h4>
              <ul>
                <li><a href="#asics">Асик-майнеры</a></li>
                <li><a href="#bitmain">Bitmain</a></li>
                <li><a href="#canaan">Canaan</a></li>
                <li><a href="#innosilicon">Innosilicon</a></li>
                <li><a href="#whatsminer">Whatsminer</a></li>
                <li><a href="#equipment">Доп. оборудование</a></li>
                <li><a href="#cooling">Иммерсионное охлаждение</a></li>
              </ul>
            </div>
    
            <div className={styles.footerSection}>
              <h4>Услуги</h4>
              <ul>
                <li><a href="#pool">Майнинг пул</a></li>
                <li><a href="#hosting">Хостинг оборудования</a></li>
                <li><a href="#installments">Рассрочка</a></li>
                <li><a href="#leasing">Лизинг</a></li>
              </ul>
            </div>
    
            <div className={styles.footerSection}>
              <h4>Информация</h4>
              <ul>
                <li><a href="#about">О нас</a></li>
                <li><a href="#delivery">Доставка и оплата</a></li>
                <li><a href="#faq">Вопросы и ответы</a></li>
                <li><a href="#cooperation">Сотрудничество</a></li>
                <li><a href="#contacts">Контакты</a></li>
              </ul>
            </div>
    
            <div className={styles.footerSection}>
              <h4>Методы оплаты</h4>
              <ul>
                <li>
                  <Image src="/BitcoinBadge.svg" alt="BitcoinBadge" />
                  <Image src="/EthereumBadge.svg" alt="EthereumBadge" />
                  <Image src="/TetherBadge.svg" alt="TetherBadge" />
                  <Image src="/RuBadge.svg" alt="RuBadge" />
                </li>
                <li>Возможна оплата в рассрочку и лизинг</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <Image src="/logo.svg" alt="Interhash Logo" className={styles.logo} />
            <p>Interhash © 2022. Все права защищены.</p>
          </div>
        </footer>
      );
}
