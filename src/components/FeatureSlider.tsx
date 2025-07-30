import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { programs } from "@/pages/sections/programsData";

// CSS adicional para scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

const VISIBLE_ITEMS_DESKTOP = 3;
const VISIBLE_ITEMS_TABLET = 2;
const VISIBLE_ITEMS_MOBILE = 1;

const FeatureSlider = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<number>(
    programs[0].id
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS_DESKTOP);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedProgram =
    programs.find((p) => p.id === selectedProgramId) || programs[0];

  // Definir cores baseadas no ID do programa
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

  // Handle responsive visibility
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);

      if (width < 640) {
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
      } else if (width < 1024) {
        setVisibleItems(VISIBLE_ITEMS_TABLET);
      } else {
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-select program based on current index
  useEffect(() => {
    const visiblePrograms = programs.slice(
      currentIndex,
      currentIndex + visibleItems
    );
    if (visiblePrograms.length > 0) {
      // Seleciona o programa do meio dos visíveis, ou o primeiro se houver apenas um
      const middleIndex = Math.floor(visiblePrograms.length / 2);
      setSelectedProgramId(visiblePrograms[middleIndex].id);
    }
  }, [currentIndex, visibleItems]);

  // Navigation functions
  const canScrollLeft = true; // Sempre pode scrollar em loop infinito
  const canScrollRight = true; // Sempre pode scrollar em loop infinito

  const scroll = (direction: "left" | "right") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    let newIndex = currentIndex;

    if (direction === "left") {
      newIndex =
        currentIndex <= 0 ? programs.length - visibleItems : currentIndex - 1;
    } else if (direction === "right") {
      newIndex =
        currentIndex >= programs.length - visibleItems ? 0 : currentIndex + 1;
    }

    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleProgramSelect = (programId: number) => {
    setSelectedProgramId(programId);
  };

  // Drag event handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && canScrollLeft) {
        scroll("left");
      } else if (dragOffset < 0 && canScrollRight) {
        scroll("right");
      }
    }

    setDragOffset(0);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 sm:py-12 lg:py-20">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Os Nossos
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Serviços Premium
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
              Descubra a nossa gama completa de soluções fitness desenhadas para
              te ajudar a alcançar os teus objetivos
            </p>
          </motion.div>

          {/* Universal Responsive Carousel */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Cards Container */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <motion.div
                ref={containerRef}
                className="flex gap-3 sm:gap-4 lg:gap-6 cursor-grab active:cursor-grabbing select-none touch-pan-y"
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  width: `${(programs.length / visibleItems) * 100}%`,
                  touchAction: "pan-y pinch-zoom",
                }}
                animate={{
                  x: `-${currentIndex * (100 / visibleItems)}%`,
                  scale: isDragging ? 0.99 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  mass: 0.8,
                  duration: 0.6,
                }}
                // Mouse events
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleDragStart(e.clientX);
                }}
                onMouseMove={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                    handleDragMove(e.clientX);
                  }
                }}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                // Touch events para melhor suporte móvel
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleDragStart(e.touches[0].clientX);
                }}
                onTouchMove={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                    handleDragMove(e.touches[0].clientX);
                  }
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleDragEnd();
                }}
                onTouchCancel={handleDragEnd}
              >
                {programs.map((program, index) => (
                  <motion.div
                    key={program.id}
                    className="flex-shrink-0 cursor-pointer transition-all duration-300 select-none"
                    style={{
                      width: `${100 / programs.length}%`,
                      userSelect: "none",
                      WebkitUserSelect: "none",
                    }}
                    onClick={() => {
                      if (!isDragging) {
                        handleProgramSelect(program.id);
                      }
                    }}
                    whileHover={{
                      y: isDragging ? 0 : -6,
                      scale: isDragging ? 1 : 1.03,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    animate={{
                      scale: selectedProgramId === program.id ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`
                        relative h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md
                        ${
                          selectedProgramId === program.id
                            ? "ring-2 sm:ring-3 ring-blue-400 ring-opacity-70 shadow-xl"
                            : "hover:shadow-lg"
                        }
                        transition-all duration-300 transform
                      `}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover select-none pointer-events-none"
                          style={{
                            userSelect: "none",
                            WebkitUserSelect: "none",
                          }}
                          draggable={false}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
                            program.id
                          )} opacity-75`}
                        />
                      </div>

                      {/* Content */}
                      <div
                        className="relative h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5 text-white select-none pointer-events-none"
                        style={{ userSelect: "none", WebkitUserSelect: "none" }}
                      >
                        <div className="mb-2 sm:mb-3">
                          <div className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-white/25 backdrop-blur-sm rounded-full mb-2 sm:mb-3">
                            {program.activities[0]?.icon}
                          </div>
                          <p className="text-xs sm:text-sm lg:text-base opacity-95 mb-1 select-none font-medium">
                            {program.duration} • {program.level}
                          </p>
                          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2 select-none leading-tight">
                            {program.name}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-base opacity-90 line-clamp-2 select-none leading-snug">
                            {program.description}
                          </p>
                        </div>
                      </div>

                      {/* Active indicator */}
                      {selectedProgramId === program.id && (
                        <motion.div
                          className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {Array.from({
                length: Math.ceil(programs.length / visibleItems),
              }).map((_, groupIndex) => (
                <motion.button
                  key={groupIndex}
                  onClick={() => {
                    setCurrentIndex(groupIndex * visibleItems);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visibleItems) === groupIndex
                      ? "bg-blue-500 w-6 sm:w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Selected Program Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProgramId}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Program Image */}
              <motion.div
                className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
                    selectedProgram.id
                  )} opacity-20`}
                />

                {/* Mobile/Tablet overlay info */}
                {(isMobile || isTablet) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                )}
              </motion.div>

              {/* Program Details */}
              <motion.div
                className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-2 sm:px-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl lg:rounded-2xl mb-3 sm:mb-4">
                    <div className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                      {selectedProgram.activities[0]?.icon}
                    </div>
                  </div>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    {selectedProgram.duration} • {selectedProgram.level}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                    {selectedProgram.name}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                {/* Program Features */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Principais Características:
                  </h4>
                  <motion.ul
                    className="space-y-2 sm:space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {selectedProgram.features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-gray-700 text-sm sm:text-base lg:text-lg"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                  </motion.ul>
                </div>

                {/* CTA Button */}
                <motion.div
                  className="pt-2 sm:pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    className={`
                      h-11 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-base sm:text-lg lg:text-xl font-semibold rounded-full
                      bg-gradient-to-r ${getColorScheme(
                        selectedProgram.id
                      )} hover:scale-105
                      text-white shadow-lg hover:shadow-xl
                      transition-all duration-300 w-full sm:w-auto
                    `}
                  >
                    Começar Agora
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default FeatureSlider;
