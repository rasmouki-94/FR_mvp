"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Copy } from "@/content";

interface HeroProps {
  copy: Copy["hero"];
}

export function Hero({ copy }: HeroProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          {copy.eyebrow && (
            <Badge variant="secondary" className="px-4 py-1.5">
              {copy.eyebrow}
            </Badge>
          )}

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>

          <p className="text-lg text-muted-foreground sm:text-xl lg:text-2xl max-w-3xl">
            {copy.subtitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base">
              {copy.primaryCta}
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              {copy.secondaryCta}
            </Button>
          </div>

          {copy.logosNote && (
            <p className="text-sm text-muted-foreground mt-8">
              {copy.logosNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
