import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-agri-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            India's Largest Greenhouse Factory
          </h2>
          <p className="max-w-4xl mx-auto text-white/90 text-lg mb-12 leading-relaxed">
            We are India's Largest Greenhouse Factory with the total infrastructure area in several acres. The experienced team of professionals possess in-depth knowledge and easily solves any of your queries related to farming. Agriplast Protected Cultivation is a well-known Polyhouse Manufacturer in India that strives to offer the best possible outcomes along with workable solutions to help you lead a continuous growth process.
          </p>
          <button className="bg-white text-agri-green hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto transition-all shadow-xl">
            <MessageCircle size={24} fill="currentColor" />
            CONNECT ON WHATSAPP
          </button>
        </motion.div>
      </div>
    </section>
  );
}
