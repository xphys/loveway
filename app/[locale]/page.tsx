'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCategories from '@/components/ProductCategories';
import BrandShowcase from '@/components/BrandShowcase';
import ProductCarousel from '@/components/ProductCarousel';
import ProductDetailModal from '@/components/ProductDetailModal';
import Banner from '@/components/Banner';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  brand?: string;
  category?: string;
  show_front?: boolean;
  is_suggest?: boolean;
}

const recommendedProducts: Product[] = [
  {
    id: '1',
    name: 'CELVIN',
    description: 'ผลิตภัณฑ์ทำความสะอาดคุณภาพสูง',
    image: 'celvin',
    brand: 'Celvin',
    category: 'recommended',
    show_front: true,
    is_suggest: true
  },
  {
    id: '2',
    name: 'GEMAS',
    description: 'ผลิตภัณฑ์บำรุงผิวจากธรรมชาติ',
    image: 'gemas',
    brand: 'Gemas',
    category: 'recommended',
    show_front: true,
    is_suggest: true
  },
  {
    id: '3',
    name: 'GEMAS Premium',
    description: 'ผลิตภัณฑ์บำรุงผิวพรีเมียม',
    image: 'gemas-premium',
    brand: 'Gemas',
    category: 'recommended',
    show_front: false,
    is_suggest: false
  },
  {
    id: '4',
    name: 'GEMAS Care',
    description: 'ผลิตภัณฑ์ดูแลผิวอย่างอ่อนโยน',
    image: 'gemas-care',
    brand: 'Gemas',
    category: 'recommended',
    show_front: false,
    is_suggest: false
  }
];

const skincareProducts: Product[] = [
  {
    id: '5',
    name: 'ผลิตภัณฑ์บำรุงผิว 1',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_1.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: true
  },
  {
    id: '6',
    name: 'ผลิตภัณฑ์บำรุงผิว 2',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_2.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: false
  },
  {
    id: '7',
    name: 'ผลิตภัณฑ์บำรุงผิว 3',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_3.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: false
  },
  {
    id: '8',
    name: 'ผลิตภัณฑ์บำรุงผิว 4',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_4.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: false
  },
  {
    id: '9',
    name: 'ผลิตภัณฑ์บำรุงผิว 5',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_5.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: false
  },
  {
    id: '10',
    name: 'ผลิตภัณฑ์บำรุงผิว 6',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_6.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: true,
    is_suggest: false
  },
  {
    id: '11',
    name: 'ผลิตภัณฑ์บำรุงผิว 7',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_7.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  },
  {
    id: '12',
    name: 'ผลิตภัณฑ์บำรุงผิว 8',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_8.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  },
  {
    id: '13',
    name: 'ผลิตภัณฑ์บำรุงผิว 9',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_9.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  },
  {
    id: '14',
    name: 'ผลิตภัณฑ์บำรุงผิว 10',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_10.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  },
  {
    id: '15',
    name: 'ผลิตภัณฑ์บำรุงผิว 11',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_11.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  },
  {
    id: '16',
    name: 'ผลิตภัณฑ์บำรุงผิว 12',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_12.jpg',
    brand: 'Skincare',
    category: 'skincare',
    show_front: false,
    is_suggest: false
  }
];

const herbalProducts: Product[] = [
  {
    id: '17',
    name: 'RAPHA Herbal',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพ',
    image: 'rapha-herbal',
    brand: 'Rapha',
    category: 'herbal',
    show_front: true,
    is_suggest: true
  },
  {
    id: '18',
    name: 'RAPHA Wellness',
    description: 'ผลิตภัณฑ์เสริมสุขภาพ',
    image: 'rapha-wellness',
    brand: 'Rapha',
    category: 'herbal',
    show_front: true,
    is_suggest: false
  },
  {
    id: '19',
    name: 'RAPHA Natural',
    description: 'ผลิตภัณฑ์จากธรรมชาติ 100%',
    image: 'rapha-natural',
    brand: 'Rapha',
    category: 'herbal',
    show_front: true,
    is_suggest: false
  },
  {
    id: '20',
    name: 'RAPHA Organic',
    description: 'ผลิตภัณฑ์ออร์แกนิกคุณภาพสูง',
    image: 'rapha-organic',
    brand: 'Rapha',
    category: 'herbal',
    show_front: true,
    is_suggest: false
  }
];

