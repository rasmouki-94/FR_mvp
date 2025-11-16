"use client";

import { getCopy } from "@/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const onboardingSchema = z.object({
  companyName: z.string().min(1, "Le nom de l'entreprise est requis"),
  industry: z.string().min(1, "Le secteur d'activité est requis"),
  googleBusinessProfileUrl: z
    .string()
    .url("Veuillez entrer une URL valide")
    .min(1, "L'URL de votre fiche Google est requise"),
  timezone: z.string().min(1, "Le fuseau horaire est requis"),
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

const INDUSTRIES = [
  "Restaurant",
  "Salon de coiffure",
  "Garage automobile",
  "Hôtel",
  "Commerce de détail",
  "Pharmacie",
  "Médical / Santé",
  "Services professionnels",
  "Autre",
];

const TIMEZONES = [
  "Europe/Paris",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Madrid",
  "Europe/Rome",
  "America/New_York",
  "America/Los_Angeles",
  "Asia/Tokyo",
];

export default function OnboardingPage() {
  const copy = getCopy("fr");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      timezone: "Europe/Paris",
    },
  });

  const onSubmit = async (data: OnboardingFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'enregistrement");
      }

      toast.success("Configuration enregistrée avec succès!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-16">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {copy.onboarding.title}
          </h1>
          <p className="text-muted-foreground">
            {copy.onboarding.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">
              {copy.onboarding.fields.company}
            </Label>
            <Input
              id="companyName"
              placeholder="Mon Restaurant"
              {...register("companyName")}
              disabled={isLoading}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">
              {copy.onboarding.fields.industry}
            </Label>
            <Select
              onValueChange={(value) => setValue("industry", value)}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre secteur" />
              </SelectTrigger>
              <SelectContent>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-destructive">
                {errors.industry.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="googleBusinessProfileUrl">
              {copy.onboarding.fields.gmbUrl}
            </Label>
            <Input
              id="googleBusinessProfileUrl"
              type="url"
              placeholder="https://www.google.com/maps/place/..."
              {...register("googleBusinessProfileUrl")}
              disabled={isLoading}
            />
            {errors.googleBusinessProfileUrl && (
              <p className="text-sm text-destructive">
                {errors.googleBusinessProfileUrl.message}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Vous trouverez cette URL en visitant votre fiche Google Business
              Profile
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">
              {copy.onboarding.fields.timezone}
            </Label>
            <Select
              onValueChange={(value) => setValue("timezone", value)}
              defaultValue="Europe/Paris"
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz} value={tz}>
                    {tz}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.timezone && (
              <p className="text-sm text-destructive">
                {errors.timezone.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Enregistrement..." : copy.onboarding.fields.submit}
          </Button>
        </form>
      </div>
    </div>
  );
}
