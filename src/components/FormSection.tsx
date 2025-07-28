import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, User, Users } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  genero: string;
  tipoPlano: string;
  descricao: string;
}

const FormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    genero: "",
    tipoPlano: "",
    descricao: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const sendEmail = async (data: FormData) => {
    // Using EmailJS service - you'll need to set up an account at emailjs.com
    // Install: npm install @emailjs/browser

    try {
      // For now, we'll simulate the email sending
      // In production, replace this with actual EmailJS implementation

      const emailData = {
        to_email: "pedroribeiro15@gmail.com", // Your receiving email
        from_name: data.nome,
        from_email: data.email,
        gender: data.genero,
        plan_type: data.tipoPlano,
        message: data.descricao,
        subject: `Nova solicitação de plano - ${data.tipoPlano}`,
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Uncomment and configure when ready to use EmailJS:
      /*
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        emailData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      if (result.status === 200) {
        return { success: true };
      }
      */

      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.nome ||
      !formData.email ||
      !formData.genero ||
      !formData.tipoPlano
    ) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await sendEmail(formData);

      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contacto consigo em breve.",
      });

      // Reset form
      setFormData({
        nome: "",
        email: "",
        genero: "",
        tipoPlano: "",
        descricao: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente mais tarde ou contacte-nos diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
            <Mail className="h-10 w-10 text-blue" />
          </div>
          <h2 className="text-5xl font-bold text-blue mb-4 tracking-tight">
            Vamos Começar
          </h2>
          <p className="text-xl text-blue/80 max-w-2xl mx-auto leading-relaxed">
            Transforme o seu corpo e a sua vida. Preencha o formulário e
            criaremos o plano perfeito para si.
          </p>
        </div>

        {/* Form Card */}
        <Card className="backdrop-blur-lg bg-white/95 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Left side - Visual */}
              <div className="bg-gradient-to-br from-blue to-blue/80 p-12 flex flex-col justify-center text-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="/assets/img_5.jpeg"
                    alt="Fitness training"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/80 to-blue/60"></div>
                </div>

                {/* Decorative Icon */}
                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-2xl mb-6">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">
                    O Seu Futuro Começa Aqui
                  </h3>
                </div>

                <div className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-lg">
                        Planos 100% personalizados
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-lg">
                        Acompanhamento profissional
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-lg">Resultados garantidos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-lg">Suporte 24/7</span>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <p className="text-lg font-medium mb-2">
                      Mais de 1000+ clientes satisfeitos
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gold text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="nome"
                      className="text-blue font-semibold text-sm"
                    >
                      Nome Completo *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Digite o seu nome completo"
                        value={formData.nome}
                        onChange={(e) =>
                          handleInputChange("nome", e.target.value)
                        }
                        className="pl-12 h-14 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue/20 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-blue font-semibold text-sm"
                    >
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="exemplo@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="pl-12 h-14 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue/20 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Género */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="genero"
                      className="text-blue font-semibold text-sm"
                    >
                      Género *
                    </Label>
                    <Select
                      value={formData.genero}
                      onValueChange={(value) =>
                        handleInputChange("genero", value)
                      }
                      required
                    >
                      <SelectTrigger className="h-14 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue/20">
                        <SelectValue placeholder="Selecione o seu género" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                        <SelectItem value="prefiro-nao-dizer">
                          Prefiro não dizer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tipo de Plano */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="tipoPlano"
                      className="text-blue font-semibold text-sm"
                    >
                      Tipo de Plano *
                    </Label>
                    <Select
                      value={formData.tipoPlano}
                      onValueChange={(value) =>
                        handleInputChange("tipoPlano", value)
                      }
                      required
                    >
                      <SelectTrigger className="h-14 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue/20">
                        <SelectValue placeholder="Selecione o tipo de plano que pretende" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="build-sculpt">
                          Build & Sculpt Program
                        </SelectItem>
                        <SelectItem value="definition">
                          Definition Program
                        </SelectItem>
                        <SelectItem value="toning">Toning Program</SelectItem>
                        <SelectItem value="strength">
                          Strength Program
                        </SelectItem>
                        <SelectItem value="strong-glutes">
                          Strong Glutes Program
                        </SelectItem>
                        <SelectItem value="pilates">Pilates Program</SelectItem>
                        <SelectItem value="beginner">
                          Beginner Program
                        </SelectItem>
                        <SelectItem value="ab">Ab Program</SelectItem>
                        <SelectItem value="express">Express Program</SelectItem>
                        <SelectItem value="posture">Posture Program</SelectItem>
                        <SelectItem value="personalizado">
                          Plano Personalizado
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Descrição */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="descricao"
                      className="text-blue font-semibold text-sm"
                    >
                      Descrição / Objetivos
                    </Label>
                    <Textarea
                      id="descricao"
                      placeholder="Conte-nos mais sobre os seus objetivos, experiência anterior, limitações ou qualquer informação relevante..."
                      value={formData.descricao}
                      onChange={(e) =>
                        handleInputChange("descricao", e.target.value)
                      }
                      rows={4}
                      className="resize-none border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue/20 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue to-blue/80 hover:from-blue/90 hover:to-blue/70 hover:text-gold text-white h-14 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="h-5 w-5" />
                        Enviar Formulário
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    * Campos obrigatórios
                  </p>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormSection;