const cleaningProducts: Product[] = [
  {
    id: '21',
    name: 'CELVIN All-Purpose',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์',
    image: 'celvin-all-purpose',
    brand: 'Celvin',
    category: 'cleaning',
    show_front: true,
    is_suggest: true
  },
  {
    id: '22',
    name: 'CELVIN Kitchen',
    description: 'น้ำยาทำความสะอาดครัว',
    image: 'celvin-kitchen',
    brand: 'Celvin',
    category: 'cleaning',
    show_front: true,
    is_suggest: false
  },
  {
    id: '23',
    name: 'CELVIN Bathroom',
    description: 'น้ำยาทำความสะอาดห้องน้ำ',
    image: 'celvin-bathroom',
    brand: 'Celvin',
    category: 'cleaning',
    show_front: true,
    is_suggest: false
  },
  {
    id: '24',
    name: 'CELVIN Floor',
    description: 'น้ำยาทำความสะอาดพื้น',
    image: 'celvin-floor',
    brand: 'Celvin',
    category: 'cleaning',
    show_front: true,
    is_suggest: false
  }
];

const petProducts: Product[] = [
  {
    id: '25',
    name: 'RAPHA Pet Shampoo',
    description: 'แชมพูสำหรับสัตว์เลี้ยง',
    image: 'rapha-pet-shampoo',
    brand: 'Rapha Biotech',
    category: 'pet-care',
    show_front: true,
    is_suggest: true
  },
  {
    id: '26',
    name: 'RAPHA Pet Care',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยง',
    image: 'rapha-pet-care',
    brand: 'Rapha Biotech',
    category: 'pet-care',
    show_front: true,
    is_suggest: false
  },
  {
    id: '27',
    name: 'RAPHA Pet Food',
    description: 'อาหารเสริมสำหรับสัตว์เลี้ยง',
    image: 'rapha-pet-food',
    brand: 'Rapha Biotech',
    category: 'pet-care',
    show_front: true,
    is_suggest: false
  },
  {
    id: '28',
    name: 'RAPHA Pet Health',
    description: 'ผลิตภัณฑ์เสริมสุขภาพสัตว์เลี้ยง',
    image: 'rapha-pet-health',
    brand: 'Rapha Biotech',
    category: 'pet-care',
    show_front: true,
    is_suggest: false
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Get all products and filter by is_suggest for recommended section
  const allProducts = [
    ...recommendedProducts,
    ...skincareProducts,
    ...herbalProducts,
    ...cleaningProducts,
    ...petProducts
  ];
  const suggestedProducts = allProducts.filter(p => p.is_suggest === true);

  // Filter products by show_front flag for each category
  const frontSkincareProducts = skincareProducts.filter(p => p.show_front === true);
  const frontHerbalProducts = herbalProducts.filter(p => p.show_front === true);
  const frontCleaningProducts = cleaningProducts.filter(p => p.show_front === true);
  const frontPetProducts = petProducts.filter(p => p.show_front === true);

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
      <Banner text="ความสะอาด สุขภาพดี และความสงบใจ สำหรับทุกคน" variant="green" backgroundImage="/banner/1.png" />
      <ProductCarousel
        title="สินค้าแนะนำ"
        products={suggestedProducts}
        viewAllLink="/products/recommended"
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title="ผลิตภัณฑ์บำรุงผิว"
        products={frontSkincareProducts}
        viewAllLink="/products/skincare"
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title="ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพ"
        products={frontHerbalProducts}
        viewAllLink="/products/herbal"
        onProductClick={handleProductClick}
      />
      <Banner text="เพื่อความสะอาดและสุขภาพดี เพื่อความสงบใจ" variant="blue" />
      <ProductCarousel
        title="ผลิตภัณฑ์ทำความสะอาด"
        products={frontCleaningProducts}
        viewAllLink="/products/cleaning"
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title="ผลิตภัณฑ์สำหรับสัตว์เลี้ยง"
        products={frontPetProducts}
        viewAllLink="/products/pet-care"
        onProductClick={handleProductClick}
      />
      <Banner text="เพื่อความสะอาดและสุขภาพดี เพื่อความสงบใจ" variant="blue" />
      <Articles />
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
