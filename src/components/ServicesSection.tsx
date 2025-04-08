
import { Maximize2, Grid3X3, SlidersHorizontal, LayoutDashboard, ShowerHead, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

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
      description: 'Box de vidro temperado para banheiros, com diversos modelos e acabamentos.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <Grid3X3 className="h-6 w-6 text-primary" />,
      title: 'Espelhos',
      description: 'Espelhos personalizados, em diversos tamanhos e acabamentos para todos os ambientes.',
      image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80'
    },
    {
      icon: <ShowerHead className="h-6 w-6 text-primary" />,
      title: 'Portas de Vidro',
      description: 'Portas de vidro temperado para ambientes internos e externos, com design personalizado.',
      image: 'https://images.unsplash.com/photo-1549885606-e47f833cc01a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
  ];

  const pvcServices = [
    {
      icon: <SlidersHorizontal className="h-6 w-6 text-primary" />,
      title: 'Forros PVC',
      description: 'Forros de PVC de alta qualidade, disponíveis em diversos modelos e cores.',
      image: 'https://plus.unsplash.com/premium_photo-1686090086092-ed61e8600b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
      title: 'Divisórias PVC',
      description: 'Divisórias de PVC para ambientes residenciais e comerciais, práticas e elegantes.',
      image: 'https://images.unsplash.com/photo-1610099147395-4bca3a6aaa96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Revestimentos PVC',
      description: 'Revestimentos de PVC para paredes, tetos e divisórias, duráveis e fáceis de limpar.',
      image: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
