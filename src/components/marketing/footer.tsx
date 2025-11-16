"use client";

import Link from "next/link";
import type { Copy } from "@/content";
import appConfig from "@/config/app";

interface FooterProps {
  copy: Copy["footer"];
}

export function Footer({ copy }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copy.copyright.replace("{{year}}", currentYear.toString());

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>
          </div>

          <nav className="flex items-center gap-6">
            {copy.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
