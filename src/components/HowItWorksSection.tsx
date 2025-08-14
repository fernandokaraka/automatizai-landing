import { MessageSquare, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Conecte o WhatsApp',
    description: 'Ligamos sua empresa à WhatsApp Cloud API de forma segura e rápida.'
  },
  {
    number: 2,
    icon: Settings,
    title: 'Configure a IA',
    description: 'Personalize respostas, defina fluxos de atendimento e treine a IA com dados do seu negócio.'
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Ative e acompanhe',
    description: 'IA atendendo 24/7. Integrações com Google Agenda, Docs e Sheets para o dia a dia.'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como funciona o{' '}
            <span className="text-primary">Automatizaí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples, você terá um assistente de IA 
            funcionando perfeitamente no seu negócio.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className="text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number with Icon */}
                  <div className="relative mx-auto mb-6">
                    {/* Background Circle */}
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <IconComponent size={32} className="text-primary-foreground" />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8 mb-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Comece hoje: triagem e agendamento automáticos no WhatsApp.
            </p>
            <a href="#contato" className="btn-primary text-lg px-8 py-3">
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;