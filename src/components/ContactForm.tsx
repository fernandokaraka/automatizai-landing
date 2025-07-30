import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { BR, US, PT, GB } from 'country-flag-icons/react/3x2';

type FlagComponent = (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;

interface CountryPhone {
  code: string;
  name: string;
  mask: string;
  prefix: string;
  flag: FlagComponent;
}

const COUNTRIES: CountryPhone[] = [
  { 
    code: 'BR',
    name: 'Brasil',
    mask: '(00) 00000-0000',
    prefix: '+55',
    flag: (props) => <div {...props}><BR /></div>
  },
  { 
    code: 'US',
    name: 'Estados Unidos',
    mask: '(000) 000-0000',
    prefix: '+1',
    flag: (props) => <div {...props}><US /></div>
  },
  { 
    code: 'PT',
    name: 'Portugal',
    mask: '000 000 000',
    prefix: '+351',
    flag: (props) => <div {...props}><PT /></div>
  },
  { 
    code: 'GB',
    name: 'Reino Unido',
    mask: '00 0000 0000',
    prefix: '+44',
    flag: (props) => <div {...props}><GB /></div>
  }
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  phoneCountry: 'BR', // Adicionar país padrão
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

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Informações Pessoais',
    description: 'Seus dados de contato'
  },
  {
    number: 2,
    title: 'Informações Profissionais',
    description: 'Dados da sua empresa'
  },
  {
    number: 3,
    title: 'Detalhes do Projeto',
    description: 'Conte-nos sobre suas necessidades'
  }
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
  const [step, setStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);

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

  const formatPhoneNumber = (value: string, countryCode: string) => {
    const country = COUNTRIES.find(c => c.code === countryCode);
    if (!country) return value;

    const numbers = value.replace(/\D/g, '');
    const mask = country.mask;
    let result = '';
    let numberIndex = 0;

    // Aplica a máscara
    for (let i = 0; i < mask.length && numberIndex < numbers.length; i++) {
      if (mask[i] === '0') {
        result += numbers[numberIndex];
        numberIndex++;
      } else {
        result += mask[i];
        if (numberIndex < numbers.length) {
          result += numbers[numberIndex];
          numberIndex++;
        }
      }
    }

    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    if (value.length <= 11) {
      // Formata o número conforme vai digitando
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }
      if (value.length > 7) {
        value = `${value.slice(0, 10)}-${value.slice(10)}`;
      }
      
      setForm(prev => ({ ...prev, phone: value }));
    }
  };

  const handleCountryChange = (countryCode: string) => {
    setForm(prev => ({
      ...prev,
      phoneCountry: countryCode,
      phone: '' // Limpa o número ao trocar o país
    }));
  };

  const getSelectedCountry = () => {
    return COUNTRIES.find(c => c.code === form.phoneCountry) || COUNTRIES[0];
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
          message: form.message,
          interest: form.interest,
          budget: form.budget,
          recaptcha_token: token
        }
      ]);
      
      if (error) throw error;
      setSuccess('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
      setForm(initialState);
      setStep(1);
    } catch (err: any) {
      console.error('Error:', err);
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1 && (!form.name || !form.email)) {
      setError('Por favor, preencha os campos obrigatórios.');
      return;
    }
    setError('');
    setStep(prev => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
    setError('');
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
      <div 
        className="bg-primary h-1 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${formProgress}%` }}
      />
    </div>
  );

  const renderPhoneInput = () => {
    const selectedCountry = getSelectedCountry();
    const Flag = selectedCountry.flag;
    
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="phone">
          Telefone
        </label>
        <div className="relative flex">
          <Select
            value={form.phoneCountry}
            onValueChange={handleCountryChange}
          >
            <SelectTrigger className="w-[115px] absolute left-0 z-10 rounded-r-none border-r-0 bg-background">
              <SelectValue>
                <span className="flex items-center gap-2">
                  <Flag className="w-5 h-4 object-cover rounded-sm" />
                  <span>{selectedCountry.prefix}</span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem 
                  key={country.code} 
                  value={country.code}
                  className="cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <country.flag className="w-5 h-4 object-cover rounded-sm" />
                    <span>{country.name}</span>
                    <span className="text-muted-foreground ml-auto">
                      {country.prefix}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handlePhoneChange}
            placeholder="(00) 00000-0000"
            disabled={loading}
            className="bg-background pl-[120px]"
            maxLength={15}
          />
        </div>
      </div>
    );
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="w-full h-2 rounded-full overflow-hidden relative bg-white/20">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out transform origin-left"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary animate-pulse" />
        </div>
      </div>
    </div>
  );

  const renderStepTitle = () => {
    const currentStep = steps[step - 1];
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">
          {currentStep.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {currentStep.description}
        </p>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      {renderStepTitle()}
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="name">
            Nome <span className="text-destructive">*</span>
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
            className="bg-background text-foreground placeholder:text-muted-foreground/60"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="email">
            E-mail <span className="text-destructive">*</span>
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
            className="bg-background text-foreground placeholder:text-muted-foreground/60"
          />
        </div>
        {renderPhoneInput()}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      {renderStepTitle()}
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="company">
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
            className="bg-background text-foreground placeholder:text-muted-foreground/60"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="role">
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
            className="bg-background text-foreground placeholder:text-muted-foreground/60"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="industry">
            Setor de Atuação
          </label>
          <Select
            value={form.industry}
            onValueChange={(value) => handleSelectChange(value, 'industry')}
            disabled={loading}
          >
            <SelectTrigger className="bg-background text-foreground">
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
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      {renderStepTitle()}
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="interest">
            Principal Interesse
          </label>
          <Select
            value={form.interest}
            onValueChange={(value) => handleSelectChange(value, 'interest')}
            disabled={loading}
          >
            <SelectTrigger className="bg-background text-foreground">
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
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="budget">
            Orçamento Mensal
          </label>
          <Select
            value={form.budget}
            onValueChange={(value) => handleSelectChange(value, 'budget')}
            disabled={loading}
          >
            <SelectTrigger className="bg-background text-foreground">
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
          <label className="block mb-2 text-sm font-medium text-foreground" htmlFor="message">
            Mensagem <span className="text-destructive">*</span>
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
            className="bg-background text-foreground placeholder:text-muted-foreground/60 resize-none"
          />
        </div>
      </div>
    </div>
  );

  const handleNavigationButtons = () => (
    <div className="flex gap-3 mt-8">
      {step > 1 && (
        <Button
          type="button"
          onClick={handleBack}
          className="flex-1 flex items-center justify-center gap-2"
          variant="outline"
          disabled={loading}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
      )}
      {step < steps.length ? (
        <Button
          type="button"
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2"
          disabled={loading}
        >
          Próximo
          <ArrowRight className="w-4 h-4" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="flex-1 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </Button>
      )}
    </div>
  );

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
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-3">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tem dúvidas, sugestões ou quer conversar sobre automação? Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível!
          </p>
        </div>
        <Card className="w-full shadow-2xl border-primary/10">
          <CardHeader className="text-center pb-2">
            {renderStepIndicator()}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {error && (
                <div className="text-destructive text-sm font-medium mt-2">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-success text-sm font-medium mt-2">
                  {success}
                </div>
              )}
              {handleNavigationButtons()}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 