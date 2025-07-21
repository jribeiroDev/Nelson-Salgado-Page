import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const handleScrollToPrograms = () => {
  const section = document.getElementById("program-catalog-carousel");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => (
  
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br bg-gold">
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    />
    <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-blue-600 bg-clip-text text-blue animate-fade-in">
        Descobre o teu programa ideal
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-blue max-w-3xl mx-auto animate-fade-in">
        Eleva, ainda mais, o teu potencial!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
        <Button size="lg" onClick={handleScrollToPrograms} className="bg-gradient-to-r text-gold px-8 py-4 text-lg font-semibold rounded-full  transition-all duration-300 hover:scale-105">
          Explorar programas
          <ChevronDown className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection; 