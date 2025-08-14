import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoFooter from '../logo_footer_branco.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-black text-white py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" aria-label="Ir para a página inicial">
                <img
                  src={logoFooter}
                  alt="Logo Automatizai"
                  className="w-32 h-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-white/90 dark:text-white leading-relaxed">
              Transformando o atendimento ao cliente com inteligência artificial. 
              Disponível 24/7 para fazer seu negócio crescer.
            </p>
            <p className="text-white/80 text-sm">
              Automatizaí é um produto da <a href="https://marketai.com.br" target="_blank" rel="noopener noreferrer" className="underline">Marketaí</a>.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61569039497200" target="_blank" rel="noopener noreferrer" className="text-white/80 dark:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/marketai.br/" target="_blank" rel="noopener noreferrer" className="text-white/80 dark:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/marketa%C3%AD/" target="_blank" rel="noopener noreferrer" className="text-white/80 dark:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-white/80 dark:text-white">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-white/80 dark:text-white">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#precos" className="text-white/80 dark:text-white">
                  Preços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 dark:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Espaço reservado (removido Suporte) */}
          <div></div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-white" />
                <a href="mailto:contato@marketai.com.br" className="text-white/80 dark:text-white">
                  contato@marketai.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-white" />
                <a
                  href="https://wa.me/5511931510669?text=Ol%C3%A1!%20Quero%20automatizar%20meu%20atendimento%20no%20WhatsApp%20com%20IA.%20Podemos%20conversar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 dark:text-white underline"
                >
                  11 93151-0669 (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 dark:text-white text-sm">
              © 2025 Automatizaí. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/politica-de-privacidade" className="text-white/80 dark:text-white text-sm">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-white/80 dark:text-white text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;