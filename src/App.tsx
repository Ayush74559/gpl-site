/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import IntroSection from './components/IntroSection';
import CTASection from './components/CTASection';
import LogoCarousel from './components/LogoCarousel';
import SuccessStories from './components/SuccessStories';
import FAQForm from './components/FAQForm';
import GlobalPresence from './components/GlobalPresence';
import ContactSection from './components/ContactSection';
import ServicesPage from './components/ServicesPage';
import CropsPage from './components/CropsPage';
import SubsidyPage from './components/SubsidyPage';
import AboutPage from './components/AboutPage';
import ArticlesPage from './components/ArticlesPage';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState<'home' | 'contact' | 'services' | 'crops' | 'subsidy' | 'about' | 'articles' | 'portfolio'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Header setView={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <CategoryGrid />
            <IntroSection />
            <CTASection />
            <LogoCarousel />
            <SuccessStories />
            <FAQForm />
            <GlobalPresence />
          </>
        ) : view === 'services' ? (
          <ServicesPage />
        ) : view === 'crops' ? (
          <CropsPage />
        ) : view === 'subsidy' ? (
          <SubsidyPage />
        ) : view === 'about' ? (
          <AboutPage />
        ) : view === 'articles' ? (
          <ArticlesPage />
        ) : (
          <ContactSection />
        )}
      </main>
      <Footer />
    </div>
  );
}
