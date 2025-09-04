import { Calendar, Dumbbell, User } from "lucide-react";

interface Program {
  id: number;
  name: string;
  duration: string;
  level: string;
  time: string;
  type: string;
  gender: string;
  description: string;
  features: string[];
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
      "Método inteligente: Corrida + musculação sem conflitos, para resultados consistentes.",
      "Mais rápido e mais forte: Melhora a resistência cardiovascular sem perder força e massa muscular.",
      "Plano semanal: estrutura semanal pensada para não desanimares nem estagnares.",
      "Suporte completo: Estratégias de recuperação e alimentação para acelerar a tua evolução.",
      "🔓+50 alunos já experimentaram este método com resultados reais"
    ],
    image:
      "/assets/ph.jpeg",
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
      "Resultados visíveis: Estímulos variados para definição muscular sem perder performance.",
      "Plano inteligente: Estrutura semanal que respeita a recuperação e maximiza resultados",
      "Equilíbrio Total: Core, membros inferires e superiores trabalhados de forma estratégica.",
      "Mais que estética : Melhora a postura, respiração e condicionamento fisico.",
      "🔓+30 alunos já atingiram resultados reais com este método."
    ],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Full Body" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Definition Program is perfect for you if your goal is to:",
        bullets: [
          "Improve overall body composition",
          "Build functional strength",
          "Enhance core stability and posture",
          "Develop full body conditioning",
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
          "Full Body workouts",
          "Varied stimulus (strength, endurance, stability)",
          "Progressive overload",
          "Suitable for all levels",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Basic nutrition guidelines",
          "Recovery strategies",
          "Meal timing recommendations",
          "Hydration protocols",
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
      "Glúteos e pernas em destaque: Full Body com ênfase em metros inferiores para transformar a tua silhueta.",
      "Força e resistência: Estímulos progressivos que tonificam e aceleram o metabolismo.",
      "Aceleração opcional : Caminhada ou corrida para potencializar a definição.",
      "Resultados reais: Rotinas equilibradas que trabalham a firmeza muscular, postura e confiança.",
      "🔓Método testado com dezenas de alunas que já conquistaram firmeza e auto-estima"
    ],
    image:
      "/assets/pt.jpeg",
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
          "Enhance lower body strength and shape",
          "Improve glute development",
          "Achieve better muscle definition",
          "Boost overall fitness",
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
          "Lower body focus",
          "Full body conditioning",
          "Optional cardio integration",
          "Progressive resistance training",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Balanced nutrition approach",
          "No extreme dieting",
          "Protein optimization",
          "Sustainable eating habits",
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
      "Resultados consistentes: Treino focado em força máxima, progressão de carga e hipertrofia limpa para quem quer transformar o corpo de forma consistente.",
      "Força pura acima de tudo- Estrutura de treino baseada em sobrecarga progressiva para construir músculos sólidos.",
      "Resultados medidos em números: Aumento real de carga e volume a cada semana.",
      "Divisão estratégica: Rotina pensada para recuperação ideal e crescimento continuo.",
      "Suporte completo: Estrategias de alimentação e recuperação para maximizar hipertrofia.",
      "🔓Programa usado por alunos que sairam do plano e conquistaram resultados visíveis em poucas semanas."
    ],
    image:
      "/assets/tf.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Strength" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Strength Program is perfect for you if your goal is to:",
        bullets: [
          "Build real functional strength",
          "Master key movement patterns",
          "Improve core stability and control",
          "Develop progressive loading capacity",
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
          "Compound movements",
          "Progressive overload focus",
          "Core stability work",
          "Full body strength training",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Protein-focused meal planning",
          "Pre/post workout nutrition",
          "Recovery optimization",
          "Strength-support supplements",
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
      "Começa do zero em segurança: Exercícios simples e progressivos para fazer em casa ou no ginásio.",
      "Plano 100% adaptado ao teu objetivo: Seja emagrecer ou ganhar massa muscular.",
      "Passo a passo sem confusão: Videos explicativos e orientações clara para treinar sem medo de errar.",
      "Suporte Total: Dicas de mobilidade, alimentação e descanso para resultados surpreendentes.",
      "🔓Programa perfeito para quem nunca treinou ou quer recomeçar sem pressão."
    ],
    image:
      "/assets/pi.jpeg",
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
          "Learn proper exercise form",
          "Build basic strength and endurance",
          "Develop healthy fitness habits",
          "Understand workout principles",
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
          "Bodyweight exercises",
          "Light resistance training",
          "Gradual progression",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Basic nutrition education",
          "Simple meal planning",
          "Healthy eating habits",
          "Proper fueling strategies",
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
      "Perfeito para os dias corridos: Treinos rápidos e eficazes, que cabem perfeitamente na tua rotina.",
      "Planeamento eficaz: Cada treino, cada minuto é planeado para resultados para os resultados reais e duradouros.",
      "Versátil e flexível: Opções para definição, queima de gordura ou força.",
      "Em casa ou no Ginasio: Com ou sem equipamentos, 0 desculpas.",
      "🔓 Programa criado para quem não tem muito tempo, mas não abre mão da saude."
    ],
    image:
      "/assets/pe.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "8 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Core" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description: "The Ab Program is perfect for you if your goal is to:",
        bullets: [
          "Strengthen entire core region",
          "Develop visible ab definition",
          "Improve functional core strength",
          "Enhance overall stability",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "20-30 minute workouts",
          "4-5 sessions per week",
          "8 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Targeted ab exercises",
          "Full core activation",
          "Progressive difficulty",
          "Functional movements",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Fat loss nutrition strategy",
          "Macro balance guidance",
          "Ab-friendly foods focus",
          "Hydration importance",
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
      "Core estético e funcional: Para além da estética, protege a lombar e melhora a estabilidade.",
      "Método eficiente: Sessões curtas, intensas e sem exercícios “inúteis”.",
      "Definição com inteligente: Estratégias para definir o abdominal e queimar gordura em simultâneo.",
      "Suporte para a alimentação: Ajustes estratégicos para reduzir a gordura e realçar os abdominais.",
      "🔓Ideal para quem quer construir um abdominal bonito, saudável e em tempo recorde."
    ],
    image:
      "/assets/pa.jpeg",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Express" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Express Program is perfect for you if your goal is to:",
        bullets: [
          "Maximize limited workout time",
          "Maintain fitness with busy schedule",
          "Build strength efficiently",
          "Stay consistent with exercise",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "20-35 minute workouts",
          "3-4 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "High-intensity intervals",
          "Compound movements",
          "Time-efficient circuits",
          "Minimal equipment needed",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Quick meal solutions",
          "On-the-go nutrition",
          "Simple meal prep",
          "Energy optimization",
        ],
      },
    },
  },
];
