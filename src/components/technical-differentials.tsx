import {
  BadgeCheck,
  FileCheck2,
  Truck,
  WalletCards,
} from "lucide-react";
import { MotionReveal } from "./motion-reveal";

const differentials = [
  {
    title: "Traço exclusivo e padrão técnico",
    description: "Mais resistência, menos areia e padrão visual superior para obras exigentes.",
    icon: BadgeCheck,
  },
  {
    title: "Laudo MPA e conformidade ABNT",
    description: "Controle técnico comprovado para separar sua obra do risco de materiais sem procedência.",
    icon: FileCheck2,
  },
  {
    title: "Redução de custo indireto na obra",
    description: "Menos reboco, menos quebras e mais agilidade para manter o cronograma.",
    icon: WalletCards,
  },
  {
    title: "Logística otimizada no cinturão regional",
    description: "Prazo reduzido de frete no eixo Delta-Sacramento-Conceição, com atendimento em Uberaba e região.",
    icon: Truck,
  },
];

export function TechnicalDifferentials() {
  return (
    <section className="bg-gradient-to-b from-concrete-100/70 to-transparent py-16 sm:py-20">
      <div className="section-shell">
        <MotionReveal>
          <p className="section-kicker">Tecnologia e eficiência</p>
          <h2 className="mt-2 text-2xl font-semibold text-concrete-700 sm:text-3xl">
            Diferenciais técnicos para construtores e obras residenciais
          </h2>
        </MotionReveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionReveal
                key={item.title}
                delay={index * 0.09}
                className="group relative pl-12"
              >
                <span className="absolute top-1 left-0 h-8 w-8 text-brand-primary">
                  <Icon size={28} />
                </span>
                <h3 className="text-lg font-semibold text-concrete-700 transition group-hover:text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-700/85">
                  {item.description}
                </p>
                <div className="mt-3 h-px w-20 bg-gradient-to-r from-brand-primary to-transparent transition group-hover:w-40" />
                <div className="pointer-events-none absolute -top-1 -left-1 h-10 w-10 rounded-full bg-brand-primary/10 opacity-0 blur-xl transition group-hover:opacity-100" />
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
