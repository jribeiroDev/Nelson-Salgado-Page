import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import { programs } from "@/pages/sections/programsData";

const VISIBLE_ITEMS_DESKTOP = 3;
const VISIBLE_ITEMS_TABLET = 2;
const VISIBLE_ITEMS_MOBILE = 1;

const getColorScheme = (id: number) => {
  const colors = [
    "from-blue-500 to-blue-700",
    "from-emerald-500 to-emerald-700",
    "from-amber-500 to-amber-700",
    "from-purple-500 to-purple-700",
    "from-pink-500 to-pink-700",
    "from-indigo-500 to-indigo-700",
  ];
  return colors[(id - 1) % colors.length];
};

const Card = ({
  program,
  isSelected,
  onClick,
}: {
  program: (typeof programs)[0];
  isSelected: boolean;
  onClick: () => void;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configurações mais suaves para o spring
  const cardX = useSpring(mouseX, { stiffness: 80, damping: 30, mass: 0.8 });
  const cardY = useSpring(mouseY, { stiffness: 80, damping: 30, mass: 0.8 });

  // Rotações limitadas apenas para o card selecionado
  const rotateX = useTransform(
    cardY,
    [-200, 200],
    isSelected ? [2, -2] : [0, 0]
  );
  const rotateY = useTransform(
    cardX,
    [-200, 200],
    isSelected ? [-2, 2] : [0, 0]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Apenas a card selecionada tem efeito 3D
    if (!isSelected) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    cardX.set(mouseX * 0.5);
    cardY.set(mouseY * 0.5);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-full h-full"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          zIndex: isSelected ? 10 : 0,
        }}
        animate={{
          scale: isSelected ? 1.05 : 0.95,
          y: isSelected ? -10 : 0,
          opacity: isSelected ? 1 : 0.8,
        }}
        transition={{
          scale: { duration: 0.4, ease: "easeInOut" },
          y: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer select-none
                    ${
                      isSelected
                        ? "ring-2 ring-blue-500 shadow-xl shadow-blue-500/20"
                        : "shadow-md opacity-80"
                    }`}
      >
        <img
          src={program.image}
          alt={program.name}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
            program.id
          )} opacity-40`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 text-white select-none">
          <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2 sm:mb-3">
            {program.activities[0]?.icon}
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 leading-tight">
            {program.name}
          </h3>
          <p className="text-xs sm:text-sm opacity-90">
            {program.duration} • {program.level}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SlickCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(4); // Índice da card selecionada (primeiro item por padrão)
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS_DESKTOP);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Para mobile pequenos
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
      } else if (width < 768) {
        // Para mobile maiores
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
      } else if (width < 1024) {
        // Para tablets
        setVisibleItems(VISIBLE_ITEMS_TABLET);
      } else if (width < 1280) {
        // Para desktops pequenos
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
      } else {
        // Para desktops grandes
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateToCard("prev");
      } else if (e.key === "ArrowRight") {
        navigateToCard("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calcula o offset para manter a card selecionada centralizada
  const getOffset = () => {
    // Para manter a card selecionada sempre no centro
    // precisamos calcular o deslocamento baseado no índice selecionado
    const centerPosition = Math.floor(visibleItems / 2);
    // Certificamos que o offset é sempre um número positivo ou zero para o primeiro item
    const offset = selectedIndex - centerPosition;
    return Math.max(0, Math.min(offset, programs.length - visibleItems));
  };

  // Função para navegar para a próxima/anterior card
  const navigateToCard = (direction: "next" | "prev") => {
    setSelectedIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % programs.length;
      } else {
        return (prevIndex - 1 + programs.length) % programs.length;
      }
    });
  };

  const cardWidthPercentage = 100 / visibleItems;
  const currentOffset = getOffset();

  return (
    <div className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden bg-gold flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          Descubra Nossos Programas
        </h2>

        <div
          className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px]"
          ref={containerRef}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key="carousel-container"
              className="absolute flex h-full"
              style={{
                width: `${programs.length * (100 / visibleItems)}%`,
                left: `-${currentOffset * cardWidthPercentage}%`,
              }}
              animate={{
                left: `-${currentOffset * cardWidthPercentage}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 1,
              }}
            >
              {programs.map((program, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <motion.div
                    key={program.id}
                    className="px-1 sm:px-2 select-none"
                    style={{ width: `${cardWidthPercentage}%` }}
                    layout
                    layoutId={`card-${program.id}`}
                  >
                    <Card
                      program={program}
                      isSelected={isSelected}
                      onClick={() => setSelectedIndex(index)}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center mt-4 sm:mt-6">
          {/* Botão Anterior */}
          <button
            onClick={() => navigateToCard("prev")}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 mr-2 sm:mr-4"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex space-x-1.5 sm:space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-white scale-125" : "bg-blue"
                }`}
                aria-label={`Ir para programa ${index + 1}`}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={() => navigateToCard("next")}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 ml-2 sm:ml-4"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Detalhes do programa selecionado - estilo responsivo */}
        {programs[selectedIndex] && (
          <div className="mb-8 md:mb-12 mt-10 md:mt-14 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:space-x-12">
              {/* Lado esquerdo - Imagem */}
              <div className="w-full md:w-2/5 lg:w-1/3 mb-6 md:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 sm:h-72 md:h-[350px] mx-auto">
                  <img
                    src={programs[selectedIndex].image}
                    alt={programs[selectedIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
                      programs[selectedIndex].id
                    )} opacity-60`}
                  ></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    {programs[selectedIndex].activities[0]?.icon}
                  </div>
                </div>
              </div>

              {/* Lado direito - Conteúdo */}
              <div className="w-full md:w-3/5 lg:w-2/3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <span className="inline-flex items-center text-xs sm:text-sm bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {programs[selectedIndex].duration}
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-sm bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full">
                    {programs[selectedIndex].level}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {programs[selectedIndex].name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {programs[selectedIndex].description}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Principais Características
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                    {(programs[selectedIndex].features || [])
                      .slice(0, 4)
                      .map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue mr-2 mt-0.5">✓</span>
                          <span className="text-blue">{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-6">
                  <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
                    Começar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlickCarousel;
