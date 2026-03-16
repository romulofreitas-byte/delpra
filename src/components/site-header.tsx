import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 text-white backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="inline-flex items-center">
          <Image
            src="/Logo%20Delpra%20transparente%201.png"
            alt="Logo Delpra Pré-Moldados"
            width={128}
            height={36}
            className="h-auto w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-5 text-xs text-white/85 sm:flex">
          <span className="inline-flex items-center gap-1.5 text-white/75">
            <MapPin size={14} />
            Uberaba e região
          </span>
          <a
            href="https://wa.me/5534999122128"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-semibold text-white transition hover:bg-white/15"
          >
            <Phone size={14} />
            +55 34 99912-2128
          </a>
        </div>
      </div>
    </header>
  );
}
