import { Clock, DollarSign, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Disponibilidade Ininterrupta',
    description: 'Atendimento 24 horas por dia, 7 dias por semana, sem pausas ou intervalos. Seus clientes sempre terão suporte quando precisarem.'
  },
  {
    icon: DollarSign,
    title: 'Economia Garantida',
    description: 'Reduza custos operacionais em até 60% com automação inteligente. Margem de lucro comprovada para seu negócio.'
  },
  {
    icon: Zap,
    title: 'Integração Ágil',
    description: 'Conecte facilmente com WhatsApp API e n8n. Configuração rápida em apenas 5 minutos, sem complicações técnicas.'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade Flexível',
    description: 'Cresça sem limites. Nossa IA se adapta ao volume de atendimentos e aprende com cada interação para melhorar continuamente.'
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
            Transforme o atendimento do seu negócio com tecnologia de ponta 
            que realmente entrega resultados comprovados.
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
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-foreground">
                Mais de 500+ empresas já confiam no Automatizaí
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;