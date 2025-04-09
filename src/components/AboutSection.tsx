import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const AboutSection = () => {
  return <section id="sobre" className="bg-white py-0">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a excelência em vidraçaria e forros PVC
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img src="/lovable-uploads/beeef57b-b0d3-44ab-9ab5-420c16e93a54.png" alt="Innova Vidraçaria" className="w-full h-auto object-contain bg-white p-4" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">A História da Innova Vidraçaria</h3>
            <p className="text-gray-600">
              Pedro Borges e Wilki Galdino, os proprietários da Innova Vidraçaria, têm uma história que se 
              entrelaça com a paixão pela vidraçaria. Com mais de 10 anos de experiência no ramo, 
              eles construíram uma reputação sólida e conquistaram a confiança de seus clientes.
            </p>
            <p className="text-gray-600">
              Tudo começou quando Pedro, um jovem apaixonado por vidraçaria, decidiu abrir sua própria empresa. 
              Com uma visão inovadora e um desejo de criar algo único, ele se associou a Wilki, 
              um amigo que compartilhava da mesma paixão.
            </p>
            <p className="text-gray-600">
              Juntos, eles fundaram a Innova Vidraçaria, com o objetivo de oferecer serviços de alta qualidade e personalizados. 
              Eles queriam ser diferentes das demais empresas do ramo, que muitas vezes se limitavam a 
              oferecer produtos padrão e sem personalidade.
            </p>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;