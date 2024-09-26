import Link from 'next/link';
import styles from './BestSellers.module.scss';

export default function BestSellers() {
  return (
    <div className="product-section">
      <h2>Хиты продаж</h2>
      <h4>Цена указана в розницу. Больше устройств — больше скидка</h4>
      <div className="product-cards">
        <div className="product-card">
          <img src="/asic/asic1.png" alt="Product 1" />
          <p className="small-text">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 1</h3>
        </div>
        <div className="product-card">
          <img src="/asic/asic2.png" alt="Product 2" />
          <p className="small-text">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 2</h3>
        </div>
        <div className="product-card">
          <img src="/asic/asic1.png" alt="Product 3" />
          <p className="small-text">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 3</h3>
        </div>
        <div className="product-card">
          <img src="/asic/asic2.png" alt="Product 4" />
          <p className="small-text">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 4</h3>
        </div>
        <div className="product-card">
          <img src="/asic/asic1.png" alt="Product 5" />
          <p className="small-text">BITMAIN, ASIC-МАЙНЕРЫ, АСИКИ S19</p>
          <h3>Название товара 5</h3>
        </div>
      </div>
    </div>
  );

}

