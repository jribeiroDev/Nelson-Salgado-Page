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
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <Info className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h3 className="font-semibold text-xs sm:text-sm lg:text-base">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 truncate sm:truncate-none">
                  {message}
                </p>
              </div>
            </div>
          </div>

          {dismissible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-background/20 flex-shrink-0"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="sr-only">Fechar aviso</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiteAlert;
