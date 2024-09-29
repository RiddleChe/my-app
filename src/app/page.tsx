//import Link from 'next/link';


import Baner from "@/components/Baner";
import ProductOfferings from '@/components/ProductOfferings';
import BestSellers from '@/components/BestSellers';
import Promo from "@/components/Promo";
import PartnerBanner from "@/components/PartnerBanner";
import EquipmentSelection from "@/components/EquipmentSelection";
import SelectionAsic from "@/components/SelectionAsic";
import Questions from "@/components/Questions";
import Blog from "@/components/Blog";
import Forma from "@/components/Forma";

export default function Home() {
    return (
      <div>
        <Baner />
        <ProductOfferings />
        <BestSellers />
        <Promo />
        <PartnerBanner />
        <EquipmentSelection />
        <SelectionAsic />
        <Questions />
        <Forma />
        <Blog />
      </div>
    );
  }