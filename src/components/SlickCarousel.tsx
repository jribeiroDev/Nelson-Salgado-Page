import { useState, useRef, useEffect, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useSpring,
  PanInfo,
  useDragControls,
} from "framer-motion";
import { programs } from "@/pages/sections/programsData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Star,
  Filter,
  ChevronDown,
  Dumbbell,
  Users,
  Calendar,
  Target,
  Trophy,
  Zap,
  BookOpen,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Settings,
  Video,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Activity,
  TrendingUp,
  Award,
  Play,
  Camera,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Key,
  Gift,
  Headphones,
  Coffee,
  Utensils,
  Apple,
  Briefcase,
  Footprints,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const VISIBLE_ITEMS_DESKTOP = 3;
const VISIBLE_ITEMS_TABLET = 2;
const VISIBLE_ITEMS_MOBILE = 1;

const getColorScheme = (id: number) => {
  const colors = [
    "from-blue-500 to-blue-700",
    "from-emerald-500 to-emerald-700",
    "from-amber-500 to-amber-700",
    "from-purple-500 to-purple-700",
    "from-pink-500 to-pink-700",
    "from-indigo-500 to-indigo-700",
  ];
  return colors[(id - 1) % colors.length];
};

const getFeatureIcon = (title: string) => {
  const titleLower = title.toLowerCase();

  // Treino e Exercícios
  if (
    titleLower.includes("treino") ||
    titleLower.includes("exercício") ||
    titleLower.includes("workout") ||
    titleLower.includes("sessões")
  ) {
    return <Dumbbell className="w-4 h-4" />;
  }

  // Corrida e Cardio
  if (
    titleLower.includes("corrida") ||
    titleLower.includes("running") ||
    titleLower.includes("cardio") ||
    titleLower.includes("correr") ||
    titleLower.includes("jogging")
  ) {
    return <Footprints className="w-4 h-4" />;
  }

  // Força e Músculo
  if (
    titleLower.includes("força") ||
    titleLower.includes("fortalecimento") ||
    titleLower.includes("muscular") ||
    titleLower.includes("potência") ||
    titleLower.includes("músculo")
  ) {
    return <span className="text-sm">💪</span>;
  }

  // Nutrição e Alimentação
  if (
    titleLower.includes("nutrição") ||
    titleLower.includes("alimentar") ||
    titleLower.includes("dieta") ||
    titleLower.includes("refeições") ||
    titleLower.includes("comida") ||
    titleLower.includes("alimentação")
  ) {
    return <Heart className="w-4 h-4" />;
  }

  // Acompanhamento e Suporte
  if (
    titleLower.includes("acompanhamento") ||
    titleLower.includes("suporte") ||
    titleLower.includes("apoio") ||
    titleLower.includes("consultoria") ||
    titleLower.includes("mentoria")
  ) {
    return <Users className="w-4 h-4" />;
  }

  // Planos e Programas
  if (
    titleLower.includes("plano") ||
    titleLower.includes("cronograma") ||
    titleLower.includes("programa") ||
    titleLower.includes("estrutura") ||
    titleLower.includes("rotina")
  ) {
    return <Calendar className="w-4 h-4" />;
  }

  // Objetivos e Metas
  if (
    titleLower.includes("objetivo") ||
    titleLower.includes("meta") ||
    titleLower.includes("resultado") ||
    titleLower.includes("foco") ||
    titleLower.includes("propósito")
  ) {
    return <Target className="w-4 h-4" />;
  }

  // Avaliação e Progresso
  if (
    titleLower.includes("avaliação") ||
    titleLower.includes("progresso") ||
    titleLower.includes("evolução") ||
    titleLower.includes("tracking") ||
    titleLower.includes("acompanhar")
  ) {
    return <Trophy className="w-4 h-4" />;
  }

  // Performance e Energia
  if (
    titleLower.includes("energia") ||
    titleLower.includes("performance") ||
    titleLower.includes("desempenho") ||
    titleLower.includes("velocidade") ||
    titleLower.includes("intensidade")
  ) {
    return <Zap className="w-4 h-4" />;
  }

  // Receitas e Guias
  if (
    titleLower.includes("receita") ||
    titleLower.includes("guia") ||
    titleLower.includes("manual") ||
    titleLower.includes("tutorial") ||
    titleLower.includes("orientação")
  ) {
    return <BookOpen className="w-4 h-4" />;
  }

  // Saúde e Bem-estar
  if (
    titleLower.includes("saúde") ||
    titleLower.includes("bem-estar") ||
    titleLower.includes("wellness") ||
    titleLower.includes("medicina") ||
    titleLower.includes("clínico")
  ) {
    return <Shield className="w-4 h-4" />;
  }

  // Tempo e Horários
  if (
    titleLower.includes("tempo") ||
    titleLower.includes("duração") ||
    titleLower.includes("horário") ||
    titleLower.includes("minutos") ||
    titleLower.includes("horas")
  ) {
    return <Clock className="w-4 h-4" />;
  }

  // Comunicação e Contato
  if (
    titleLower.includes("contato") ||
    titleLower.includes("comunicação") ||
    titleLower.includes("whatsapp") ||
    titleLower.includes("mensagem") ||
    titleLower.includes("chat")
  ) {
    return <MessageCircle className="w-4 h-4" />;
  }

  // Vídeos e Conteúdo Visual
  if (
    titleLower.includes("vídeo") ||
    titleLower.includes("demonstração") ||
    titleLower.includes("visual") ||
    titleLower.includes("filmagem") ||
    titleLower.includes("gravação")
  ) {
    return <Video className="w-4 h-4" />;
  }

  // Aplicativo e Tecnologia
  if (
    titleLower.includes("app") ||
    titleLower.includes("aplicativo") ||
    titleLower.includes("digital") ||
    titleLower.includes("online") ||
    titleLower.includes("plataforma")
  ) {
    return <Smartphone className="w-4 h-4" />;
  }

  // Monitorização e Controle
  if (
    titleLower.includes("monitorização") ||
    titleLower.includes("controle") ||
    titleLower.includes("supervisão") ||
    titleLower.includes("análise") ||
    titleLower.includes("medição")
  ) {
    return <Activity className="w-4 h-4" />;
  }

  // Acesso e Permissões
  if (
    titleLower.includes("acesso") ||
    titleLower.includes("exclusivo") ||
    titleLower.includes("premium") ||
    titleLower.includes("vip") ||
    titleLower.includes("ilimitado")
  ) {
    return <Key className="w-4 h-4" />;
  }

  // Certificação e Prémios
  if (
    titleLower.includes("certificado") ||
    titleLower.includes("diploma") ||
    titleLower.includes("prémio") ||
    titleLower.includes("reconhecimento") ||
    titleLower.includes("conquista")
  ) {
    return <Award className="w-4 h-4" />;
  }

  // Personalização e Customização
  if (
    titleLower.includes("personalizado") ||
    titleLower.includes("customizado") ||
    titleLower.includes("adaptado") ||
    titleLower.includes("individual") ||
    titleLower.includes("sob medida")
  ) {
    return <Settings className="w-4 h-4" />;
  }

  // Relatórios e Documentação
  if (
    titleLower.includes("relatório") ||
    titleLower.includes("documento") ||
    titleLower.includes("ficheiro") ||
    titleLower.includes("pdf") ||
    titleLower.includes("download")
  ) {
    return <FileText className="w-4 h-4" />;
  }

  // Tendências e Crescimento
  if (
    titleLower.includes("tendência") ||
    titleLower.includes("crescimento") ||
    titleLower.includes("melhoria") ||
    titleLower.includes("desenvolvimento") ||
    titleLower.includes("aprimoramento")
  ) {
    return <TrendingUp className="w-4 h-4" />;
  }

  // Bónus e Presentes
  if (
    titleLower.includes("bónus") ||
    titleLower.includes("bonus") ||
    titleLower.includes("presente") ||
    titleLower.includes("oferta") ||
    titleLower.includes("grátis")
  ) {
    return <Gift className="w-4 h-4" />;
  }

  // Áudio e Som
  if (
    titleLower.includes("áudio") ||
    titleLower.includes("som") ||
    titleLower.includes("podcast") ||
    titleLower.includes("música") ||
    titleLower.includes("som")
  ) {
    return <Headphones className="w-4 h-4" />;
  }

  // Verificação e Confirmação
  if (
    titleLower.includes("verificação") ||
    titleLower.includes("confirmação") ||
    titleLower.includes("validação") ||
    titleLower.includes("aprovação") ||
    titleLower.includes("check")
  ) {
    return <CheckCircle className="w-4 h-4" />;
  }

  // Segurança e Privacidade
  if (
    titleLower.includes("segurança") ||
    titleLower.includes("privacidade") ||
    titleLower.includes("proteção") ||
    titleLower.includes("confidencial") ||
    titleLower.includes("seguro")
  ) {
    return <Lock className="w-4 h-4" />;
  }

  // Email e Telefone
  if (
    titleLower.includes("email") ||
    titleLower.includes("telefone") ||
    titleLower.includes("chamada") ||
    titleLower.includes("ligação")
  ) {
    return titleLower.includes("email") || titleLower.includes("e-mail") ? (
      <Mail className="w-4 h-4" />
    ) : (
      <Phone className="w-4 h-4" />
    );
  }

  // Global e Internacional
  if (
    titleLower.includes("global") ||
    titleLower.includes("internacional") ||
    titleLower.includes("mundial") ||
    titleLower.includes("universal")
  ) {
    return <Globe className="w-4 h-4" />;
  }

  // Trabalho e Profissional
  if (
    titleLower.includes("trabalho") ||
    titleLower.includes("profissional") ||
    titleLower.includes("carreira") ||
    titleLower.includes("negócio") ||
    titleLower.includes("empresa")
  ) {
    return <Briefcase className="w-4 h-4" />;
  }

  // Reprodução e Media
  if (
    titleLower.includes("reprodução") ||
    titleLower.includes("play") ||
    titleLower.includes("execução") ||
    titleLower.includes("streaming")
  ) {
    return <Play className="w-4 h-4" />;
  }

  // Fotografia e Imagem
  if (
    titleLower.includes("foto") ||
    titleLower.includes("imagem") ||
    titleLower.includes("fotografia") ||
    titleLower.includes("câmara") ||
    titleLower.includes("picture")
  ) {
    return <Camera className="w-4 h-4" />;
  }

  // Monitor e Ecrã
  if (
    titleLower.includes("monitor") ||
    titleLower.includes("ecrã") ||
    titleLower.includes("tela") ||
    titleLower.includes("display") ||
    titleLower.includes("visualização")
  ) {
    return <Monitor className="w-4 h-4" />;
  }

  // Café e Bebidas (para relaxamento/energia)
  if (
    titleLower.includes("café") ||
    titleLower.includes("bebida") ||
    titleLower.includes("hidratação") ||
    titleLower.includes("líquido")
  ) {
    return <Coffee className="w-4 h-4" />;
  }

  // Comida e Utensílios
  if (
    titleLower.includes("utensílio") ||
    titleLower.includes("cozinha") ||
    titleLower.includes("preparação") ||
    titleLower.includes("ingrediente")
  ) {
    return <Utensils className="w-4 h-4" />;
  }

  // Frutas e Natural
  if (
    titleLower.includes("fruta") ||
    titleLower.includes("natural") ||
    titleLower.includes("orgânico") ||
    titleLower.includes("verde") ||
    titleLower.includes("saudável")
  ) {
    return <Apple className="w-4 h-4" />;
  }

  // Se nenhuma categoria específica for encontrada, usa um ícone genérico baseado no contexto
  // Preferindo evitar o Star, usamos CheckCircle como padrão mais apropriado
  return <CheckCircle className="w-4 h-4" />;
};

