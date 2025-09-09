import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutTrainerSection from "./sections/AboutTrainerSection";
import FeaturedCarouselSection from "./sections/FeaturedCarouselSection";
import ProgramCatalogSection from "./sections/ProgramCatalogSection";
import AppBenefitsSection from "./sections/AppBenefitsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import PricingSection from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import NewsletterSection from "./sections/NewsletterSection";
import InitialSection from "./sections/InitialSection";
import ProgramsSlide from "@/components/ProgramsSlider";
import FeatureSlider from "@/components/FeatureSlider";
import SiteAlert from "./sections/SiteAlert";
import PromoPopup from "./sections/PromoPopUp";
import FormSection from "@/components/FormSection";
import SlickCarousel from "@/components/SlickCarousel";
import Footer from "./sections/Footer";
import SocialFloatingBubble from "@/components/SocialFloatingBubble";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SiteAlert
        title="Novidades do Site"
        message="Estamos com uma nova funcionalidade disponível! Confira as últimas atualizações em nosso painel."
        type="info"
      /> */}
      {/* <SocialProofPopup /> */}
      <InitialSection />
      <PricingSection />
      {/* <FeaturedCarouselSection /> */}
      {/* <HeroSection /> */}
      {/* <AboutTrainerSection /> */}
      {/* <ProgramsSlide /> */}
      {/* <FeatureSlider /> */}
      <SlickCarousel />
      {/* <ProgramCatalogSection /> */}
      {/* <AppBenefitsSection /> */}
      <TestimonialsMarquee />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      {/* <NewsletterSection /> */}
      {/* <FormSection /> */}
      <Footer />
      <SocialFloatingBubble />
    </div>
  );
};
export default Index;
