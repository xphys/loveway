'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const articles = [
  {
    id: 1,
    title: "วิธีดูแลผิวให้สุขภาพดี",
    excerpt: "เรียนรู้เทคนิคการดูแลผิวด้วยผลิตภัณฑ์ธรรมชาติ",
    image: "bg-yellow-200"
  },
  {
    id: 2,
    title: "ประโยชน์ของสมุนไพรไทย",
    excerpt: "ค้นพบสรรพคุณของสมุนไพรไทยที่ช่วยบำรุงสุขภาพ",
    image: "bg-gray-200"
  },
  {
    id: 3,
    title: "เคล็ดลับทำความสะอาดบ้าน",
    excerpt: "วิธีทำความสะอาดบ้านให้สะอาดและปลอดภัย",
    image: "bg-red-200"
  }
];

export default function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">บทความที่น่าสนใจ</h2>
            <p className="text-lg text-gray-600">เรียนรู้เทคนิคและเคล็ดลับจากผู้เชี่ยวชาญ</p>
          </div>
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/articles"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
            >
              ดูทั้งหมด
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={`/articles/${article.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow overflow-hidden block group"
              >
                <motion.div
                  className={`h-48 ${article.image} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/noimage.jpg"
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                    initial={false}
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {articles.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 w-2 rounded-full bg-gray-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

