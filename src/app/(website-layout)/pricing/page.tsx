import { getCopy } from "@/content";
import { PricingTable } from "@/components/marketing/pricing-table";
import { FAQ } from "@/components/marketing/faq";
import { CTASection } from "@/components/marketing/cta-section";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getCopy("fr");

  return {
    title: "Tarifs",
    description: copy.pricing.subtitle,
  };
}

export default function PricingPage() {
  const copy = getCopy("fr");

  return (
    <>
      <div className="py-12">
        <PricingTable copy={copy.pricing} />
      </div>

      <FAQ copy={copy.faq} />

      <CTASection
        title="Commencez gratuitement dès aujourd'hui"
        description="Aucune carte bancaire requise. Passez au plan Pro quand vous êtes prêt."
        primaryCta="Essayer gratuitement"
        primaryHref="/join-waitlist"
      />
    </>
  );
}
