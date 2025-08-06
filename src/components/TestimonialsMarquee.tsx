import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonialsData = [
  // Primeira fileira (10 testimonials)
  {
    name: "Alice Santos",
    company: "FitLife Studio",
    quote:
      "Obrigada Nelson, que nunca desististe de mim, mesmo quando eu própria duvidava. A tua persistência fez toda a diferença.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "João Silva",
    company: "Tech Fitness",
    quote:
      "Em apenas 3 meses consegui resultados que nunca pensei ser possível. O acompanhamento personalizado fez toda a diferença.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Maria Costa",
    company: "Wellness Center",
    quote:
      "Perdi 15kg de forma saudável e sustentável. Mais do que isso, ganhei confiança e uma nova perspectiva sobre saúde.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b2e44b96?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    company: "Strong Gym",
    quote:
      "Nunca me senti tão forte e confiante. O programa superou todas as minhas expectativas e os resultados falam por si.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    company: "Health Plus",
    quote:
      "Este programa mudou completamente a minha relação com o exercício. Agora o treino é parte natural da minha rotina.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    company: "Elite Training",
    quote:
      "A dedicação e conhecimento do Nelson são impressionantes. Cada treino é pensado especificamente para os meus objetivos.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Sofia Almeida",
    company: "Body Transform",
    quote:
      "Transformei não só o meu corpo, mas também a minha mentalidade. O suporte foi fundamental em toda esta jornada.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Ricardo Ferreira",
    company: "Power Gym",
    quote:
      "Resultados incríveis em tempo record. A metodologia aplicada é verdadeiramente eficaz e motivadora.",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Catarina Lopes",
    company: "Fitness Revolution",
    quote:
      "Finalmente encontrei um programa que se adapta ao meu estilo de vida. Flexibilidade e resultados garantidos.",
    avatar:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    company: "Athletic Performance",
    quote:
      "O Nelson não é apenas um personal trainer, é um verdadeiro mentor. Cada sessão é uma lição de superação.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

// Segunda fileira - duplicando com variações
const secondRowTestimonials = [
  {
    name: "Inês Martins",
    company: "Yoga & Fitness",
    quote:
      "A abordagem holística do Nelson fez-me redescobrir o prazer de treinar. Cada dia é uma nova conquista.",
    avatar:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Tiago Pereira",
    company: "CrossFit Box",
    quote:
      "Ultrapassei todos os meus limites com segurança e confiança. O planeamento é impecável.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Beatriz Gonçalves",
    company: "Studio Pilates",
    quote:
      "A motivação constante e o acompanhamento personalizado tornaram possível o que parecia impossível.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "André Sousa",
    company: "Martial Arts Academy",
    quote:
      "Desenvolvi força, resistência e disciplina que nunca pensei ter. Um verdadeiro game-changer.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Carla Ribeiro",
    company: "Wellness Spa",
    quote:
      "A transformação foi muito além do físico. Ganhei autoestima, energia e uma nova perspectiva de vida.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Nuno Dias",
    company: "Athletic Club",
    quote:
      "Cada treino é único e desafiante. O progresso é visível e os resultados são duradouros.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Leonor Campos",
    company: "Dance Fitness",
    quote:
      "Descobri uma versão mais forte e confiante de mim mesma. O suporte emocional é tão importante quanto o físico.",
    avatar:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Diogo Santos",
    company: "Performance Lab",
    quote:
      "Profissionalismo e conhecimento de alto nível. Cada sessão é maximizada para resultados ótimos.",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Vera Oliveira",
    company: "Nutrition & Fitness",
    quote:
      "O equilíbrio perfeito entre desafio e suporte. Cada meta alcançada traz uma sensação de conquista única.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Hugo Ferreira",
    company: "Strength Academy",
    quote:
      "Resultados consistentes e sustentáveis. A metodologia aplicada é cientificamente fundamentada e eficaz.",
    avatar:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: any;
  index: number;
}) => (
  <Card className="min-w-[320px] h-[200px] p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between">
    <div className="flex items-start gap-4">
      <Avatar className="w-12 h-12 border-2 border-white/30">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-blue/20 text-blue font-semibold">
          {testimonial.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-semibold text-blue text-sm">{testimonial.name}</h4>
        <p className="text-blue/70 text-xs">{testimonial.company}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-blue/80 text-sm leading-relaxed line-clamp-3 mt-3">
      "{testimonial.quote}"
    </p>
  </Card>
);

const TestimonialsMarquee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-beige to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue">
            O que dizem os nossos clientes
          </h2>
          <p className="text-xl text-blue/80 max-w-2xl mx-auto">
            Mais de 1000+ pessoas já transformaram as suas vidas connosco
          </p>
        </div>

        <div className="space-y-8">
          {/* Primeira fileira - movimento para a esquerda */}
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920], // Move a largura total dos cards
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicamos os testimonials para efeito infinito */}
              {[...testimonialsData, ...testimonialsData].map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`first-${index}`}
                    testimonial={testimonial}
                    index={index}
                  />
                )
              )}
            </motion.div>
          </div>

          {/* Segunda fileira - movimento para a direita */}
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [-1920, 0], // Move na direção oposta
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicamos os testimonials para efeito infinito */}
              {[...secondRowTestimonials, ...secondRowTestimonials].map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`second-${index}`}
                    testimonial={testimonial}
                    index={index}
                  />
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue/10 px-6 py-3 rounded-full border border-blue/20"
          >
            <Star className="w-5 h-5 fill-gold text-gold" />
            <span className="text-blue font-medium">
              4.9/5 estrelas • Mais de 1000+ reviews
            </span>
            <Star className="w-5 h-5 fill-gold text-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
