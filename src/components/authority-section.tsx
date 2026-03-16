import { CircleCheckBig, CirclePlay } from "lucide-react";
import { MotionReveal } from "./motion-reveal";

const authorityPoints = [
  "Nova fase sob a gestão de Gabriella Montanher, com transparência de ponta a ponta.",
  "Qualidade com laudo MPA e conformidade ABNT para segurança estrutural real.",
  "Compromisso com prazo e organização para evitar o barato que sai caro na obra.",
];

export function AuthoritySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <MotionReveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Nova gestão Delpra</p>
          <h2 className="mt-3 text-3xl font-semibold text-concrete-700 sm:text-4xl">
            Gestão técnica, comunicação clara e entrega previsível para cada etapa da obra.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-concrete-700/85 sm:text-lg">
            A nova fase da Delpra, sob liderança de Gabriella Montanher, aproxima a fábrica do canteiro com educação do cliente, acompanhamento contínuo e decisões rápidas.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.08} className="mx-auto mt-8 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-concrete-300/80 bg-gradient-to-br from-brand-navy via-brand-primary to-brand-navy p-6 text-white shadow-[0_24px_60px_rgba(12,40,79,0.28)] sm:p-10">
            <div className="absolute -top-16 -right-14 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <div className="relative flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/20 p-6 text-center sm:min-h-[340px]">
              <button
                type="button"
                className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/15 transition hover:scale-105 hover:bg-white/25"
                aria-label="Reproduzir vídeo de apresentação"
              >
                <CirclePlay size={38} />
              </button>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/80">
                Vídeo de apresentação
              </p>
              <p className="mt-2 text-xl font-semibold sm:text-2xl">
                Conheça a nova Delpra em 90 segundos
              </p>
              <p className="mt-3 text-sm text-white/80">
                Área preparada para embed de YouTube, Vimeo ou vídeo institucional.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} className="mx-auto mt-8 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {authorityPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-start justify-center gap-2 text-center"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <CircleCheckBig size={18} className="mt-1 shrink-0 text-brand-primary" />
                <p className="text-sm leading-relaxed text-concrete-700/90">{point}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
