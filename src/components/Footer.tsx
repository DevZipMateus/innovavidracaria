
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/0459b746-751f-4b5b-af87-86fbc5894863.png" 
                alt="Innova Vidraçaria Logo" 
                className="h-12 mr-3 bg-white/90 p-1 rounded"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Soluções completas em vidraçaria e forros PVC, com foco em qualidade e 
              atendimento personalizado para transformar o seu ambiente.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/innova.vidracaria/" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Box Para Banheiro</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Espelhos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Portas de Vidro</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Forros PVC</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Divisórias PVC</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Revestimentos PVC</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(61) 99638-1947</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>innovavidracaria.adm@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua João Mosmann, 492, sala 7 segundo andar, centro parobé-RS</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-3 w-3" />
                </div>
                <div>
                  <a 
                    href="https://www.instagram.com/innova.vidracaria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @innova.vidracaria
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} Innova Vidraçaria & Forro PVC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
