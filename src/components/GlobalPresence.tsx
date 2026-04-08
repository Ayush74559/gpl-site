import React from 'react';
import { motion } from 'motion/react';

const StatCard = ({ value, label, delay }: { value: string, label: string, delay: number }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center w-full max-w-[280px]"
  >
    <div className="text-5xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-gray-500 font-medium">{label}</div>
  </motion.div>
);

const Marker = ({ top, left, label, color = 'bg-agri-green' }: { top: string, left: string, label: string, color?: string }) => (
  <div className="absolute group" style={{ top, left }}>
    <div className={`w-4 h-4 ${color} rounded-full animate-pulse relative z-10`}>
      <div className={`absolute inset-0 ${color} rounded-full animate-ping opacity-75`} />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
      {label}
    </div>
  </div>
);

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            All India Presence
          </h2>
          <div className="h-1.5 w-24 bg-agri-green rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Stats */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <StatCard value="15000+" label="Happy Farmers" delay={0.2} />
            <StatCard value="100+" label="Cities across India" delay={0.4} />
            <StatCard value="50+" label="Years of Experience" delay={0.6} />
          </div>

          {/* Map */}
          <div className="relative flex-1 w-full aspect-[4/5] md:aspect-[16/9] bg-gray-50 rounded-3xl overflow-hidden shadow-inner p-8 flex items-center justify-center">
            <img
              src="/india-map.png"
              alt="India Map"
              className="w-full h-full object-contain opacity-100"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}
