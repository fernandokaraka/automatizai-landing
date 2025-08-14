import { Check, ArrowRight, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Até 100 atendimentos/mês',
    price: 'R$ 247/mês',
    period: '',
    savings: 'Setup inicial a partir de R$ 149',
    features: [
      'WhatsApp com IA (texto e áudio)',
      'Integração com Google Agenda',
      'Triagem e FAQ automáticos',
      'IA especializada por nicho',
      'Relatórios básicos em Sheets'
    ],
    popular: false,
    infrastructure: ''
  },
  {
    name: 'Pro',
    description: 'Até 500 atendimentos/mês',
    price: 'R$ 597/mês',
    period: '',
    savings: 'Setup inicial a partir de R$ 249',
    features: [
      'Tudo do Starter',
      'Integração com Google Docs e Sheets',
      'Personalização de contexto e prompts',
      'Suporte prioritário'
    ],
    popular: true,
    infrastructure: ''
  },
  {
    name: 'Enterprise',
    description: '1.200+ atendimentos/mês',
    price: 'R$ 1.197/mês',
    period: '',
    savings: 'Setup inicial a partir de R$ 399',
    features: [
      'Integrações e fluxos avançados',
      'Integrações sob demanda',
      'Suporte dedicado 24/7'
    ],
    popular: false,
    infrastructure: ''
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos simples para começar agora
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atenda clientes no WhatsApp com IA. Integre Google Agenda, Docs e Sheets sem complicar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative card-feature fade-in-up h-full flex flex-col
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
              <div className="text-center mb-8 min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-start">
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

                {/* Infrastructure Cost */}
                {false && plan.infrastructure}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-1">
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
              <a 
                className={`
                  w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                  }
                `}
                href="#contato"
              >
                {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Escolher Plano'}
                <ArrowRight size={16} />
              </a>

              {/* Implementation Notice */}
              {plan.name !== 'Enterprise' && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Implementação em até 7 dias • Garantia de satisfação
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
              <a href="#contato" className="btn-secondary">
                Agendar Consultoria Grátis
              </a>
              <a href="https://wa.me/5511931510669?text=Ol%C3%A1!%20Quero%20automatizar%20meu%20atendimento%20no%20WhatsApp%20com%20IA.%20Podemos%20conversar?" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;