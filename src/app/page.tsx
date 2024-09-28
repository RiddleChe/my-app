//import Link from 'next/link';


import Baner from "@/components/Baner";
import ProductOfferings from '@/components/ProductOfferings';
import BestSellers from '@/components/BestSellers';
import Promo from "@/components/Promo";

export default function Home() {
    return (
      <div>
        <Baner />
        <ProductOfferings />
        <BestSellers />
        <Promo />
      </div>
    );
  }