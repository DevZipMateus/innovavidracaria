
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-start pt-36 md:pt-32 md:items-center bg-gradient-to-r from-gray-100 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Vidraçaria & Forro PVC de Qualidade
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Transformando espaços com <br />
              <span className="text-primary">innovação e estilo</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Oferecemos soluções completas em vidraçaria e forros PVC, 
              com foco em qualidade e atendimento personalizado para transformar o seu ambiente.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contato" className="btn-primary flex items-center gap-2">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#servicos" className="btn-secondary">
                Conheça Nossos Serviços
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+10</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Personalizado</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Premium</div>
                <div className="text-sm text-gray-600">Qualidade</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-primary/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-200 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Vidraçaria profissional" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
