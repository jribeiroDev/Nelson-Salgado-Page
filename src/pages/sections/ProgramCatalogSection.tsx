import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Dumbbell, Clock, TrendingUp, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Programa Hibrido",
    duration: "6 semanas",
    level: "Principiante a intermédio",
    time: "30-60 min",
    type: "Full Body",
    gender: "Feminino",
    description: "Perfeito para perda de peso e transformação rápida.",
    image: "https://images.unsplash.com/photo-1571019613540-996a1b30c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true
  },
  {
    id: 2,
    name: "Programa de Definição",
    duration: "6 semanas",
    level: "Intermédio",
    time: "30-45 min",
    type: "Full Body",
    gender: "Feminino",
    description: "Desenvolver força com treinos eficientes e focados.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false
  },
  {
    id: 3,
    name: "Programas de Tonificação",
    duration: "6 semanas",
    level: "Todos os níveis",
    time: "20-40 min",
    type: "Full Body",
    gender: "Feminino",
    description: "Queimar calorias e melhorar resistência cardiovascular.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true
  },
  {
    id: 4,
    name: "Programa de Força (express)",
    duration: "6 semanas",
    level: "Principiante",
    time: "45-60 min",
    type: "Full Body",
    gender: "Masculino",
    description: "Melhorar flexibilidade, equilíbrio e paz interior.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false
  },
  {
    id: 5,
    name: "Programa Glúteos Fortes",
    duration: "8 semanas",
    level: "Avançado",
    time: "25-35 min",
    type: "Construir Músculo",
    gender: "Masculino",
    description: "Treinos intensos para máximos resultados em pouco tempo.",
    image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true
  }
];

const uniqueGenders = Array.from(new Set(programs.map(p => p.gender)));
const genderOptions = [
  { label: "Todos", value: "all" },
  ...uniqueGenders.map(gender => ({ label: gender, value: gender }))
];

const uniqueLevel = Array.from(new Set(programs.map(p => p.level)));
const LevelOptions = [
  { label: "Todos", value: "all" },
  ...uniqueLevel.map(level => ({ label: level, value: level }))
];

const ProgramCatalogSection = () => {
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredPrograms = programs.filter((p) => {
    const genderMatch = selectedGender === "all" || p.gender === selectedGender;
    const levelMatch = selectedLevel === "all" || p.level === selectedLevel;
    return genderMatch && levelMatch;
  });

  return (
    <section className="py-20 px-4 bg-gold">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Os Nossos Programas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolhe o programa ideal para os teus objetivos e nível de experiência
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Select value={selectedGender} onValueChange={setSelectedGender}>
            <SelectTrigger className="w-64 h-12 text-lg">
              <SelectValue placeholder="Selecciona género" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-64 h-12 text-lg">
              <SelectValue placeholder="Nível de treino" />
            </SelectTrigger>
            <SelectContent>
              {LevelOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {program.popular && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {program.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <Dumbbell className="w-3 h-3 mr-1" />
                    {program.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {program.time}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {program.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {program.description}
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Escolhe nível
                  </Button>
                  <Button variant="outline" className="hover:bg-purple-50">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCatalogSection; 