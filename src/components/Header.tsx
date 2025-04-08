
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Close menu when resizing from mobile to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Nossos Valores', href: '#valores' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center z-10 relative">
          <img 
            src="/public/lovable-uploads/0459b746-751f-4b5b-af87-86fbc5894863.png" 
            alt="Innova Vidraçaria Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                'hover:text-primary focus:text-primary',
                scrolled ? 'text-gray-800' : 'text-gray-800',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                'after:bg-primary after:transition-all after:duration-300',
                'hover:after:w-full focus:after:w-full'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={cn(
            "md:hidden flex items-center justify-center rounded-full p-3 z-50",
            "focus:outline-none transition-all duration-200",
            "hover:scale-105 active:scale-95",
            scrolled 
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "bg-white/20 backdrop-blur-sm text-primary hover:bg-white/30"
          )}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300',
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div 
          className={cn(
            'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-xl',
            'transform transition-transform duration-300 ease-in-out md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <div className="text-2xl font-bold text-primary">Innova Vidraçaria</div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
            <ul className="space-y-5">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xl font-medium text-gray-800 hover:text-primary transition-all duration-200 block py-2 
                              hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-md text-gray-500 mb-3">Entre em contato conosco</p>
              <a 
                href="tel:+5561996381947" 
                className="text-xl text-primary hover:text-primary/80 font-medium block py-2
                          transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
              >
                (61) 99638-1947
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
