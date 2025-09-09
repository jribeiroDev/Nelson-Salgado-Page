import {
  Calendar,
  Dumbbell,
  User,
  Target,
  Zap,
  Users,
  Trophy,
  Heart,
  Settings,
  Footprints,
  TrendingUp,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Activity,
  Play,
  Home,
  Bookmark,
  Star,
  CircleCheck,
  Timer,
  Gauge,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";

interface Program {
  id: number;
  name: string;
  duration: string;
  level: string;
  time: string;
  type: string;
  gender: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
    isSpecial?: boolean;
  }>;
  image: string;
  popular: boolean;
  activities: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  details: {
    achieve: {
      title: string;
      description: string;
      bullets: string[];
    };
    duration: {
      title: string;
      bullets: string[];
    };
    training: {
      title: string;
      bullets: string[];
    };
    nutrition: {
      title: string;
      bullets: string[];
    };
  };
}

export const programs: Program[] = [
  {
    id: 1,
    name: "Programa Hibrido",
    duration: "6 semanas",
    level: "Iniciante",
    time: "30-60 min",
    type: "Corrida e Musculação",
    gender: "Homem/Mulher",
    description:
      "Treino inteligente que combina corrida + musculação para transformar a tua performance e composição corporal .",
    features: [
      {
        title: "Método Inteligente",
        description:
          "Corrida + musculação sem conflitos, para resultados consistentes.",
        icon: <Target className="w-4 h-4" />,
      },
      {
        title: "Mais Rápido e Mais Forte",
        description:
          "Melhora a resistência cardiovascular sem perder força e massa muscular.",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "Plano Semanal",
        description:
          "Estrutura semanal pensada para não desanimares nem estagnares.",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        title: "Suporte Completo",
        description:
          "Estratégias de recuperação e alimentação para acelerar a tua evolução.",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Resultados Comprovados",
        description:
          "+50 alunos já experimentaram este método com resultados reais",
        icon: <Trophy className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image: "/assets/ph.jpeg",
    popular: true,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "8 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Strength" },
      { icon: <User className="w-6 h-6" />, text: "Advanced" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Build & Sculpt Program is perfect for you if your goal is to:",
        bullets: [
          "Build lower body and lean upper body muscle.",
          "Improve deadlift strength.",
          "Boost cardiovascular and muscular endurance and performance.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "35-75 minute workouts",
          "3-5 sessions per week",
          "8 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Strength training",
          "HIIT workouts",
          "Progressive overload",
          "Suitable for intermediate level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Customized meal plans",
          "Macro tracking guidance",
          "Supplement recommendations",
          "Nutrition tips and advice",
        ],
      },
    },
  },
  {
    id: 2,
    name: "Programa de Definição",
    duration: "6 semanas",
    level: "Iniciante",
    time: "30-45 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Treinos Full Body que definem o corpo, melhoram a postura, respiração e aumentar a tua força e resistência.",
    features: [
      {
        title: "Resultados Visíveis",
        description:
          "Estímulos variados para definição muscular sem perder performance.",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        title: "Plano Inteligente",
        description:
          "Estrutura semanal que respeita a recuperação e maximiza resultados.",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        title: "Equilíbrio Total",
        description:
          "Core, membros inferiores e superiores trabalhados de forma estratégica.",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "Mais que Estética",
        description: "Melhora a postura, respiração e condicionamento físico.",
        icon: <Heart className="w-4 h-4" />,
      },
      {
        title: "Resultados Comprovados",
        description:
          "+30 alunos já atingiram resultados reais com este método.",
        icon: <Award className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Full Body" },
      { icon: <User className="w-6 h-6" />, text: "Intermediate" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Full Body Program is perfect for you if your goal is to:",
        bullets: [
          "Build overall muscle strength and endurance.",
          "Improve posture and breathing.",
          "Enhance functional movement patterns.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "30-45 minute workouts",
          "3-4 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Full body strength training",
          "Functional movements",
          "Progressive overload",
          "Suitable for intermediate level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Balanced nutrition approach",
          "Recovery nutrition tips",
          "Hydration guidelines",
          "Supplement recommendations",
        ],
      },
    },
  },
  {
    id: 3,
    name: "Programa de Tonificação",
    duration: "6 semanas",
    level: "Iniciante",
    time: "20-40 min",
    type: "Full Body",
    gender: "Mulher",
    description:
      "Treinos focados em glúteos, pernas e abdominal, para tonificar, ganhar firmeza e melhorar a postura, sem dietas extremas.",
    features: [
      {
        title: "Glúteos e Pernas em Destaque",
        description:
          "Full Body com ênfase em membros inferiores para transformar a tua silhueta.",
        icon: <Target className="w-4 h-4" />,
      },
      {
        title: "Força e Resistência",
        description:
          "Estímulos progressivos que tonificam e aceleram o metabolismo.",
        icon: <span className="text-sm">💪</span>,
      },
      {
        title: "Aceleração Opcional",
        description: "Caminhada ou corrida para potencializar a definição.",
        icon: <Footprints className="w-4 h-4" />,
      },
      {
        title: "Resultados Reais",
        description:
          "Rotinas equilibradas que trabalham a firmeza muscular, postura e confiança.",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      {
        title: "Método Testado",
        description:
          "Testado com dezenas de alunas que já conquistaram firmeza e auto-estima",
        icon: <Star className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image: "/assets/pt.jpeg",
    popular: true,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Full Body" },
      { icon: <User className="w-6 h-6" />, text: "Women" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Toning Program is perfect for you if your goal is to:",
        bullets: [
          "Tone and strengthen glutes and legs.",
          "Improve core strength and stability.",
          "Enhance overall posture and confidence.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "20-40 minute workouts",
          "3-4 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Lower body focused training",
          "Core strengthening",
          "Progressive resistance",
          "Suitable for beginner level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "No extreme diets required",
          "Balanced approach to nutrition",
          "Metabolism boosting tips",
          "Hydration guidelines",
        ],
      },
    },
  },
  {
    id: 4,
    name: "Programa de Força",
    duration: "6 semanas",
    level: "Intermédio",
    time: "30-45 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Foco e intensidade  total em cada sessão com progressão semanal para evitar o estiramento.",
    features: [
      {
        title: "Resultados Consistentes",
        description:
          "Treino focado em força máxima, progressão de carga e hipertrofia limpa para quem quer transformar o corpo de forma consistente.",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        title: "Força Pura",
        description:
          "Estrutura de treino baseada em sobrecarga progressiva para construir músculos sólidos.",
        icon: <span className="text-sm">💪</span>,
      },
      {
        title: "Resultados Medidos",
        description: "Aumento real de carga e volume a cada semana.",
        icon: <Activity className="w-4 h-4" />,
      },
      {
        title: "Divisão Estratégica",
        description:
          "Rotina pensada para recuperação ideal e crescimento contínuo.",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Suporte Completo",
        description:
          "Estratégias de alimentação e recuperação para maximizar hipertrofia.",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Resultados Comprovados",
        description:
          "Programa usado por alunos que saíram do plano e conquistaram resultados visíveis em poucas semanas.",
        icon: <Trophy className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image: "/assets/tf.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Strength" },
      { icon: <User className="w-6 h-6" />, text: "Intermediate" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Hypertrophy Program is perfect for you if your goal is to:",
        bullets: [
          "Build significant muscle mass and strength.",
          "Increase lifting capacity progressively.",
          "Achieve a more muscular physique.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "30-45 minute workouts",
          "4-5 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Progressive overload training",
          "Compound movements focus",
          "Volume-based hypertrophy",
          "Suitable for intermediate level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "High protein intake guidelines",
          "Muscle building nutrition",
          "Recovery meal planning",
          "Supplement protocols",
        ],
      },
    },
  },
  {
    id: 5,
    name: "Programa de Iniciação",
    duration: "6 semanas",
    level: "Iniciante",
    time: "30-40 min",
    type: "Iniciação",
    gender: "Homem/Mulher",
    description:
      "Treinos simples, orientações claras e suporte completo para ganhar confiança, melhorar saude e ganhar uma boa rotina de treinos.",
    features: [
      {
        title: "Começa do Zero em Segurança",
        description:
          "Exercícios simples e progressivos para fazer em casa ou no ginásio.",
        icon: <Trophy className="w-4 h-4" />,
      },
      {
        title: "Plano 100% Adaptado",
        description:
          "Adaptado ao teu objetivo: seja emagrecer ou ganhar massa muscular.",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        title: "Passo a Passo",
        description:
          "Vídeos explicativos e orientações claras para treinar sem medo de errar.",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      {
        title: "Suporte Total",
        description:
          "Dicas de mobilidade, alimentação e descanso para resultados surpreendentes.",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Perfeito para Iniciantes",
        description:
          "Programa perfeito para quem nunca treinou ou quer recomeçar sem pressão.",
        isSpecial: true,
      },
    ],
    image: "/assets/pi.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Basics" },
      { icon: <User className="w-6 h-6" />, text: "Beginner" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Beginner Program is perfect for you if your goal is to:",
        bullets: [
          "Start your fitness journey safely.",
          "Build basic strength and endurance.",
          "Establish a consistent workout routine.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "30-40 minute workouts",
          "3 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Basic movement patterns",
          "Low impact exercises",
          "Progressive difficulty",
          "Perfect for complete beginners",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Simple nutrition guidelines",
          "Healthy eating habits",
          "Basic meal planning",
          "Hydration importance",
        ],
      },
    },
  },
  {
    id: 6,
    name: "Programa Express",
    duration: "6 semanas",
    level: "Experiente",
    time: "20-30 min",
    type: "Express",
    gender: "Homem/Mulher",
    description:
      "Treinos estratégicos de 25 a 45 minutos para quem quer resultados sem perder tempo.",
    features: [
      {
        title: "Perfeito para Dias Corridos",
        description:
          "Treinos rápidos e eficazes, que cabem perfeitamente na tua rotina.",
        icon: <Clock className="w-4 h-4" />,
      },
      {
        title: "Planeamento Eficaz",
        description:
          "Cada treino, cada minuto é planeado para resultados reais e duradouros.",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        title: "Versátil e Flexível",
        description: "Opções para definição, queima de gordura ou força.",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Em Casa ou no Ginásio",
        description: "Com ou sem equipamentos, 0 desculpas.",
        icon: <MapPin className="w-4 h-4" />,
      },
      {
        title: "Para Quem Não Tem Tempo",
        description:
          "Programa criado para quem não tem muito tempo, mas não abre mão da saúde.",
        icon: <Timer className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image: "/assets/pe.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Express" },
      { icon: <User className="w-6 h-6" />, text: "Advanced" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Express Program is perfect for you if your goal is to:",
        bullets: [
          "Maximize results in minimal time.",
          "Maintain fitness with a busy schedule.",
          "Achieve multiple fitness goals efficiently.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "20-30 minute workouts",
          "4-5 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "High-intensity training",
          "Time-efficient workouts",
          "Compound movements",
          "Suitable for advanced level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Quick meal prep strategies",
          "Efficient nutrition timing",
          "Busy lifestyle nutrition",
          "Performance optimization",
        ],
      },
    },
  },
  {
    id: 7,
    name: "Programa Abdominal",
    duration: "6 semanas",
    level: "Experiente",
    time: "20-35 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Plano avançado para fortalecer e esculpir o abdominal, melhorar a postura e acelerar resultados .",
    features: [
      {
        title: "Core Estético e Funcional",
        description:
          "Para além da estética, protege a lombar e melhora a estabilidade.",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "Método Eficiente",
        description: "Sessões curtas, intensas e sem exercícios inúteis.",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "Definição Inteligente",
        description:
          "Estratégias para definir o abdominal e queimar gordura em simultâneo.",
        icon: <Target className="w-4 h-4" />,
      },
      {
        title: "Suporte Alimentar",
        description:
          "Ajustes estratégicos para reduzir a gordura e realçar os abdominais.",
        icon: <Heart className="w-4 h-4" />,
      },
      {
        title: "Abdominal em Tempo Recorde",
        description:
          "Ideal para quem quer construir um abdominal bonito, saudável e em tempo recorde.",
        icon: <Sparkles className="w-4 h-4" />,
        isSpecial: true,
      },
    ],
    image: "/assets/pa.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Core" },
      { icon: <User className="w-6 h-6" />, text: "Advanced" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Abdominal Program is perfect for you if your goal is to:",
        bullets: [
          "Build strong, defined abdominal muscles.",
          "Improve core stability and posture.",
          "Reduce body fat for visible abs.",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "20-35 minute workouts",
          "4-5 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Core-focused training",
          "High-intensity ab workouts",
          "Functional core movements",
          "Suitable for advanced level",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Fat loss nutrition strategies",
          "Core definition diet tips",
          "Meal timing for abs",
          "Supplement recommendations",
        ],
      },
    },
  },
];
