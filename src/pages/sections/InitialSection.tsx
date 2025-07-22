

import { Button } from "@/components/ui/button";

const InitialSection = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Fitness training" },
    { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Healthy nutrition" },
    { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Outdoor workout" },
    { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Yoga wellness" },
  ];

  const handleScrollToPrograms = () => {
    const section = document.getElementById("program-catalog-carousel");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden ">
      {/* Background Images - Horizontal Layout */}
      <div className="absolute inset-0 grid grid-cols-4 ">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gold opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full px-6">
          {/* Subtitle */}
          {/* <p className="text-fitness-secondary text-lg md:text-xl font-medium mb-4 tracking-wide uppercase animate-pulse">
            Mova-se Conosco
          </p> */}
          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 w-full text-center">
            Descobre o teu programa ideal
          </h1>
          {/* CTA Button */}
          <Button
          onClick={handleScrollToPrograms} 
            className="animate-bounce hover:animate-none text-gold font-bold text-lg px-8 py-4 mt-2"
          >
            PARTICIPE AGORA
          </Button>
          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 w-full max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold mb-2">500+</h3>
              <p className="text-sm uppercase tracking-wide">Membros Ativos</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold mb-2">24/7</h3>
              <p className="text-sm uppercase tracking-wide">Acesso Total</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold mb-2">15+</h3>
              <p className="text-sm uppercase tracking-wide">Modalidades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-wider mb-2">SCROLL</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;