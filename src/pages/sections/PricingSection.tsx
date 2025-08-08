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
          Transforme o seu corpo com orientação profissional e suporte
          personalizado
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 pt-4 sm:pt-6">
        {/* Card 1 MÊS - Básico */}
        <Card className="p-6 sm:p-8 bg-white border-2 border-blue transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 order-2 lg:order-1">
          <div className="text-center mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-blue">
              1 MÊS
            </h3>
            <div className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-2 text-blue">
              €79.99
              <span className="text-base sm:text-lg font-normal">/mês</span>
            </div>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Meal guides personalizados
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                1.500+ receitas saudáveis
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Progress tracking completo
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Suporte da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-4 sm:mt-6 lg:mt-8 w-full bg-blue text-beige hover:bg-blue hover:text-white text-sm sm:text-lg font-bold py-3 sm:py-4 transform transition-all duration-300 hover:scale-105 border border-gray-200">
            Junta-te agora
          </Button>
        </Card>
        {/* Card 12 MESES - Mais Popular */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br cursor-pointer from-blue to-darkblue text-beige border-0 relative overflow-visible shadow-2xl transform scale-100 sm:scale-105 hover:scale-105 sm:hover:scale-110 transition-all duration-300 order-1">
          <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
            <Badge className="bg-gold text-white font-medium border-0 shadow-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              <Zap className="w-3 h-3 mr-1" />
              Mais Popular
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-8 relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-beige">
              12 MESES
            </h3>
            <div className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-2 text-beige">
              €25<span className="text-lg sm:text-xl font-normal">/mês</span>
            </div>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-sm sm:text-base">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-sm sm:text-base">
                Meal guides personalizados
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-sm sm:text-base">
                1.500+ receitas saudáveis
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-sm sm:text-base">
                Progress tracking completo
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-beige font-medium text-sm sm:text-base">
                Suporte da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-4 sm:mt-6 lg:mt-8 w-full bg-white text-blue hover:bg-blue hover:text-beige text-sm sm:text-lg font-bold py-3 sm:py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
            🚀 Junta-te agora
          </Button>
        </Card>

        {/* Card 6 MESES - Intermediário */}
        <Card className="p-6 sm:p-8 bg-white text-blue border-2 border-blue relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 order-3">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="text-center mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-blue">
              6 MESES
            </h3>
            <div className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-2 text-blue">
              €33<span className="text-base sm:text-lg font-normal">/mês</span>
            </div>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Meal guides personalizados
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                1.500+ receitas saudáveis
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Progress tracking completo
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-blue font-medium text-sm sm:text-base">
                Suporte da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-4 sm:mt-6 lg:mt-8 w-full bg-blue text-beige hover:bg-blue hover:text-white text-sm sm:text-lg font-bold py-3 sm:py-4 transform transition-all duration-300 hover:scale-105">
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
