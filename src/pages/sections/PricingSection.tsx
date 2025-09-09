import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, CircleCheck } from "lucide-react";
import { RewardPopup } from "./RewardPopup";

const PricingSection = () => {
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  const handleJoinClick = () => {
    setShowRewardPopup(true);
  };

  const whatsappNumber = "+351910436302"; // Substitua pelo número real
  const instagramPageUrl = "https://www.instagram.com/elite_salgado"; // Substitua pela URL real

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá Nelson, estou super ansiosa/o para começar este acompanhamento. Podemos avançar!"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleConfirm = () => {
    setShowRewardPopup(false);
    // Here you would handle the actual subscription logic
    console.log("User confirmed subscription!");
  };

  return (
    <section
      id="program-catalog-carousel"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-beige flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-blue leading-tight">
            Acompanhamentos Premium
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue max-w-3xl mx-auto">
            Escolhe o teu compromisso!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6">
          {/* Card 1 MÊS - Básico */}
          <Card className="p-6 bg-white text-gray-900 border border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 order-3 lg:order-1 min-h-[500px] flex flex-col rounded-xl cursor-pointer">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Plano Mensal
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">55</span>
                <span className="text-lg text-gray-900 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-900">
                Ideal para testar o método e sentir os primeiros resultados.
              </p>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Acesso imediato aos nossos programas exclusivos
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Acompanhamento 1:1 para definição de objetivos
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Plano alimentar personalizado ao objetivo
                </span>
              </li>
              {/* <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Progress tracking completo
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Suporte da comunidade
                </span>
              </li> */}
            </ul>

            <Button
              onClick={openWhatsApp}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-300"
            >
              Junta-te Agora
            </Button>
            <RewardPopup
              isOpen={showRewardPopup}
              onClose={() => setShowRewardPopup(false)}
              onConfirm={handleConfirm}
            />
          </Card>

          {/* Card 12 MESES - Mais Popular */}
          <Card className=" cursor-pointer p-6 bg-gradient-to-br from-blue to-darkblue text-white border-0 relative overflow-visible shadow-2xl transform scale-105 hover:scale-110 transition-all duration-300 order-1 lg:order-2 min-h-[500px] flex flex-col rounded-xl">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
              <Badge className="bg-gold text-white font-medium border-0 shadow-lg px-3 py-1 rounded-full text-xs">
                MAIS POPULAR
              </Badge>
            </div>

            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Plano Anual
              </h3>
              <div className="flex items-baseline ">
                <span className="text-4xl font-bold text-white">25</span>
                <span className="text-lg text-white ml-2">/mês</span>
              </div>
              <p className="text-xs text-gold">
                (Poupa 360€ em relação ao plano mensal)
              </p>
              <p className="text-sm text-white mt-2">
                Para quem está pronto para mudar de vida de forma definitiva.
              </p>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                {/* <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" /> */}
                <span className="text-white font-medium text-sm">
                  Tudo no plano semestral, mais:
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">Suporte prioritário</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  Acesso vitalício ao histórico de treinos
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  Ajustes semanais no plano de treino
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  +50 receitas saudáveis
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  Ebook grátis sobre como criar hábitos saudáveis e eficazes
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  Descontos exclusivos em eventos e merchandising
                </span>
              </li>
            </ul>

            <Button
              onClick={openWhatsApp}
              className="w-full bg-white text-blue hover:bg-gold hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
            >
              Junta-te Agora
            </Button>
          </Card>

          {/* Card 6 MESES - Pro */}
          <Card className=" cursor-pointer p-6 bg-white text-gray-900 border border-gray-200 relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 order-2 lg:order-3 min-h-[500px] flex flex-col rounded-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Plano Semestral
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">33</span>
                <span className="text-lg text-gray-600 ml-2">/mês</span>
              </div>
              {/* <p className="text-xs text-gray-500">
                Preço semestral incluindo 42,82 € de IVA
              </p> */}
              <p className="text-sm text-gray-600 mt-2">
                Compromisso sério com resultados visíveis e consistentes.
              </p>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                {/* <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" /> */}
                <span className="text-gray-900 font-medium text-sm">
                  Tudo no plano mensal, mais:
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Acesso antecipado a novos programas
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Reajustes continuos conforme o progresso
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Acesso a desafios exclusivos da nossa comunidade
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 text-sm">
                  Ebook grátis sobre receitas saudáveis
                </span>
              </li>
            </ul>

            <Button
              onClick={openWhatsApp}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-300"
            >
              Junta-te Agora
            </Button>
          </Card>
        </div>
        {/* <div className="text-center mt-8">
        <p className="text-darkblue mb-4 font-bold">
          Ou compra programas mensais por €79.99
        </p>
      </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
