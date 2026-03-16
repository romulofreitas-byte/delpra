import { AuthoritySection } from "@/components/authority-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ContactFooter } from "@/components/contact-footer";
import { Hero } from "@/components/hero";
import { ProductsGrid } from "@/components/products-grid";
import { RegionsPresence } from "@/components/regions-presence";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { TechnicalDifferentials } from "@/components/technical-differentials";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <AuthoritySection />
        <ProductsGrid />
        <RegionsPresence />
        <TechnicalDifferentials />
        <SocialProof />
        <ContactFormSection />
      </main>
      <ContactFooter />
      <WhatsAppFloat />
      <div className="section-shell py-8">
        <section className="px-2 py-3 text-center text-xs text-concrete-700/70">
          Palavras-chave: blocos laudados Uberaba, tijolinho rústico Uberlândia,
          cercamento pré-moldado Rifaina, pré-moldados para chácaras Ponte Alta.
        </section>
      </div>
    </div>
  );
}
