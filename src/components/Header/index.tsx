import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

function Header() {
  return (
<header className={styles.header}>
  <div className={styles['header-left']}>
    <Image
      width={191} height={36}
      src="/logo.svg"
      alt="Interhash Logo"
      className={styles.logo}
    />
    <input
      type="text"
      placeholder="Поиск"
      className={styles['search-input']}
    />
    <button className={styles['search-button']}>Q</button>
  </div>
  <nav className={styles['header-nav']}>
    <ul>
      <li><Link href="#catalog">Каталог</Link></li>
      <li><Link href="#services">Услуги</Link></li>
      <li><Link href="#delivery">Доставка и оплата</Link></li>
      <li><Link href="#contacts">Контакты</Link></li>
      <li><Link href="#about">О нас</Link></li>
    </ul>
  </nav>
  <div className={styles['header-right']}>
    <a href="https://t.me/yourtelegram" className={styles['social-link']}>
      <Image src="/telegram.png" width={28} height={28} alt="Telegram" />
    </a>
    <a href="https://wa.me/79810381762" className={styles['social-link']}>
      <Image src="/whatsapp.png" width={28} height={28} alt="WhatsApp" />
    </a>
    <span className={styles.phone}>+7 981 03-81-762</span>
  </div>
</header>

  );
}

export default Header;
