import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5534999122128?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20da%20Delpra%20Pr%C3%A9-Moldados."
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.55)] ring-1 ring-white/50 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
