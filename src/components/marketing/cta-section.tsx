"use client";

import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryCta,
  primaryHref = "/join-waitlist",
  secondaryCta,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg opacity-90 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <a href={primaryHref}>{primaryCta}</a>
            </Button>
            {secondaryCta && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <a href={secondaryHref}>{secondaryCta}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
