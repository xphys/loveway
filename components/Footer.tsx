import Link from 'next/link';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-semibold text-blue-600">Love Way</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">123 ถนนสุขุมวิท กรุงเทพมหานคร 10110</p>
            <p className="text-gray-600 text-sm mb-2">โทร: 02-123-4567</p>
            <p className="text-gray-600 text-sm mb-4">อีเมล: info@loveway.com</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">บริษัท</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">
                  ข้อกำหนดและเงื่อนไข
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">ออนไลน์</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-order" className="text-gray-600 hover:text-blue-600 text-sm">
                  วิธีสั่งซื้อ
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-600 hover:text-blue-600 text-sm">
                  วิธีการชำระเงิน
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-blue-600 text-sm">
                  การจัดส่ง
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
                  คำถามที่พบบ่อย
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-gray-600 text-sm">© Copyright Love Way 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

