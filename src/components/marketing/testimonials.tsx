"use client";

import { Quote } from "lucide-react";
import type { Copy } from "@/content";

interface TestimonialsProps {
  copy: Copy["testimonials"];
}

export function Testimonials({ copy }: TestimonialsProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {copy.items.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-lg border bg-background p-8"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/20" />
              <p className="text-lg mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
