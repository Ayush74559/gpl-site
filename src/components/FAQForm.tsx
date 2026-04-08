import React, { useState } from 'react';
import { Plus, Minus, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
      >
        {question}
        {isOpen ? <Minus size={18} className="text-agri-green" /> : <Plus size={18} className="text-agri-green" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-gray-600 text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQForm() {
  const faqs = [
    {
      question: "Why Agriplast Polyhouse ensure superior yields compared to other polyhouses?",
      answer: "Agriplast polyhouses are engineered with precision using high-quality materials and advanced ventilation systems that create the ideal microclimate for crops, leading to significantly higher yields."
    },
    {
      question: "What is the difference between greenhouse and polyhouse?",
      answer: "A greenhouse is a general term for a structure that provides a controlled environment for plants. A polyhouse is a specific type of greenhouse that uses polyethylene film as the cladding material."
    },
    {
      question: "What is the working of a greenhouse?",
      answer: "Greenhouses work by trapping solar radiation. The sunlight enters through the transparent cladding and warms the interior, while the cladding prevents the heat from escaping, creating a warm environment."
    },
    {
      question: "How do we keep the greenhouse warmer during winters?",
      answer: "During winters, greenhouses can be kept warm using insulation, thermal screens, or active heating systems like boilers or heaters."
    },
    {
      question: "What are the benefits of a greenhouse?",
      answer: "Benefits include year-round cultivation, protection from pests and diseases, controlled environment for optimal growth, and higher quality produce."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-12">
              Frequently <span className="text-agri-green">Asked Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Connect with <span className="text-agri-green">Agriplast</span>
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all appearance-none">
                    <option>India (+91)</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile number"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email (optional)"
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all"
              />
              <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all">
                <option>— Select State —</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
                <option>Tamil Nadu</option>
              </select>
              <textarea
                placeholder="Your requirement / message (optional)"
                rows={4}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green/20 focus:border-agri-green transition-all"
              ></textarea>
              <button className="w-full bg-agri-green hover:bg-agri-dark-green text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-agri-green/20">
                SEND MESSAGE
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
