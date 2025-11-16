"use client";

import { getCopy } from "@/content";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const copy = getCopy("fr");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", {
        callbackUrl: searchParams?.get("callbackUrl") || "/onboarding",
      });
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Erreur lors de la connexion avec Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-16">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {copy.auth.loginTitle}
          </h1>
          <p className="text-muted-foreground">
            {copy.auth.loginSubtitle}
          </p>
        </div>

        <div className="grid gap-6">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={handleGoogleSignIn}
            className="w-full h-12"
          >
            {isLoading ? (
              <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FaGoogle className="mr-2 h-4 w-4" />
            )}
            {copy.auth.googleButton}
          </Button>
        </div>

        <p className="px-8 text-center text-sm text-muted-foreground">
          En continuant, vous acceptez nos{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Conditions d&apos;utilisation
          </a>{" "}
          et notre{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}
