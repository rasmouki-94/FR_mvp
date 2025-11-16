"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Copy } from "@/content";
import appConfig from "@/config/app";

interface NavbarProps {
  copy: Copy["nav"];
}

export function Navbar({ copy }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{appConfig.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {copy.features}
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {copy.pricing}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              {copy.login}
            </Button>
          </Link>
          <Link href="/join-waitlist">
            <Button size="sm">{copy.ctaPrimary}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
