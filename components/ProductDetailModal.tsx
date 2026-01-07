'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Check, Award, Leaf, Shield, FlaskConical } from 'lucide-react';
import { useEffect } from 'react';

interface BaseProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  brand?: string;
  category?: string;
}

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  brand?: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  ingredients: string[];
  benefits: string[];
  usage: string;
  size: string;
  weight: string;
  origin: string;
  certifications: string[];
  images?: string[];
}

interface ProductDetailModalProps {
  product: BaseProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

// Mock detailed product data
const getProductDetails = (productId: string, baseProduct: BaseProduct): ProductDetail => {
  const detailsMap: Record<string, Partial<ProductDetail>> = {
    '1': {
      fullDescription: 'CELVIN เป็นผลิตภัณฑ์ทำความสะอาดคุณภาพสูงที่ใช้เทคโนโลยีขั้นสูงในการกำจัดคราบสกปรกและแบคทีเรียอย่างมีประสิทธิภาพ เหมาะสำหรับการทำความสะอาดทุกพื้นผิวในบ้าน',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1245,
      inStock: true,
      stockCount: 150,
      features: ['ฆ่าเชื้อแบคทีเรีย 99.9%', 'ปลอดภัยต่อเด็กและสัตว์เลี้ยง', 'กลิ่นหอมสดชื่น', 'ไม่ทิ้งคราบ'],
      ingredients: ['น้ำยาทำความสะอาดอเนกประสงค์', 'สารฆ่าเชื้อธรรมชาติ', 'น้ำหอมอ่อนๆ', 'สารป้องกันการเกิดคราบ'],
      benefits: ['ทำความสะอาดได้ลึกถึงรูขุมขน', 'ปกป้องผิวสัมผัสจากแบคทีเรีย', 'ยืดอายุการใช้งานของพื้นผิว', 'ปลอดภัยต่อสิ่งแวดล้อม'],
      usage: 'ฉีดพ่นบนพื้นผิวที่ต้องการทำความสะอาด ทิ้งไว้ 2-3 นาที แล้วเช็ดออกด้วยผ้าสะอาด',
      size: '500ml',
      weight: '520g',
      origin: 'ประเทศไทย',
      certifications: ['FDA Approved', 'Eco-Friendly', 'Non-Toxic'],
      images: ['/product/cleaning/celvin-1.jpg', '/product/cleaning/celvin-2.jpg']
    },
    '5': {
      fullDescription: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูงที่อุดมไปด้วยสารสกัดจากธรรมชาติ ช่วยบำรุงผิวให้ชุ่มชื้น เรียบเนียน และเปล่งปลั่งอย่างเป็นธรรมชาติ เหมาะสำหรับทุกสภาพผิว',
      price: 890,
      originalPrice: 1290,
      rating: 4.9,
      reviews: 3421,
      inStock: true,
      stockCount: 89,
      features: ['อุดมไปด้วยวิตามิน E และ C', 'ไม่มีพาราเบน', 'ผ่านการทดสอบแล้วว่าไม่ก่อให้เกิดการแพ้', 'เหมาะสำหรับผิวบอบบาง'],
      ingredients: ['น้ำมันอาร์แกน', 'สารสกัดจากว่านหางจระเข้', 'วิตามิน E', 'กรดไฮยาลูรอนิก', 'สารสกัดจากชาเขียว'],
      benefits: ['เพิ่มความชุ่มชื้นให้ผิว', 'ลดเลือนริ้วรอย', 'ทำให้ผิวเปล่งปลั่ง', 'ปกป้องผิวจากแสงแดด'],
      usage: 'ล้างหน้าให้สะอาด ใช้ผลิตภัณฑ์ทาบนใบหน้าและลำคอเป็นประจำเช้า-เย็น นวดเบาๆ จนซึมเข้าผิว',
      size: '50ml',
      weight: '65g',
      origin: 'ประเทศไทย',
      certifications: ['FDA Approved', 'Cruelty-Free', 'Vegan', 'Organic Certified'],
      images: ['/product/skincare/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_1.jpg']
    },
    '17': {
      fullDescription: 'RAPHA Herbal เป็นผลิตภัณฑ์สมุนไพรเพื่อสุขภาพที่สกัดจากสมุนไพรไทยคุณภาพสูง ช่วยเสริมสร้างสุขภาพและความแข็งแรงของร่างกายอย่างเป็นธรรมชาติ',
      price: 450,
      originalPrice: 650,
      rating: 4.7,
      reviews: 1892,
      inStock: true,
      stockCount: 234,
      features: ['100% สมุนไพรธรรมชาติ', 'ไม่มีสารเคมี', 'ผ่านการวิจัยและพัฒนา', 'รับประกันคุณภาพ'],
      ingredients: ['ขิง', 'ขมิ้น', 'กระเทียม', 'พริกไทยดำ', 'สารสกัดจากโสม'],
      benefits: ['เสริมสร้างภูมิคุ้มกัน', 'ช่วยในการย่อยอาหาร', 'เพิ่มพลังงาน', 'ลดการอักเสบ'],
      usage: 'รับประทาน 1-2 แคปซูล หลังอาหารเช้าและเย็น หรือตามคำแนะนำของแพทย์',
      size: '60 แคปซูล',
      weight: '45g',
      origin: 'ประเทศไทย',
      certifications: ['GMP Certified', 'FDA Approved', 'Organic'],
      images: ['/product/herbal/rapha-herbal-1.jpg']
    },
    '21': {
      fullDescription: 'CELVIN All-Purpose เป็นน้ำยาทำความสะอาดอเนกประสงค์ที่สามารถใช้ทำความสะอาดได้ทุกพื้นผิวในบ้าน ปลอดภัยและมีประสิทธิภาพสูง',
      price: 199,
      originalPrice: 299,
      rating: 4.6,
      reviews: 987,
      inStock: true,
      stockCount: 456,
      features: ['ทำความสะอาดได้ทุกพื้นผิว', 'ฆ่าเชื้อแบคทีเรีย', 'กลิ่นหอมอ่อนๆ', 'ไม่ทิ้งคราบ'],
      ingredients: ['สารทำความสะอาดอเนกประสงค์', 'สารฆ่าเชื้อ', 'น้ำหอมธรรมชาติ', 'สารป้องกันการเกิดคราบ'],
      benefits: ['ประหยัดเวลาและค่าใช้จ่าย', 'ปลอดภัยต่อครอบครัว', 'เป็นมิตรต่อสิ่งแวดล้อม', 'ใช้งานง่าย'],
      usage: 'ผสมน้ำยากับน้ำในอัตราส่วน 1:10 ใช้ทำความสะอาดพื้นผิวต่างๆ',
      size: '1L',
      weight: '1050g',
      origin: 'ประเทศไทย',
      certifications: ['Eco-Friendly', 'Non-Toxic', 'FDA Approved'],
      images: ['/product/cleaning/celvin-all-purpose-1.jpg']
    },
    '25': {
      fullDescription: 'RAPHA Pet Shampoo เป็นแชมพูสำหรับสัตว์เลี้ยงที่อ่อนโยนต่อผิวหนังและขน ใช้สารสกัดจากธรรมชาติที่ปลอดภัยสำหรับสัตว์เลี้ยงทุกชนิด',
      price: 350,
      originalPrice: 450,
      rating: 4.8,
      reviews: 2156,
      inStock: true,
      stockCount: 178,
      features: ['อ่อนโยนต่อผิวหนัง', 'ไม่มีสารเคมีอันตราย', 'ช่วยลดกลิ่นไม่พึงประสงค์', 'ทำให้ขนนุ่มสลวย'],
      ingredients: ['สารสกัดจากว่านหางจระเข้', 'น้ำมันมะพร้าว', 'สารสกัดจากลาเวนเดอร์', 'โปรตีนจากข้าวสาลี'],
      benefits: ['ทำความสะอาดขนอย่างล้ำลึก', 'ลดการเกิดขนร่วง', 'ทำให้ขนเงางาม', 'ปกป้องผิวหนังจากแบคทีเรีย'],
      usage: 'เปียกขนให้ทั่ว ใช้แชมพูนวดเบาๆ ทั่วตัว ทิ้งไว้ 2-3 นาที แล้วล้างออกให้สะอาด',
      size: '400ml',
      weight: '420g',
      origin: 'ประเทศไทย',
      certifications: ['Veterinary Approved', 'Cruelty-Free', 'Natural'],
      images: ['/product/pet/rapha-pet-shampoo-1.jpg']
    }
  };

  const defaultDetails: ProductDetail = {
    ...baseProduct,
    fullDescription: baseProduct.description + ' ผลิตภัณฑ์คุณภาพสูงที่ผ่านการวิจัยและพัฒนาเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด',
    price: 399,
    originalPrice: 599,
    rating: 4.5,
    reviews: 500,
    inStock: true,
    stockCount: 100,
    features: ['คุณภาพสูง', 'ปลอดภัย', 'ใช้งานง่าย', 'ผลลัพธ์ดี'],
    ingredients: ['สารสกัดจากธรรมชาติ', 'น้ำบริสุทธิ์', 'สารกันบูดธรรมชาติ'],
    benefits: ['มีประสิทธิภาพสูง', 'ปลอดภัยต่อผู้ใช้', 'เป็นมิตรต่อสิ่งแวดล้อม'],
    usage: 'ใช้ตามคำแนะนำบนฉลาก',
    size: '250ml',
    weight: '280g',
    origin: 'ประเทศไทย',
    certifications: ['FDA Approved'],
    images: []
  };

  return { ...defaultDetails, ...detailsMap[productId] } as ProductDetail;
};

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  const productDetails = getProductDetails(product.id, product);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-6xl md:w-full md:max-h-[90vh] z-50 bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            <div className="overflow-y-auto flex-1">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Images */}
                <div className="relative bg-gradient-to-br from-secondary to-muted p-8 md:p-12">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src={productDetails.image.startsWith('/') ? productDetails.image : '/noimage.jpg'}
                      alt={productDetails.name}
                      fill
                      className="object-contain rounded-2xl"
                      unoptimized={productDetails.image.startsWith('/')}
                    />
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="p-6 md:p-12 space-y-6">
                  {/* Brand */}
                  {productDetails.brand && (
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{productDetails.brand}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{productDetails.name}</h2>

                  {/* Full Description */}
                  <p className="text-muted-foreground leading-relaxed">{productDetails.fullDescription}</p>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      คุณสมบัติเด่น
                    </h3>
                    <ul className="space-y-2">
                      {productDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <FlaskConical className="h-5 w-5 text-primary" />
                      ส่วนประกอบ
                    </h3>
                    <ul className="space-y-2">
                      {productDetails.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      ประโยชน์
                    </h3>
                    <ul className="space-y-2">
                      {productDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Product Info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">ขนาด</p>
                      <p className="font-semibold text-foreground">{productDetails.size}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">น้ำหนัก</p>
                      <p className="font-semibold text-foreground">{productDetails.weight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">ประเทศต้นกำเนิด</p>
                      <p className="font-semibold text-foreground">{productDetails.origin}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">การรับรอง</p>
                      <div className="flex flex-wrap gap-1">
                        {productDetails.certifications.map((cert, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="bg-muted/50 p-4 rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      วิธีใช้
                    </h3>
                    <p className="text-sm text-muted-foreground">{productDetails.usage}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

