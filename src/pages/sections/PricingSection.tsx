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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-gradient-to-r from-darkblue to-blue text-beige border-0 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-gold text-white border-0">
              <Zap className="w-3 h-3 mr-1" />
              Mais Popular
            </Badge>
          </div>
          <div className="text-center mt-8 mb-8">
            <h3 className="text-4xl font-bold mb-2">12 MESES</h3>
            <div className="text-4xl font-bold mb-2">
              €25<span className="text-lg font-normal">/mês</span>
            </div> 
            {/* <p className="text-beige">
              Economiza 33%
              {/* Economia de 33% • Compromisso 4 meses 
            </p> */}
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Acesso a todos os 30+ programas
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Meal guides personalizados
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              1.500+ receitas saudáveis
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Progress tracking completo
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Suporte da comunidade
            </li>
          </ul>
          <Button className="mt-8 w-full bg-beige text-darkblue hover:text-beige hover:bg-gradient-to-r hover:from-blue hover:to-darkblue text-lg font-bold py-3 transform transition-transform duration-200 hover:scale-105">
            Junta-te agora
          </Button>
        </Card>
        <Card className="p-8 bg-white border-2 border-darkblue">
          <div className=" mt-8 text-center mb-8">
            <h3 className="text-4xl font-bold mb-2 text-blue">6 MESES</h3>
            <div className="text-4xl font-bold mb-2 text-blue">
              €33<span className="text-lg font-normal">/mês</span>
            </div>
            {/* <p className="text-muted-foreground">Flexibilidade máxima</p> */}
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              Acesso a todos os 30+ programas
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              Meal guides personalizados
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              1.500+ receitas saudáveis
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              Progress tracking completo
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              Suporte da comunidade
            </li>
          </ul>
          <Button className="mt-8 w-full bg-blue text-beige hover:text-beige hover:bg-gradient-to-r hover:from-blue hover:to-darkblue text-lg font-bold py-3 transform transition-transform duration-200 hover:scale-105">
            Junta-te agora
          </Button>
        </Card>
      </div>
      <div className="text-center mt-8">
        <p className="text-darkblue mb-4 font-bold">
          Ou compra programas mensais por €79.99
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
