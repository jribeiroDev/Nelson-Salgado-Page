import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProgramCard from "@/components/programCard";
import { Calendar, Dumbbell, User } from "lucide-react";
import { programs } from "./programsData";

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