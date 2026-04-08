'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, TreePine, ShieldCheck, ArrowUpRight, Filter, ChevronDown } from 'lucide-react';

export default function PortfolioPage({ setView }: { setView: (view: any) => void }) {
  const projects = [
    {
      id: 1,
      farmerName: 'Harbir Singh',
      scheme: 'NHB',
      location: 'XYZ, Dehradun, Rajasthan',
      crop: 'Cucumber',
      structure: 'Shade Net',
      incomeBefore: '200,000',
      incomeAfter: '175,000',
      image: 'https://picsum.photos/seed/portfolio1/800/600'
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            320+ Polyhouse Projects. <br />
            <span className="text-agri-green">Real Farmers. Real Results.</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 py-6 px-4 md:px-10 shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider">
            <Filter size={18} />
            Filter By:
          </div>
          
          <div className="flex flex-wrap gap-4 flex-1">
            {['State', 'Crop', 'Scheme', 'Structure'].map((filter) => (
              <div key={filter} className="relative group">
                <button className="flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-agri-green transition-all">
                  <span className="text-gray-400">{filter}:</span> All
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.farmerName} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-agri-green shadow-lg flex items-center gap-2">
                    <ShieldCheck size={14} />
                    {project.scheme} Verified
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.farmerName}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={14} className="text-agri-green" />
                      {project.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase mb-1">
                        <TreePine size={12} />
                        Crop
                      </div>
                      <p className="font-bold text-gray-900">{project.crop}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase mb-1">
                        <ShieldCheck size={12} />
                        Structure
                      </div>
                      <p className="font-bold text-gray-900">{project.structure}</p>
                    </div>
                  </div>

                  {/* Income Comparison */}
                  <div className="bg-agri-green/5 rounded-2xl p-6 mb-8 border border-agri-green/10">
                    <div className="grid grid-cols-2 gap-6 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                        <ArrowUpRight size={16} className="text-agri-green" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Before IGPL</span>
                        <p className="text-lg font-bold text-gray-400 line-through">₹{project.incomeBefore}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-agri-green uppercase block mb-1">After IGPL</span>
                        <p className="text-xl font-bold text-agri-green">₹{project.incomeAfter}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-agri-green transition-all flex items-center justify-center gap-2">
                    Read Case Study
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-10 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-agri-green/10 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want results like these?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Get your free farm assessment and discover how IGPL can transform your agricultural income.
          </p>
          <button 
            onClick={() => setView('contact')}
            className="bg-agri-green hover:bg-agri-dark-green text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-agri-green/20"
          >
            Get Your Free Farm Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
