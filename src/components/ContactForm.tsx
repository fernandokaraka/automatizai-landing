import React, { useState, useRef } from 'react';
import { supabase } from '../integrations/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = { name: '', email: '', message: '' };
const RECAPTCHA_SITE_KEY = "6LfDwJMrAAAAAPLHUh1HAuvHjxRv6JcdPUPb1W87";

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setError('Por favor, preencha todos os campos.');
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

    // Verificar o reCAPTCHA
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setError('Por favor, complete o captcha.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const { error } = await supabase.from('contacts').insert([
        { 
          name: form.name, 
          email: form.email, 
          message: form.message,
          recaptcha: recaptchaValue // Opcional: enviar o token para verificação no backend
        }
      ]);
      
      if (error) throw error;
      setSuccess('Mensagem enviada com sucesso!');
      setForm(initialState);
      recaptchaRef.current?.reset();
    } catch (err: any) {
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-muted/30 fade-in-up">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-2xl">
        {/* Texto introdutório */}
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
              Tem dúvidas, sugestões ou quer saber mais? Envie sua mensagem e responderemos rapidamente!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-foreground" htmlFor="name">Nome</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  disabled={loading}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-foreground" htmlFor="email">E-mail</label>
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
                <label className="block mb-1 font-medium text-foreground" htmlFor="message">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem..."
                  rows={4}
                  disabled={loading}
                  required
                />
              </div>
              
              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfDwJMrAAAAAPLHUh1HAuvHjxRv6JcdPUPb1W87"
                  theme="light"
                  size="normal"
                  hl="pt-BR"
                />
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