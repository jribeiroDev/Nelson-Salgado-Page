import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "./programsData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Programa não encontrado.
      </div>
    );
  }

  return (
    <section className="bg-background">
      {/* Seção 1: Imagem ocupando toda a altura da viewport */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Imagem ocupando toda a seção */}
        <img
          src={program.image}
          alt={program.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Card flutuante centralizado */}
        <div className="absolute inset-0 flex items-center justify-start p-4 md:p-8 lg:p-12">
          <Card className="w-full max-w-lg bg-white backdrop-blur-sm py-20 px-10 ml-60 rounded-3xl">
            <h1 className="text-4xl font-medium mb-8 text-center">
              {program.name}
            </h1>

            {/* Features com checkmark */}
            <ul className="space-y-4  mt-14">
              {program.features &&
                program.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 text-gold flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-neutral-800">{feature}</span>
                  </li>
                ))}
            </ul>

            {/* Botão estilizado */}
            <div className="flex justify-center">
              <Button className="h-16 w-64 mt-10 bg-blue text-gold rounded-full py-6 text-lg font-medium">
                ADERIR AGORA
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Container para as outras seções */}
      <div className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl mx-auto">
          {/* Seção 2: O que vais encontrar? */}
          <Card className="mb-8 p-6">
            <h2 className="text-2xl font-bold mb-4 text-gold">
              O que vais encontrar?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-blue-900">
              {program.features &&
                program.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
            </ul>
          </Card>

          {/* Seção 3: Informações técnicas */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gold">
              Informações Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
              <div>
                <span className="font-semibold">Duração:</span>{" "}
                {program.duration}
              </div>
              <div>
                <span className="font-semibold">Nível:</span> {program.level}
              </div>
              <div>
                <span className="font-semibold">Tempo por sessão:</span>{" "}
                {program.time}
              </div>
              <div>
                <span className="font-semibold">Tipo:</span> {program.type}
              </div>
              <div>
                <span className="font-semibold">Género:</span> {program.gender}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
