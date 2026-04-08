import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'OVERVIEW',
      links: ['About the Company', 'Download Brochure', 'Innovations', 'Advisory Service', 'Our Projects', 'Blogs and Articles', 'Contact us']
    },
    {
      title: 'POLYHOUSE / GREENHOUSE',
      links: ['Polyhouse Construction', 'Greenhouse Setup', 'Shade Net Houses', 'Hydroponic Systems', 'Subsidy Assistance', 'Market Linkage']
    },
    {
      title: 'HYDROPONICS',
      links: ['What is Hydroponics?', 'Types of Hydroponics', 'Advantages of Hydroponics', 'Why choose Agriplast Hydroponics?', 'FAQs']
    },
    {
      title: 'AUTOMATION',
      links: ['PRIVA Automation', 'Autogrow Automation', 'BlueLab Products', 'Automation Systems']
    },
    {
      title: 'NET HOUSE',
      links: ['What is Net House?', 'Types', 'Advantages', 'Cost of Setup', 'Planning Steps']
    },
    {
      title: 'POLICIES',
      links: ['Privacy Policy', 'Terms & Conditions', 'Subsidy Guide']
    }
  ];

  return (
    <footer className="bg-white text-[#1F2D2B] border-t border-gray-200 pt-20 pb-10">

      {/* Top Gradient Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2E7D4F]/40 to-transparent mb-12" />

      <div className="container mx-auto px-4 md:px-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Logo + Contact */}
          <div className="space-y-8">

            <div className="bg-[#F8FAF9] p-4 rounded-2xl border border-gray-200 inline-block">
              <img src="/logos/footer_logo_no_bg.png" alt="IGPL Logo" className="h-20" />
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#2E7D4F] uppercase tracking-widest mb-4">
                Visit Our Office
              </h3>

              <div className="space-y-4 text-sm text-gray-600">

                <div className="flex gap-3">
                  <MapPin className="text-[#2E7D4F]" size={18} />
                  <p>
                    Innovative Greenhouse Projects LLP<br />
                    Ludhiana, Punjab
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-[#2E7D4F]" size={18} />
                  <p>+91 94654 05042</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-[#2E7D4F]" size={18} />
                  <p>info@igcprojects.in</p>
                </div>

              </div>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-bold text-[#2E7D4F] uppercase tracking-widest mb-4">
                Connect
              </p>

              <div className="flex gap-3">
                {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#2E7D4F] hover:text-white transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold text-[#2E7D4F] mb-6 uppercase tracking-widest">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-[#2E7D4F] text-sm transition flex items-center gap-2 group"
                      >
                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">

          <p>© 2026 IGPL. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2E7D4F] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#2E7D4F] transition">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}