import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Rocket, X, Sparkles } from "lucide-react";

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const RewardPopup = ({
  isOpen,
  onClose,
  onConfirm,
}: RewardPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-blue-50/40 border-2 border-blue/20 shadow-2xl rounded-xl">
        <DialogHeader className="text-center space-y-3 pt-2">
          <div className="bg-gradient-to-br from-blue to-indigo-600 p-3 rounded-full w-fit mx-auto shadow-lg">
            <Gift className="h-6 w-6 text-white" />
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue to-indigo-600 bg-clip-text text-transparent">
            🎉 Bónus Exclusivo!
          </DialogTitle>

          <DialogDescription className="text-sm text-blue/80 font-medium">
            Ao juntares-te hoje ao plano de{" "}
            <span className="font-bold text-blue">6 ou 12 meses</span>:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 my-5">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200/60">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span className="text-sm font-medium text-green-800">
              Checklist de Hábitos de Alta Performance
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200/60">
            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-blue-800">
              Acesso Antecipado aos Próximos Desafios
            </span>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-base font-bold text-blue flex items-center justify-center gap-2">
            <Rocket className="h-4 w-4" />
            Transforma a tua vida hoje!
          </p>

          <Button
            onClick={onConfirm || onClose}
            className="w-full bg-gradient-to-r from-blue to-indigo-600 hover:from-blue/90 hover:to-indigo-600/90 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-lg"
          >
            🚀 Confirmar e Começar
          </Button>

          <p className="text-xs text-blue/60">
            Garantia de 30 dias • Cancela a qualquer momento
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
