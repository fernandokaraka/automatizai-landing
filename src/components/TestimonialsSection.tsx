import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Bistrô Sabor & Arte',
    role: 'Restaurante Gourmet',
    content: 'O Automatizaí revolucionou nosso atendimento! Agora conseguimos atender pedidos 24h e nossa satisfação do cliente aumentou 85%. A economia mensal é impressionante.',
    rating: 5,
    savings: '52% de economia'
  },
  {
    name: 'Clínica VidaPlena',
    role: 'Clínica Médica',
    content: 'Implementamos o sistema há 3 meses e os resultados superaram nossas expectativas. Os agendamentos automatizados liberaram nossa equipe para focar no atendimento presencial.',
    rating: 5,
    savings: '68% de economia'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes{' '}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresas reais, resultados reais. Veja como o Automatizaí 
            está transformando negócios em todo o Brasil.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-feature relative fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.savings}
                </div>
              </div>

              {/* Verification Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Cliente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 fade-in-up">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-background rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Empresas Ativas</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground">Economia Média</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;