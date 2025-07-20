import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutTrainerSection from './sections/AboutTrainerSection';
import FeaturedCarouselSection from './sections/FeaturedCarouselSection';
import ProgramCatalogSection from './sections/ProgramCatalogSection';
import AppBenefitsSection from './sections/AppBenefitsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import NewsletterSection from './sections/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <HeroSection /> */}
      <AboutTrainerSection />
      <FeaturedCarouselSection />
      <ProgramCatalogSection />
      <AppBenefitsSection />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <FaqSection /> */}
      {/* <NewsletterSection /> */}
    </div>
  );
};
export default Index;
