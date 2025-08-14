import { Clock, Calendar, Bot, HelpCircle } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Atendimento 24/7',
    description: 'Seus clientes são atendidos a qualquer hora, inclusive fora do horário comercial.'
  },
  {
    icon: Calendar,
    title: 'Agendamentos sem erro',
    description: 'Integração com Google Agenda para marcar, remarcar e confirmar automaticamente.'
  },
  {
    icon: Bot,
    title: 'IA por nicho',
    description: 'Modelos treinados para clínicas, imóveis, restaurantes, farmácias, pets, salões e mais.'
  },
  {
    icon: HelpCircle,
    title: 'Triagem e FAQ automáticos',
    description: 'Filtragem inicial, respostas a perguntas frequentes e encaminhamento inteligente ao humano quando necessário.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher o{' '}
            <span className="text-primary">Automatizaí</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A ponte entre o pequeno negócio e o atendimento com IA. Rápido. Personalizado. Sem complicar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="card-feature group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent 
                    size={32} 
                    className="text-primary group-hover:scale-110 transition-transform" 
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/0 rounded-lg group-hover:border-primary/20 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <a href="#contato" className="btn-primary text-lg px-8 py-3">
            Quero automatizar meu WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;