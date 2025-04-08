
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
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
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
      image: 'public/lovable-uploads/afe30b0a-43c0-4688-84c3-8a19bb735191.png'
    },
    {
      icon: <Grid3X3 className="h-6 w-6 text-primary" />,
      title: 'Guarda-corpo de vidro',
      description: 'Vantagens do uso: segurança e elegância.',
      image: 'public/lovable-uploads/c28065be-df1d-4e9f-9e93-1880ace659e9.png'
    },
    {
      icon: <ShowerHead className="h-6 w-6 text-primary" />,
      title: 'Vidro Temperado',
      description: 'Segurança e durabilidade para seu projeto.',
      image: 'public/lovable-uploads/51e68671-5d84-4756-98fc-ff3218edd82f.png'
    },
  ];

  const pvcServices = [
    {
      icon: <SlidersHorizontal className="h-6 w-6 text-primary" />,
      title: 'Forros PVC',
      description: 'Uma excelente opção para quem busca uma solução prática e estilosa em forro.',
      image: 'public/lovable-uploads/8abd39c5-4192-45b7-ac85-6d91d909e3de.png'
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
      title: 'Forro PVC Perfeitos',
      description: 'Acabamento impecável em cada projeto.',
      image: 'public/lovable-uploads/6cfefaa5-2b70-4b47-a341-1668f3cc1e20.png'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Fachadas de lojas',
      description: 'Soluções em vidro para comércios.',
      image: 'public/lovable-uploads/4ad1e2f1-46b9-424e-86cc-015b9979fecd.png'
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
