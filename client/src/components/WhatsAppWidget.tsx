import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phoneNumber = "27640344575"; // WhatsApp format without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Cornelia,%20I%20would%20like%20to%20discuss%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-all duration-300 hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
