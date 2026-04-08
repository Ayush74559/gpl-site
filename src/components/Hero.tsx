import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "From Open Fields to High-Income Polyhouses",
      subtitle: "Maximise your production with IGPL Structures",
      image: "/hero-images/hero1.png",
    },
    {
      title: "Uncertain yields turn into consistent, high-quality production",
      subtitle: "Innovative greenhouse technologies by IGPL",
      image: "/hero-images/hero2.png",
    },
    {
      title: "Low-income farming shifts to high-value, profitable cultivation",
      subtitle: "Optimize water usage with IGPL precision systems",
      image: "/hero-images/hero3.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-10 relative z-20 text-white">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] md:leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-200 line-clamp-2 md:line-clamp-none">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-outline">
              Start a Project
            </button>
            <button className="bg-agri-green hover:bg-agri-dark-green text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
              <MessageCircle size={20} fill="currentColor" />
              Connect on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-12 bg-agri-green' : 'w-6 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
