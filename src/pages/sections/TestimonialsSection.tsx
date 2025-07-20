import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alice",
    program: "Fit Program",
    text: "O desafio Fit de 4 semanas manteve-me motivada durante todo o processo. Os resultados foram incríveis!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Lyndall",
    program: "Express Strength",
    text: "Perdi 30 cm e 8,4 kg com este programa. A estrutura é perfeita para quem tem pouco tempo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Kiara",
    program: "HIIT Power",
    text: "Transformou a minha vida! Nunca pensei que conseguiria ser tão forte e confiante.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          O que dizem os nossos membros
        </h2>
        <p className="text-xl text-muted-foreground">
          Histórias reais de transformação
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4 italic">
              "{testimonial.text}"
            </blockquote>
            <div className="font-semibold text-purple-600">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.program}</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 