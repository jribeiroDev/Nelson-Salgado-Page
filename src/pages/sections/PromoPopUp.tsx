import React, { useState, useEffect } from "react";
import { X, Mail, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import promoBackground from "@/assets/promo-background.jpg";

interface PromoPopupProps {
  showDelay?: number;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ showDelay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, showDelay);

    return () => clearTimeout(timer);
  }, [showDelay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      // Aqui você pode adicionar lógica para processar o email
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="  text-gold fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        // onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl
          transform transition-all duration-300 ease-out
          ${
            isAnimating
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4"
          }
        `}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-blue"
          // style={{ backgroundImage: `url(${promoBackground})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-promo-overlay/95 to-promo-primary/80" />

        {/* Close Button */}
        <button
          onClick={() => {
            handleClose();
          }}
          className="absolute top-4 right-4 z-30 cursor-pointer transition-colors p-1"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          {/* Urgency Text */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="text-promo-accent" size={16} />
            <span className="text-promo-accent text-sm font-medium uppercase tracking-wide">
              Oferta por tempo limitado!
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-promo-text mb-2">
            GANHE 40% OFF
          </h2>
          <h3 className="text-xl font-semibold text-promo-text mb-6">
            NO SEU PRIMEIRO PEDIDO
          </h3>

          {/* Description */}
          <p className="text-promo-text/90 mb-6 text-sm">
            Insira seu email para desbloquear
            <br />
            sua oferta exclusiva
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-blue" size={18} />
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 py-3 text-center bg-white/95 border-0 rounded-lg text-blue placeholder-blue"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-gold hover:bg-gold hover:text-blue text-white font-bold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              GARANTIR 40% OFF
            </Button>
          </form>

          {/* Small Print */}
          <p className="text-promo-text/70 text-xs mt-4">
            * Válido apenas para novos clientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
