import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    name: "Ricardo Vieira",
    company: "Aluno",
    quote:
      "Com o Nelson alcancei a melhor forma física da minha vida. Ganhei resistência, massa muscular e confiança, sempre com uma abordagem que vai além do físico, trabalhando também o psicológico. Recomendo vivamente!",
    avatar: "/assets/rv.jpeg",
    rating: 5,
  },
  {
    name: "Helena Martins",
    company: "Aluna",
    quote:
      "Deixei de me sentir estagnada e hoje tenho mais foco, disciplina e controlo muscular. O Nelson inspira, motiva e passa segurança, unindo treino e psicologia para resultados reais.",
    avatar: "/assets/hm.jpeg",
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
  <Card className="min-w-[280px] sm:min-w-[320px] h-[180px] sm:h-[200px] p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between">
    <div className="flex items-start gap-3 sm:gap-4">
      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/30 flex-shrink-0">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback className="bg-blue/20 text-blue font-semibold text-xs sm:text-sm">
          {testimonial.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-blue text-xs sm:text-sm truncate">
          {testimonial.name}
        </h4>
        <p className="text-blue/70 text-xs truncate">{testimonial.company}</p>
        <div className="flex items-center gap-0.5 sm:gap-1 mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-gold text-gold"
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-blue/80 text-xs sm:text-sm leading-relaxed line-clamp-3 mt-2 sm:mt-3">
      "{testimonial.quote}"
    </p>
  </Card>
);

const TestimonialsMarquee = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-blue leading-tight">
            O que dizem os nossos clientes
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue/80 max-w-3xl mx-auto">
            Mais de 1000+ pessoas já transformaram as suas vidas connosco
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Primeira fileira - movimento para a esquerda */}
          <div className="relative">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: [0, -2000], // Ajustado para o número de cards duplicadas
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50, // Aumentado para movimento mais suave
                  ease: "linear",
                },
              }}
            >
              {/* Duplicamos os testimonials múltiplas vezes para efeito infinito */}
              {[
                ...testimonialsData,
                ...testimonialsData,
                ...testimonialsData,
                ...testimonialsData,
                ...testimonialsData,
                ...testimonialsData,
              ].map((testimonial, index) => (
                <TestimonialCard
                  key={`first-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-blue/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-blue/20"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold flex-shrink-0" />
            <span className="text-blue font-medium text-sm sm:text-base">
              4.9/5 estrelas • Mais de 1000+ reviews
            </span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold flex-shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
