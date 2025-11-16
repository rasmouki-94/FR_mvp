"use client";

import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Copy } from "@/content";

interface HowItWorksProps {
  copy: Copy["howItWorks"];
}

export function HowItWorks({ copy }: HowItWorksProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {copy.steps.map((step, index) => {
            const IconComponent = (Icons as any)[step.icon] || Icons.Circle;
            return (
              <div key={index} className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10 hidden lg:block">
                  {index < copy.steps.length - 1 && (
                    <div className="h-0.5 w-48 bg-border translate-x-8" />
                  )}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg">{copy.cta}</Button>
        </div>
      </div>
    </section>
  );
}
