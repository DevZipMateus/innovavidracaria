
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";
import {
  Sheet,
  SheetContent,
  SheetClose
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <Sheet open={isMenuOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="p-0 border-none w-full sm:max-w-sm bg-[#1A1F2C] text-white"
        overlayClassName="bg-black/80 backdrop-blur-sm"
      >
        <div className="flex items-center justify-end p-4">
          <SheetClose className="rounded-full p-2 border border-white/20 bg-transparent hover:bg-white/10">
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Fechar</span>
          </SheetClose>
        </div>
        
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="px-4 pb-8">
            <ul className="divide-y divide-white/10">
              {menuItems.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      
                      // Smooth scroll with delay for mobile
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      
                      if (targetElement) {
                        setTimeout(() => {
                          window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                          });
                        }, 300);
                      }
                    }} 
                    className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ChevronRight className="h-5 w-5 text-white/70" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-md text-gray-400 mb-5">Entre em contato conosco</p>
              
              {/* Phone number with icon */}
              <a 
                href="tel:+5561996381947" 
                className="flex items-center gap-3 py-3 text-white hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="block h-5 w-5 text-primary">📞</span>
                </div>
                <span className="text-lg">(61) 99638-1947</span>
              </a>
              
              {/* WhatsApp with icon */}
              <a 
                href="https://wa.me/5561996381947" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 text-white hover:text-primary transition-colors"
              >
                <div className="bg-green-500/10 p-2 rounded-full">
                  <span className="block h-5 w-5 text-green-500">💬</span>
                </div>
                <span className="text-lg">WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuPanel;
