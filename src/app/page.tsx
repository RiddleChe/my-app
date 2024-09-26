//import Link from 'next/link';


import Baner from "@/components/Baner";
import ProductOfferings from '@/components/ProductOfferings';
import BestSellers from '@/components/BestSellers';

export default function Home() {
    return (
      <div>
        <Baner />
        <ProductOfferings />
        <BestSellers />
      </div>
    );
  }