import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Nome da página */}
        {/* <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gold mb-2">
            Program Selector App
          </h3>
          <p className="text-sm sm:text-base text-white/80">
            Transforme seu corpo, transforme sua vida
          </p>
        </div>

        {/* Linha divisória }
        <div className="w-24 h-0.5 bg-gold mx-auto rounded-full"></div> 

        {/* Informações do desenvolvedor e ano */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base text-blue">
            © {currentYear} Nelson Salgado. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm text-blue">
            Desenvolvido por{" "}
            <span className="text-gold font-semibold">JR Web Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
