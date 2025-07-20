import React from "react";
import { Dumbbell, Apple, BarChart3, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Treinos guiados",
    description: "Home e ginásio, com swaps e ajustes personalizados"
  },
  {
    icon: <Apple className="w-8 h-8" />,
    title: "Nutrição baseada em ciência",
    description: "Meal Guides + 1.500+ receitas saudáveis"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Progress tracking",
    description: "Definição de metas, registo de sono, água, macros"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Comunidade",
    description: "Partilha, suporte e motivação mútua"
  }
];

const AppBenefitsSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
    
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
          Vantagens da Nossa App
        </h2>
        {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tudo o que precisas para transformar o teu estilo de vida
        </p> */}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default AppBenefitsSection; 