import { useState } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteAlertProps {
  title?: string;
  message: string;
  type?: "info" | "warning" | "success";
  dismissible?: boolean;
  onDismiss?: () => void;
}

const SiteAlert = ({
  title = "Aviso Importante",
  message,
  type = "info",
  dismissible = true,
  onDismiss,
}: SiteAlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const typeStyles = {
    info: "bg-primary/10 border-primary/20 text-primary",
    warning: "bg-destructive/10 border-destructive/20 text-destructive",
    success: "bg-accent/10 border-accent/20 text-accent-foreground",
  };

  return (
    <div
      className={`
      relative w-full border-b transition-all duration-300 ease-in-out
      ${typeStyles[type]}
    `}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Info className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-sm opacity-90">{message}</p>
              </div>
            </div>
          </div>

          {dismissible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-8 w-8 p-0 hover:bg-background/20"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar aviso</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiteAlert;
