import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Dumbbell, Clock, TrendingUp, ArrowRight, Target } from "lucide-react";
import { programs } from "./programsData";
import { useNavigate } from "react-router-dom";

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
  const [selectedWeeklyLevel, setSelectedWeeklyLevel] = useState("all");
  const navigate = useNavigate();

  const filteredPrograms = programs.filter((p) => {
    const genderMatch = selectedGender === "all" || p.gender === selectedGender;
    const levelMatch = selectedLevel === "all" || p.level === selectedLevel;
    const levelWeekMatch = selectedWeeklyLevel === "all" || p.level === selectedWeeklyLevel;
    return genderMatch && levelMatch && levelWeekMatch;
  });

  return (
    <section id="program-catalog-section" className="py-10 px-2 md:py-20 md:px-4 bg-gold">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-blue-900">
            Os Nossos Programas
          </h2>
          <p className="text-base md:text-xl text-blue-900 max-w-2xl mx-auto">
            Escolhe o programa ideal para os teus objetivos!
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 gap-2 justify-center items-center text-center mb-6 md:mb-8">
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="mb-2 w-full text-center text-base font-medium text-blue-900">Género</span>
            <Select value={selectedGender} onValueChange={setSelectedGender}>
              <SelectTrigger className="w-64 h-12 bg-blue text-gold  text-base md:text-lg mx-auto">
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
          </div>
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="mb-2 w-full text-center text-base font-medium text-blue-900">Nível de treino</span>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-64 h-12 bg-blue text-gold  text-base md:text-lg mx-auto">
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
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="mb-2 w-full text-center text-base font-medium text-blue-900">Nível de treino semanal</span>
            <Select value={selectedWeeklyLevel} onValueChange={setSelectedWeeklyLevel}>
              <SelectTrigger className="w-64 h-12 text-base bg-blue text-gold md:text-lg mx-auto">
                <SelectValue placeholder="Nível de treino Semanal" />
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 cursor-pointer">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="group relative overflow-hidden border-0 shadow-lg max-w-sm w-full mx-auto md:max-w-full p-0 h-80 flex flex-col justify-end">
              {/* Imagem de fundo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Conteúdo */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                  {program.name}
                </h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-2 drop-shadow-lg">
                  {program.description}
                </p>
                <div className="flex justify-left">
                  <a
                    href={`/programa/${program.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue text-gold font-bold px-6 py-2 rounded-full hover:bg-gold hover:text-blue transition-colors flex items-center justify-center"
                  >
                    Ver programa
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCatalogSection; 