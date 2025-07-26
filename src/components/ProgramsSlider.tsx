import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { programs } from "@/pages/sections/programsData";

const VISIBLE_ITEMS = 4;
const ITEM_WIDTH = 250; // Aumentado para melhor espaçamento

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

  // Calcular o índice inicial baseado no programa selecionado
  useEffect(() => {
    const selectedIndex = programs.findIndex((p) => p.id === selectedProgramId);
    if (selectedIndex !== -1) {
      const newStartIndex = Math.max(
        0,
        Math.min(selectedIndex - 1, programs.length - VISIBLE_ITEMS)
      );
      setCurrentStartIndex(newStartIndex);
    }
  }, [selectedProgramId, programs]);

  // Atualizar estado dos botões de navegação
  useEffect(() => {
    setCanScrollLeft(currentStartIndex > 0);
    setCanScrollRight(currentStartIndex < programs.length - VISIBLE_ITEMS);
  }, [currentStartIndex, programs.length]);

  const scroll = (direction: "left" | "right") => {
    let newStartIndex = currentStartIndex;

    if (direction === "left" && canScrollLeft) {
      newStartIndex = Math.max(0, currentStartIndex - 1);
    } else if (direction === "right" && canScrollRight) {
      newStartIndex = Math.min(
        programs.length - VISIBLE_ITEMS,
        currentStartIndex + 1
      );
    }

    setCurrentStartIndex(newStartIndex);

    // Animar o scroll
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: newStartIndex * ITEM_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const visiblePrograms = programs.slice(
    currentStartIndex,
    currentStartIndex + VISIBLE_ITEMS
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-8 pb-4 relative ">
      {/* Seta Esquerda */}
      <motion.button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollLeft
            ? "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 cursor-pointer hover:shadow-xl transform hover:scale-105"
            : "bg-gray-100 text-gray-300 cursor-not-allowed"
        }`}
        whileHover={canScrollLeft ? { scale: 1.05 } : {}}
        whileTap={canScrollLeft ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Seta Direita */}
      <motion.button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollRight
            ? "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 cursor-pointer hover:shadow-xl transform hover:scale-105"
            : "bg-gray-100 text-gray-300 cursor-not-allowed"
        }`}
        whileHover={canScrollRight ? { scale: 1.05 } : {}}
        whileTap={canScrollRight ? { scale: 0.95 } : {}}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Container dos Tabs */}
      <div className="px-12">
        <div
          ref={containerRef}
          className="flex gap-3 overflow-hidden"
          style={{ width: `${VISIBLE_ITEMS * ITEM_WIDTH}px` }}
        >
          {visiblePrograms.map((prog, index) => (
            // <motion.div
            //   key={prog.id}
            //   style={{ width: `${ITEM_WIDTH - 12}px` }}
            //   className="flex-shrink-0"
            //   whileHover={{ scale: 1.05 }}
            //   whileTap={{ scale: 0.95 }}
            //   transition={{ duration: 0.2 }}
            // >
              <Button
                onClick={() => {
                  setSelectedProgramId(prog.id);
                  resetSections();
                }}
                className={`w-full h-12 px-4 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedProgramId === prog.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-gold border-none shadow-lg"
                    : "bg-white text-gray-700 border-none hover:text-gold"
                }`}
              >
                <span className="truncate">{prog.name}</span>
              </Button>
            // </motion.div>
          ))}
        </div>
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

  const selectedProgram =
    programs.find((p) => p.id === selectedProgramId) || programs[0];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const resetSections = () => {
    setOpenSections({
      achieve: true,
      includes: false,
      benefits: false,
    });
  };

  return (
    <div className="min-h-screen bg-gold py-24 px-12 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-12 text-blue-900">
            Os Nossos Programas
          </h2>
      <ProgramTabs
        programs={programs}
        selectedProgramId={selectedProgramId}
        setSelectedProgramId={setSelectedProgramId}
        resetSections={resetSections}
      />

      {/* Program Info Icons */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-8">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedProgram.activities.map((activity, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-blue-600">{activity.icon}</div>
              <span className="text-sm font-medium text-gray-700">
                {activity.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-[1400px] flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Image Column */}
          <motion.div
            className="relative h-[600px] w-full max-w-md rounded-[50px] overflow-hidden mx-auto shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={selectedProgram.image}
              alt={selectedProgram.name}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Expandable Sections */}
          <motion.div
            className="w-full max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-foreground">
              {Object.entries(selectedProgram.details).map(([key, section]) => (
                <div key={key} className="border-b border-border pb-6">
                  <div
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() =>
                      toggleSection(key as keyof typeof openSections)
                    }
                  >
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
                      {section.title}
                    </h3>
                    <motion.svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
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
                  </div>

                  <AnimatePresence initial={false}>
                    {openSections[key] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-0 mt-4 space-y-2">
                          {section.bullets.map((bullet, idx) => (
                            <motion.li
                              key={idx}
                              className="text-muted-foreground text-sm flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                            >
                              <span className="text-blue-600 font-bold">+</span>
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-8 flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="h-16 w-96 mt-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  ADERIR AGORA
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSlide;
