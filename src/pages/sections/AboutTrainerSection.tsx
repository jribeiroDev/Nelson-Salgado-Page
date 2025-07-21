import React from "react";

const AboutTrainerSection = () => {
  const handleScrollToPrograms = () => {
    const section = document.getElementById("program-catalog-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex">
      <div className="w-1/2 bg-gold flex items-center justify-center p-12">
        <div className="text-center text-blue space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Descobre o teu programa ideal
          </h1>
          <p className="text-xl opacity-90 max-w-md mx-auto">
            Eleva, ainda mais, o teu potencial!
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleScrollToPrograms}
          >
            Explorar programas
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2 bg-orange flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Nelson Salgado</h2>
            <p className="text-lg opacity-90">Professional Trainer</p>
          </div>
        </div>
        <div className="h-1/2 bg-gray-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Workspace moderno"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTrainerSection; 