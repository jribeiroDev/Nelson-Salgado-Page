import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando posso começar?",
    answer: "Podes começar a qualquer momento! Novos ciclos de programas começam todas as segundas-feiras."
  },
  {
    question: "Qual o nível certo para mim?",
    answer: "Recomendamos com base no teu tempo de treino anterior. Principiantes: 0-6 meses, Intermédio: 6 meses-2 anos, Avançado: 2+ anos."
  },
  {
    question: "A nutrição está incluída?",
    answer: "Sim! Meal guides adaptados aos teus objetivos: Definição, Ganho muscular ou Manutenção de peso."
  },
  {
    question: "Como acompanho os meus resultados?",
    answer: "A app inclui registo completo: sono, macros, hidratação, medidas corporais e progresso nos treinos."
  }
];

const FaqSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        <p className="text-xl text-muted-foreground">
          Esclarecemos as tuas principais dúvidas
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-purple-900 hover:text-purple-600 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection; 