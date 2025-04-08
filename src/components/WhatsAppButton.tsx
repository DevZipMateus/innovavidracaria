
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5561996381947"; // Format: country code + number without spaces or symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
