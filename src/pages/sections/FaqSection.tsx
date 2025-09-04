import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando posso começar?",
    answer:
      "Antes de avançarmos é preciso conhecer um pouco mais sobre ti e o que te motiva para os objetivos.",
  },
  {
    question: "Qual o nível certo para mim?",
    answer:
      "Recomendamos com base no seu tempo de treino anterior: Principiantes (0-6 meses), Intermédio (6 meses-2 anos) e Avançado (2+ anos).",
  },
  {
    question: "A nutrição está incluída?",
    answer:
      "Sim! Meal guides adaptados aos teus objetivos: Definição, Ganho muscular, Manutenção de peso, etc.",
  },
  {
    question: "Como acompanho os meus resultados?",
    answer:
      "A app inclui registo completo: sono, macros, hidratação, medidas corporais e progresso nos treinos.",
  },
];

const FaqSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-blue2/10">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-blue leading-tight">
          Perguntas Frequentes
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-blue max-w-2xl mx-auto">
          Esclarecemos as tuas principais dúvidas
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="space-y-3 sm:space-y-4 lg:space-y-6"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-beige rounded-xl shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
          >
            <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left font-semibold text-blue hover:text-blue hover:no-underline text-sm sm:text-base lg:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
