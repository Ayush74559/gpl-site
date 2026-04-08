import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LogoSectionProps {
  title: string;
  logos: string[];
}

const LogoSection = ({ title, logos }: LogoSectionProps) => (
  <div className="py-20 border-b border-gray-100 last:border-0">
    <div className="container mx-auto px-4 md:px-10 text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        Our <span className="text-agri-green">{title}</span>
      </h2>
    </div>
    <div className="relative group">
      <div className="flex overflow-hidden gap-8 px-4 md:px-10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 shrink-0"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="w-48 h-24 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
              <img src={logo} alt="Logo" className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </div>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
);

export default function LogoCarousel() {
  const customers = [
    'https://picsum.photos/seed/c1/200/100',
    'https://picsum.photos/seed/c2/200/100',
    'https://picsum.photos/seed/c3/200/100',
    'https://picsum.photos/seed/c4/200/100',
    'https://picsum.photos/seed/c5/200/100',
    'https://picsum.photos/seed/c6/200/100',
  ];

  const partners = [
    'https://picsum.photos/seed/p1/200/100',
    'https://picsum.photos/seed/p2/200/100',
    'https://picsum.photos/seed/p3/200/100',
    'https://picsum.photos/seed/p4/200/100',
    'https://picsum.photos/seed/p5/200/100',
    'https://picsum.photos/seed/p6/200/100',
  ];

  return (
    <section className="bg-white">
      <LogoSection title="Valuable Customers" logos={customers} />
      <LogoSection title="Partners" logos={partners} />
    </section>
  );
}
