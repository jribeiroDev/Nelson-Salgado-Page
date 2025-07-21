import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProgramCard from "@/components/programCard";
import { Calendar, Dumbbell, User } from "lucide-react";
import { programs } from "./programsData";

const FeaturedCarouselSection = () => {
  // Filtra apenas os programas populares
  const popularPrograms = programs.filter((program) => program.popular);

  return (
    <section id="program-catalog-carousel" className="md:py-10 bg-gold">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10 text-blue">
          Programas em Destaque
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-12 m-10">
        {popularPrograms.map((program) => (
          <div key={program.id} className="max-w-xs w-full transform transition-transform duration-300 hover:scale-105">
            <ProgramCard
              title={program.name}
              activities={[
                { icon: <Calendar className="w-6 h-6" />, text: program.duration },
                { icon: <Dumbbell className="w-6 h-6" />, text: program.type },
                { icon: <User className="w-6 h-6" />, text: program.gender },
              ]}
              backgroundImage={program.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCarouselSection; 