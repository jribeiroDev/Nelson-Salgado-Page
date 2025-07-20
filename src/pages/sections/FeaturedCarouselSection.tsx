import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProgramCard from "@/components/programCard";
import { Calendar, Dumbbell, User } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Programa Hibrido",
    duration: "6 semanas",
    type: "Full Body",
    gender: "Feminino",
    image: "https://images.unsplash.com/photo-1571019613540-996a1b30c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Programa de Definição",
    duration: "6 semanas",
    type: "Full Body",
    gender: "Feminino",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Programas de Tonificação",
    duration: "6 semanas",
    type: "Full Body",
    gender: "Feminino",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Programa de Força (express)",
    duration: "6 semanas",
    type: "Full Body",
    gender: "Masculino",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Programa Glúteos Fortes",
    duration: "8 semanas",
    type: "Construir Músculo",
    gender: "Masculino",
    image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const FeaturedCarouselSection = () => (
  <section>
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10 text-gold">
        Programas em Destaque
      </h2>
    </div>
    <div className="flex justify-center px-12 m-10 ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-4/5"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {programs.map((program) => (
            <CarouselItem key={program.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
              <ProgramCard
                title={program.name}
                activities={[
                  { icon: <Calendar className="w-6 h-6" />, text: program.duration },
                  { icon: <Dumbbell className="w-6 h-6" />, text: program.type },
                  { icon: <User className="w-6 h-6" />, text: program.gender },
                ]}
                backgroundImage={program.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default FeaturedCarouselSection; 