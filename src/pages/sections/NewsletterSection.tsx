import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Junta-te à nossa comunidade!
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Recebe novidades, lançamentos e dicas direto no e-mail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Input 
            type="email" 
            placeholder="O teu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
          />
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 whitespace-nowrap">
            Inscreve-te
          </Button>
        </div>
        <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full">
          <Play className="w-5 h-5 mr-2" />
          Explorar programas
        </Button>
      </div>
    </section>
  );
};

export default NewsletterSection; 