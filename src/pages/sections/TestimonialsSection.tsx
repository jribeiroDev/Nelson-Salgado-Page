import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  PanInfo,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alice",
    program: "Aluno",
    text: "Obrigada Nelson, que nunca desististe de mim, mesmo quando eu própria duvidava. 🫶 A tua persistência, motivação e dedicação nos treinos fizeram toda a diferença. Em pouco tempo, já noto mudanças no meu corpo, no meu bem-estar e, acima de tudo, na minha confiança. 🙌 Obrigada por acreditares em mim, mesmo nos dias mais difíceis. Este caminho está a ser transformador, e sei que muito se deve ao teu apoio incansável. 💪 Gratidão do coração! ❤️",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "João",
    program: "Aluno Premium",
    text: "Em apenas 3 meses consegui resultados que nunca pensei ser possível. O acompanhamento personalizado fez toda a diferença na minha transformação.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Maria",
    program: "Programa de Emagrecimento",
    text: "Perdi 15kg de forma saudável e sustentável. Mais do que isso, ganhei confiança e uma nova perspectiva sobre saúde e bem-estar.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Carlos",
    program: "Treino de Força",
    text: "Nunca me senti tão forte e confiante. O programa superou todas as minhas expectativas e os resultados falam por si.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Ana",
    program: "Wellness Program",
    text: "Este programa mudou completamente a minha relação com o exercício. Agora o treino é parte natural da minha rotina diária.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

const VISIBLE_ITEMS_DESKTOP = 3;
const VISIBLE_ITEMS_TABLET = 2;
const VISIBLE_ITEMS_MOBILE = 1;

const TestimonialCard = ({
  testimonial,
  isSelected,
  onClick,
  isDragging,
}: {
  testimonial: (typeof testimonials)[0];
  isSelected: boolean;
  onClick: () => void;
  isDragging: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardX = useSpring(mouseX, { stiffness: 80, damping: 30, mass: 0.8 });
  const cardY = useSpring(mouseY, { stiffness: 80, damping: 30, mass: 0.8 });

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
          opacity: isSelected ? 1 : isDragging ? 0.9 : 0.8,
        }}
        transition={{
          scale: { duration: 0.4, ease: "easeInOut" },
          y: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-${
          isDragging ? "grabbing" : "grab"
        } select-none
                    ${
                      isSelected
                        ? "ring-2 ring-gold shadow-xl shadow-gold/20"
                        : "shadow-md opacity-80"
                    }`}
      >
        <Card className="h-full p-6 text-center bg-white/95 backdrop-blur-sm border-0 flex flex-col justify-between">
          <div className="space-y-4">
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto object-cover border-4 border-gold/20"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />

            <div className="flex justify-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-5 h-5 text-gold fill-current" />
                </motion.div>
              ))}
            </div>

            <blockquote className="text-gray-600 text-sm sm:text-base italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>
          </div>

          <div className="mt-4">
            <div className="font-bold text-blue text-lg">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500">{testimonial.program}</div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS_DESKTOP);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragThreshold = 50;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
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

  const getOffset = () => {
    const centerPosition = Math.floor(visibleItems / 2);
    const offset = selectedIndex - centerPosition;
    return Math.max(0, Math.min(offset, testimonials.length - visibleItems));
  };

  const navigateToCard = (direction: "next" | "prev") => {
    setSelectedIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      }
    });
  };

  const handleDragStart = () => {
    setIsDragging(true);
    dragStartX.current = 0;
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    dragStartX.current = info.offset.x;
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    const dragDistance = info.offset.x;
    const dragVelocity = info.velocity.x;

    if (
      Math.abs(dragDistance) > dragThreshold ||
      Math.abs(dragVelocity) > 500
    ) {
      if (dragDistance > 0 || dragVelocity > 500) {
        navigateToCard("prev");
      } else {
        navigateToCard("next");
      }
    }
  };

  const cardWidthPercentage = 100 / visibleItems;
  const currentOffset = getOffset();

  return (
    <section className="h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue/5 to-gold/5 flex flex-col justify-center items-center py-8 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gold">
              O que dizem os nossos membros
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Histórias reais de transformação
          </motion.p>
        </div>

        <div
          className="relative h-[320px] sm:h-[380px] md:h-[420px]"
          ref={containerRef}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key="testimonials-carousel"
              className="absolute flex h-full"
              style={{
                width: `${testimonials.length * (100 / visibleItems)}%`,
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <motion.div
                    key={index}
                    className="px-2 sm:px-3 select-none"
                    style={{ width: `${cardWidthPercentage}%` }}
                    layout
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isSelected={isSelected}
                      onClick={() => !isDragging && setSelectedIndex(index)}
                      isDragging={isDragging}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-6 sm:mt-8">
          {/* Botão Anterior */}
          <button
            onClick={() => navigateToCard("prev")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-blue hover:bg-white hover:scale-105 mr-4 transition-all duration-300"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
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
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-gold scale-125" : "bg-gray-300"
                }`}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={() => navigateToCard("next")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-blue hover:bg-white hover:scale-105 ml-4 transition-all duration-300"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
