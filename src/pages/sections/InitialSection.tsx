import { Button } from "@/components/ui/button";

const images = [
  { src: "/assets/img_10.jpeg", alt: "Fitness training" },
  { src: "/assets/img_8.jpeg", alt: "Healthy nutrition" },
  { src: "/assets/img_5.jpeg", alt: "Yoga wellness" },
  { src: "/assets/img_13.jpeg", alt: "Outdoor workout" },
  
];

const InitialSection = () => {
  const handleScrollToPrograms = () => {
    const section = document.getElementById("program-catalog-carousel");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Responsive Layout */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4">
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 w-full text-center leading-tight">
            Descobre o teu programa ideal
          </h1>

          {/* CTA Button */}
          <Button
            onClick={handleScrollToPrograms}
            className="animate-bounce hover:animate-none text-gold font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mt-2 rounded-full shadow-2xl hover:shadow-gold/20 transition-all hover:scale-105"
          >
            PARTICIPE AGORA
          </Button>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white/80 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">
                500+
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Membros Ativos
              </p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">
                24/7
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Acesso Total
              </p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">
                15+
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Modalidades
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center text-gold animate-bounce">
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-wider mb-2 hidden sm:block">
            SCROLL
          </p>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
