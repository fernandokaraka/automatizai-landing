import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import logoFooter from '../logo_footer_branco.png';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-black text-white py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logoFooter}
                alt="Logo Automatizai"
                className="w-32 h-auto object-contain"
              />
            </div>
            <p className="text-white/90 dark:text-white leading-relaxed">
              Transformando o atendimento ao cliente com inteligência artificial. 
              Disponível 24/7 para fazer seu negócio crescer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 dark:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 dark:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 dark:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 dark:text-white transition-colors">
                <Twitter size={20} />
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
                <a href="#sobre" className="text-white/80 dark:text-white">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 dark:text-white">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 dark:text-white">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 dark:text-white">
                  Status do Sistema
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 dark:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-white" />
                <a href="mailto:contato@automatizai.com.br" className="text-white/80 dark:text-white">
                  contato@automatizai.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-white" />
                <span className="text-white/80 dark:text-white">(11) 9 9999-9999</span>
              </div>
              <button className="bg-white text-primary dark:bg-white dark:text-primary px-6 py-2 rounded-lg font-medium hover:bg-white/90">
                Falar Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 dark:text-white text-sm">
              © 2024 Automatizaí. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 dark:text-white text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/80 dark:text-white text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-white/80 dark:text-white text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;