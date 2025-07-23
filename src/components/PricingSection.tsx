import { Check, ArrowRight, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Ideal para pequenos negócios',
    price: 'R$ 97',
    period: '/mês',
    savings: 'Economia: 45%',
    features: [
      'Até 1.000 mensagens/mês',
      'Integração WhatsApp',
      'Suporte por email',
      'Relatórios básicos',
      'Configuração guiada'
    ],
    popular: false
  },
  {
    name: 'Growth',
    description: 'Para empresas em crescimento',
    price: 'R$ 197',
    period: '/mês',
    savings: 'Economia: 60%',
    features: [
      'Até 5.000 mensagens/mês',
      'Múltiplas integrações',
      'Suporte prioritário',
      'Relatórios avançados',
      'Treinamento personalizado',
      'API completa',
      'Automações avançadas'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Solução completa para grandes empresas',
    price: 'Sob consulta',
    period: '',
    savings: 'Economia: 70%+',
    features: [
      'Mensagens ilimitadas',
      'Integrações customizadas',
      'Suporte 24/7 dedicado',
      'Analytics empresarial',
      'Onboarding completo',
      'SLA garantido',
      'Servidor dedicado',
      'Customizações exclusivas'
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos que se adaptam ao{' '}
            <span className="text-primary">seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal e comece a economizar enquanto melhora 
            o atendimento aos seus clientes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative card-feature fade-in-up
                ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Crown size={16} />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                {/* Savings Badge */}
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {plan.savings}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`
                  w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                  }
                `}
              >
                {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Escolher Plano'}
                <ArrowRight size={16} />
              </button>

              {/* Trial Notice */}
              {plan.name !== 'Enterprise' && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  7 dias grátis • Cancele a qualquer momento
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossos especialistas podem ajudar você a encontrar a solução perfeita 
              para o seu negócio. Agende uma conversa gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Agendar Consultoria Grátis
              </button>
              <button className="btn-primary">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;