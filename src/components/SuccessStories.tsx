import React from 'react';
import { motion } from 'motion/react';

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/farmer_success/800/1000"
              alt="Success Story"
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-1 w-12 rounded-full ${i === 3 ? 'bg-agri-green' : 'bg-white/50'}`} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              <span className="text-agri-green">Success</span> Stories
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Discover Agriplast's success stories in protected cultivation, showcasing thriving farms, increased yields, and sustainable agriculture practices. Our innovative solutions empower farmers, creating a brighter, more prosperous future.
              </p>
              <p>
                With a focus on sustainability and high productivity, Agriplast transforms agricultural practices. Join us in revolutionizing farming, enhancing food security, and positively impacting the environment and farmers' livelihoods.
              </p>
              <p>
                Agriplast: cultivating success for a better tomorrow. Experience the best in polyhouse and greenhouse technology, designed for efficiency and growth. Embrace sustainable farming with Agriplast's proven methods and expert support for lasting agricultural success.
              </p>
              <p className="font-bold text-agri-green">
                Cultivating success for a better tomorrow.
              </p>
            </div>
            <button className="mt-10 bg-agri-green hover:bg-agri-dark-green text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg shadow-agri-green/20">
              Read Success Stories
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