const Card = ({
  program,
  isSelected,
  onClick,
  isDragging,
}: {
  program: (typeof programs)[0];
  isSelected: boolean;
  onClick: () => void;
  isDragging: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configurações mais suaves para o spring
  const cardX = useSpring(mouseX, { stiffness: 80, damping: 30, mass: 0.8 });
  const cardY = useSpring(mouseY, { stiffness: 80, damping: 30, mass: 0.8 });

  // Rotações limitadas apenas para o card selecionado
  const rotateX = useTransform(
    cardY,
    [-200, 200],
    isSelected ? [2, -2] : [0, 0]
  );
  const rotateY = useTransform(
    cardX,
    [-200, 200],
    isSelected ? [-2, 2] : [0, 0]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Apenas a card selecionada tem efeito 3D
    if (!isSelected) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    cardX.set(mouseX * 0.5);
    cardY.set(mouseY * 0.5);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-full h-full"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          zIndex: isSelected ? 10 : 0,
        }}
        animate={{
          scale: isSelected ? 1.05 : 0.95,
          y: isSelected ? -10 : 0,
          opacity: isSelected ? 1 : isDragging ? 0.9 : 0.8,
        }}
        transition={{
          scale: { duration: 0.4, ease: "easeInOut" },
          y: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-${
          isDragging ? "grabbing" : "grab"
        } select-none
                    ${
                      isSelected
                        ? "ring-2 ring-beige shadow-md shadow-beige"
                        : "shadow-md opacity-80"
                    }`}
      >
        <img
          src={program.image}
          alt={program.name}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* Star badge no canto superior direito - apenas se popular for true */}
        {program.popular && (
          <div className="absolute top-2 right-2 z-10 bg-gold backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star size={14} color="white" fill="white" />
            <span className="text-white text-xs font-semibold">Popular</span>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
            program.id
          )} opacity-30`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 text-white select-none">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 leading-tight">
            {program.name}
          </h3>
          <p className="text-xs sm:text-sm ">
            {program.gender} • {program.duration}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SlickCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice da card selecionada (mobile: índice 1, desktop: índice 2)
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS_DESKTOP);
  const [isDragging, setIsDragging] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [userName, setUserName] = useState<string>(""); // Estado para o nome do usuário
  const [accordionValue, setAccordionValue] = useState<string>(""); // Estado para controlar qual accordion está aberto
  const [filters, setFilters] = useState({
    gender: "Todos",
    level: "Todos",
    duration: "Todos",
  });
  const dragStartX = useRef(0);
  const dragThreshold = 250; // Limiar para considerar como um drag válido para navegação

  const containerRef = useRef<HTMLDivElement>(null);

  // Extrair valores únicos dinamicamente dos programas
  const uniqueGenders = useMemo(() => {
    const genders = new Set<string>();
    programs.forEach((program) => {
      // Separar "Homem/Mulher" em valores individuais
      if (program.gender.includes("/")) {
        program.gender.split("/").forEach((g) => genders.add(g.trim()));
      } else {
        genders.add(program.gender);
      }
    });
    return ["Todos", ...Array.from(genders).sort()];
  }, []);

  const uniqueLevels = useMemo(() => {
    const levels = new Set(programs.map((p) => p.level));
    return ["Todos", ...Array.from(levels).sort()];
  }, []);

  const uniqueDurations = useMemo(() => {
    const durations = new Set(programs.map((p) => p.duration));
    return [
      "Todos",
      ...Array.from(durations).sort((a, b) => {
        // Ordenar por número de semanas
        const numA = parseInt(a.match(/\d+/)?.[0] || "0");
        const numB = parseInt(b.match(/\d+/)?.[0] || "0");
        return numA - numB;
      }),
    ];
  }, []);

  // Filtrar programas baseado nos filtros ativos
  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const genderMatch =
        filters.gender === "Todos" ||
        program.gender.includes(filters.gender) ||
        (filters.gender === "Ambos" && program.gender === "Homem/Mulher");

      const levelMatch =
        filters.level === "Todos" || program.level === filters.level;

      const durationMatch =
        filters.duration === "Todos" || program.duration === filters.duration;

      return genderMatch && levelMatch && durationMatch;
    });
  }, [filters]);
  // Resetar o índice selecionado quando os filtros mudam
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setSelectedIndex(0); // Mobile
    } else {
      setSelectedIndex(2); // Tablet/Desktop
    }
    setAccordionValue(""); // Resetar accordion quando filtros mudam
  }, [filters]);

  // Resetar accordion quando o programa selecionado muda
  useEffect(() => {
    setAccordionValue("");
  }, [selectedIndex]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Para mobile pequenos
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
        setSelectedIndex(0); // Mobile começa no índice 1
      } else if (width < 768) {
        // Para mobile maiores
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
        setSelectedIndex(0); // Mobile começa no índice 1
      } else if (width < 1024) {
        // Para tablets
        setVisibleItems(VISIBLE_ITEMS_TABLET);
        setSelectedIndex(2); // Tablet/Desktop começa no índice 2
      } else if (width < 1280) {
        // Para desktops pequenos
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
        setSelectedIndex(2); // Tablet/Desktop começa no índice 2
      } else {
        // Para desktops grandes
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
        setSelectedIndex(2); // Tablet/Desktop começa no índice 2
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateToCard("prev");
      } else if (e.key === "ArrowRight") {
        navigateToCard("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calcula o offset para manter a card selecionada centralizada
  const getOffset = () => {
    // Para manter a card selecionada sempre no centro
    // precisamos calcular o deslocamento baseado no índice selecionado
    const centerPosition = Math.floor(visibleItems / 2);
    // Certificamos que o offset é sempre um número positivo ou zero para o primeiro item
    const offset = selectedIndex - centerPosition;
    return Math.max(
      0,
      Math.min(offset, filteredPrograms.length - visibleItems)
    );
  };

  // Função para navegar para a próxima/anterior card
  const navigateToCard = (direction: "next" | "prev") => {
    setSelectedIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % filteredPrograms.length;
      } else {
        return (
          (prevIndex - 1 + filteredPrograms.length) % filteredPrograms.length
        );
      }
    });
  };

  // Funções para o drag do carrossel
  const handleDragStart = () => {
    setIsDragging(true);
    dragStartX.current = 0;
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    dragStartX.current = info.offset.x;
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    // Determina se o drag foi suficiente para mudar de card
    const dragDistance = info.offset.x;
    const dragVelocity = info.velocity.x;

    // Se o drag foi significativo ou a velocidade foi alta o suficiente
    if (
      Math.abs(dragDistance) > dragThreshold ||
      Math.abs(dragVelocity) > 500
    ) {
      if (dragDistance > 0 || dragVelocity > 500) {
        navigateToCard("prev");
      } else {
        navigateToCard("next");
      }
    }
  };

  const cardWidthPercentage = 100 / visibleItems;
  const currentOffset = getOffset();

  const whatsappNumber = "+351910436302"; // Substitua pelo número real
  const instagramPageUrl = "https://www.instagram.com/elite_salgado"; // Substitua pela URL real

  const openWhatsApp = (programName: string, level: string, name: string) => {
    // Construir mensagem com encoding correto para WhatsApp
    const parts = [
      "Olá, Nelson!",
      "",
      `O meu nome é ${name} e gostaria de ter uma orientação de um profissional para atingir os meus objetivos.`,
      "",
      `Tenho interesse no ${programName} (${level})!`,
      "",
      "Como posso começar?",
      "",
      "Obrigado!",
    ];

    // Codificar cada parte separadamente
    const encodedParts = parts.map((part) => encodeURIComponent(part));
    const message = encodedParts.join("%0A");

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");

    setDialogOpen(false);
    setSelectedLevel("");
    setUserName(""); // Limpar o nome após enviar
  };

  const handleLevelSelection = (level: string) => {
    setSelectedLevel(level);
    const currentProgram = filteredPrograms[selectedIndex];
    openWhatsApp(currentProgram.name, level, userName);
  };

  return (
    <div className="relative w-full overflow-hidden bg-blue2/10 flex flex-col justify-center items-center py-4 sm:py-6 md:py-12 px-3 sm:px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 mt-4 sm:mb-4 text-blue leading-tight">
              Os Nossos Programas
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue max-w-3xl mx-auto">
              (Resultados em apenas 90 dias)
            </p>
          </div>

          {/* Filtros */}
          {/* <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 px-4">
            {/* Filtro Gender 
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Select
                value={filters.gender}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, gender: value }))
                }
              >
                <SelectTrigger className="w-[170px] h-18 bg-gradient-to-r from-white to-blue/5 backdrop-blur-sm border-2 border-blue/90 hover:border-blue/50 focus:border-blue focus:ring-2 focus:ring-blue/20 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col items-start w-full">
                    <span className="text-xs text-blue font-medium mb-0.5">
                      Género
                    </span>
                    <SelectValue
                      placeholder="Selecionar"
                      className="text-sm text-blue/80"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-blue/10 shadow-2xl bg-white/95 backdrop-blur-md">
                  {uniqueGenders.map((gender) => (
                    <SelectItem
                      key={gender}
                      value={gender}
                      className="rounded-lg hover:bg-blue/10 focus:bg-blue/15 transition-all duration-200 font-medium text-blue/90 hover:text-blue"
                    >
                      {gender === "Homem/Mulher" ? "Ambos" : gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Filtro Level 
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Select
                value={filters.level}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, level: value }))
                }
              >
                <SelectTrigger className="w-[170px] h-18 bg-gradient-to-r from-white to-emerald-50 backdrop-blur-sm border-2 border-emerald-200 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col items-start w-full">
                    <span className="text-xs text-emerald-600/70 font-medium mb-0.5">
                      Nível
                    </span>
                    <SelectValue
                      placeholder="Selecionar"
                      className="text-sm text-emerald-700"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-emerald-100 shadow-2xl bg-white/95 backdrop-blur-md">
                  {uniqueLevels.map((level) => (
                    <SelectItem
                      key={level}
                      value={level}
                      className="rounded-lg hover:bg-emerald-50 focus:bg-emerald-100 transition-all duration-200 font-medium text-emerald-700 hover:text-emerald-800"
                    >
                      {level === "Todos os níveis" ? "Geral" : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Filtro Duration 
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Select
                value={filters.duration}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, duration: value }))
                }
              >
                <SelectTrigger className="w-[170px] h-18 bg-gradient-to-r from-white to-amber-50 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col items-start w-full">
                    <span className="text-xs text-amber-600/70 font-medium mb-0.5">
                      Duração
                    </span>
                    <SelectValue
                      placeholder="Selecionar"
                      className="text-sm text-amber-700"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-amber-100 shadow-2xl bg-white/95 backdrop-blur-md">
                  {uniqueDurations.map((duration) => (
                    <SelectItem
                      key={duration}
                      value={duration}
                      className="rounded-lg hover:bg-amber-50 focus:bg-amber-100 transition-all duration-200 font-medium text-amber-700 hover:text-amber-800"
                    >
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Botão Reset 
            <motion.button
              onClick={() =>
                setFilters({
                  gender: "Todos",
                  level: "Todos",
                  duration: "Todos",
                })
              }
              className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-white bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue hover:to-blue/90 rounded-xl transition-all duration-400 border-2 border-gray-200 hover:border-blue shadow-lg hover:shadow-xl mt-2 sm:mt-0 backdrop-blur-sm group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Filter
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              <span>Limpar Filtros</span>
            </motion.button>
          </div> */}

          {/* Contador de resultados */}
          {/* <motion.p
            className="text-blue text-sm mb-12"
            key={filteredPrograms.length}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPrograms.length} programa
            {filteredPrograms.length !== 1 ? "s" : ""} encontrado
            {filteredPrograms.length !== 1 ? "s" : ""}
          </motion.p> */}
        </div>
        <div
          className="relative h-[180px] sm:h-[240px] md:h-[280px]  "
          ref={containerRef}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key="carousel-container"
              className="absolute flex h-full"
              style={{
                width: `${filteredPrograms.length * (100 / visibleItems)}%`,
                left: `-${currentOffset * cardWidthPercentage}%`,
              }}
              animate={{
                left: `-${currentOffset * cardWidthPercentage}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 1,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
            >
              {filteredPrograms.map((program, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <motion.div
                    key={program.id}
                    className="px-1 sm:px-2 select-none "
                    style={{ width: `${cardWidthPercentage}%` }}
                    layout
                    layoutId={`card-${program.id}`}
                  >
                    <Card
                      program={program}
                      isSelected={isSelected}
                      onClick={() => !isDragging && setSelectedIndex(index)}
                      isDragging={isDragging}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center mt-2 sm:mt-4">
          {/* Botão Anterior */}
          <button
            onClick={() => navigateToCard("prev")}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 mr-1.5 sm:mr-3"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex space-x-1 sm:space-x-1.5">
            {filteredPrograms.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-blue scale-150" : "bg-gray-300"
                }`}
                aria-label={`Ir para programa ${index + 1}`}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={() => navigateToCard("next")}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 ml-1.5 sm:ml-3"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Detalhes do programa selecionado - estilo responsivo */}
        {filteredPrograms[selectedIndex] && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredPrograms[selectedIndex].id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mt-8 sm:mt-10 lg:mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Program Image - Hidden on mobile and tablet */}
              <motion.div
                className="relative h-64 sm:h-80 lg:h-96 xl:h-[450px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 group hidden lg:block"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                style={{ perspective: "800px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent z-10 rounded-3xl"></div>
                <img
                  src={filteredPrograms[selectedIndex].image}
                  alt={filteredPrograms[selectedIndex].name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getColorScheme(
                    filteredPrograms[selectedIndex].id
                  )} opacity-25 group-hover:opacity-35 transition-all duration-500`}
                />
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4 text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 500 }}
                >
                  {filteredPrograms[selectedIndex].popular && (
                    <div className="absolute top-2 right-2 z-10 bg-gold backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star size={14} color="white" fill="white" />
                      <span className="text-white text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>

              {/* Program Details */}
              <motion.div
                className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2 px-2 sm:px-0 w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon and category */}
                  {/* <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* <div className="flex-1">
                      <motion.div
                        className="inline-flex items-center bg-beige backdrop-blur-sm rounded-full py-2 px-4 border border-blue-100/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-blue font-semibold text-sm sm:text-base">
                          {filteredPrograms[selectedIndex].gender} •{" "}
                          {filteredPrograms[selectedIndex].level} •{" "}
                          {filteredPrograms[selectedIndex].duration}
                        </p>
                      </motion.div>
                    </div> }
                  </motion.div> */}

                  {/* Title */}
                  <motion.h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-clip-text text-transparent bg-blue">
                      {filteredPrograms[selectedIndex].name}
                    </span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-base sm:text-lg text-blue leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {filteredPrograms[selectedIndex].description}
                  </motion.p>
                </div>

                {/* Program Features - accordion único para todas as features, última com estilo especial */}
                <motion.div
                  className="space-y-3 sm:space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="space-y-2 sm:space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {/* Features normais agrupadas em um único accordion */}
                    {filteredPrograms[selectedIndex].features.filter(
                      (feature, index) => {
                        const isLastFeature =
                          index ===
                          filteredPrograms[selectedIndex].features.length - 1;
                        return !(isLastFeature && feature.isSpecial);
                      }
                    ).length > 0 && (
                      <Accordion
                        type="single"
                        collapsible
                        value={accordionValue}
                        onValueChange={setAccordionValue}
                        className="w-full"
                      >
                        {filteredPrograms[selectedIndex].features.map(
                          (feature, index) => {
                            const isSpecialFeature = feature.isSpecial;
                            const isLastFeature =
                              index ===
                              filteredPrograms[selectedIndex].features.length -
                                1;

                            // Pular a última feature especial (será renderizada separadamente)
                            if (isLastFeature && isSpecialFeature) {
                              return null;
                            }

                            // Features normais como AccordionItem
                            return (
                              <motion.div
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                                  visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                whileHover={{
                                  scale: 1.01,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <AccordionItem
                                  value={`feature-${index}`}
                                  className="border-b border-blue/50 last:border-b-2"
                                >
                                  <AccordionTrigger className="text-sm sm:text-base font-medium text-blue hover:text-blue/80 py-3 hover:no-underline">
                                    <div className="flex items-center gap-3 w-full text-left">
                                      <motion.div
                                        className="flex items-center justify-center text-blue text-xs sm:text-sm font-bold flex-shrink-0"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{
                                          type: "spring",
                                          stiffness: 400,
                                        }}
                                      >
                                        {feature.icon ||
                                          getFeatureIcon(feature.title)}
                                      </motion.div>
                                      <span className="flex-1 font-semibold">
                                        {feature.title}
                                      </span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="pb-4 pt-2">
                                    <p className="text-sm sm:text-base text-blue/80 leading-relaxed ml-7">
                                      {feature.description}
                                    </p>
                                  </AccordionContent>
                                </AccordionItem>
                              </motion.div>
                            );
                          }
                        )}
                      </Accordion>
                    )}

                    {/* Última feature especial renderizada separadamente */}
                    {filteredPrograms[selectedIndex].features.map(
                      (feature, index) => {
                        const isSpecialFeature = feature.isSpecial;
                        const isLastFeature =
                          index ===
                          filteredPrograms[selectedIndex].features.length - 1;

                        // Apenas renderizar a última feature se for especial
                        if (!(isLastFeature && isSpecialFeature)) {
                          return null;
                        }

                        return (
                          <motion.div
                            key={index}
                            className="group relative overflow-hidden bg-blue rounded-2xl p-4 sm:p-6 transition-all"
                            style={{
                              background: `linear-gradient(135deg, ${getColorScheme(
                                filteredPrograms[selectedIndex].id
                              )
                                .replace("from-", "")
                                .replace(" to-", ", ")})`,
                            }}
                            variants={{
                              hidden: { opacity: 0, y: 20, scale: 0.9 },
                              visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{
                              scale: 1.02,
                              y: -5,
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              },
                            }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                              initial={{ x: "-100%" }}
                              animate={{ x: "200%" }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                              }}
                            />

                            <div className="relative z-10 flex items-start gap-3">
                              <motion.div
                                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm sm:text-base font-bold flex-shrink-0"
                                whileHover={{
                                  rotate: 360,
                                  scale: 1.2,
                                  background: "rgba(255,255,255,0.3)",
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  duration: 0.6,
                                }}
                              >
                                🔓
                              </motion.div>
                              <div className="flex-1">
                                <motion.div whileHover={{ scale: 1.02 }}>
                                  <h4 className="text-sm sm:text-base text-white font-bold leading-relaxed drop-shadow-sm mb-1">
                                    {feature.title}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                                    {feature.description}
                                  </p>
                                </motion.div>
                              </div>
                            </div>

                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                            {/* Pulsing glow */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl bg-white/10"
                              animate={{
                                opacity: [0, 0.3, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        );
                      }
                    )}
                  </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="pt-4 sm:pt-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group cursor-pointer"
                      >
                        <Button
                          className={`
                            relative h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12 mb-12 text-base sm:text-lg lg:text-xl font-bold rounded-full
                            bg-gradient-to-r ${getColorScheme(
                              filteredPrograms[selectedIndex].id
                            )}
                            text-white shadow-xl hover:shadow-2xl
                            transition-all duration-500 w-full
                            overflow-hidden border-2 border-white/20
                            group-hover:border-white/40 cursor-pointer
                          `}
                        >
                          {/* Background animation */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            initial={{ x: "-100%", opacity: 0 }}
                            whileHover={{
                              x: "100%",
                              opacity: [0, 1, 0],
                              transition: { duration: 1, ease: "easeInOut" },
                            }}
                          />

                          {/* Content */}
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <span>Começar Agora</span>
                            <motion.div
                              className="flex items-center"
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </motion.div>
                          </span>

                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>

                        {/* External glow */}
                        {/* <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorScheme(
                            filteredPrograms[selectedIndex].id
                          )} opacity-20 blur-xl scale-105 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                        ></div> */}
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-md border-2 border-blue/10 rounded-2xl shadow-2xl">
                      <DialogHeader className="text-center pb-4">
                        <DialogTitle className="text-2xl font-bold text-blue">
                          Quase lá! 🎯
                        </DialogTitle>
                        <DialogDescription className="text-blue/70 mt-2">
                          Preencha seus dados para começar
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4">
                        {/* Campo de Nome */}
                        <div className="space-y-2">
                          <label
                            htmlFor="userName"
                            className="text-sm font-semibold text-blue"
                          >
                            Qual é o seu nome?
                          </label>
                          <Input
                            id="userName"
                            type="text"
                            placeholder="Digite seu nome..."
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border-2 border-blue/20 focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
                          />
                        </div>

                        {/* Seleção de Nível */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-blue">
                            Escolha o seu nível
                          </label>
                          <div className="space-y-2">
                            {["Iniciante", "Intermédio", "Experiente"].map(
                              (level) => (
                                <motion.button
                                  key={level}
                                  onClick={() => handleLevelSelection(level)}
                                  disabled={!userName.trim()}
                                  className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 border-2 ${
                                    !userName.trim()
                                      ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200"
                                      : "bg-gradient-to-r text-blue hover:scale-105 hover:shadow-lg border-blue hover:border-blue"
                                  }`}
                                  whileHover={
                                    userName.trim() ? { scale: 1.02 } : {}
                                  }
                                  whileTap={
                                    userName.trim() ? { scale: 0.98 } : {}
                                  }
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg">{level}</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                </motion.button>
                              )
                            )}
                          </div>
                        </div>

                        {!userName.trim() && (
                          <p className="text-xs text-blue/60 text-center">
                            Por favor, preencha seu nome para continuar
                          </p>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default SlickCarousel;
