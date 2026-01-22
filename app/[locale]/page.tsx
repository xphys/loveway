'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCategories from '@/components/ProductCategories';
import ProductCategories1 from '@/components/ProductCategories1';
import ProductCategories2 from '@/components/ProductCategories2';
import ProductCategories3 from '@/components/ProductCategories3';
import ProductCategories4 from '@/components/ProductCategories4';
import BrandShowcase from '@/components/BrandShowcase';
import ProductCarousel from '@/components/ProductCarousel';
import ProductDetailModal from '@/components/ProductDetailModal';
import Banner from '@/components/Banner';
import Certifications from '@/components/Certifications';
import MediaPresence from '@/components/MediaPresence';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { allProducts } from '@/app/[locale]/data/product';

const suggestedProducts = allProducts.filter(p => p.is_suggest === true);
const frontSkincareProducts = allProducts.filter((product: Product) => product.category === 'skincare' && product.front_show === true);
const frontHerbalProducts = allProducts.filter((product: Product) => product.category === 'herbal' && product.front_show === true);
const frontCleaningProducts = allProducts.filter((product: Product) => product.category === 'cleaning' && product.front_show === true);
const frontPetProducts = allProducts.filter((product: Product) => product.category === 'pet-care' && product.front_show === true);

export default function Home() {
  const t = useTranslations('home');
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
      <Certifications />
      <MediaPresence />

      {/* Product Categories Variants - Select Your Favorite Design */}
      <div id="product-categories" className="relative flex items-center justify-center my-12">
        <div className="w-full h-1 bg-gradient-to-r from-green-300 via-blue-200 to-purple-300 rounded-full opacity-70" />
        <div className="absolute left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 border border-gray-200">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="14" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
            <ellipse cx="14" cy="11" rx="9" ry="7" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="12" y="18" width="4" height="7" rx="2" fill="currentColor"/>
          </svg>
          <span className="font-semibold text-base md:text-lg text-gray-700 tracking-wide">
            {t('productSection')}
          </span>
        </div>
      </div>
      <ProductCategories1 />
      
      {/* <div className="h-4 bg-gray-100" /> */}
      
      <BrandShowcase />
      <Banner
        text={t('bannerText1')}
        variant="green"
        backgroundImage="/banner/1.png"
        products={suggestedProducts.slice(0, 6)}
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title={t('recommendedProducts')}
        products={suggestedProducts}
        viewAllLink="/products/recommended"
        categoryFilter="recommended"
        onProductClick={(product: Product) => handleProductClick(product)}
      />
      <ProductCarousel
        title={t('skincareProducts')}
        products={frontSkincareProducts}
        viewAllLink="/products/skincare"
        categoryFilter="skincare"
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title={t('herbalProducts')}
        products={frontHerbalProducts}
        viewAllLink="/products/herbal"
        categoryFilter="herbal"
        onProductClick={handleProductClick}
      />
      <Banner text={t('bannerText2')} variant="blue" />
      <ProductCarousel
        title={t('cleaningProducts')}
        products={frontCleaningProducts}
        viewAllLink="/products/cleaning"
        categoryFilter="cleaning"
        onProductClick={handleProductClick}
      />
      <ProductCarousel
        title={t('petCareProducts')}
        products={frontPetProducts}
        viewAllLink="/products/pet-care"
        categoryFilter="pet-care"
        onProductClick={handleProductClick}
      />
      <Banner text={t('bannerText2')} variant="blue" />
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
