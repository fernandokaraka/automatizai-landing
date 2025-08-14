import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5511931510669";
  const message = encodeURIComponent("Olá! Quero automatizar meu atendimento no WhatsApp com IA. Podemos conversar?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton; 