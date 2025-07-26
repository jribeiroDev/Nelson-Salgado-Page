import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutTrainerSection from "./sections/AboutTrainerSection";
import FeaturedCarouselSection from "./sections/FeaturedCarouselSection";
import ProgramCatalogSection from "./sections/ProgramCatalogSection";
import AppBenefitsSection from "./sections/AppBenefitsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import NewsletterSection from "./sections/NewsletterSection";
import InitialSection from "./sections/InitialSection";
import ProgramsSlide from "@/components/ProgramsSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InitialSection />
      {/* <HeroSection /> */}
      {/* <AboutTrainerSection /> */}
      <ProgramsSlide />
      {/* <FeaturedCarouselSection /> */}
      {/* <ProgramCatalogSection /> */}
      <AppBenefitsSection />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <FaqSection /> */}
      {/* <NewsletterSection /> */}
    </div>
  );
};
export default Index;
