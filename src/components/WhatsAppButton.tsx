
import { useState, useEffect } from "react";
import { WhatsApp } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "5561996381947"; // Format: country code + number without spaces or symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if mobile menu is open
  useEffect(() => {
    const checkMenuStatus = () => {
      // Find the mobile menu panel element and check if it's visible
      const mobileMenuPanel = document.querySelector('[data-sidebar="sidebar"], [class*="translate-x-0"]');
      setIsMenuOpen(!!mobileMenuPanel);
    };

    // Setup mutation observer to detect menu changes
    const observer = new MutationObserver(() => {
      checkMenuStatus();
    });

    // Start observing the body for attribute/class changes
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });
    
    // Initial check
    checkMenuStatus();
    
    return () => {
      observer.disconnect();
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
      <WhatsApp className="w-8 h-8 md:w-10 md:h-10 text-white" />
    </a>
  );
};

export default WhatsAppButton;
