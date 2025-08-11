import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle } from "lucide-react";

const PricingSection = () => (
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
          Planos de Transformação — Escolhe o teu compromisso!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
        {/* Card 1 MÊS - Básico */}
        <Card className="p-4 sm:p-6 bg-white border-2 border-blue transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 order-3 lg:order-1 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col">
          <div className="text-center mt-2 sm:mt-4 mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-blue">
              1 MÊS
            </h3>
            <div className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-1 text-blue">
              €55
              <span className="text-sm sm:text-base font-normal">/mês</span>
            </div>

            <h3 className="text-blue text-xs mt-2">
              Ideal para testar o método e sentir os primeiros resultados.
            </h3>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Acesso imediato a +30 programas
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Meal guides personalizados
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                +1.500 receitas saudáveis
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Progress tracking completo
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Suporte da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-3 sm:mt-4 w-full bg-blue text-beige hover:bg-blue hover:text-white text-sm sm:text-base font-bold py-2 sm:py-3 transform transition-all duration-300 hover:scale-105 border border-gray-200">
            Junta-te agora
          </Button>
        </Card>
        {/* Card 12 MESES - Mais Popular */}
        <Card className="p-4 sm:p-6 bg-gradient-to-br cursor-pointer from-blue to-darkblue text-beige border-0 relative overflow-visible shadow-2xl transform scale-100 sm:scale-105 hover:scale-105 sm:hover:scale-110 transition-all duration-300 order-1 lg:order-2 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col">
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
            <Badge className="bg-gold text-white font-medium border-0 shadow-lg px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs">
              <Zap className="w-3 h-3 mr-1" />
              Mais Popular
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="text-center mt-4 sm:mt-5 mb-4 sm:mb-6 relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-beige">
              12 MESES
            </h3>
            <div className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-1 text-beige">
              €25<span className="text-base sm:text-lg font-normal">/mês</span>
              <h3 className="text-beige font-normal text-xs mt-2">
                Para quem está pronto para mudar de vida de forma definitiva.
              </h3>
            </div>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 relative z-10 flex-grow">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-xs sm:text-sm">
                Tudo incluído no plano mensal
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-xs sm:text-sm">
                Acesso vitalício a cada programa finalizado
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-xs sm:text-sm">
                Check-ins trimestrais de evolução
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-xs sm:text-sm">
                Oferta exclusiva para membros anuais
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-xs sm:text-sm">
                Bónus: Ebook "Corpo de Alta Performance" gratuito
              </span>
            </li>
          </ul>
          <Button className="mt-3 sm:mt-4 w-full bg-white text-blue hover:bg-gold hover:text-beige text-sm sm:text-base font-bold py-2 sm:py-3 transform transition-all duration-300 hover:scale-105 shadow-lg">
            🚀 Junta-te agora
          </Button>
        </Card>

        {/* Card 6 MESES - Intermediário */}
        <Card className="p-4 sm:p-6 bg-white text-blue border-2 border-blue relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 order-2 lg:order-3 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="text-center mt-2 sm:mt-4 mb-4 sm:mb-6 relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-blue">
              6 MESES
            </h3>
            <div className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-1 text-blue">
              €33<span className="text-sm sm:text-base font-normal">/mês</span>
              <h3 className="text-blue font-normal text-xs mt-2">
                Compromisso sério com resultados visíveis e consistentes.
              </h3>
            </div>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 relative z-10 flex-grow">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Tudo incluído no plano mensal
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Reajustes contínuos ao plano conforme progresso
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-xs sm:text-sm">
                Acesso a desafios exclusivos da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-3 sm:mt-4 w-full bg-blue text-beige hover:bg-blue hover:text-white text-sm sm:text-base font-bold py-2 sm:py-3 transform transition-all duration-300 hover:scale-105">
            Junta-te agora
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

export default PricingSection;
