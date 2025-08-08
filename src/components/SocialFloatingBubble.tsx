import React, { useState } from "react";
import { MessageCircle, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SocialFloatingBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+351910436302"; // Substitua pelo número real
  const instagramPageUrl = "https://www.instagram.com/elite_salgado"; // Substitua pela URL real

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os programas de treino."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const openInstagram = () => {
    window.open(instagramPageUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Botão principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        )}
      </motion.button>

      {/* Menu expandido */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay para mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 md:hidden -z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Container dos botões */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 sm:bottom-18 lg:bottom-20 right-0 flex flex-col gap-2 sm:gap-3"
            >
              {/* Balão de WhatsApp */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg border hidden sm:block">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                    Fala connosco no WhatsApp
                  </p>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>

              {/* Balão de Instagram */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="bg-white rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg border hidden sm:block">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                    Segue-nos no Instagram
                  </p>
                </div>
                <button
                  onClick={openInstagram}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue rounded-full shadow-lg flex items-center justify-center text-beige hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>

              {/* Versão mobile - texto abaixo dos botões */}
              <div className="sm:hidden mt-2 bg-white rounded-lg p-2 shadow-lg border max-w-[200px]">
                <p className="text-xs text-gray-600 text-center mb-1">
                  Entre em contacto connosco:
                </p>
                <div className="flex justify-center gap-3">
                  <span className="text-xs text-green-600 font-medium">
                    WhatsApp
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    Instagram
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Indicador de notificação (opcional) */}
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white text-xs font-bold">!</span>
      </motion.div>
    </div>
  );
};

export default SocialFloatingBubble;
