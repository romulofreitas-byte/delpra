"use client";

import { MessageCircle, Send } from "lucide-react";
import type { FormEvent } from "react";

const contactEmail = "contato@delpra.com.br";
const whatsappLink =
  "https://wa.me/5534999122128?text=Ol%C3%A1%2C%20quero%20um%20atendimento%20da%20Delpra%20Pr%C3%A9-Moldados.";

export function ContactFormSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") ?? "").trim();
    const telefone = String(formData.get("telefone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    const subject = encodeURIComponent(`Novo contato do site - ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\n\nMensagem enviada pelo formulário do site.`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-brand-accent py-14 text-brand-navy sm:py-16"
    >
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand-navy/20 blur-3xl" />

      <div className="section-shell relative grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/80">Contato direto</p>
          <h2 className="text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Fale com a Delpra e receba retorno rápido
          </h2>
          <p className="max-w-md text-sm text-brand-navy/85 sm:text-base">
            Deixe seus dados para atendimento comercial ou clique no WhatsApp para ação imediata.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white/35 px-4 py-2 text-xs font-medium sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-navy" />
            Resposta em até 15 minutos em horário comercial
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/50 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition hover:-translate-y-0.5 hover:brightness-110 sm:w-fit"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp agora
          </a>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white p-6 text-foreground shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="mb-5 space-y-1">
            <h3 className="text-xl font-semibold text-brand-navy">Formulário de contato</h3>
            <p className="text-sm text-concrete-700/80">Preencha e clique em enviar para abrir seu e-mail com tudo pronto.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-concrete-700">
              Nome
              <input
                name="nome"
                required
                type="text"
                autoComplete="name"
                placeholder="Seu nome completo"
                className="rounded-xl border border-concrete-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-concrete-700">
              Telefone
              <input
                name="telefone"
                required
                type="tel"
                autoComplete="tel"
                placeholder="(34) 99999-9999"
                className="rounded-xl border border-concrete-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-concrete-700 sm:col-span-2">
              E-mail
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="voce@empresa.com.br"
                className="rounded-xl border border-concrete-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:w-fit"
              >
                Enviar contato
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
