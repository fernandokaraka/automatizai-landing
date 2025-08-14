import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 md:px-8 lg:px-10 py-32 max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-6">Última atualização: 14/08/2025</p>

        <p className="mb-4">Sua privacidade é importante para nós. Esta Política descreve como coletamos, usamos e protegemos seus dados ao utilizar o site Automatizaí e nossos serviços de automação via WhatsApp.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">1. Quem somos</h2>
        <p className="mb-4">Automatizaí é um produto da Marketaí. Para dúvidas sobre privacidade, contate <a href="mailto:contato@marketai.com.br" className="underline">contato@marketai.com.br</a>.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">2. Dados que coletamos</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Dados de contato (nome, e-mail, telefone, empresa) enviados no formulário.</li>
          <li>Dados de uso do site (cookies e analytics) para melhorar a experiência.</li>
          <li>Dados operacionais necessários à prestação do serviço (por exemplo, mensagens e metadados processados pela WhatsApp Cloud API e integrações como Google Agenda, Docs e Sheets).</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">3. Como usamos os dados</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Responder a solicitações e prestar suporte.</li>
          <li>Configurar e operar os agentes de IA.</li>
          <li>Melhorar o produto e comunicar novidades (você pode optar por não receber).</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">4. Base legal</h2>
        <p className="mb-4">Tratamos dados com base no consentimento e no legítimo interesse, conforme a LGPD.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">5. Compartilhamento</h2>
        <p className="mb-4">Podemos compartilhar dados com provedores essenciais para o funcionamento (ex.: OpenAI/Gemini, WhatsApp Cloud API e Google), sempre sob contratos e segurança adequados.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">6. Segurança</h2>
        <p className="mb-4">Adotamos medidas técnicas e organizacionais para proteger seus dados. Nenhum método é 100% infalível, mas buscamos as melhores práticas de mercado.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">7. Seus direitos</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Acessar, corrigir ou excluir dados pessoais.</li>
          <li>Revogar consentimento a qualquer momento.</li>
          <li>Portabilidade e informação sobre compartilhamentos.</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">8. Cookies</h2>
        <p className="mb-4">Utilizamos cookies para funcionalidades e métricas. Você pode gerenciá-los no seu navegador.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">9. Retenção</h2>
        <p className="mb-4">Mantemos dados pelo tempo necessário para a finalidade ou conforme obrigações legais.</p>

        <h2 className="font-heading text-2xl font-semibold mt-8 mb-3">10. Contato</h2>
        <p>Para exercer direitos ou esclarecer dúvidas, escreva para <a href="mailto:contato@marketai.com.br" className="underline">contato@marketai.com.br</a>.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;


