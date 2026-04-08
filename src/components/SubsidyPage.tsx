import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, ChevronUp, FileText, Search, Send, ShieldCheck, UserCheck } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-agri-green transition-colors"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SubsidyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    acres: '',
    crop: ''
  });

  const schemes = [
    {
      id: 'nhm',
      tag: 'Most Popular',
      title: 'NHM',
      fullTitle: 'National Horticulture Mission',
      content: 'Covers 50-85% of unit cost for vegetable and floriculture polyhouses. Most widely used scheme across all 7 states IGPL operates in.'
    },
    {
      id: 'midh',
      title: 'MIDH',
      fullTitle: 'Mission for Integrated Development of Horticulture',
      content: 'Centrally sponsored scheme for protected cultivation infrastructure, cold chain, and post-harvest management.'
    },
    {
      id: 'nhb',
      title: 'NHB',
      fullTitle: 'National Horticulture Board',
      content: 'Capital subsidy for hi-tech greenhouses, pack houses, and processing units. Ideal for floriculture and commercial horticulture.'
    }
  ];

  const steps = [
    { number: '1', title: 'Free eligibility assessment of your land and farmer category' },
    { number: '2', title: 'Documentation collection and DPR (Detailed Project Report) preparation' },
    { number: '3', title: 'Application filing with State Horticulture Department or NHB' },
    { number: '4', title: 'Inspection coordination and approval follow-up' },
    { number: '5', title: 'Construction begins with subsidy approval in hand' },
    { number: '6', title: 'Final claim submission and disbursement support' }
  ];

  const faqs = [
    {
      question: "Who is eligible for NHM polyhouse subsidy?",
      answer: "Small and marginal farmers, individual entrepreneurs, and self-help groups are generally eligible. Eligibility varies slightly by state and category (General/SC/ST)."
    },
    {
      question: "How much subsidy can I get on a 1 acre polyhouse?",
      answer: "Depending on the scheme and state, subsidies typically range from 50% to 85% of the standard unit cost defined by the government."
    },
    {
      question: "How long does the subsidy approval process take?",
      answer: "The timeline varies by state but usually takes 2-4 months from application filing to administrative approval."
    },
    {
      question: "Can I apply for subsidy on an existing polyhouse?",
      answer: "No, subsidies are generally for new construction and require prior approval before construction begins."
    },
    {
      question: "What documents are needed for NHM application?",
      answer: "Key documents include land records (7/12 or Jamabandi), Aadhaar card, bank passbook, soil/water test reports, and a Detailed Project Report (DPR)."
    },
    {
      question: "Does IGPL charge for subsidy documentation help?",
      answer: "IGPL provides end-to-end documentation support as part of our EPC services to ensure zero confusion for our clients."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Government Schemes
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Government is Paying Up to <span className="text-agri-green">50% of Your Polyhouse Cost.</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Are You Claiming It?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Most farmers miss subsidies — not because they don't qualify, but because the paperwork is complex. IGPL handles everything end-to-end.
          </motion.p>
        </div>
      </section>

      {/* Schemes */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Schemes. One Partner. Zero Confusion.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schemes.map((scheme) => (
              <div key={scheme.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative">
                {scheme.tag && (
                  <span className="absolute -top-3 left-8 bg-agri-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {scheme.tag}
                  </span>
                )}
                <h3 className="text-2xl font-black text-agri-green mb-1">{scheme.title}</h3>
                <p className="text-sm font-bold text-gray-900 mb-6">{scheme.fullTitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{scheme.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How IGPL Handles Your Subsidy
            </h2>
            <p className="text-gray-600">From eligibility check to final disbursement — we manage everything.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="w-12 h-12 bg-agri-green text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-lg shadow-agri-green/20">
                  {step.number}
                </div>
                <p className="text-gray-900 font-bold leading-tight pt-2">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <span className="text-agri-green font-bold uppercase tracking-widest text-sm mb-4 block">Free Check</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Check Your Subsidy Eligibility in 5 Minutes
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Our team calls you within 24 hours. Free. No obligation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-agri-green/20 rounded-full flex items-center justify-center text-agri-green">
                    <UserCheck size={20} />
                  </div>
                  <p className="text-gray-300">Expert Agronomist Consultation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-agri-green/20 rounded-full flex items-center justify-center text-agri-green">
                    <FileText size={20} />
                  </div>
                  <p className="text-gray-300">Detailed Project Report Support</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-agri-green/20 rounded-full flex items-center justify-center text-agri-green">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-gray-300">100% Documentation Transparency</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 md:p-20">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Harbir Singh"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-agri-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-agri-green transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">State</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-agri-green transition-colors appearance-none">
                      <option>Select state</option>
                      <option>Punjab</option>
                      <option>Haryana</option>
                      <option>Rajasthan</option>
                      <option>Uttar Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Land (Acres)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-agri-green transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Proposed Crop</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:outline-none focus:border-agri-green transition-colors appearance-none">
                    <option>Select crop</option>
                    <option>Tomato</option>
                    <option>Capsicum</option>
                    <option>Cucumber</option>
                    <option>Rose</option>
                    <option>Blueberry</option>
                  </select>
                </div>
                <button className="w-full bg-agri-green hover:bg-agri-dark-green text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-agri-green/20 flex items-center justify-center gap-2">
                  Check My Eligibility <Send size={20} />
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Our team calls you within 24 hours. Free. No obligation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
