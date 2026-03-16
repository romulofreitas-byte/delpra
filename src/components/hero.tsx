import { ArrowRight } from "lucide-react";
import { MotionReveal } from "./motion-reveal";

const qualityPhrases = [
  "Traço Exclusivo",
  "Laudo MPA",
  "Conformidade ABNT",
  "Confiança Real",
  "Acabamento Premium",
  "Logística Ágil",
  "Durabilidade Superior",
  "Entrega no Prazo",
  "Atendimento Especializado",
  "Estruturas Sob Medida",
  "Qualidade Comprovada",
  "Soluções em Pré-Moldados",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/capa%20delpra3.png')",
      }}
    >
      <div className="section-shell relative flex flex-1 items-center py-8 sm:py-10">
        <MotionReveal className="space-y-6">
          <h1 className="max-w-[22ch] text-2xl font-semibold leading-[1.15] text-balance sm:text-3xl lg:text-5xl">
            Pré-moldados laudados para quem exige engenharia, não improviso.
          </h1>
          <h2 className="max-w-2xl text-base font-medium leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            Traço exclusivo (mais resistência, menos areia),
            <br />
            laudo MPA e conformidade ABNT para Uberaba e região.
          </h2>
          <a
            href="https://wa.me/5534999122128?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20da%20Delpra%20Pr%C3%A9-Moldados."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-navy shadow-[0_10px_25px_rgba(243,164,29,0.35)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Solicitar orçamento no WhatsApp
            <ArrowRight size={16} />
          </a>
        </MotionReveal>
      </div>
      <div className="marquee-shell border-t border-white/20 bg-brand-navy/35">
        <div className="marquee-track">
          {[...qualityPhrases, ...qualityPhrases, ...qualityPhrases].map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="marquee-item">
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
