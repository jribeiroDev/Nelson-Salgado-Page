import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle } from "lucide-react";

const PricingSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Planos & Preços
        </h2>
        <p className="text-xl text-slate-300">
          Acesso completo a todos os programas e funcionalidades
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 text-white border-0 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
              <Zap className="w-3 h-3 mr-1" />
              Mais Popular
            </Badge>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Platinum Anual</h3>
            <div className="text-4xl font-bold mb-2">
              €199.99<span className="text-lg font-normal">/ano</span>
            </div>
            <p className="text-purple-200">Economia de 33% • Compromisso 4 meses</p>
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
          <Button className="w-full bg-white text-purple-900 hover:bg-purple-50 font-bold py-3">
            Junta-te agora
          </Button>
        </Card>
        <Card className="p-8 bg-white border-2 border-purple-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-purple-900">Platinum Mensal</h3>
            <div className="text-4xl font-bold mb-2 text-purple-900">
              €24.99<span className="text-lg font-normal">/mês</span>
            </div>
            <p className="text-muted-foreground">Flexibilidade máxima</p>
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
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3">
            Junta-te agora
          </Button>
        </Card>
      </div>
      <div className="text-center mt-8">
        <p className="text-slate-300 mb-4">
          Ou compra programas individuais por €59.99
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection; 