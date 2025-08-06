import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle } from "lucide-react";

const PricingSection = () => (
  <section
    id="program-catalog-carousel"
    className="h-screen py-20 px-4 bg-beige"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue">
          Acompanhamentos Premium
        </h2>
        <p className="text-xl text-blue">
          Transforme o seu corpo com orientação profissional e suporte
          personalizado
        </p>
      </div>
      <div className="flex grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 12 MESES - Mais Popular */}
        <Card className="p-8 bg-gradient-to-br cursor-pointer from-blue to-darkblue text-beige border-0 relative overflow-hidden shadow-2xl transform scale-105 hover:scale-110 transition-all duration-300">
          <div className="absolute top-4 right-4">
            <Badge className="bg-white text-gold font-medium border-0 shadow-lg">
              <Zap className="w-3 h-3 mr-1" />
              Mais Popular
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="text-center mt-8 mb-8 relative z-10">
            <h3 className="text-4xl font-bold mb-2 text-beige">12 MESES</h3>
            <div className="text-5xl font-bold mb-2 text-beige">
              €25<span className="text-xl font-normal">/mês</span>
            </div>
            {/* <p className="text-beige font-semibold">💰 Melhor Valor</p> */}
          </div>
          <ul className="space-y-3 mb-8 relative z-10">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-beige font-medium">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-beige font-medium">
                Meal guides personalizados
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-beige font-medium">
                1.500+ receitas saudáveis
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-beige font-medium">
                Progress tracking completo
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-beige font-medium">
                Suporte da comunidade
              </span>
            </li>
          </ul>
          <Button className="mt-8 w-full bg-white text-blue hover:bg-blue hover:text-beige text-lg font-bold py-4 transform transition-all duration-300 hover:scale-105 shadow-lg">
            🚀 Junta-te agora
          </Button>
        </Card>

        {/* Card 6 MESES - Intermediário */}
        <Card className="p-8 bg-white text-blue border-2 border-blue relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="text-center mt-8 mb-8 relative z-10">
            <h3 className="text-4xl font-bold mb-2 text-blue">6 MESES</h3>
            <div className="text-4xl font-bold mb-2 text-blue">
              €33<span className="text-lg font-normal">/mês</span>
            </div>
            {/* <p className="text-beige/80">⚡ Boa Escolha</p> */}
          </div>
          <ul className="space-y-3 mb-8 relative z-10">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Meal guides personalizados</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">1.500+ receitas saudáveis</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Progress tracking completo</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Suporte da comunidade</span>
            </li>
          </ul>
          <Button className="mt-8 w-full bg-blue text-beige hover:bg-blue hover:text-white text-lg font-bold py-3 transform transition-all duration-300 hover:scale-105">
            Junta-te agora
          </Button>
        </Card>

        {/* Card 1 MÊS - Básico */}
        <Card className="p-8 bg-white border-2 border-blue  transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="text-center mt-8 mb-8">
            <h3 className="text-4xl font-bold mb-2 text-blue">1 MÊS</h3>
            <div className="text-4xl font-bold mb-2 text-blue">
              €79.99<span className="text-lg font-normal">/mês</span>
            </div>
            {/* <p className="text-gray-500">🏃 Experimentar</p> */}
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">
                Acesso a todos os 30+ programas
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Meal guides personalizados</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">1.500+ receitas saudáveis</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Progress tracking completo</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-blue font-medium">Suporte da comunidade</span>
            </li>
          </ul>
          <Button className="mt-8 w-full bg-blue text-beige hover:bg-blue hover:text-white text-lg font-bold py-3 transform transition-all duration-300 hover:scale-105 border border-gray-200">
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
