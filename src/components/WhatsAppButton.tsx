
const WhatsAppButton = () => {
  const phoneNumber = "5561996381947"; // Format: country code + number without spaces or symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 shadow-lg hover:scale-110 transition-all z-50"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/929c3b44-6b2d-4abb-a124-bca574ea5e13.png" 
        alt="WhatsApp" 
        className="w-14 h-14 md:w-16 md:h-16" 
      />
    </a>
  );
};

export default WhatsAppButton;
