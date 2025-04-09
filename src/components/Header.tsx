
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import MobileMenuButton from './header/MobileMenuButton';
import MobileMenuOverlay from './header/MobileMenuOverlay';
import MobileMenuPanel from './header/MobileMenuPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Dispatch custom event for other components to react to menu state changes
    window.dispatchEvent(new CustomEvent('menu-state-change', { 
      detail: { isOpen: newMenuState } 
    }));
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = newMenuState ? 'hidden' : '';
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
        document.body.style.overflow = '';
        
        // Dispatch custom event for menu close
        window.dispatchEvent(new CustomEvent('menu-state-change', { 
          detail: { isOpen: false } 
        }));
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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

  // Improved scroll handling for menu items
  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close menu first
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    
    // Dispatch custom event for menu close
    window.dispatchEvent(new CustomEvent('menu-state-change', { 
      detail: { isOpen: false } 
    }));
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }, 300); // Longer delay to ensure menu closes completely first
    }
  };

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
            src="/lovable-uploads/0459b746-751f-4b5b-af87-86fbc5894863.png" 
            alt="Innova Vidraçaria Logo" 
            className="h-14 md:h-16" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleMenuItemClick(e, item.href)}
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
        <MobileMenuButton 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrolled={scrolled}
        />

        {/* Mobile Menu Components */}
        <MobileMenuOverlay 
          isMenuOpen={isMenuOpen}
          onClose={toggleMenu}
        />

        <MobileMenuPanel 
          isMenuOpen={isMenuOpen}
          onClose={toggleMenu}
          menuItems={menuItems}
        />
      </div>
    </header>
  );
};

export default Header;
