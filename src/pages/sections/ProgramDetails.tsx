import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "./programsData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <main className="min-h-screen bg-background">
      {/* Section 1: Hero with floating card */}
      <section className="h-screen relative w-full">
        {/* Background Image */}
        <img
          src={program.image}
          alt={program.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Floating Card */}
        <div className="absolute inset-0 flex items-center justify-start p-4 md:p-8 lg:p-12">
          <Card className="w-full max-w-lg bg-white/90 backdrop-blur-sm py-20 px-10 ml-60 rounded-3xl">
            <h1 className="text-4xl font-medium mb-8 text-center">
              {program.name}
            </h1>

            <ul className="space-y-4 mt-14">
              {program.features?.slice(0, 4).map((feature, idx) => (
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

            <div className="flex justify-center">
              <Button className="h-16 w-64 mt-10 bg-blue text-gold rounded-full py-6 text-lg font-medium">
                ADERIR AGORA
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2: Program Details */}
      <section className="min-h-screen bg-gold">
        <div className="container mx-auto px-4 max-w-[1400px] py-16">
          {/* Icons */}
          <div className="flex justify-center items-center gap-20 py-12 mb-12">
            {program.activities.map((activity, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">{activity.icon}</div>
                <span className="text-sm text-white">{activity.text}</span>
              </div>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Column */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src={program.image}
                alt={program.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Expandable Sections Column */}
            <div className="py-8">
              <div className="space-y-6 text-blue">
                {/* Map through all sections */}
                {Object.entries(program.details).map(([key, section]) => (
                  <div key={key} className="border-b pb-6">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        toggleSection(key as keyof typeof openSections)
                      }
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">
                          {section.title}
                        </h3>
                      </div>
                      <motion.svg
                        className="w-6 h-6"
                        animate={{
                          rotate: openSections[key as keyof typeof openSections]
                            ? 180
                            : 0,
                        }}
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
                      {openSections[key as keyof typeof openSections] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-9 mt-4">
                            {key === "achieve" && (
                              <p className="text-gray-600 mb-4">
                                {section.bullets}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {section.bullets.map((bullet, idx) => (
                                <li key={idx} className="text-gray-600">
                                  • {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Join Button */}
              <div className="mt-8 flex justify-center">
                <Button className="h-16 w-96 mt-10 bg-blue text-gold rounded-full py-6 text-lg font-medium">
                  ADERIR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramDetails;
