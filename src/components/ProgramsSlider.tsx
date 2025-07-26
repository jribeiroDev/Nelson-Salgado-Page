import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { programs } from "@/pages/sections/programsData";

const VISIBLE_ITEMS = 4;
const ITEM_WIDTH = 250;

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
    <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 relative flex items-center justify-center">
      {/* Seta Esquerda */}
      <motion.button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-2 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollLeft
            ? "bg-white hover:bg-blue text-blue hover:text-gold cursor-pointer transform hover:scale-105"
            : "bg-gray-100 text-gray-300 cursor-not-allowed"
        }`}
        whileHover={canScrollLeft ? { scale: 1.05 } : {}}
        whileTap={canScrollLeft ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Container dos Tabs */}
      <div className="flex justify-center mx-16">
        <div
          ref={containerRef}
          className="flex gap-3 overflow-hidden"
          style={{ width: `${VISIBLE_ITEMS * ITEM_WIDTH}px` }}
        >
          {visiblePrograms.map((prog, index) => (
            <Button
              key={prog.id}
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
          ))}
        </div>
      </div>

      {/* Seta Direita */}
      <motion.button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-2 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canScrollRight
            ? "bg-white hover:bg-blue text-gray-700 hover:text-gold cursor-pointer transform hover:scale-105"
            : "bg-gray-100 text-gray-300 cursor-not-allowed"
        }`}
        whileHover={canScrollRight ? { scale: 1.05 } : {}}
        whileTap={canScrollRight ? { scale: 0.95 } : {}}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
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
    // Incrementar a key para forçar re-animação do conteúdo
    setContentKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gold py-24 px-12 flex flex-col items-center justify-center">
      <h2
        className="text-2xl md:text-4xl lg:text-5xl font-bold  text-blue-900"
      >
        Os Nossos Programas
      </h2>

      <ProgramTabs
        programs={programs}
        selectedProgramId={selectedProgramId}
        setSelectedProgramId={setSelectedProgramId}
        resetSections={resetSections}
      />

      {/* Program Info Icons com animação aprimorada */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`activities-${selectedProgramId}`}
            className="flex flex-wrap justify-center items-center gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selectedProgram.activities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-blue-600">{activity.icon}</div>
                <span className="text-sm font-medium text-gray-700">
                  {activity.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content com animação completa */}
      <div className="container mx-auto px-4 max-w-[1400px] flex-1 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={contentKey}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Image Column */}
            <motion.div
              className="relative h-[600px] w-full max-w-md rounded-[50px] overflow-hidden mx-auto shadow-2xl"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
            >
              <motion.img
                src={selectedProgram.image}
                alt={selectedProgram.name}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            {/* Expandable Sections */}
            <motion.div className="w-full max-w-xl">
              <div className="space-y-6 text-foreground">
                {Object.entries(selectedProgram.details).map(
                  ([key, section], sectionIndex) => (
                    <motion.div
                      key={key}
                      className="border-b border-border pb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                    >
                      <motion.div
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={() =>
                          toggleSection(key as keyof typeof openSections)
                        }
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
                          {section.title}
                        </h3>
                        <motion.svg
                          className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                          animate={{
                            rotate: openSections[key] ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
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
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="pl-0 mt-4 space-y-2">
                              {section.bullets.map((bullet, idx) => (
                                <motion.li
                                  key={idx}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                  initial="hidden"
                                  animate="visible"
                                  custom={idx}
                                  whileHover={{
                                    x: 5,
                                    color: "#2563eb",
                                  }}
                                >
                                  <motion.span
                                    className="text-blue-600 font-bold"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: idx * 0.08 + 0.2,
                                    }}
                                  >
                                    +
                                  </motion.span>
                                  <span>{bullet}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                )}
              </div>

              {/* Action Button */}
              <motion.div
                className="mt-8 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button className="h-16 w-96 mt-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-6 text-lg font-medium transition-all duration-300">
                  ADERIR AGORA
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProgramsSlide;
