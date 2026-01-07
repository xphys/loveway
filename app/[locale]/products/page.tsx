'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import { X, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  brand?: string;
  category: string;
  show_front?: boolean;
  is_suggest?: boolean;
}

// All products data (same as in home page)
const allProducts: Product[] = [
  // Recommended
  {
    id: '1',
    name: 'CELVIN',
    description: 'ผลิตภัณฑ์ทำความสะอาดคุณภาพสูง',
    image: 'celvin',
    brand: 'Celvin',
    category: 'recommended'
  },
  {
    id: '2',
    name: 'GEMAS',
    description: 'ผลิตภัณฑ์บำรุงผิวจากธรรมชาติ',
    image: 'gemas',
    brand: 'Gemas',
    category: 'recommended'
  },
  {
    id: '3',
    name: 'GEMAS Premium',
    description: 'ผลิตภัณฑ์บำรุงผิวพรีเมียม',
    image: 'gemas-premium',
    brand: 'Gemas',
    category: 'recommended'
  },
  {
    id: '4',
    name: 'GEMAS Care',
    description: 'ผลิตภัณฑ์ดูแลผิวอย่างอ่อนโยน',
    image: 'gemas-care',
    brand: 'Gemas',
    category: 'recommended'
  },
  // Skincare
  {
    id: '5',
    name: 'ผลิตภัณฑ์บำรุงผิว 1',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_1.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '6',
    name: 'ผลิตภัณฑ์บำรุงผิว 2',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_2.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '7',
    name: 'ผลิตภัณฑ์บำรุงผิว 3',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_3.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '8',
    name: 'ผลิตภัณฑ์บำรุงผิว 4',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_4.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '9',
    name: 'ผลิตภัณฑ์บำรุงผิว 5',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_5.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '10',
    name: 'ผลิตภัณฑ์บำรุงผิว 6',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_6.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '11',
    name: 'ผลิตภัณฑ์บำรุงผิว 7',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_7.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '12',
    name: 'ผลิตภัณฑ์บำรุงผิว 8',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_8.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '13',
    name: 'ผลิตภัณฑ์บำรุงผิว 9',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_9.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '14',
    name: 'ผลิตภัณฑ์บำรุงผิว 10',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_10.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '15',
    name: 'ผลิตภัณฑ์บำรุงผิว 11',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_11.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  {
    id: '16',
    name: 'ผลิตภัณฑ์บำรุงผิว 12',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูง',
    image: '/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_12.jpg',
    brand: 'Skincare',
    category: 'skincare'
  },
  // Herbal
  {
    id: '17',
    name: 'RAPHA Herbal',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพ',
    image: 'rapha-herbal',
    brand: 'Rapha',
    category: 'herbal'
  },
  {
    id: '18',
    name: 'RAPHA Wellness',
    description: 'ผลิตภัณฑ์เสริมสุขภาพ',
    image: 'rapha-wellness',
    brand: 'Rapha',
    category: 'herbal'
  },
  {
    id: '19',
    name: 'RAPHA Natural',
    description: 'ผลิตภัณฑ์จากธรรมชาติ 100%',
    image: 'rapha-natural',
    brand: 'Rapha',
    category: 'herbal'
  },
  {
    id: '20',
    name: 'RAPHA Organic',
    description: 'ผลิตภัณฑ์ออร์แกนิกคุณภาพสูง',
    image: 'rapha-organic',
    brand: 'Rapha',
    category: 'herbal'
  },
  // Cleaning
  {
    id: '21',
    name: 'CELVIN All-Purpose',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์',
    image: 'celvin-all-purpose',
    brand: 'Celvin',
    category: 'cleaning'
  },
  {
    id: '22',
    name: 'CELVIN Kitchen',
    description: 'น้ำยาทำความสะอาดครัว',
    image: 'celvin-kitchen',
    brand: 'Celvin',
    category: 'cleaning'
  },
  {
    id: '23',
    name: 'CELVIN Bathroom',
    description: 'น้ำยาทำความสะอาดห้องน้ำ',
    image: 'celvin-bathroom',
    brand: 'Celvin',
    category: 'cleaning'
  },
  {
    id: '24',
    name: 'CELVIN Floor',
    description: 'น้ำยาทำความสะอาดพื้น',
    image: 'celvin-floor',
    brand: 'Celvin',
    category: 'cleaning'
  },
  // Pet Care
  {
    id: '25',
    name: 'RAPHA Pet Shampoo',
    description: 'แชมพูสำหรับสัตว์เลี้ยง',
    image: 'rapha-pet-shampoo',
    brand: 'Rapha Biotech',
    category: 'pet-care'
  },
  {
    id: '26',
    name: 'RAPHA Pet Care',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยง',
    image: 'rapha-pet-care',
    brand: 'Rapha Biotech',
    category: 'pet-care'
  },
  {
    id: '27',
    name: 'RAPHA Pet Food',
    description: 'อาหารเสริมสำหรับสัตว์เลี้ยง',
    image: 'rapha-pet-food',
    brand: 'Rapha Biotech',
    category: 'pet-care'
  },
  {
    id: '28',
    name: 'RAPHA Pet Health',
    description: 'ผลิตภัณฑ์เสริมสุขภาพสัตว์เลี้ยง',
    image: 'rapha-pet-health',
    brand: 'Rapha Biotech',
    category: 'pet-care'
  }
];

const categories = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'recommended', label: 'สินค้าแนะนำ' },
  { value: 'skincare', label: 'ผลิตภัณฑ์บำรุงผิว' },
  { value: 'herbal', label: 'ผลิตภัณฑ์สมุนไพร' },
  { value: 'cleaning', label: 'ผลิตภัณฑ์ทำความสะอาด' },
  { value: 'pet-care', label: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง' }
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              สินค้าทั้งหมด
            </h1>
            <p className="text-lg text-muted-foreground">
              ค้นหาและเลือกสินค้าที่คุณต้องการ
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            className="mb-8 sticky top-20 z-10 bg-white/95 backdrop-blur-sm py-4 border-b border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Filter className="h-4 w-4" />
                <span>หมวดหมู่:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => handleCategoryChange(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>ล้างตัวกรอง</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              พบสินค้า <span className="font-semibold text-foreground">{filteredProducts.length}</span> รายการ
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => handleProductClick(product)}
                  className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-52 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                    <Image
                      src={product.image.startsWith('/') ? product.image : `/noimage.jpg`}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized={product.image.startsWith('/')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Brand Badge */}
                    {product.brand && (
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground/80">
                        {product.brand}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-card-foreground mb-2 text-base group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground">ไม่พบสินค้าในหมวดหมู่นี้</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

