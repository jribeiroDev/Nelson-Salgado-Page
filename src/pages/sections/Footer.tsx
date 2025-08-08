import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige text-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-6">
        {/* Informações do desenvolvedor e ano */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base lg:text-lg text-blue font-medium">
            © {currentYear} Nelson Salgado. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-blue">
            Desenvolvido por{" "}
            <span className="text-gold font-semibold hover:text-gold/80 transition-colors duration-200">
              JR Web Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
