import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled50Percent, setHasScrolled50Percent] = useState(false);

  // Detectar scroll de 50%
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 50) {
        setHasScrolled50Percent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mostrar popup quando ultrapassar 50% da página
  useEffect(() => {
    if (hasScrolled50Percent) {
      setIsVisible(true);
    }
  }, [hasScrolled50Percent]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // Scroll para a seção de preços
    const pricingSection = document.getElementById("program-catalog-carousel");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.9,
            }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue/30 via-purple-500/20 to-emerald-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-blue/20 rounded-3xl blur-2xl opacity-60"></div>

              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white via-white/95 to-blue/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-transparent to-emerald-500/20"></div>
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-red-50 rounded-full transition-all duration-300 z-20 group border border-gray-200/50 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X
                    size={18}
                    className="text-gray-600 group-hover:text-red-500 transition-colors"
                  />
                </motion.button>

                <div className="relative z-10 p-6 sm:p-8">
                  {/* Success Badge */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/50">
                        <motion.div
                          className="text-white font-bold text-2xl"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✓
                        </motion.div>
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping"></div>
                    </div>
                  </motion.div>

                  {/* Header */}
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue to-emerald-600 bg-clip-text text-transparent mb-3">
                      Transformação Comprovada! 🎉
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      Mais uma história de sucesso inspiradora
                    </p>
                  </motion.div>

                  {/* Testimonial Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-white/90 to-blue/10 rounded-2xl p-5 sm:p-6 mb-6 shadow-lg border border-white/60 overflow-hidden"
                    initial={{ opacity: 0, x: -50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-3 left-3 opacity-10">
                      <svg
                        className="w-10 h-10 text-blue"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Weight Loss Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      -8kg em 3 meses! 🔥
                    </div>

                    <div className="relative z-10 pt-4">
                      <blockquote className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed mb-5 italic">
                        "Já perdi{" "}
                        <span className="font-bold text-emerald-600 not-italic">
                          8kg em 3 meses
                        </span>{" "}
                        com o plano do Nelson. Nunca tinha conseguido manter uma
                        rotina antes.
                        <span className="font-semibold not-italic text-blue">
                          Agora sinto-me incrível!
                        </span>
                        "
                      </blockquote>

                      {/* Author with photo effect */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue via-blue/80 to-blue/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            C
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Carla Silva</p>
                          <p className="text-gray-600 text-sm flex items-center gap-1">
                            <span>32 anos</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-emerald-600 font-medium">
                              Verificado ✓
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative sparkles */}
                    <motion.div
                      className="absolute top-4 left-1/2 text-gold text-xs"
                      animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 right-1/4 text-emerald-500 text-xs"
                      animate={{ y: [0, -3, 0], rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      🌟
                    </motion.div>
                  </motion.div>

                  {/* CTA Section */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      E tu, quando vais começar? 🚀
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-1">
                      Junta-te às{" "}
                      <span className="font-bold text-blue">500+ pessoas</span>{" "}
                      que já transformaram as suas vidas
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gradient-to-br from-blue to-blue/80 rounded-full border-2 border-white"
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        +500 membros ativos
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Button
                      onClick={handleCTAClick}
                      className="relative w-full bg-gradient-to-r from-blue via-blue to-blue/90 hover:from-blue/90 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transition-all duration-500 text-base sm:text-lg overflow-hidden group border-2 border-white/30"
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: [-100, 400] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ skewX: -20 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <motion.span
                          className="text-2xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                        <span>Começar a minha transformação!</span>
                      </span>
                    </Button>
                  </motion.div>

                  {/* Trust & Urgency indicators */}
                  <motion.div
                    className="flex flex-col items-center gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-500 text-sm">🛡️</span>
                        <span>Sem compromisso</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-500 text-sm">⚡</span>
                        <span>Cancela quando quiseres</span>
                      </div>
                    </div>

                    <motion.div
                      className="bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-full px-3 py-1 text-xs font-medium text-red-700"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⏰ Oferta limitada - Apenas hoje!
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SocialProofPopup;
