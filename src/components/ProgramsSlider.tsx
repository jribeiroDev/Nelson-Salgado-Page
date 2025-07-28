import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "@/pages/sections/programsData";

const VISIBLE_ITEMS = 4;
const VISIBLE_ITEMS_MOBILE = 2.5; // Show 2.5 items on mobile
const ITEM_WIDTH = 250;
const ITEM_WIDTH_MOBILE = 120;

const ProgramTabs = ({
  programs,
  selectedProgramId,
  setSelectedProgramId,
  resetSections,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const selectedIndex = programs.findIndex((p) => p.id === selectedProgramId);
    if (selectedIndex !== -1) {
      const visibleItems = isMobile
        ? Math.floor(VISIBLE_ITEMS_MOBILE)
        : VISIBLE_ITEMS;
      const newStartIndex = Math.max(
        0,
        Math.min(selectedIndex - 1, programs.length - visibleItems)
      );
      setCurrentStartIndex(newStartIndex);
    }
  }, [selectedProgramId, programs, isMobile]);

  useEffect(() => {
    const visibleItems = isMobile
      ? Math.floor(VISIBLE_ITEMS_MOBILE)
      : VISIBLE_ITEMS;
    setCanScrollLeft(currentStartIndex > 0);
    setCanScrollRight(currentStartIndex < programs.length - visibleItems);
  }, [currentStartIndex, programs.length, isMobile]);

  const scroll = (direction: "left" | "right") => {
    if (isTransitioning) return; // Previne múltiplos cliques durante a transição

    let newStartIndex = currentStartIndex;
    const visibleItems = isMobile
      ? Math.floor(VISIBLE_ITEMS_MOBILE)
      : VISIBLE_ITEMS;
    const maxIndex = programs.length - visibleItems;

    if (direction === "left" && canScrollLeft) {
      newStartIndex = Math.max(0, currentStartIndex - 1);
    } else if (direction === "right" && canScrollRight) {
      newStartIndex = Math.min(maxIndex, currentStartIndex + 1);
    }

    if (newStartIndex !== currentStartIndex) {
      setIsTransitioning(true);
      setCurrentStartIndex(newStartIndex);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  const visiblePrograms = programs.slice(
    currentStartIndex,
    currentStartIndex + VISIBLE_ITEMS
  );

  const displayPrograms = visiblePrograms;

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pt-6 sm:pt-8 pb-8 sm:pb-12 relative">
      {/* Desktop Tab Navigation */}
      <div className="hidden md:flex items-center justify-center">
        {/* Seta Esquerda */}
        <motion.button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft || isTransitioning}
          className={`mr-6 p-4 rounded-2xl shadow-xl transition-all duration-300 backdrop-blur-sm ${
            canScrollLeft && !isTransitioning
              ? "bg-white/90 hover:bg-blue text-blue hover:text-gold cursor-pointer border border-blue/20 hover:border-blue/40"
              : "bg-gray-100/50 text-gray-300 cursor-not-allowed border border-gray-200"
          }`}
          whileHover={
            canScrollLeft && !isTransitioning ? { scale: 1.08, y: -2 } : {}
          }
          whileTap={canScrollLeft && !isTransitioning ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Container dos Tabs */}
        <div className="relative overflow-hidden">
          {/* Background gradient decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue/5 via-transparent to-blue/5 rounded-3xl"></div>

          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-2xl border border-white/50"
            style={{ width: `${VISIBLE_ITEMS * ITEM_WIDTH + 40}px` }}
          >
            <motion.div
              className="flex gap-3"
              animate={{ x: -currentStartIndex * ITEM_WIDTH }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
              style={{ width: `${programs.length * ITEM_WIDTH}px` }}
            >
              {programs.map((prog, index) => (
                <motion.div
                  key={prog.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex-shrink-0"
                  style={{ width: `${ITEM_WIDTH - 12}px` }}
                >
                  <Button
                    onClick={() => {
                      setSelectedProgramId(prog.id);
                      resetSections();
                    }}
                    className={`relative h-14 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-sm border-0 shadow-lg ${
                      selectedProgramId === prog.id
                        ? "bg-gradient-to-r from-blue via-blue-600 to-blue-700 text-gold "
                        : "bg-white text-blue hover:text-gold hover:bg-blue hover:shadow-xl"
                    }`}
                  >
                    <span className="truncate relative z-10">{prog.name}</span>
                    {selectedProgramId === prog.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue via-blue-600 to-blue-700 rounded-2xl"
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.8,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Seta Direita */}
        <motion.button
          onClick={() => scroll("right")}
          disabled={!canScrollRight || isTransitioning}
          className={`ml-6 p-4 rounded-2xl shadow-xl transition-all duration-300 backdrop-blur-sm ${
            canScrollRight && !isTransitioning
              ? "bg-white/90 hover:bg-blue text-blue hover:text-gold cursor-pointer border border-blue/20 hover:border-blue/40"
              : "bg-gray-100/50 text-gray-300 cursor-not-allowed border border-gray-200"
          }`}
          whileHover={
            canScrollRight && !isTransitioning ? { scale: 1.08, y: -2 } : {}
          }
          whileTap={canScrollRight && !isTransitioning ? { scale: 0.95 } : {}}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile Tab Navigation */}
      <div className="md:hidden flex items-center justify-center gap-2 px-3">
        {/* Seta Esquerda Mobile */}
        <motion.button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft || isTransitioning}
          className={`p-2.5 rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm flex-shrink-0 ${
            canScrollLeft && !isTransitioning
              ? "bg-white/95 hover:bg-blue text-blue hover:text-gold cursor-pointer border border-blue/20 hover:border-blue/40"
              : "bg-gray-100/60 text-gray-300 cursor-not-allowed border border-gray-200/50"
          }`}
          whileHover={
            canScrollLeft && !isTransitioning ? { scale: 1.05, y: -1 } : {}
          }
          whileTap={canScrollLeft && !isTransitioning ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        {/* Container dos Tabs Mobile */}
        <div className="relative overflow-hidden flex-1 min-w-0">
          {/* Background gradient decorativo mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue/8 via-blue/3 to-blue/8 rounded-2xl blur-[0.5px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 rounded-2xl"></div>

          <motion.div
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/70 relative z-10"
            style={{ width: "100%" }}
          >
            <motion.div
              className="flex gap-1.5"
              animate={{ x: -currentStartIndex * ITEM_WIDTH_MOBILE }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
                duration: 0.5,
              }}
              style={{ width: `${programs.length * ITEM_WIDTH_MOBILE}px` }}
            >
              {programs.map((prog, index) => (
                <motion.div
                  key={prog.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex-shrink-0"
                  style={{ width: `${ITEM_WIDTH_MOBILE - 8}px` }}
                >
                  <Button
                    onClick={() => {
                      setSelectedProgramId(prog.id);
                      resetSections();
                    }}
                    className={`relative h-9 w-full px-2 py-1 rounded-xl font-semibold transition-all duration-400 text-xs whitespace-nowrap border-0 shadow-md ${
                      selectedProgramId === prog.id
                        ? "bg-gradient-to-r from-blue via-blue-600 to-blue-700 text-gold shadow-blue/30"
                        : "bg-white text-gray-700 hover:text-blue hover:bg-blue/5 hover:shadow-md"
                    }`}
                  >
                    <span className="truncate relative z-10 text-[10px] sm:text-xs font-medium">
                      {prog.name}
                    </span>
                    {selectedProgramId === prog.id && (
                      <motion.div
                        layoutId="activeMobileTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue via-blue-600 to-blue-700 rounded-xl"
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.1,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Seta Direita Mobile */}
        <motion.button
          onClick={() => scroll("right")}
          disabled={!canScrollRight || isTransitioning}
          className={`p-2.5 rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm flex-shrink-0 ${
            canScrollRight && !isTransitioning
              ? "bg-white/95 hover:bg-blue text-blue hover:text-gold cursor-pointer border border-blue/20 hover:border-blue/40"
              : "bg-gray-100/60 text-gray-300 cursor-not-allowed border border-gray-200/50"
          }`}
          whileHover={
            canScrollRight && !isTransitioning ? { scale: 1.05, y: -1 } : {}
          }
          whileTap={canScrollRight && !isTransitioning ? { scale: 0.95 } : {}}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

const ProgramsSlide = () => {
  const { id } = useParams();
  const initialProgram =
    programs.find((p) => p.id === Number(id)) || programs[0];

  const [selectedProgramId, setSelectedProgramId] = useState<number>(
    initialProgram.id
  );

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    achieve: true,
    includes: false,
    benefits: false,
  });

  // Estado para controlar as animações do conteúdo principal
  const [contentKey, setContentKey] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const selectedProgram =
    programs.find((p) => p.id === selectedProgramId) || programs[0];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const resetSections = () => {
    setIsChanging(true);
    setOpenSections({
      achieve: true,
      includes: false,
      benefits: false,
    });
    // Incrementar a key para forçar re-animação do conteúdo
    setContentKey((prev) => prev + 1);

    // Reset changing state after animation
    setTimeout(() => {
      setIsChanging(false);
    }, 800);
  };

  return (
    <div
      id="program-catalog-carousel"
      className="min-h-screen bg-gold py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 text-center mb-6 sm:mb-8 lg:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Os Nossos Programas
      </motion.h2>

      <ProgramTabs
        programs={programs}
        selectedProgramId={selectedProgramId}
        setSelectedProgramId={setSelectedProgramId}
        resetSections={resetSections}
      />

      {/* Program Info Icons*/}
      <div className="flex mx-auto px-5 sm:px-5 md:px-6 mb-6 sm:mb-8 lg:mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`activities-${selectedProgramId}-${contentKey}`}
            className="bg-white/95 rounded-full shadow-lg border p-3 sm:p-4 md:p-6 mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            <div className="flex flex-wrap justify-center items-center divide-x divide-blue">
              {selectedProgram.activities.map((activity, index) => (
                <span
                  key={index}
                  className="flex flex-col items-center font-medium justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-300"
                >
                  {activity.icon}
                  {activity.text}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content com animação aprimorada */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[1400px] flex-1 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`main-content-${selectedProgramId}-${contentKey}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto items-center w-full"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {/* Image Column */}
            <motion.div
              className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[50px] overflow-hidden shadow-2xl order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                rotateY: 2,
              }}
            >
              <motion.img
                key={`image-${selectedProgramId}`}
                src={selectedProgram.image}
                alt={selectedProgram.name}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay gradient for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Program name overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {/* <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4">
                  <h3 className="font-bold text-blue-900 text-lg sm:text-xl md:text-2xl">
                    {selectedProgram.name}
                  </h3>
                </div> */}
              </motion.div>
            </motion.div>

            {/* Expandable Sections */}
            <motion.div
              className="w-full max-w-xl lg:max-w-2xl mx-auto order-1 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-foreground">
                {Object.entries(selectedProgram.details).map(
                  ([key, section], sectionIndex) => (
                    <motion.div
                      key={`${selectedProgramId}-section-${key}`}
                      className="border-b border-border/50 pb-3 sm:pb-4 md:pb-6 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: sectionIndex * 0.1 + 0.3,
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-between cursor-pointer group bg-white/50 hover:bg-white/80 rounded-xl p-3 sm:p-4 transition-all duration-300"
                        onClick={() =>
                          toggleSection(key as keyof typeof openSections)
                        }
                        whileHover={{ x: 5, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
                          {section.title}
                        </h3>
                        <motion.svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
                          animate={{
                            rotate: openSections[key] ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </motion.div>

                      <AnimatePresence initial={false}>
                        {openSections[key] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <motion.ul
                              className="pl-0 mt-3 sm:mt-4 space-y-2 sm:space-y-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1, staggerChildren: 0.05 }}
                            >
                              {section.bullets.map((bullet, idx) => (
                                <motion.li
                                  key={`bullet-${idx}`}
                                  className="text-muted-foreground text-sm sm:text-base md:text-lg flex items-start gap-2 sm:gap-3 bg-white/30 rounded-lg p-2 sm:p-3 hover:bg-white/50 transition-all duration-200"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{
                                    x: 5,
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                  }}
                                >
                                  <motion.span
                                    className="text-blue-600 font-bold flex-shrink-0 text-lg"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: idx * 0.05 + 0.1,
                                      type: "spring",
                                      bounce: 0.6,
                                    }}
                                  >
                                    ✓
                                  </motion.span>
                                  <span className="leading-relaxed">
                                    {bullet}
                                  </span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                )}
              </div>

              {/* Action Button */}
              <motion.div
                className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="h-12 sm:h-14 lg:h-16 xl:h-18 w-full sm:w-80 lg:w-96 xl:w-[400px] mx-auto bg-gradient-to-r from-blue via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-gold hover:text-white rounded-full py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-gold/20 hover:border-gold/40">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      ADERIR AGORA
                    </motion.span>
                  </Button>
                </motion.div>

                {/* Additional info */}
                {/* <motion.p
                  className="text-center text-blue-800 text-sm sm:text-base opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Junte-se a mais de 500+ membros ativos
                </motion.p> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProgramsSlide;
