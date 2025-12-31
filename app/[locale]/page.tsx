'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCategories from '@/components/ProductCategories';
import BrandShowcase from '@/components/BrandShowcase';
import ProductCarousel from '@/components/ProductCarousel';
import Banner from '@/components/Banner';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const recommendedProducts = [
  {
    id: '1',
    name: 'CELVIN',
    description: 'ผลิตภัณฑ์ทำความสะอาดคุณภาพสูง',
    price: 253.00,
    image: 'celvin',
    brand: 'Celvin'
  },
  {
    id: '2',
    name: 'GEMAS',
    description: 'ผลิตภัณฑ์บำรุงผิวจากธรรมชาติ',
    price: 253.00,
    image: 'gemas',
    brand: 'Gemas'
  },
  {
    id: '3',
    name: 'GEMAS Premium',
    description: 'ผลิตภัณฑ์บำรุงผิวพรีเมียม',
    price: 253.00,
    image: 'gemas-premium',
    brand: 'Gemas'
  },
  {
    id: '4',
    name: 'GEMAS Care',
    description: 'ผลิตภัณฑ์ดูแลผิวอย่างอ่อนโยน',
    price: 253.00,
    image: 'gemas-care',
    brand: 'Gemas'
  }
];

const skincareProducts = [
  {
    id: '5',
    name: 'GEMAS Cleanser',
    description: 'ผลิตภัณฑ์ทำความสะอาดผิวหน้า',
    price: 253.00,
    image: 'gemas-cleanser',
    brand: 'Gemas'
  },
  {
    id: '6',
    name: 'GEMAS Moisturizer',
    description: 'ผลิตภัณฑ์ให้ความชุ่มชื้น',
    price: 253.00,
    image: 'gemas-moisturizer',
    brand: 'Gemas'
  },
  {
    id: '7',
    name: 'GEMAS Serum',
    description: 'เซรั่มบำรุงผิวเข้มข้น',
    price: 253.00,
    image: 'gemas-serum',
    brand: 'Gemas'
  },
  {
    id: '8',
    name: 'GEMAS Toner',
    description: 'โทนเนอร์ปรับสภาพผิว',
    price: 253.00,
    image: 'gemas-toner',
    brand: 'Gemas'
  }
];

const herbalProducts = [
  {
    id: '9',
    name: 'RAPHA Herbal',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพ',
    price: 253.00,
    image: 'rapha-herbal',
    brand: 'Rapha'
  },
  {
    id: '10',
    name: 'RAPHA Wellness',
    description: 'ผลิตภัณฑ์เสริมสุขภาพ',
    price: 253.00,
    image: 'rapha-wellness',
    brand: 'Rapha'
  },
  {
    id: '11',
    name: 'RAPHA Natural',
    description: 'ผลิตภัณฑ์จากธรรมชาติ 100%',
    price: 253.00,
    image: 'rapha-natural',
    brand: 'Rapha'
  },
  {
    id: '12',
    name: 'RAPHA Organic',
    description: 'ผลิตภัณฑ์ออร์แกนิกคุณภาพสูง',
    price: 253.00,
    image: 'rapha-organic',
    brand: 'Rapha'
  }
];

const cleaningProducts = [
  {
    id: '13',
    name: 'CELVIN All-Purpose',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์',
    price: 253.00,
    image: 'celvin-all-purpose',
    brand: 'Celvin'
  },
  {
    id: '14',
    name: 'CELVIN Kitchen',
    description: 'น้ำยาทำความสะอาดครัว',
    price: 253.00,
    image: 'celvin-kitchen',
    brand: 'Celvin'
  },
  {
    id: '15',
    name: 'CELVIN Bathroom',
    description: 'น้ำยาทำความสะอาดห้องน้ำ',
    price: 253.00,
    image: 'celvin-bathroom',
    brand: 'Celvin'
  },
  {
    id: '16',
    name: 'CELVIN Floor',
    description: 'น้ำยาทำความสะอาดพื้น',
    price: 253.00,
    image: 'celvin-floor',
    brand: 'Celvin'
  }
];

const petProducts = [
  {
    id: '17',
    name: 'RAPHA Pet Shampoo',
    description: 'แชมพูสำหรับสัตว์เลี้ยง',
    price: 253.00,
    image: 'rapha-pet-shampoo',
    brand: 'Rapha Biotech'
  },
  {
    id: '18',
    name: 'RAPHA Pet Care',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยง',
    price: 253.00,
    image: 'rapha-pet-care',
    brand: 'Rapha Biotech'
  },
  {
    id: '19',
    name: 'RAPHA Pet Food',
    description: 'อาหารเสริมสำหรับสัตว์เลี้ยง',
    price: 253.00,
    image: 'rapha-pet-food',
    brand: 'Rapha Biotech'
  },
  {
    id: '20',
    name: 'RAPHA Pet Health',
    description: 'ผลิตภัณฑ์เสริมสุขภาพสัตว์เลี้ยง',
    price: 253.00,
    image: 'rapha-pet-health',
    brand: 'Rapha Biotech'
  }
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <About />
      <ProductCategories />
      <BrandShowcase />
      <Banner text="ความสะอาด สุขภาพดี และความสงบใจ สำหรับทุกคน" variant="green" />
      <ProductCarousel
        title="สินค้าแนะนำ"
        products={recommendedProducts}
        viewAllLink="/products/recommended"
      />
      <ProductCarousel
        title="ผลิตภัณฑ์บำรุงผิว"
        products={skincareProducts}
        viewAllLink="/products/skincare"
      />
      <ProductCarousel
        title="ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพ"
        products={herbalProducts}
        viewAllLink="/products/herbal"
      />
      <Banner text="เพื่อความสะอาดและสุขภาพดี เพื่อความสงบใจ" variant="blue" />
      <ProductCarousel
        title="ผลิตภัณฑ์ทำความสะอาด"
        products={cleaningProducts}
        viewAllLink="/products/cleaning"
      />
      <ProductCarousel
        title="ผลิตภัณฑ์สำหรับสัตว์เลี้ยง"
        products={petProducts}
        viewAllLink="/products/pet-care"
      />
      <Banner text="เพื่อความสะอาดและสุขภาพดี เพื่อความสงบใจ" variant="blue" />
      <Articles />
      <Footer />
    </motion.div>
  );
}
