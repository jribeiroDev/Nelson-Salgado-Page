
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, Users, Target, Dumbbell, Heart, TrendingUp, CheckCircle, Play, ArrowRight, Zap, Apple, BarChart3, MessageSquare } from 'lucide-react';

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [email, setEmail] = useState('');

  const programs = [
    {
      id: 1,
      name: "Fit Program",
      duration: "4 semanas",
      level: "Principiante a intermédio",
      time: "30-60 min",
      type: "Full body",
      description: "Perfeito para perda de peso e transformação rápida.",
      image: "https://images.unsplash.com/photo-1571019613540-996a1b30c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 2,
      name: "Express Strength",
      duration: "6 semanas",
      level: "Intermédio",
      time: "30-45 min",
      type: "Força",
      description: "Desenvolver força com treinos eficientes e focados.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: false
    },
    {
      id: 3,
      name: "Cardio Blast",
      duration: "3 semanas",
      level: "Todos os níveis",
      time: "20-40 min",
      type: "Cardio",
      description: "Queimar calorias e melhorar resistência cardiovascular.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 4,
      name: "Yoga Flow",
      duration: "8 semanas",
      level: "Principiante",
      time: "45-60 min",
      type: "Flexibilidade",
      description: "Melhorar flexibilidade, equilíbrio e paz interior.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: false
    },
    {
      id: 5,
      name: "HIIT Power",
      duration: "5 semanas",
      level: "Avançado",
      time: "25-35 min",
      type: "HIIT",
      description: "Treinos intensos para máximos resultados em pouco tempo.",
      image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 6,
      name: "Mobility Master",
      duration: "6 semanas",
      level: "Todos os níveis",
      time: "30-40 min",
      type: "Mobilidade",
      description: "Melhorar mobilidade e estabilidade para o dia a dia.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: false
    }
  ];

  const featuredPrograms = [
    {
      title: "Express Strength",
      duration: "6 semanas",
      level: "Principiante a Intermédio",
      description: "Desenvolver força com treinos de 30-45 min",
      benefits: ["Melhorar mobilidade e estabilidade", "Weighted Workouts + LISS", "Progressão gradual"],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Cardio Transform",
      duration: "4 semanas",
      level: "Todos os níveis",
      description: "Queimar gordura e melhorar resistência",
      benefits: ["Treinos cardio variados", "Melhoria da resistência", "Queima eficaz de calorias"],
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-600 to-red-600"
    },
    {
      title: "Full Body Power",
      duration: "8 semanas",
      level: "Intermédio a Avançado",
      description: "Treino completo para todo o corpo",
      benefits: ["Treinos funcionais", "Força e resistência", "Definição muscular"],
      image: "https://images.unsplash.com/photo-1571019613540-996a1b30c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const testimonials = [
    {
      name: "Alice",
      program: "Fit Program",
      text: "O desafio Fit de 4 semanas manteve-me motivada durante todo o processo. Os resultados foram incríveis!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Lyndall",
      program: "Express Strength",
      text: "Perdi 30 cm e 8,4 kg com este programa. A estrutura é perfeita para quem tem pouco tempo!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Kiara",
      program: "HIIT Power",
      text: "Transformou a minha vida! Nunca pensei que conseguiria ser tão forte e confiante.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Treinos guiados",
      description: "Home e ginásio, com swaps e ajustes personalizados"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrição baseada em ciência",
      description: "Meal Guides + 1.500+ receitas saudáveis"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Progress tracking",
      description: "Definição de metas, registo de sono, água, macros"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunidade",
      description: "Partilha, suporte e motivação mútua"
    }
  ];

  const faqs = [
    {
      question: "Quando posso começar?",
      answer: "Podes começar a qualquer momento! Novos ciclos de programas começam todas as segundas-feiras."
    },
    {
      question: "Qual o nível certo para mim?",
      answer: "Recomendamos com base no teu tempo de treino anterior. Principiantes: 0-6 meses, Intermédio: 6 meses-2 anos, Avançado: 2+ anos."
    },
    {
      question: "A nutrição está incluída?",
      answer: "Sim! Meal guides adaptados aos teus objetivos: Definição, Ganho muscular ou Manutenção de peso."
    },
    {
      question: "Como acompanho os meus resultados?",
      answer: "A app inclui registo completo: sono, macros, hidratação, medidas corporais e progresso nos treinos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613540-996a1b30c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Descobre o programa perfeito para ti
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto animate-fade-in">
            30+ programas de treino guiado, planos de nutrição e suporte de comunidade — para todos os níveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              Explorar programas
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              <Target className="w-5 h-5 mr-2" />
              Faz o quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nossos Programas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolhe o programa ideal para os teus objetivos e nível de experiência
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-64 h-12 text-lg">
                <SelectValue placeholder="Selecciona nível" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="principiante">Principiante</SelectItem>
                <SelectItem value="intermediio">Intermédio</SelectItem>
                <SelectItem value="avancado">Avançado</SelectItem>
                <SelectItem value="todos">Todos os níveis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {program.popular && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {program.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Dumbbell className="w-3 h-3 mr-1" />
                      {program.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.time}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {program.level}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {program.description}
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      Escolhe nível
                    </Button>
                    <Button variant="outline" className="hover:bg-purple-50">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Programas em Destaque
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Os nossos programas mais populares para diferentes objetivos
            </p>
          </div>

          <div className="space-y-12">
            {featuredPrograms.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20`}></div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-4 text-slate-300 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </span>
                      <span className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {program.level}
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 mb-6">
                      {program.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">O que vais alcançar:</h4>
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105`}>
                    Seleciona Nível
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vantagens da Nossa App
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo o que precisas para transformar o teu estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              O que dizem os nossos membros
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="font-semibold text-purple-600">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.program}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Planos & Preços
            </h2>
            <p className="text-xl text-slate-300">
              Acesso completo a todos os programas e funcionalidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 text-white border-0 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                  <Zap className="w-3 h-3 mr-1" />
                  Mais Popular
                </Badge>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Platinum Anual</h3>
                <div className="text-4xl font-bold mb-2">
                  €199.99<span className="text-lg font-normal">/ano</span>
                </div>
                <p className="text-purple-200">Economia de 33% • Compromisso 4 meses</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Acesso a todos os 30+ programas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Meal guides personalizados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  1.500+ receitas saudáveis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Progress tracking completo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Suporte da comunidade
                </li>
              </ul>
              
              <Button className="w-full bg-white text-purple-900 hover:bg-purple-50 font-bold py-3">
                Junta-te agora
              </Button>
            </Card>

            <Card className="p-8 bg-white border-2 border-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Platinum Mensal</h3>
                <div className="text-4xl font-bold mb-2 text-purple-900">
                  €24.99<span className="text-lg font-normal">/mês</span>
                </div>
                <p className="text-muted-foreground">Flexibilidade máxima</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Acesso a todos os 30+ programas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Meal guides personalizados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  1.500+ receitas saudáveis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Progress tracking completo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Suporte da comunidade
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3">
                Junta-te agora
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-300 mb-4">
              Ou compra programas individuais por €59.99
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos as tuas principais dúvidas
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-purple-900 hover:text-purple-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter/CTA */}
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
    </div>
  );
};

export default Index;
