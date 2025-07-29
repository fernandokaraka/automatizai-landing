import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../Automatizai header v1.png';

const HeroSection = () => {
  return (
    <section className="pt-48 pb-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Automatizaí:</span>{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Atendimento 24/7
                </span>{' '}
                com Agentes de IA Inteligentes
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Reduza custos e aumente a satisfação de clientes em restaurantes, 
                clínicas, farmácias e mais com nossa solução de atendimento automatizado.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group flex items-center gap-2 text-lg px-8 py-4">
                Testar Gratuitamente
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary group flex items-center gap-2 text-lg px-8 py-4">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Ver Demonstração
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>LGPD Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:order-last fade-in-up">
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl transform rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-background to-muted rounded-3xl p-8 shadow-2xl">
                <img 
                  src={heroImage}
                  alt="Automatizai IA Assistant"
                  className="w-full h-auto max-w-md mx-auto"
                />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                  Online
                </div>
                
                <div className="absolute bottom-6 left-6 bg-background shadow-lg rounded-lg p-3 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium">Atendendo agora</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    "Olá! Como posso ajudar você hoje?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;