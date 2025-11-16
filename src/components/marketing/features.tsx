"use client";

import * as Icons from "lucide-react";
import type { Copy } from "@/content";

interface FeaturesProps {
  copy: Copy["features"];
}

export function Features({ copy }: FeaturesProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.Star;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
