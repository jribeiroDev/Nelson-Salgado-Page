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
import SiteAlert from "./sections/SiteAlert";
import PromoPopup from "./sections/PromoPopUp";
import FormSection from "@/components/FormSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteAlert
        title="Novidades do Site"
        message="Estamos com uma nova funcionalidade disponível! Confira as últimas atualizações em nosso painel."
        type="info"
      />
      <PromoPopup />
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
      <FormSection />
    </div>
  );
};
export default Index;
