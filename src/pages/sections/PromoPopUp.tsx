import React, { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PromoPopupProps {
  showDelay?: number;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ showDelay = 15000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolledHalf, setHasScrolledHalf] = useState(false);

  // Monitorar scroll para 50% da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent >= 50 && !hasScrolledHalf) {
        setHasScrolledHalf(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledHalf]);

  // Mostrar popup após delay OU quando scroll 50%
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (hasScrolledHalf) {
      // Mostrar imediatamente se já fez scroll de 50%
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      // Mostrar após delay
      timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, showDelay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showDelay, hasScrolledHalf]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleJoinPremium = () => {
    console.log("Redirecionando para acompanhamento premium");
    // Aqui você pode adicionar lógica para redirecionar ou abrir modal de inscrição
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Enhanced Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal with bouncy entrance */}
          <motion.div
            className="relative w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Close Button - More prominent */}
            <motion.button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-30 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full shadow-xl transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={18} />
            </motion.button>

            {/* Main Card - Clean but striking */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Colorful top bar */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />

              {/* Success badge - Floating and animated */}
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full border-4 border-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span className="text-sm font-bold">Resultado Real</span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-8 pt-12 text-center">
                {/* Quote icon with subtle animation */}
                <motion.div
                  className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MessageCircle className="text-white" size={28} />
                </motion.div>

                {/* Quote - Bold and impactful */}
                <motion.blockquote
                  className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  "Já perdi{" "}
                  <span className="text-red-500 font-bold">8kg em 3 meses</span>{" "}
                  com o plano do Nelson. Nunca tinha conseguido manter uma
                  rotina antes."
                </motion.blockquote>

                {/* Author section - Enhanced */}
                <motion.div
                  className="flex items-center justify-center gap-4 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl border-2 border-orange-200 shadow-lg">
                    C
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-lg">Carla</p>
                    <p className="text-gray-600 font-medium">32 anos</p>
                  </div>
                </motion.div>

                {/* Stars - Bigger and more prominent */}
                <motion.div
                  className="flex justify-center gap-1 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.8 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Star
                        size={24}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Call to action question - Standout */}
                <motion.p
                  className="text-xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  E tu, quando vais começar?
                </motion.p>

                {/* CTA Button - Bold and animated */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleJoinPremium}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Zap size={20} />
                        👏 Junta-te ao acompanhamento premium
                        <ArrowRight size={18} />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Social proof - Simple but effective */}
                <motion.p
                  className="text-gray-600 text-sm mt-4 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  ⚡ Mais de{" "}
                  <span className="font-bold text-orange-600">
                    2.847 pessoas
                  </span>{" "}
                  já transformaram os seus corpos
                </motion.p>
              </div>

              {/* Subtle bottom accent */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
