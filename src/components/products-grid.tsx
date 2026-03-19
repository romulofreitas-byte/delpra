"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Package, Sparkles } from "lucide-react";
import Image from "next/image";
import { MotionReveal } from "./motion-reveal";

type Product = {
  name: string;
  use: string;
  description: string;
  applications: string[];
  points: string[];
  gradient: string;
  image?: string;
};

const products: Product[] = [
  {
    name: "Blocos e Canaletas",
    use: "Estrutura e vedação",
    description:
      "Blocos e canaletas de concreto são a base de uma construção segura e bem estruturada, com resistência, durabilidade e agilidade na obra.",
    applications: ["Alvenaria estrutural", "Vedação", "Fundação ao acabamento"],
    points: ["Resistência", "Agilidade na obra", "Peças confiáveis"],
    gradient: "from-[#4265bb] via-[#2f4e9e] to-[#122d5f]",
    image: "blocos.jpeg",
  },
  {
    name: "Bloco Curvo",
    use: "Projetos especiais",
    description: "Solução diferenciada da Delpra para paredes curvas e detalhes arquitetônicos com acabamento uniforme.",
    applications: ["Muros curvos", "Jardins e paisagismo", "Fachadas autorais"],
    points: ["Diferencial Delpra", "Encaixe preciso", "Estética valorizada"],
    gradient: "from-[#4568bf] via-[#34539d] to-[#112b58]",
    image: "Bloco Curvo.jpeg",
  },
  {
    name: "Pavers (Intertravado)",
    use: "Pavimentação externa",
    description:
      "Pavers de concreto (piso intertravado) são peças pré-moldadas de alta resistência para pavimentação, com travamento que distribui cargas e entrega alta durabilidade.",
    applications: ["Calçadas e passeios", "Garagens e estacionamentos", "Praças e áreas públicas"],
    points: ["Alta resistência", "Fácil manutenção", "Boa drenagem"],
    gradient: "from-[#3e63b7] via-[#315292] to-[#102953]",
    image: "intertravados.jpeg",
  },
  {
    name: "Placas e Postes",
    use: "Fechamento de terrenos e muros",
    description:
      "As placas pré-moldadas são uma solução moderna, resistente e econômica para fechamento de terrenos e muros, com instalação rápida, obra limpa e excelente acabamento.",
    applications: ["Fechamento de terrenos", "Muros", "Obras rápidas e padronizadas"],
    points: ["Rapidez na obra", "Durabilidade", "Ótimo custo-benefício"],
    gradient: "from-[#315baf] via-[#2f4b8c] to-[#0f2349]",
    image: "Placas.jpeg",
  },
  {
    name: "Lajes",
    use: "Pisos e coberturas",
    description:
      "Lajes treliçadas pré-moldadas unem rapidez, economia e alto desempenho estrutural, com vigotas treliçadas e concretagem de capa para formar uma laje monolítica.",
    applications: ["Casas e sobrados", "Edifícios residenciais", "Garagens e varandas"],
    points: ["Alta resistência", "Execução rápida", "Menos desperdício"],
    gradient: "from-[#4a74ca] via-[#3a4f9b] to-[#1c2f65]",
    image: "Lajes.jpeg",
  },
  {
    name: "Alambrados",
    use: "Cercamento",
    description:
      "Cercamentos com postes e estrutura pré-moldada para dividir áreas com segurança, montagem ágil e baixa manutenção em ambientes urbanos, rurais e industriais.",
    applications: ["Chácaras", "Indústrias", "Divisão de terrenos"],
    points: ["Montagem ágil", "Baixa manutenção", "Segurança"],
    gradient: "from-[#4062b1] via-[#304d8f] to-[#122b59]",
    image: "Postes e Alambrados.jpeg",
  },
  {
    name: "Tijolo Aparente",
    use: "Acabamento aparente",
    description: "Muro em tijolo aparente de concreto – mais resistência, mais durabilidade e menos manutenção.",
    applications: ["Fachadas", "Muros", "Detalhes decorativos"],
    points: ["Visual aparente", "Resistência", "Baixa manutenção"],
    gradient: "from-[#4368bd] via-[#304f95] to-[#142f61]",
    image: "Tijolinho.jpeg",
  },
];

