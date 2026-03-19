"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Truck, Timer, Waves } from "lucide-react";
import { MotionReveal } from "./motion-reveal";

type Region = {
  name: string;
  profile: string;
  distance: string;
  leadTime: string;
  focus: string[];
};

const regions: Region[] = [
  {
    name: "Uberaba (base)",
    profile: "Polo principal de produção e logística da Delpra.",
    distance: "0-15 km",
    leadTime: "Entrega prioritária",
    focus: ["Bloco 14", "Pavers", "Canaletas"],
  },
  {
    name: "Uberlândia",
    profile: "Atendimento recorrente para obras residenciais e comerciais.",
    distance: "95-120 km",
    leadTime: "Janela programada",
    focus: ["Bloco 14", "Tijolo Aparente", "Pavers"],
  },
  {
    name: "Delta e Sacramento",
    profile: "Rota estratégica para abastecimento contínuo de obra.",
    distance: "35-75 km",
    leadTime: "Fluxo semanal",
    focus: ["Bloco 14", "Placas e Postes", "Canaletas"],
  },
  {
    name: "Conceição das Alagoas",
    profile: "Suporte técnico para obras de médio e grande porte.",
    distance: "60-90 km",
    leadTime: "Rota otimizada",
    focus: ["Bloco 14", "Pavers", "Placas e Postes"],
  },
  {
    name: "Rifaina e Ponte Alta",
    profile: "Demanda forte em cercamento pré-moldado para áreas rurais.",
    distance: "80-140 km",
    leadTime: "Expedição sob agenda",
    focus: ["Placas e Postes", "Tijolo Aparente", "Bloco Curvo"],
  },
];

export function RegionsPresence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRegion = regions[activeIndex];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#122f5e] to-brand-primary" />
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="section-shell relative">
        <MotionReveal className="text-center sm:text-left">
          <p className="section-kicker !text-white/80">Regiões de atuação Delpra</p>
          <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
            Cobertura regional com logística inteligente para manter o ritmo da sua obra
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
            Selecione uma região e veja o perfil de atendimento, a janela de entrega e os produtos
            mais demandados.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.06} className="mt-8 flex flex-wrap gap-3">
          {regions.map((region, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={region.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-white/70 bg-white text-brand-navy shadow-[0_12px_28px_rgba(255,255,255,0.25)]"
                    : "border-white/30 bg-white/10 text-white hover:bg-white/18"
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            key={activeRegion.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                  <MapPin size={13} />
                  Região selecionada
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{activeRegion.name}</h3>
              </div>
              <span className="rounded-full border border-brand-accent/50 bg-brand-accent/15 px-3 py-1 text-xs font-semibold text-brand-accent">
                Operação ativa
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {activeRegion.profile}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/25 bg-black/15 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/75">
                  <Truck size={13} />
                  Distância média
                </p>
                <p className="mt-2 text-lg font-semibold">{activeRegion.distance}</p>
              </div>
              <div className="rounded-xl border border-white/25 bg-black/15 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/75">
                  <Timer size={13} />
                  Ritmo de entrega
                </p>
                <p className="mt-2 text-lg font-semibold">{activeRegion.leadTime}</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.14em] text-white/70">Foco de fornecimento</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeRegion.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/75">
                <Waves size={14} />
                Cobertura em expansão
              </p>
              <p className="mt-3 text-xl font-semibold">Atendimento contínuo no cinturão regional</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                A operação combina estoque, roteirização e confirmação prévia para reduzir atrasos e retrabalho
                na obra.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-white/75">Regiões atendidas</p>
              <p className="mt-2 text-3xl font-semibold">+7 cidades</p>
              <p className="mt-2 text-sm text-white/80">
                Uberaba, Uberlândia, Delta, Sacramento, Conceição das Alagoas, Rifaina e Ponte Alta.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
