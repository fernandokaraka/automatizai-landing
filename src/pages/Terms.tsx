import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-28 max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground mb-6">Última atualização: 14/08/2025</p>

        <p className="mb-4">Estes Termos regulam o uso do site e dos serviços Automatizaí, produto da Marketaí. Ao utilizar nossa plataforma, você concorda com estes Termos.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">1. Serviços</h2>
        <p className="mb-4">Oferecemos automação de atendimento via WhatsApp com integração a terceiros (Google, OpenAI/Gemini, WhatsApp Cloud API, n8n). Funcionalidades podem mudar a qualquer momento para melhoria contínua.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">2. Cadastro e contato</h2>
        <p className="mb-4">Ao enviar o formulário, você declara que as informações são verdadeiras e autoriza nosso contato.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">3. Uso adequado</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>É proibido usar o serviço para spam, fraude ou conteúdo ilegal.</li>
          <li>Você é responsável por cumprir as políticas da WhatsApp Cloud API e dos provedores integrados.</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">4. Planos e cobranças</h2>
        <p className="mb-4">Valores, limites e taxas adicionais (ex.: transcrição de áudio) estão descritos na seção de preços. Podemos atualizar preços mediante aviso prévio.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">5. Propriedade intelectual</h2>
        <p className="mb-4">Automatizaí, marca, conteúdos e softwares relacionados são propriedade da Marketaí ou licenciados. Não é permitido copiar ou redistribuir sem autorização.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">6. Limitação de responsabilidade</h2>
        <p className="mb-4">Fornecemos o serviço "como está". Não nos responsabilizamos por indisponibilidades de terceiros ou danos indiretos decorrentes do uso do serviço.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">7. Privacidade</h2>
        <p className="mb-4">O uso do serviço também é regido pela nossa <a href="/politica-de-privacidade" className="underline">Política de Privacidade</a>.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">8. Encerramento</h2>
        <p className="mb-4">Podemos suspender o acesso por violação destes Termos ou por uso que comprometa a operação do serviço.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">9. Contato</h2>
        <p>Para dúvidas sobre estes Termos, escreva para <a href="mailto:contato@marketai.com.br" className="underline">contato@marketai.com.br</a>.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;


