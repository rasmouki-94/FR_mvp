"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Copy } from "@/content";
import appConfig from "@/config/app";

interface PricingTableProps {
  copy: Copy["pricing"];
}

export function PricingTable({ copy }: PricingTableProps) {
  const getCheckoutUrl = (envKey?: string): string | undefined => {
    if (!envKey) return undefined;

    // Try both NEXT_PUBLIC_ and regular env vars
    const publicEnvKey = `NEXT_PUBLIC_${envKey}`;
    return (
      (typeof window !== "undefined" ? (window as any)[publicEnvKey] : undefined) ||
      appConfig.integrations.stripe.checkoutProUrl ||
      appConfig.integrations.stripe.checkoutPremiumUrl
    );
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {copy.plans.map((plan) => {
            const checkoutUrl = plan.ctaHrefEnvKey
              ? getCheckoutUrl(plan.ctaHrefEnvKey)
              : undefined;

            return (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-lg border bg-card p-8 ${
                  plan.id === "pro" ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.badge && (
                  <Badge className="absolute top-4 right-4">
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {checkoutUrl ? (
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.id === "pro" ? "default" : "outline"}
                  >
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                      {plan.ctaLabel}
                    </a>
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    variant={plan.id === "pro" ? "default" : "outline"}
                  >
                    {plan.ctaLabel}
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {copy.legalNote && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {copy.legalNote}
          </p>
        )}
      </div>
    </section>
  );
}
