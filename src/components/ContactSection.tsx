
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
                      <p className="text-sm text-gray-600">Rua Tapuias Quadra 14 Lote 05</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.734410722311!2d-48.0!3d-15.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzAwLjAiUyA0OMKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
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
                  <svg 
                    viewBox="0 0 32 32" 
                    className="w-5 h-5 mr-2 fill-current"
                  >
                    <path 
                      d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.372-.143-.3 0-.603.086-.945.086-.151 0-.73.229-.73.488-.229 1.39-1.034 2.563-1.91 3.609-.231.287-.43.315-.731.058-.73-.815-.412-1.206-.586-1.859-.059-.21.014-.425.145-.514.516-.287 1.05-1.06 1.05-1.876 0-.688-.43-.688-.6-.688-.33 0-.657.086-.987.086-.3 0-.56.029-.789.115-.315.11-.688.515-.688.945 0 .287.086.515.215.73.3.43.616.401.787.717.275.516.145 1.862-.516 2.563-.225.243-.523.49-.981.49-.845 0-2.107-2.311-2.392-3.45 0-.285-.085-.456-.287-.457-.344 0-.901.535-1.219.535-.218 0-.344-.028-.344-.3 0-.267.063-.622.063-.909 0-.284-.37-.685-.579-.862-.216-.179-.442-.244-.934-.244-1.073 0-2.222.571-2.222 1.69 0 .215.086.401.258.57.343.359.547.348.877.659.064.048.108.107.108.185 0 .37-.979 2.475-1.85 2.475-.158 0-.301-.023-.387-.113-.143-.131-.171-.273-.171-.446 0-.375.171-.742.342-1.078.171-.334.372-.675.372-1.06 0-.235-.057-.252-.4-.252-.349 0-.47.234-.581.234a.36.36 0 0 1-.365-.364c0-.592 1.789-1.158 2.652-1.158.256 0 .544.07.739.249.2.182.287.404.287.642 0 .248-.089.494-.088.741 0 .137.029.274.143.363.114.088.229.088.373.088.573 0 1.51-2.203 1.882-2.633.113-.145.3-.273.472-.273.114 0 .256.087.256.273 0 .401-.983 2.963-1.727 2.963-.343 0-.572-.115-.887-.287-.314-.17-.3-.199-.428-.199-.1 0-.228.03-.228.23 0 1.031 2.392 1.177 3.08 1.177.516 0 .931-.114 1.39-.229.085-.028.143-.057.23-.057.372 0 1.147 1.433 1.162 1.82v.03c0 .057-.03.114-.057.172-.115.13-.258.185-.43.185-1.264 0-2.051-1.776-3.252-1.776-.286 0-.515.086-.658.143a.289.289 0 0 0-.143.234c0 .343.429.488.772.631.343.143.673.287.93.516.257.23.415.574.415.975 0 1.418-1.133 2.592-2.55 2.592-1.132 0-2.009-.545-2.009-1.719 0-.273.29-.702.29-1.004 0-.115-.058-.23-.115-.288-.115-.115-.287-.172-.43-.172-.401 0-.803.286-.803.717 0 .516.4 1.862 3.021 1.862 1.619 0 3.596-.774 3.596-2.907 0-.819-.444-1.205-.816-1.491zM15.01 0C6.717 0 0 6.716 0 15.01c0 8.294 6.717 15.01 15.01 15.01 8.293 0 15.01-6.716 15.01-15.01C30.02 6.715 23.304 0 15.01 0zm0 27.775c-7.05 0-12.765-5.715-12.765-12.765 0-7.05 5.715-12.765 12.765-12.765 7.05 0 12.765 5.715 12.765 12.765 0 7.05-5.715 12.765-12.765 12.765z"
                    />
                  </svg>
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
