import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logoClaro from '../assets/logo - Automatizai - claro.png';
import logoEscuro from '../assets/logo - Automatizai - escuro.png';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      return document.documentElement.classList.contains('dark');
    };
    setIsDark(checkDark());
    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-[12rem]">
          <img
            src={isDark ? logoEscuro : logoClaro}
            alt="Logo Automatizai"
            className="w-40 h-40 object-contain -my-8"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#precos" className="text-foreground hover:text-primary transition-colors">
            Preços
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <button className="btn-secondary">
            Ver Demo
          </button>
          <button className="btn-primary">
            Testar Grátis
          </button>
        </div>

        {/* Mobile - Theme Toggle & Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#como-funciona" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#precos" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <div className="flex flex-col space-y-3 pt-4">
              <button className="btn-secondary">
                Ver Demonstração
              </button>
              <button className="btn-primary">
                Testar Gratuitamente
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;