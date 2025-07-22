import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "./programsData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === Number(id));

  // Adicione este estado
  const [openSections, setOpenSections] = React.useState({
    achieve: true,
    duration: false,
    training: false,
    nutrition: false,
  });

  // Adicione esta função
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
      <div className="py-10 flex justify-center">
        <div className="w-full">
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

          {/* Seção 3: Layout com ícones, imagem e seções expansíveis */}
          <div className="w-full bg-white">
            <div className="container mx-auto px-4 max-w-[1400px]">
              {/* Ícones do topo */}
              <div className="flex justify-center items-center gap-20 py-12 mb-12">
                <div className="flex flex-col items-center">
                  <Calendar className="w-12 h-12 mb-2" />
                  <span className="text-sm">8 Weeks</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4s-8 1.79-8 4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Build Muscle</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Strength</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M18.364 5.636a9 9 0 010 12.728m0 0l3.536-3.536M18.364 5.636l3.536-3.536M5.636 18.364a9 9 0 010-12.728m0 0l-3.536 3.536M5.636 18.364L2.1 21.9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Sculpt</span>
                </div>
              </div>

              {/* Grid para imagem e seções expansíveis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coluna da Imagem */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Coluna das Seções Expansíveis */}
                <div className="py-8">
                  {/* Seções expansíveis */}
                  <div className="space-y-6">
                    {/* What You Will Achieve */}
                    <div className="border-b pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection("achieve")}
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h3 className="text-xl font-semibold">
                            WHAT YOU WILL ACHIEVE
                          </h3>
                        </div>
                        <motion.svg
                          className="w-6 h-6"
                          animate={{ rotate: openSections.achieve ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </div>
                      <AnimatePresence initial={false}>
                        {openSections.achieve && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-9">
                              <p className="text-gray-600 mb-4">
                                The Build & Sculpt Program is perfect for you if
                                your goal is to:
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                  <span className="text-gray-600">
                                    + Build lower body and lean upper body
                                    muscle.
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="text-gray-600">
                                    + Improve deadlift strength.
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="text-gray-600">
                                    + Boost cardiovascular and muscular
                                    endurance and performance.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Workout Duration */}
                    <div className="border-b pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer "
                        onClick={() => toggleSection("duration")}
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h3 className="text-xl font-semibold">
                            WORKOUT DURATION
                          </h3>
                        </div>
                        <motion.svg
                          className="w-6 h-6"
                          animate={{ rotate: openSections.duration ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </div>
                      <AnimatePresence initial={false}>
                        {openSections.duration && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-9 mt-4">
                              <p className="text-gray-600">
                                • 35-75 minute workouts
                                <br />
                                • 3-5 sessions per week
                                <br />• 8 weeks program duration
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Training Styles */}
                    <div className="border-b pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection("training")}
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h3 className="text-xl font-semibold">
                            TRAINING STYLES & EXPERIENCE
                          </h3>
                        </div>
                        <motion.svg
                          className="w-6 h-6"
                          animate={{ rotate: openSections.training ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </div>
                      <AnimatePresence initial={false}>
                        {openSections.training && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-9 mt-4">
                              <p className="text-gray-600">
                                • Strength training
                                <br />
                                • HIIT workouts
                                <br />
                                • Progressive overload
                                <br />• Suitable for intermediate level
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Nutrition */}
                    <div className="border-b pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection("nutrition")}
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M3 3h18v18H3V3z M3 9h18M3 15h18M9 3v18M15 3v18"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h3 className="text-xl font-semibold">NUTRITION</h3>
                        </div>
                        <motion.svg
                          className="w-6 h-6"
                          animate={{ rotate: openSections.nutrition ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </div>
                      <AnimatePresence initial={false}>
                        {openSections.nutrition && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-9 mt-4">
                              <p className="text-gray-600">
                                • Customized meal plans
                                <br />
                                • Macro tracking guidance
                                <br />
                                • Supplement recommendations
                                <br />• Nutrition tips and advice
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Botão JOIN NOW */}
                  <div className="mt-8 flex justify-center">
                    <Button className="h-16 w-96 mt-10 bg-blue text-gold rounded-full py-6 text-lg font-medium">
                      ADERIR AGORA
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
