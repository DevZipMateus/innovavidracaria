import { Maximize2, Grid3X3, SlidersHorizontal, LayoutDashboard, ShowerHead, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, image, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group relative bg-white",
      className
    )}>
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Failed to load image: ${target.src}`);
            target.src = '/placeholder.svg'; // Fallback image
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          {icon}
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const glassServices = [
    {
      icon: <Maximize2 className="h-6 w-6 text-primary" />,
      title: 'Box Para Banheiro',
      description: 'Beleza e durabilidade em cada detalhe.',
      image: '/lovable-uploads/boxvidro.png'
    },
    {
      icon: <Grid3X3 className="h-6 w-6 text-primary" />,
      title: 'Guarda-corpo de vidro',
      description: 'Vantagens do uso: segurança e elegância.',
      image: '/lovable-uploads/guardacorpo.png'
    },
    {
      icon: <ShowerHead className="h-6 w-6 text-primary" />,
      title: 'Vidro Temperado',
      description: 'Segurança e durabilidade para seu projeto.',
      image: '/lovable-uploads/vidrotemperado.png'
    },
  ];

  const pvcServices = [
    {
      icon: <SlidersHorizontal className="h-6 w-6 text-primary" />,
      title: 'Forros PVC',
      description: 'Uma excelente opção para quem busca uma solução prática e estilosa em forro.',
      image: '/lovable-uploads/forropvc.png'
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
      title: 'Forro PVC Perfeitos',
      description: 'Acabamento impecável em cada projeto.',
      image: '/lovable-uploads/forro PVC marrom.png'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Fachadas de lojas',
      description: 'Soluções em vidro para comércios.',
      image: '/lovable-uploads/lojas.png'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em vidraçaria e forros PVC para transformar qualquer ambiente
          </p>
        </AnimatedSection>

        <div className="mt-12">
          {/* Vidraçaria */}
          <AnimatedSection animation="fade-in">
            <h3 className="text-2xl font-bold mb-2">Vidraçaria</h3>
            <p className="text-gray-600 mb-8">Soluções em vidro temperado para todos os ambientes, com qualidade e segurança.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {glassServices.map((service, index) => (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description}
                  image={service.image}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Forro PVC */}
          <AnimatedSection animation="fade-in">
            <h3 className="text-2xl font-bold mb-2">Forro PVC</h3>
            <p className="text-gray-600 mb-8">Soluções em PVC para ambientes internos e externos, com praticidade e elegância.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pvcServices.map((service, index) => (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description}
                  image={service.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
