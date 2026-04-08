import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Globe, Linkedin, MapPin, Users } from 'lucide-react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
    <div className="text-4xl font-black text-agri-green mb-2">{value}</div>
    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{label}</div>
  </div>
);

const CredentialCard: React.FC<{ title: string; subtitle?: string; content: string }> = ({ title, subtitle, content }) => (
  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
    {subtitle && <p className="text-xs font-bold text-agri-green uppercase tracking-widest mb-4">{subtitle}</p>}
    <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
  </div>
);

export default function AboutPage() {
  const stats = [
    { value: '320+', label: 'Projects' },
    { value: '7', label: 'States' },
    { value: '10+', label: 'Years' },
    { value: '3', label: 'Govt Schemes' }
  ];

  const credentials = [
    {
      title: 'ICAR Foundation & Technology Day',
      subtitle: '96th Edition',
      content: 'Recognised for contributions to protected cultivation and technology dissemination.'
    },
    {
      title: 'ISO Certified',
      subtitle: 'ISO 9001:2015 / 14001:2015',
      content: 'Certified for Quality Management, Environmental Management, and Occupational Health & Safety.'
    },
    {
      title: 'CPRI Certified',
      subtitle: 'G0/G1 Aeroponics',
      content: 'Certified for advanced aeroponic potato seed production infrastructure.'
    },
    {
      title: 'UAM Registered MSME',
      subtitle: 'PB03D0006419',
      content: 'Registered under the Ministry of Micro, Small and Medium Enterprises.'
    }
  ];

  const states = [
    'Maharashtra', 'Karnataka', 'Telangana', 'Punjab', 'Haryana', 'Rajasthan', 'J&K'
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            About Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Leading Greenhouse EPC and <br />
            <span className="text-agri-green">Protected Cultivation Infrastructure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Innovative Greenhouse Projects LLP (IGPL) is a leading Greenhouse EPC and Protected Cultivation Infrastructure company in India, specialising in the design, engineering, and execution of climate-controlled agriculture systems.
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                IGPL develops polyhouse projects, hydroponic farms, aeroponic potato seed production units, and advanced protected cultivation infrastructure for farmers, agri-entrepreneurs, seed companies, and institutional investors. Our focus is on enabling high-value horticulture through Controlled Environment Agriculture (CEA) and technology-driven farming systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our projects follow a structured transformation approach known as the SCM Framework (Sustainability Conversion Model). This model converts traditional open-field farms into climate-resilient and commercially viable greenhouse enterprises through four key stages:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-agri-green mt-1" /> <span>Farm assessment and feasibility</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-agri-green mt-1" /> <span>Greenhouse EPC design and infrastructure planning</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-agri-green mt-1" /> <span>Engineering construction and system deployment</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-agri-green mt-1" /> <span>Crop strategy, scaling, and market linkage</span></li>
              </ul>
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat, idx) => (
                  <StatCard key={idx} {...stat} />
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about_igpl/800/1000" 
                alt="IGPL Project" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-agri-green text-white p-10 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-5xl font-black mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-widest">Years of Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">What We Deliver</span>
            <h2 className="text-4xl font-bold text-gray-900">End-to-End Greenhouse EPC Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Polyhouse Structures', desc: 'Climate-controlled greenhouse infrastructure for year-round cultivation' },
              { title: 'Hydroponic Farming Systems', desc: 'Soilless growing systems for high-yield, resource-efficient production' },
              { title: 'Aeroponic Potato Seed Production', desc: 'ICAR-CPRI licensed aeroponic technology for quality seed production' },
              { title: 'Climate-Controlled Growing Chambers', desc: 'Advanced environment control for optimal crop growth' },
              { title: 'Protected Nurseries', desc: 'Climate-controlled nursery infrastructure for healthy seedling production' },
              { title: 'High-Value Crop Production', desc: 'Expertise in commercially viable high-value horticulture crops' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-agri-green transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-gray-800 flex items-center justify-center p-12">
              <div className="w-48 h-48 bg-agri-green rounded-full flex items-center justify-center text-6xl font-black text-white shadow-2xl">
                RC
              </div>
            </div>
            <div className="lg:w-2/3 p-12 md:p-20 text-white">
              <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Founder & Managing Partner</span>
              <h2 className="text-4xl font-bold mb-6">Rajeev Chaudhary</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Protected cultivation specialist. Developer of the Sustainability Conversion Model (SCM) — a 4-phase framework that has guided 320+ polyhouse projects to completion.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  'CPRI Certified — G0/G1 Aeroponics',
                  'ICAR Foundation & Technology Day Speaker',
                  'Author — Blueberry India Newsletter',
                  'NHM | MIDH | NHB Scheme Expert'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-agri-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all">
                <Linkedin size={20} />
                Connect on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Credentials</span>
            <h2 className="text-4xl font-bold text-gray-900">Recognition & Credentials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <CredentialCard key={idx} {...cred} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-agri-green mb-8 flex justify-center">
            <Award size={64} />
          </div>
          <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight italic">
            "Our mission is to make protected cultivation accessible, profitable, and sustainable for every Indian farmer — regardless of land size, crop, or geography."
          </blockquote>
          <div className="font-bold text-gray-900">Rajeev Chaudhary</div>
          <div className="text-agri-green text-sm uppercase tracking-widest font-bold">Founder IGPL</div>
        </div>
      </section>

      {/* States */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">States We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map((state) => (
              <div key={state} className="bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 font-bold text-gray-700">
                <MapPin size={18} className="text-agri-green" />
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-10 bg-agri-green">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join 320+ farmers who have already made the transition to high-income protected cultivation.
          </p>
          <button className="bg-white text-agri-green hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl">
            Get My Free Farm Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
