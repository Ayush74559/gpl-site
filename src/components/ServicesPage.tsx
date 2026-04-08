import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ArrowRight, BarChart3, ShieldCheck, Globe2, Clock } from 'lucide-react';

const SCMStep = ({ number, title, content }: { number: string, title: string, content: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <span className="text-4xl font-bold text-agri-green/20 block mb-4">{number}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
  </motion.div>
);

interface ExpertiseCardProps {
  category: string;
  title: string;
  content: string;
  icon: any;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ category, title, content, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-agri-green transition-all"
  >
    <span className="text-xs font-bold uppercase tracking-wider text-agri-green mb-2 block">{category}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-agri-green transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
  </motion.div>
);

export default function ServicesPage() {
  const expertise = [
    { category: 'Essential', title: 'Naturally Ventilated Polyhouses (NVP)', content: 'Cost-effective structures with natural air circulation for year-round cultivation.' },
    { category: 'High-Tech', title: 'Fan & Pad Cooling Greenhouses', content: 'Climate-controlled environments for heat-sensitive high-value crops.' },
    { category: 'Versatile', title: 'Shade Net Houses', content: 'UV-protected structures for nurseries, floriculture, and partial shade crops.' },
    { category: 'Future-Ready', title: 'Hydroponic Systems', content: 'NFT, Dutch Bucket, and Vertical Towers for soil-less precision farming.' },
    { category: 'Advanced', title: 'G0/G1 Aeroponic Potato Seed Infrastructure', content: 'Advanced aeroponic systems for disease-free potato seed production.' },
    { category: 'Laboratory', title: 'Tissue Culture Lab Setup', content: 'Complete lab infrastructure for plant tissue culture and micropropagation.' },
    { category: 'Automation', title: 'Irrigation & Fertigation Systems', content: 'Automated drip irrigation with precise nutrient delivery systems.' },
    { category: 'Liaison', title: 'Subsidy Documentation & Liaison', content: 'End-to-end support for NHM, MIDH, NHB scheme applications and approvals.' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Greenhouse EPC Polyhouse Infrastructure <br />
            <span className="text-agri-green">Hydroponics & Aeroponics Systems</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            IGPL provides end-to-end greenhouse and polyhouse EPC consulting for farmers, agri-entrepreneurs, and institutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-agri-green hover:bg-agri-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-agri-green/20">
              Request Services
            </button>
            <button className="bg-white border border-gray-200 hover:border-agri-green text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              View Our Process
            </button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transforming Open-Field Farms into Climate-Controlled Enterprises</h2>
              <div className="space-y-6 text-gray-600">
                <p>All projects are executed using the SCM Framework, transforming open-field farms into high-income, climate-controlled enterprises.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Greenhouse project planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Hydroponics farm setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Aeroponic potato seed production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Protected cultivation design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">NHM / NHB subsidy guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Project Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Engineering Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-agri-green" />
                    <span className="font-medium">Business Consulting</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe2 size={24} className="text-agri-green mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Availability</h3>
                    <p className="text-gray-600">Remote • In-person (Ludhiana)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-agri-green mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Pricing</h3>
                    <p className="text-gray-600">Contact for pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCM Section */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Sustainability Conversion Model (SCM)
            </h2>
            <p className="text-gray-600">
              Our proprietary framework ensures every project moves from concept to completion with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SCMStep 
              number="01" 
              title="Assessment & Demonstration" 
              content="Farm audit, soil analysis, water testing, crop suitability mapping, subsidy eligibility check. We walk your land before we pitch anything."
            />
            <SCMStep 
              number="02" 
              title="Design & Strategic Planning" 
              content="Custom polyhouse design, structure selection, cost modelling, government application filing."
            />
            <SCMStep 
              number="03" 
              title="EPC Construction & Execution" 
              content="Procurement, civil + structural construction, climate systems, irrigation, quality checks. Fully supervised."
            />
            <SCMStep 
              number="04" 
              title="Full Scale & Market Linkage" 
              content="Crop cycle support, yield monitoring, farmer training, connecting to buyers, mandis, and export channels."
            />
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What IGPL Builds</h2>
            <div className="h-1.5 w-24 bg-agri-green rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, idx) => (
              <ExpertiseCard 
                key={idx} 
                category={item.category}
                title={item.title}
                content={item.content}
                icon={CheckCircle2} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Media / Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Project Types</h2>
            <div className="h-1.5 w-24 bg-agri-green rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌱</span>
                <h3 className="text-xl font-bold text-gray-900">Hi-Tech Unit – Aeroponics</h3>
              </div>
              <p className="text-gray-600">An advanced aeroponic mini-tuber production unit designed for disease-free potato seed cultivation using mist-based nutrient delivery.</p>
              <p className="text-agri-green font-bold mt-4">Produces 8–10x higher yield compared to traditional methods.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hi-Tech Greenhouse</h3>
              <p className="text-gray-600">Advanced climate-controlled greenhouse structures with precision environment control systems.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Saw-Tooth Polyhouse</h3>
              <p className="text-gray-600">Optimally designed polyhouse with saw-tooth ventilation for natural air circulation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hydroponic Infrastructure</h3>
              <p className="text-gray-600">Complete hydroponic systems including NFT, Dutch Bucket, and Vertical Tower setups.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Naturally Ventilated Polyhouse</h3>
              <p className="text-gray-600">Cost-effective structures with natural air circulation for year-round cultivation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shadenet House</h3>
              <p className="text-gray-600">UV-protected structures for nurseries, floriculture, and partial shade crops.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cable Purlin Nethouse</h3>
              <p className="text-gray-600">Advanced net house structures with cable purlin systems for enhanced durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 md:px-10 bg-white border-y border-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Trust & Statistics</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Engineered for Certainty: Our Track Record</h2>
            <div className="h-1.5 w-24 bg-agri-green rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-agri-green mb-4">0</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Execution Certainty</h3>
              <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-sm">We eliminate structural and financial risks. Regardless of unforeseen challenges, we guarantee total project completion to your exact specifications.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-agri-green mb-4">320+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unmatched Delivery Record</h3>
              <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-sm">Our extensive engineering portfolio guarantees predictable, high-performance turn-key handovers, consistently overcoming the most demanding regional and climatic conditions.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-agri-green mb-4">7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Operational Reach</h3>
              <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-sm">Benefit from localized agronomic intelligence and robust supply chains, ensuring rapid deployment and seamless execution across seven dynamic regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 md:px-10 bg-agri-green">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which structure fits your land and budget?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Book a free 30-minute consultation. We assess first — recommend second.
          </p>
          <button className="bg-white text-agri-green hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
