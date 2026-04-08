import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, BookOpen, MessageCircle } from 'lucide-react';

const articles = [
  {
    title: 'Polyhouse Farming Knowledge Hub',
    subtitle: 'Expert guides on subsidies, crops, and protected cultivation for Indian farmers.',
    category: 'Farming Guide',
    date: 'April 5, 2026',
    image: 'https://picsum.photos/seed/article1/800/600',
    excerpt: 'Comprehensive guide covering all aspects of polyhouse farming in India, from government subsidies to crop selection and protected cultivation techniques.',
    tags: ['Subsidy', 'Crops', 'Protected Cultivation']
  },
  {
    title: 'Attended Farmers Event',
    subtitle: 'NBothung',
    category: 'Attended Farmers Event',
    date: 'April 5, 2026',
    image: 'https://picsum.photos/seed/article2/800/600',
    excerpt: 'Our team attended the NBothung farmers event to understand local farming challenges and showcase modern protected cultivation solutions.',
    tags: ['Event', 'Farmers']
  }
];

export default function ArticlesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-agri-green py-20 px-4 md:px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Knowledge Hub
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Latest Articles & <br />Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl mb-10 leading-relaxed"
          >
            Expert guides on subsidies, crops, and protected cultivation for Indian farmers.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-4 md:px-10 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-agri-green"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {['All', 'Farming Guide', 'Events', 'Crops', 'Subsidy'].map((tag) => (
                <button 
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tag === 'All' ? 'bg-agri-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-agri-green hover:text-white'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 px-4 md:px-10 bg-agri-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Read Article</span>
            <h2 className="text-4xl font-bold text-agri-text-dark">Latest Articles</h2>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-lg text-gray-500">No additional articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <motion.article 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-agri-green uppercase">{article.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        IGPL Team
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-agri-text-dark mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.subtitle}</p>
                    <p className="text-gray-500 text-sm mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {article.tags.map((tag) => (
                          <span key={tag} className="bg-agri-bg px-3 py-1 rounded-full text-xs font-medium text-agri-text-light">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-agri-green font-bold hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-agri-green rounded-3xl p-12 md:p-20">
            <MessageCircle size={48} className="mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Subscribe to our newsletter for expert guides on polyhouse farming, subsidies, and protected cultivation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none"
              />
              <button className="bg-agri-text-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 md:px-10 bg-agri-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-text-dark">Explore by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Farming Guide', count: 12 },
              { name: 'Crops', count: 8 },
              { name: 'Subsidy', count: 6 },
              { name: 'Events', count: 4 }
            ].map((cat) => (
              <div key={cat.name} className="bg-white p-6 rounded-2xl text-center hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                <h3 className="font-bold text-agri-text-dark mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}