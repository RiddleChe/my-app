//import Link from 'next/link';


import Baner from "@/components/Baner";
import ProductOfferings from '@/components/ProductOfferings';
import BestSellers from '@/components/BestSellers';
import Promo from "@/components/Promo";
import PartnerBanner from "@/components/PartnerBanner";
import EquipmentSelection from "@/components/EquipmentSelection";

export default function Home() {
    return (
      <div>
        <Baner />
        <ProductOfferings />
        <BestSellers />
        <Promo />
        <PartnerBanner />
        <EquipmentSelection />
      </div>
    );
  }