"use client";

import { useMemo, useState } from "react";
import { Building2, Factory, House, Quote, Star } from "lucide-react";
import { MotionReveal } from "./motion-reveal";

const testimonials = [
  {
    segment: "Construtoras",
    name: "Obra Comercial | Uberaba",
    quote:
      "Recebemos Bloco 14 em volume, com padrão consistente. Menos quebra e cronograma mais previsível.",
    rating: 5,
    highlight: "Volume, padrão técnico e constância de lote",
  },
  {
    segment: "Residencial",
    name: "Obra Residencial em Sacramento",
    quote:
      'O tijolinho "Pó de Mico" ficou excelente no bloco à vista. Atendimento transparente, do pedido à entrega.',
    rating: 5,
    highlight: "Acabamento rústico e orientação na aplicação",
  },
  {
    segment: "Industrial",
    name: "Empreendimento em Uberaba",
    quote:
      "Com laudo MPA e conformidade ABNT, conseguimos aprovar a especificação com mais segurança técnica.",
    rating: 5,
    highlight: "Credibilidade técnica para especificação",
  },
  {
    segment: "Construtoras",
    name: "Obra de Galpão | Uberlândia",
    quote:
      "A equipe segurou o prazo, com entrega alinhada. Para obra comercial, essa previsibilidade faz toda a diferença.",
    rating: 5,
    highlight: "Estoque robusto de Bloco 14",
  },
];

const filters = [
  { label: "Construtoras", icon: Building2 },
  { label: "Residencial", icon: House },
  { label: "Industrial", icon: Factory },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-brand-accent">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          className={index < rating ? "fill-current" : "text-concrete-300"}
        />
      ))}
    </div>
  );
}

export function SocialProof() {
  const [activeFilter, setActiveFilter] = useState(filters[0].label);
  const [selectedName, setSelectedName] = useState(testimonials[0].name);

  const filteredTestimonials = useMemo(
    () => testimonials.filter((item) => item.segment === activeFilter),
    [activeFilter],
  );

  const selectedTestimonial =
    filteredTestimonials.find((item) => item.name === selectedName) ??
    filteredTestimonials[0];

  const changeFilter = (nextFilter: string) => {
    setActiveFilter(nextFilter);
    const firstFromFilter = testimonials.find((item) => item.segment === nextFilter);
    if (firstFromFilter) setSelectedName(firstFromFilter.name);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <MotionReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Provas sociais</p>
            <h2 className="mt-2 text-2xl font-semibold text-concrete-700 sm:text-3xl">
              Resultados reais em diferentes perfis de obra e cidade.
            </h2>
          </div>
          <p className="max-w-md text-sm text-concrete-700/80">
            Depoimentos da nova fase da Delpra, com foco em transparência, padrão técnico e entrega previsível.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.05} className="mt-7 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = filter.label === activeFilter;
            return (
              <button
                key={filter.label}
                type="button"
                onClick={() => changeFilter(filter.label)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-brand-primary bg-brand-primary text-white shadow-[0_10px_25px_rgba(62,88,162,0.26)]"
                    : "border-concrete-300/80 bg-white/80 text-concrete-700 hover:border-brand-primary/40 hover:text-brand-primary"
                }`}
              >
                <Icon size={16} />
                {filter.label}
              </button>
            );
          })}
        </MotionReveal>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="premium-card p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <Quote size={28} className="text-brand-primary/70" />
              <Stars rating={selectedTestimonial.rating} />
            </div>
            <p className="mt-4 text-lg leading-relaxed text-concrete-700/95 sm:text-xl">
              &ldquo;{selectedTestimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="rounded-full border border-brand-primary/25 bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                {selectedTestimonial.segment}
              </p>
              <p className="text-sm font-semibold text-concrete-700">
                {selectedTestimonial.name}
              </p>
            </div>
            <p className="mt-3 text-sm text-concrete-700/80">
              Ponto forte: {selectedTestimonial.highlight}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08} className="premium-card p-4 sm:p-5">
            <p className="px-2 text-xs uppercase tracking-[0.2em] text-concrete-700/70">
              Mais opiniões
            </p>
            <div className="mt-3 space-y-2">
              {filteredTestimonials.map((testimonial) => {
                const isSelected = testimonial.name === selectedTestimonial.name;
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setSelectedName(testimonial.name)}
                    className={`w-full rounded-xl border p-3 text-left transition ${
                      isSelected
                        ? "border-brand-primary/60 bg-brand-primary/10"
                        : "border-concrete-300/80 bg-white/80 hover:border-brand-primary/40"
                    }`}
                  >
                    <p className="text-sm font-semibold text-concrete-700">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-concrete-700/75">
                      {testimonial.quote}
                    </p>
                  </button>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
