
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e transformar seus espaços
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
                  
                  {/* Telefone */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium">Telefone/WhatsApp</h4>
                      <p className="text-sm text-gray-600">(61) 99638-1947</p>
                    </div>
                  </div>
                  
                  {/* E-mail */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium">E-mail</h4>
                      <p className="text-sm text-gray-600 break-words">innovavidracaria.adm@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Endereço */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium">Endereço</h4>
                      <p className="text-sm text-gray-600">Rua João Mosmann, 492, sala 7 segundo andar, centro parobé-RS</p>
                    </div>
                  </div>
                  
                  {/* Instagram */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/innova.vidracaria/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        @innova.vidracaria
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 md:h-auto">
                  {/* Google Maps Embed */}
                  <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
                    <iframe 
                      title="Localização da Innova Vidraçaria"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.7441339291095!2d-50.832453!3d-29.624809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943326a652511%3A0xb99a3a756c306f67!2sR.%20Jo%C3%A3o%20Mosmann%2C%20492%20-%20Centro%2C%20Parob%C3%A9%20-%20RS%2C%2095630-000!5e0!3m2!1spt-BR!2sbr!4v1718391625424!5m2!1spt-BR!2sbr"
                      className="w-full h-full" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h4 className="text-lg font-medium mb-2 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Solicite um Orçamento
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  Entre em contato pelo WhatsApp ou telefone para solicitar um orçamento personalizado.
                </p>
                <a 
                  href="https://wa.me/5561996381947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  <img 
                    src="/lovable-uploads/zap.png" 
                    alt="WhatsApp"
                    className="w-5 h-5 mr-2"
                  />
                  Contato via WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
