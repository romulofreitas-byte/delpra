import Image from "next/image";

export function ContactFooter() {
  return (
    <footer className="bg-brand-navy py-10 text-white">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Image
            src="/Logo%20Delpra%20transparente%201.png"
            alt="Delpra Pré-Moldados"
            width={150}
            height={42}
            className="mb-4 h-auto w-auto"
          />
          <h2 className="text-xl font-semibold sm:text-2xl">Contato Delpra</h2>
          <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            Rua Clara Alves de Mello, 461, Laranjeiras I, Uberaba - MG.
          </p>
          <p className="mt-2 max-w-xl text-sm text-white/75 sm:text-base">
            Atendimento em Uberaba e região.
          </p>
          <p className="mt-3 text-sm text-white/90 sm:text-base">
            WhatsApp:{" "}
            <a
              href="https://wa.me/5534999122128"
              className="font-semibold text-brand-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              +55 34 99912-2128
            </a>
          </p>
          <p className="mt-4 text-xs text-white/60 sm:text-sm">
            Delpra Pré-Moldados. Traço exclusivo, laudo MPA e conformidade ABNT para quem busca engenharia com
            transparência.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/20 shadow-[0_12px_26px_rgba(0,0,0,0.25)]">
          <iframe
            title="Mapa Delpra Pré-Moldados"
            src="https://www.google.com/maps?q=Rua+Clara+Alves+de+Mello,+461,+Uberaba,+MG&output=embed"
            className="h-[200px] w-full sm:h-[220px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
}
