
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "5561996381947"; // Format: country code + number without spaces or symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if mobile menu is open
  useEffect(() => {
    const checkMenuStatus = () => {
      // Check for data-sidebar attribute which we added to the mobile menu
      const mobileMenuPanel = document.querySelector('[data-sidebar="sidebar"]');
      setIsMenuOpen(!!mobileMenuPanel);
    };

    // Setup mutation observer to detect menu changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        checkMenuStatus();
      });
    });

    // Start observing the document for attribute changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-sidebar']
    });
    
    // Initial check
    checkMenuStatus();
    
    // Listen for custom event when menu state changes
    const handleMenuStateChange = (e: CustomEvent) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    
    window.addEventListener('menu-state-change', handleMenuStateChange as EventListener);
    
    return () => {
      observer.disconnect();
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
        "flex items-center justify-center bg-green-500 rounded-full p-3",
        isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
    </a>
  );
};

export default WhatsAppButton;
