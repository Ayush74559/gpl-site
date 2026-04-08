import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Wind, TrendingUp } from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  tagline: string;
  type: string;
  initial: string;
  description: string;
  image: string;
}

const crops: Crop[] = [
  {
    id: 'shodisurf',
    name: 'ShodiSurf',
    tagline: 'High Yield Guarantee',
    type: 'High-Value Seed',
    initial: 'S',
    description: 'High yield potential / Premium Tomato',
    image: 'https://picsum.photos/seed/tomato/600/800'
  },
  {
    id: 'purphont',
    name: 'Purphont',
    tagline: 'Growing Root Integrity',
    type: 'High-Value Seed',
    initial: 'P',
    description: 'Strong root system / Capsicum variety',
    image: 'https://picsum.photos/seed/capsicum/600/800'
  },
  {
    id: 'mamnn',
    name: 'Mamnn',
    tagline: 'The Harvest of Tomorrow',
    type: 'High-Value Seed',
    initial: 'M',
    description: 'High yield / Cucumber mastery',
    image: 'https://picsum.photos/seed/cucumber/600/800'
  },
  {
    id: 'rose',
    name: 'Rose',
    tagline: 'Floral Excellence',
    type: 'High-Value Seed',
    initial: 'R',
    description: 'Premium floriculture variety',
    image: 'https://picsum.photos/seed/rose/600/800'
  },
  {
    id: 'gerbera',
    name: 'Gerbera',
    tagline: 'Commercial Precision',
    type: 'High-Value Seed',
    initial: 'G',
    description: 'High stem density export grade',
    image: 'https://picsum.photos/seed/gerbera/600/800'
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    tagline: 'The Future of Export',
    type: 'High-Value Seed',
    initial: 'B',
    description: 'Premium emerging export crop',
    image: 'https://picsum.photos/seed/blueberry/600/800'
  }
];

const InfrastructureCard = ({ title, fullTitle, description, recommended, scale, icon: Icon }: any) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-agri-green/10 rounded-xl flex items-center justify-center text-agri-green">
        <Icon size={24} />
      </div>
      <div>
        <span className="text-xs font-bold text-agri-green uppercase tracking-wider">{title}</span>
        <h3 className="text-xl font-bold text-gray-900">{fullTitle}</h3>
      </div>
    </div>
    <p className="text-gray-600 text-sm mb-8 leading-relaxed">{description}</p>
    <div className="space-y-4">
      <div>
        <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Highly Recommended For</span>
        <p className="text-sm font-bold text-gray-900">{recommended}</p>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Investment Scale</span>
        <p className="text-sm font-bold text-gray-900">{scale}</p>
      </div>
    </div>
  </div>
);

export default function CropsPage() {

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
            What We Grow
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Right Crop. The Right Structure. <br />
            <span className="text-agri-green">The Right Return.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Every crop has an ideal growing environment. IGPL matches your land, climate, and budget to the highest-ROI option.
          </motion.p>
        </div>
      </section>

      {/* Crop Slider */}
      <section className="py-24 bg-gray-50 px-4 md:px-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">High-Value Crops</h2>
              <p className="text-gray-500">Select a crop to explore details</p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll gap-6" style={{ width: 'fit-content' }}>
              {[...crops, ...crops, ...crops].map((crop, idx) => (
                <div key={`${crop.id}-${idx}`} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] px-2">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full border border-gray-100">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-agri-green">
                        {crop.tagline}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-agri-green text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                          {crop.initial}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{crop.name}</h3>
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{crop.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{crop.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Infrastructure</span>
            <h2 className="text-4xl font-bold text-gray-900">Modern Structure Types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfrastructureCard 
              title="NVP"
              fullTitle="Naturally Ventilated Polyhouse"
              description="Uses natural airflow for ventilation. Ideal for regions with moderate temperatures."
              recommended="Tomato, Capsicum — warm climates"
              scale="Lowest among protected structures"
              icon={Wind}
            />
            <InfrastructureCard 
              title="Fan & Pad"
              fullTitle="Fan & Pad Greenhouse"
              description="Evaporative cooling system for precise temperature control year-round."
              recommended="Rose, Gerbera, Capsicum — temperature sensitive"
              scale="Mid range, highest climate control"
              icon={Droplets}
            />
            <InfrastructureCard 
              title="Hydroponic"
              fullTitle="Hydroponic System"
              description="Soil-free cultivation with nutrient-rich water. Maximum yield per square foot."
              recommended="Cucumber, Lettuce, Herbs — soil-free, year round"
              scale="Higher upfront, fastest ROI"
              icon={Leaf}
            />
          </div>
        </div>
      </section>

      {/* Emerging Opportunity */}
      <section className="py-24 px-4 md:px-10 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-agri-green/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Emerging Opportunity</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Blueberry Farming <br />in India</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-agri-green">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-lg text-gray-300">₹800-1200/kg farm gate price</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-agri-green">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-lg text-gray-300">8-15 year productive life</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-agri-green">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-lg text-gray-300">Growing export demand</p>
                </div>
              </div>
              <p className="text-gray-400 mb-10 max-w-lg">
                IGPL is India's leading blueberry infrastructure provider, helping farmers tap into this high-value market.
              </p>
              <button className="bg-agri-green hover:bg-agri-dark-green text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                Read the Blueberry Guide <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="w-24 h-24 bg-agri-green text-white rounded-3xl flex items-center justify-center text-5xl font-bold absolute -top-8 -left-8 z-20 shadow-2xl">
                B
              </div>
              <img 
                src="https://picsum.photos/seed/blueberry_farm/800/600" 
                alt="Blueberry Farming" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-10 bg-agri-green">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Which crop suits your land?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Our agronomists will analyze your soil, climate, and market access to recommend the highest-ROI crop for your farm.
          </p>
          <button className="bg-white text-agri-green hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl">
            Ask Our Crop Expert
          </button>
        </div>
      </section>
    </div>
  );
}
