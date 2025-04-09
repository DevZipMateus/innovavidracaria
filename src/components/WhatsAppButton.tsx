
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "5561996381947"; // Format: country code + number without spaces or symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // Listen for custom event when menu state changes
    const handleMenuStateChange = (e: CustomEvent) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    
    window.addEventListener('menu-state-change', handleMenuStateChange as EventListener);
    
    return () => {
      window.removeEventListener('menu-state-change', handleMenuStateChange as EventListener);
    };
  }, []);
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 shadow-lg hover:scale-110 transition-all z-40",
        "flex items-center justify-center rounded-full",
        isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/zap.png" 
        alt="WhatsApp" 
        className="w-16 h-16"
      />
    </a>
  );
};

export default WhatsAppButton;
