import { getCopy } from "@/content";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Metrics } from "@/components/marketing/metrics";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Testimonials } from "@/components/marketing/testimonials";
import { FAQ } from "@/components/marketing/faq";
import { CTASection } from "@/components/marketing/cta-section";

export default function WebsiteHomepage() {
  const copy = getCopy("fr");

  return (
    <>
      <Hero copy={copy.hero} />

      <div id="features">
        <Features copy={copy.features} />
      </div>

      <HowItWorks copy={copy.howItWorks} />

      <Metrics copy={copy.metrics} />

      <Testimonials copy={copy.testimonials} />

      <PricingTable copy={copy.pricing} />

      <FAQ copy={copy.faq} />

      <CTASection
        title="Prêt à transformer vos avis négatifs ?"
        description="Rejoignez les centaines de commerces qui automatisent leurs réponses aux avis."
        primaryCta="Rejoindre la waitlist"
        primaryHref="/join-waitlist"
        secondaryCta="Voir une démo"
        secondaryHref="/contact"
      />
    </>
  );
}
