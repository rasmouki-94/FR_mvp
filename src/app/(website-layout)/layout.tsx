import { appConfig } from "@/lib/config";
import { getCopy } from "@/content";
import { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getCopy("fr");

  return {
    title: {
      template: "%s | " + appConfig.projectName,
      default: copy.meta.title,
    },
    description: copy.meta.description,
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      url: process.env.NEXT_PUBLIC_APP_URL,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og.png`,
          width: 1200,
          height: 630,
          alt: copy.meta.ogImageAlt || appConfig.projectName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
      images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og.png`],
    },
  };
}

function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const copy = getCopy("fr");

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar copy={copy.nav} />
      <main className="flex-1">
        {children}
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}

export default WebsiteLayout;
