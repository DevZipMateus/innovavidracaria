
import { Lightbulb, Award, UserCheck, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({ icon, title, description, className }: ValueCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: <Lightbulb className="h-7 w-7 text-primary" />,
      title: 'Inovação',
      description: 'Sempre buscando novas formas de inovar e melhorar, trazendo soluções criativas para cada projeto.'
    },
    {
      icon: <Award className="h-7 w-7 text-primary" />,
      title: 'Qualidade',
      description: 'Comprometimento com produtos de alta qualidade, utilizando os melhores materiais do mercado.'
    },
    {
      icon: <UserCheck className="h-7 w-7 text-primary" />,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único, por isso oferecemos soluções personalizadas para suas necessidades específicas.'
    },
    {
      icon: <Heart className="h-7 w-7 text-primary" />,
      title: 'Paixão pela Vidraçaria',
      description: 'Mais que um trabalho, a vidraçaria é nossa paixão. Isso se reflete em cada projeto que realizamos.'
    }
  ];

  return (
    <section id="valores" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa Filosofia</h2>
          <p className="section-subtitle">
            Os valores que guiam nosso trabalho e nos diferenciam no mercado
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <AnimatedSection 
              key={value.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ValueCard 
                icon={value.icon} 
                title={value.title} 
                description={value.description} 
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
