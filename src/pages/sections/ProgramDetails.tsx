import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "./programsData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return <div className="text-center py-20 text-2xl font-bold">Programa não encontrado.</div>;
  }

  return (
    <section className="min-h-screen bg-background py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl mx-auto">
        {/* Seção 1: Título, imagem e descrição */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative h-56 md:h-80 w-full mb-4">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">{program.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{program.description}</p>
          </div>
        </Card>

        {/* Seção 2: O que vais encontrar? */} 
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-bold mb-4 text-gold">O que vais encontrar?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-blue-900">
            {program.features && program.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </Card>

        {/* Seção 3: Informações técnicas */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gold">Informações Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
            <div><span className="font-semibold">Duração:</span> {program.duration}</div>
            <div><span className="font-semibold">Nível:</span> {program.level}</div>
            <div><span className="font-semibold">Tempo por sessão:</span> {program.time}</div>
            <div><span className="font-semibold">Tipo:</span> {program.type}</div>
            <div><span className="font-semibold">Género:</span> {program.gender}</div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProgramDetails; 