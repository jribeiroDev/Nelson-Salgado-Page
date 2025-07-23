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
    level: "Todos os níveis",
    time: "30-60 min",
    type: "Corrida e Musculação",
    gender: "Homem/Mulher",
    description:
      "Equilibra corrida e força, melhora resistência cardiovascular, força funcional e composição corporal. Para quem quer evoluir sem estagnar.",
    features: [
      "Treinos combinados de corrida e musculação (sem conflitos de estímulo)",
      "Foco em resistência cardiovascular, força funcional e composição corporal",
      "Estrutura semanal equilibrada — para evoluir sem estagnar",
      "Acesso a estratégias de recuperação e alimentação para potenciar resultados",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    level: "Todos os níveis",
    time: "30-45 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Treinos full body variados, foco em core, postura e força. Para quem quer consistência e resultado real.",
    features: [
      "Treinos Full Body com estímulos variados (força, resistência, estabilidade)",
      "Estrutura semanal que respeita a recuperação e maximiza resultado",
      "Foco no core, membros inferiores e superiores de forma equilibrada",
      "Melhoria da postura, respiração e capacidade física em geral",
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
    level: "Todos os níveis",
    time: "20-40 min",
    type: "Full Body",
    gender: "Mulher",
    description:
      "Ênfase em membros inferiores e glúteos, força e resistência, definição sem dietas exageradas.",
    features: [
      "Treinos Full Body com ênfase em membros inferiores + Glúteos",
      "Estímulos progressivos de força + resistência",
      "Corrida ou caminhada (opcional) para acelerar definição",
      "Rotinas equilibradas que trabalham postura, core e firmeza muscular",
    ],
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    level: "Todos os níveis",
    time: "30-45 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Foco total em força real, sessões curtas e intensas, progressão semanal e controle de movimento.",
    features: [
      "Treinos Full Body com foco total em força real",
      "Sessões entre 30 e 45 minutos — direto ao ponto",
      "Progressão semanal para aumentar carga e estabilidade",
      "Ênfase no controlo, no core e nos padrões de movimento",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    name: "Programa Glúteos Fortes",
    duration: "8 semanas",
    level: "Todos os níveis",
    time: "25-35 min",
    type: "Glúteos e Core",
    gender: "Mulher",
    description:
      "Treinos focados em glúteos, mobilidade de anca e lombar, força e estabilidade.",
    features: [
      "Treinos focados em glúteos — ativação, força e controlo",
      "Estímulos progressivos (sem “queimar só por queimar”)",
      "Melhoria real da mobilidade de anca e lombar",
      "Sessões complementares para core e membros inferiores",
    ],
    image:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: true,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "8 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Lower Body" },
      { icon: <User className="w-6 h-6" />, text: "Women" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Strong Glutes Program is perfect for you if your goal is to:",
        bullets: [
          "Build strong, shapely glutes",
          "Improve hip mobility and stability",
          "Strengthen lower back and core",
          "Enhance overall lower body aesthetics",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "25-35 minute workouts",
          "4 sessions per week",
          "8 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Glute-focused exercises",
          "Hip mobility work",
          "Progressive resistance training",
          "Core stability training",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Muscle building nutrition",
          "Recovery optimization",
          "Protein intake guidance",
          "Anti-inflammatory foods focus",
        ],
      },
    },
  },
  {
    id: 6,
    name: "Programa de Pilates",
    duration: "6 semanas",
    level: "Todos os níveis",
    time: "30-40 min",
    type: "Pilates",
    gender: "Mulher",
    description:
      "Sessões progressivas de pilates para força, alongamento, postura e definição muscular.",
    features: [
      "Sessões de Pilates para força, alongamento e definição muscular",
      "Aulas progressivas — do básico ao desafiador",
      "Melhoria visível na postura, respiração e consciência corporal",
      "Treinos com o peso do corpo e acessórios simples (tapete, banda, bola)",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Pilates" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Pilates Program is perfect for you if your goal is to:",
        bullets: [
          "Improve core strength and stability",
          "Enhance flexibility and mobility",
          "Better posture and alignment",
          "Build lean, toned muscles",
        ],
      },
      duration: {
        title: "WORKOUT DURATION",
        bullets: [
          "30-40 minute workouts",
          "3-5 sessions per week",
          "6 weeks program duration",
        ],
      },
      training: {
        title: "TRAINING STYLES & EXPERIENCE",
        bullets: [
          "Mat Pilates exercises",
          "Equipment-based workouts",
          "Progressive difficulty levels",
          "Mind-body connection focus",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Clean eating guidelines",
          "Anti-inflammatory diet tips",
          "Hydration protocols",
          "Energy-supporting nutrition",
        ],
      },
    },
  },
  {
    id: 7,
    name: "Programa de Iniciação",
    duration: "6 semanas",
    level: "Todos os níveis",
    time: "30-40 min",
    type: "Iniciação",
    gender: "Homem/Mulher",
    description:
      "Treinos simples e progressivos, orientação clara, vídeos explicativos e apoio nutricional.",
    features: [
      "Treinos simples e progressivos — em casa ou no ginásio",
      "Orientação clara: força, cardio, mobilidade e descanso",
      "Opções para emagrecimento ou hipertrofia (dependendo do objetivo)",
      "Vídeos explicativos, apoio nutricional e foco em criar consistência",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    id: 8,
    name: "Programa de Abdominal",
    duration: "8 semanas",
    level: "Todos os níveis",
    time: "20-30 min",
    type: "Abdominais e Core",
    gender: "Homem/Mulher",
    description:
      "Rotinas direcionadas para zona abdominal, força funcional, estratégias para queimar gordura.",
    features: [
      "Rotinas direcionadas para zona abdominal (superior, inferior, oblíquos e transverso)",
      "Treinos de força funcional + estabilidade dinâmica",
      "Estratégias para queimar gordura e melhorar composição corporal",
      "Sessões curtas e intensas — sem perder tempo com abdominais inúteis",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    id: 9,
    name: "Programa Express",
    duration: "6 semanas",
    level: "Todos os níveis",
    time: "20-35 min",
    type: "Full Body",
    gender: "Homem/Mulher",
    description:
      "Sessões curtas e eficazes para encaixar em qualquer rotina, sem perder eficácia.",
    features: [
      "Sessões entre 20 e 35 minutos — para encaixar em qualquer rotina",
      "Opções de treino para diferentes objetivos (definição, queima ou força)",
      "Zero treinos aleatórios: cada minuto é pensado para gerar resultado",
      "Pode ser feito em casa ou no ginásio, com ou senza equipamentos",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
  {
    id: 10,
    name: "Programa de Postura",
    duration: "6 semanas",
    level: "Todos os níveis",
    time: "20-30 min",
    type: "Mobilidade e Postura",
    gender: "Homem/Mulher",
    description:
      "Exercícios para mobilidade, alongamento, reforço de core e hábitos para melhorar postura.",
    features: [
      "Exercícios para mobilidade, alongamento e consciência postural",
      "Reforço de core, glúteos e musculatura estabilizadora",
      "Aulas que combinam movimento controlado e respiração",
      "Foco em hábitos diários que afetam diretamente a tua postura",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    popular: false,
    activities: [
      { icon: <Calendar className="w-6 h-6" />, text: "6 Weeks" },
      { icon: <Dumbbell className="w-6 h-6" />, text: "Posture" },
      { icon: <User className="w-6 h-6" />, text: "All Levels" },
    ],
    details: {
      achieve: {
        title: "WHAT YOU WILL ACHIEVE",
        description:
          "The Posture Program is perfect for you if your goal is to:",
        bullets: [
          "Improve overall posture",
          "Reduce back and neck pain",
          "Enhance mobility and flexibility",
          "Build postural strength",
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
          "Mobility exercises",
          "Postural strengthening",
          "Flexibility work",
          "Core stabilization",
        ],
      },
      nutrition: {
        title: "NUTRITION",
        bullets: [
          "Anti-inflammatory foods",
          "Joint health support",
          "Hydration guidance",
          "Recovery nutrition",
        ],
      },
    },
  },
];
