
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  toggleMenu: () => void;
  scrolled: boolean;
}

const MobileMenuButton = ({ toggleMenu, scrolled }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={toggleMenu}
      aria-label="Abrir menu" 
      className={cn(
        "md:hidden flex items-center justify-center rounded-full p-3",
        "focus:outline-none transition-all duration-200",
        "hover:scale-105 active:scale-95",
        scrolled 
          ? "bg-primary/10 text-primary hover:bg-primary/20"
          : "bg-white/20 backdrop-blur-sm text-primary hover:bg-white/30"
      )}
    >
      <Menu className="h-7 w-7" />
    </button>
  );
};

export default MobileMenuButton;
