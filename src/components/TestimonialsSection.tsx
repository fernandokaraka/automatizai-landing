import { Star, Quote } from 'lucide-react';

const testimonials: any[] = [];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Quem já conversou com a gente
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos começando. Em breve, traremos casos reais e histórias de clientes.
          </p>
        </div>
        <div className="text-center mt-10">
          <a href="#contato" className="btn-primary px-8 py-3">Quero ser um caso de sucesso</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;