
import { X, Phone, WhatsApp } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({
  isMenuOpen,
  onClose,
  menuItems
}: MobileMenuPanelProps) => {
  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-50 w-full bg-gray-900 shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden h-full', 
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-end p-6">
        <button 
          onClick={onClose} 
          className="p-3 rounded-full hover:bg-gray-800 text-white" 
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-6 pt-6 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        <ul className="space-y-6">
          {menuItems.map(item => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-2xl font-medium text-white hover:text-primary transition-all duration-200 block py-3 
                hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary" 
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-md text-gray-400 mb-4">Entre em contato conosco</p>
          
          {/* Phone number with icon */}
          <a 
            href="tel:+5561996381947" 
            className="text-xl text-white hover:text-primary font-medium flex items-center gap-2 py-2
            transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5" />
            (61) 99638-1947
          </a>
          
          {/* WhatsApp with icon */}
          <a 
            href="https://wa.me/5561996381947" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-primary font-medium flex items-center gap-2 py-2 mt-2
            transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            <WhatsApp className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
