import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  industry: '',
  employees: '',
  website: '',
  message: '',
  interest: '',
  budget: '',
  timeline: ''
};

const INDUSTRIES = [
  'Restaurante',
  'Clínica',
  'Farmácia',
  'E-commerce',
  'Educação',
  'Imobiliária',
  'Outro'
];

const EMPLOYEES = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501+'
];

const INTERESTS = [
  'Atendimento ao Cliente',
  'Vendas',
  'Marketing',
  'Suporte Técnico',
  'Outro'
];

const BUDGETS = [
  'Até R$ 500/mês',
  'R$ 500 - R$ 1.000/mês',
  'R$ 1.000 - R$ 2.000/mês',
  'Acima de R$ 2.000/mês',
  'A definir'
];

const TIMELINES = [
  'Imediato',
  'Em 1 mês',
  'Em 3 meses',
  'Ainda pesquisando'
];

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSelectChange = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('E-mail inválido.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // Executar o reCAPTCHA v3
      const token = await window.grecaptcha.execute('6LfDwJMrAAAAAPLHUh1HAuvHjxRv6JcdPUPb1W87', { action: 'submit' });
      
      const { error } = await supabase.from('contacts').insert([
        { 
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          role: form.role,
          industry: form.industry,
          employees: form.employees,
          website: form.website,
          message: form.message,
          interest: form.interest,
          budget: form.budget,
          timeline: form.timeline,
          recaptcha_token: token
        }
      ]);
      
      if (error) throw error;
      setSuccess('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
      setForm(initialState);
    } catch (err: any) {
      console.error('Error:', err);
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Carregar o reCAPTCHA v3
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfDwJMrAAAAAPLHUh1HAuvHjxRv6JcdPUPb1W87`;
    document.body.appendChild(script);

    return () => {
      const script = document.querySelector('script[src*="recaptcha"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contato" className="py-20 bg-muted/30 fade-in-up">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-primary mb-2">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tem dúvidas, sugestões ou quer conversar sobre automação? Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível!
          </p>
        </div>
        <Card className="w-full max-w-lg shadow-2xl border-primary/10">
          <CardHeader className="text-center pb-2">
            <CardTitle className="font-heading text-3xl font-bold text-foreground mb-2">
              Fale conosco
            </CardTitle>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Queremos entender melhor suas necessidades para oferecer a melhor solução.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informações Básicas</h3>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="name">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    disabled={loading}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="email">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    disabled={loading}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="phone">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Informações da Empresa */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informações da Empresa</h3>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="company">
                    Nome da Empresa
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="role">
                    Seu Cargo
                  </label>
                  <Input
                    type="text"
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Ex: Gerente, Diretor, etc"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="industry">
                    Setor de Atuação
                  </label>
                  <Select
                    value={form.industry}
                    onValueChange={(value) => handleSelectChange(value, 'industry')}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o setor" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="employees">
                    Número de Funcionários
                  </label>
                  <Select
                    value={form.employees}
                    onValueChange={(value) => handleSelectChange(value, 'employees')}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tamanho da empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      {EMPLOYEES.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="website">
                    Website
                  </label>
                  <Input
                    type="url"
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://www.seusite.com.br"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Informações do Projeto */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informações do Projeto</h3>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="interest">
                    Principal Interesse
                  </label>
                  <Select
                    value={form.interest}
                    onValueChange={(value) => handleSelectChange(value, 'interest')}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua área de interesse" />
                    </SelectTrigger>
                    <SelectContent>
                      {INTERESTS.map((interest) => (
                        <SelectItem key={interest} value={interest}>
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="budget">
                    Orçamento Mensal
                  </label>
                  <Select
                    value={form.budget}
                    onValueChange={(value) => handleSelectChange(value, 'budget')}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o orçamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGETS.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="timeline">
                    Prazo para Implementação
                  </label>
                  <Select
                    value={form.timeline}
                    onValueChange={(value) => handleSelectChange(value, 'timeline')}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMELINES.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-foreground" htmlFor="message">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva suas necessidades, desafios ou objetivos..."
                    rows={4}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
              {success && <div className="text-green-600 text-sm font-medium">{success}</div>}
              
              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 