export function ProductsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const scrollToCard = (index: number) => {
    const el = typeof document !== "undefined" ? document.getElementById(`catalog-tab-${index}`) : null;
    if (el && "scrollIntoView" in el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <MotionReveal className="mb-8">
          <p className="section-kicker">Catálogo Delpra</p>
          <h2 className="mt-2 text-2xl font-semibold text-concrete-700 sm:text-3xl">
            Vitrine interativa de pré-moldados para obras de alta exigência
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-concrete-700/80 sm:text-base">
            Explore soluções para construtoras, obras comerciais e projetos residenciais, com foco em desempenho,
            volume e acabamento.
          </p>
        </MotionReveal>

        <div className="space-y-4">
          <MotionReveal className="catalog-nav-shell rounded-[1.75rem] border border-concrete-300/70 bg-white/90 p-2 shadow-[0_18px_44px_rgba(36,57,105,0.1)] backdrop-blur">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-concrete-300/80 bg-white text-[0.75rem] font-semibold text-concrete-700 shadow-sm transition hover:bg-concrete-100/80 sm:h-9 sm:w-9"
                onClick={() => {
                  setActiveIndex((prev) => {
                    const nextIndex = prev === 0 ? products.length - 1 : prev - 1;
                    scrollToCard(nextIndex);
                    return nextIndex;
                  });
                }}
                aria-label="Ver produto anterior"
              >
                ‹
              </button>
              <div
                className="catalog-nav-row no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 py-1 sm:gap-2.5 lg:flex-wrap lg:justify-center lg:gap-3 lg:overflow-visible lg:snap-none"
                role="tablist"
                aria-label="Selecione um produto do catálogo Delpra"
              >
              {products.map((product, index) => {
                const active = index === activeIndex;

                return (
                  <motion.button
                    key={product.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    role="tab"
                    aria-selected={active}
                    aria-controls="catalog-highlight-panel"
                    id={`catalog-tab-${index}`}
                    tabIndex={active ? 0 : -1}
                    className={`relative h-full min-w-[10.8rem] shrink-0 snap-start rounded-2xl border px-3 py-2.5 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-w-[11.6rem] sm:px-4 lg:min-w-0 lg:basis-[calc(33.333%-0.75rem)] lg:max-w-[15rem] ${
                      active
                        ? "border-brand-primary/55 bg-gradient-to-br from-brand-primary to-[#28458f] text-white shadow-[0_12px_24px_rgba(42,73,148,0.3)]"
                        : "border-concrete-300/80 bg-white text-concrete-700 hover:-translate-y-0.5 hover:border-brand-primary/40"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {active ? (
                      <motion.span
                        layoutId="catalog-active-ring"
                        className="pointer-events-none absolute inset-0 rounded-2xl border border-white/35"
                      />
                    ) : null}
                    <h3 className={`text-[0.98rem] font-semibold leading-tight ${active ? "text-white" : "text-concrete-700"}`}>
                      {product.name}
                    </h3>
                    <p
                      className={`mt-1 text-[0.54rem] font-semibold uppercase tracking-[0.16em] ${
                        active ? "text-white/75" : "text-brand-primary/75"
                      }`}
                    >
                      {product.use}
                    </p>
                  </motion.button>
                );
              })}
              </div>
              <button
                type="button"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-concrete-300/80 bg-white text-[0.75rem] font-semibold text-concrete-700 shadow-sm transition hover:bg-concrete-100/80 sm:h-9 sm:w-9"
                onClick={() => {
                  setActiveIndex((prev) => {
                    const nextIndex = prev === products.length - 1 ? 0 : prev + 1;
                    scrollToCard(nextIndex);
                    return nextIndex;
                  });
                }}
                aria-label="Ver próximo produto"
              >
                ›
              </button>
            </div>
          </MotionReveal>

          <p className="mt-1 text-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-concrete-700/70 sm:hidden">
            Arraste os cards para o lado ou use as setas para ver todos os produtos
          </p>

          <MotionReveal delay={0.05}>
            <div
              className="catalog-stage relative overflow-hidden rounded-[1.9rem] border border-concrete-300/70 bg-white/95 p-3 shadow-[0_20px_52px_rgba(29,49,94,0.12)] sm:p-4"
              role="tabpanel"
              id="catalog-highlight-panel"
              aria-labelledby={`catalog-tab-${activeIndex}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(255,255,255,0.68),transparent_34%)]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.name}
                  initial={{ opacity: 0, y: 16, scale: 0.988 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.99 }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="relative grid gap-3 lg:grid-cols-[1.08fr_0.92fr]"
                >
                  <div className={`catalog-surface relative min-h-64 overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${activeProduct.gradient} text-white sm:min-h-[23rem]`}>
                    <div className="catalog-shine absolute -right-16 -top-16 h-44 w-44 rounded-full" />
                    <div className="catalog-shine absolute -bottom-20 left-6 h-44 w-44 rounded-full opacity-60" />
                    {activeProduct.image ? (
                      <>
                        <Image
                          src={`/produtos/${activeProduct.image}`}
                          alt={activeProduct.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 52vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051126]/82 via-[#0c2148]/35 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.24),transparent_38%)]" />
                    )}

                    <div className="absolute inset-x-4 top-4 z-10 flex flex-wrap items-center justify-between gap-3 sm:inset-x-6">
                      <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/95">
                        <Sparkles size={12} />
                        Seleção Delpra
                      </p>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/85">
                        {activeProduct.use}
                      </p>
                    </div>

                    {!activeProduct.image ? (
                      <div className="absolute bottom-6 left-6 z-10 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                          <Package size={16} />
                          Produto sem foto no catálogo
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-[1.6rem] border border-concrete-300/70 bg-white/96 p-5 sm:p-6">
                    <h3 className="text-2xl font-semibold text-concrete-700 sm:text-[2rem]">{activeProduct.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-concrete-700/80 sm:text-base">{activeProduct.description}</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {activeProduct.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-xl border border-concrete-300 bg-brand-primary/[0.05] px-3 py-2 text-center text-xs font-semibold text-concrete-700/90"
                        >
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {activeProduct.applications.map((application) => (
                        <span
                          key={application}
                          className="rounded-full border border-concrete-300/90 bg-concrete-100/70 px-3 py-1 text-xs font-medium text-concrete-700/95"
                        >
                          {application}
                        </span>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/5534999122128?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20da%20Delpra%20Pr%C3%A9-Moldados."
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:translate-x-1 hover:bg-brand-primary/15"
                    >
                      <MessageCircle size={16} />
                      Solicitar orçamento pelo WhatsApp
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
