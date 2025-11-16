"use client";

import type { Copy } from "@/content";

interface MetricsProps {
  copy: Copy["metrics"];
}

export function Metrics({ copy }: MetricsProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {copy.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2 lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm opacity-90 lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
