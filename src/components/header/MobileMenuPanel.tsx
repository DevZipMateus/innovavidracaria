
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-slate-900 shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header with single close button */}
      <div className="flex items-center justify-end p-6 border-b border-white/10">
        <button 
          onClick={onClose}
          className="p-3 rounded-full hover:bg-white/10 text-white transition-colors duration-200"
          aria-label="Fechar menu"
        >
          <X className="h-7 w-7" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        {/* Brand name */}
        <div className="text-3xl font-bold text-white mb-10">Contabilify</div>
        
        <ul className="space-y-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xl font-medium text-white hover:text-primary transition-all duration-200 block py-2 
                          hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary"
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-md text-gray-300 mb-3">Entre em contato conosco</p>
          <a 
            href="tel:+5561996381947" 
            className="text-xl text-white hover:text-primary/80 font-medium block py-2
                      transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            (61) 99638-1947
          </a>
          <a 
            href="https://wa.me/5561996381947"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 text-lg text-green-400 hover:text-green-300 font-medium py-2
                      transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            <img 
              src="/lovable-uploads/929c3b44-6b2d-4abb-a124-bca574ea5e13.png" 
              alt="WhatsApp" 
              className="w-8 h-8" 
            />
            Fale pelo WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
