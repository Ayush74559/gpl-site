import React from 'react';
import { ChevronRight, MessageCircle, Phone, MapPin, Mail, Clock, ShieldCheck, User, Map, TreePine } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact-page" className="pt-24 bg-white">
      {/* Banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://picsum.photos/seed/igpl-contact/1920/600"
          alt="IGPL Contact Banner"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Your Polyhouse Journey</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Fill out the form below and our team will get back to you within 24 hours with a personalized farm assessment.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 px-4 md:px-10 border-b border-gray-100">
        <div className="container mx-auto flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-agri-green transition-colors">Home</a>
          <ChevronRight size={14} />
          <span className="text-agri-green font-medium">Contact IGPL</span>
        </div>
      </div>

      <div className="py-20 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info & QA */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-agri-green rounded-full"></span>
                  Contact Details
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-agri-green/10 rounded-2xl flex items-center justify-center text-agri-green shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-xl font-bold text-gray-900">+91-94654-05042</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                      <p className="text-xl font-bold text-gray-900">+91-62800-85042</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-xl font-bold text-gray-900">info@igcprojects.in</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Response Time</p>
                      <p className="text-xl font-bold text-gray-900">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-agri-green/10 rounded-2xl flex items-center justify-center text-agri-green shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Office</p>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        16-K, 1st Floor, Opp. P.A.U Gate No.1, Sarabha Nagar, Ludhiana, Punjab - 141001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-600/20">
                    <MessageCircle size={24} fill="currentColor" />
                    WhatsApp Us Now
                  </button>
                </div>
              </div>

              {/* Quality Assurance Card */}
              <div className="bg-gray-900 rounded-[32px] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-agri-green/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-agri-green rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">IGPL Quality Assurance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every site visit is conducted by a senior agronomist and EPC structural engineer. No temporary agents.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Free Farm Assessment</h3>
                  <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="e.g. Harbir Singh"
                          className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-2 ml-1">
                        <input type="checkbox" id="whatsapp" className="accent-agri-green w-4 h-4" />
                        <label htmlFor="whatsapp" className="text-xs text-gray-500">This number is on WhatsApp</label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">State</label>
                      <div className="relative">
                        <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <select className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all appearance-none">
                          <option>Select your state</option>
                          <option>Punjab</option>
                          <option>Haryana</option>
                          <option>Rajasthan</option>
                          <option>Uttar Pradesh</option>
                          <option>Himachal Pradesh</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">City / District</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="e.g. Ludhiana"
                          className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Land Size (Acres)</label>
                      <input
                        type="number"
                        placeholder="e.g. 2"
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Target Crop</label>
                      <div className="relative">
                        <TreePine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <select className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-agri-green/10 focus:border-agri-green transition-all appearance-none">
                          <option>Select crop</option>
                          <option>Cucumber</option>
                          <option>Tomato</option>
                          <option>Capsicum</option>
                          <option>Flowers</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 ml-1">Current Farming Status</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Open Field', 'Existing Protected', 'Not Farming Yet'].map((status) => (
                        <label key={status} className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-agri-green hover:bg-agri-green/5 transition-all group">
                          <input type="radio" name="status" className="hidden" />
                          <span className="text-sm font-bold text-gray-600 group-hover:text-agri-green">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-agri-green hover:bg-agri-dark-green text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-agri-green/30 transform hover:-translate-y-1 active:translate-y-0">
                      Get My Free Farm Assessment
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-6">
                      We respond to every enquiry within 24 hours. Free, honest, and obligation-free.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[500px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8582897651!2d75.811!3d30.901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAzLjYiTiA3NcKwNDgnMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
