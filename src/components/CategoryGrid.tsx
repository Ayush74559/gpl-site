import React from 'react';
import { motion } from 'motion/react';

export default function CategoryGrid() {
  const categories = [
    { 
      title: 'SCM Methodology', 
      description: 'Our Scientific Crop Management approach ensures optimal growing conditions and maximum yield for every polyhouse project.',
      image: 'https://picsum.photos/seed/greenhouse/600/400' 
    },
    { 
      title: 'Subsidy Navigation', 
      description: 'Expert guidance through NHM, MIDH, and NHB subsidy applications with 95% approval success rate.',
      image: 'https://picsum.photos/seed/hydro/600/400' 
    },
    { 
      title: 'End-to-End EPC', 
      description: 'Complete Engineering, Procurement & Construction services from site assessment to handover.',
      image: 'https://picsum.photos/seed/farmer/600/400' 
    },
    { 
      title: 'Farmer-First', 
      description: 'Dedicated support, training, and crop guidance even after project completion. Your success is our success.',
      image: 'https://picsum.photos/seed/corporate/600/400' 
    },
  ];

  return (
    <section className="relative -mt-20 z-30 px-4 md:px-10 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            className="group relative h-64 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10" />
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{cat.title}</h3>
              <p className="text-sm font-medium leading-relaxed line-clamp-3 opacity-90">{cat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
