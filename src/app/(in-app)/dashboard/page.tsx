import { getCopy } from "@/content";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquareWarning,
  Star,
  TrendingUp,
  BarChart3,
  AlertCircle
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const copy = getCopy("fr");

  // TODO: Replace with real data from database
  const stats = {
    reviewsThisWeek: 0,
    negativeReviewsUntreated: 0,
    averageRating: 0,
  };

  const isEmpty = stats.reviewsThisWeek === 0;

  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {copy.dashboard.title}
        </h1>
        <p className="text-muted-foreground">
          Bonjour {session.user.name || session.user.email}
        </p>
      </div>

      {isEmpty ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {copy.dashboard.emptyState.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {copy.dashboard.emptyState.description}
            </p>
            <Button>{copy.dashboard.emptyState.cta}</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* KPIs */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {copy.dashboard.kpis[0].label}
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.reviewsThisWeek}</div>
                {copy.dashboard.kpis[0].help && (
                  <p className="text-xs text-muted-foreground">
                    {copy.dashboard.kpis[0].help}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {copy.dashboard.kpis[1].label}
                </CardTitle>
                <MessageSquareWarning className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.negativeReviewsUntreated}
                </div>
                {copy.dashboard.kpis[1].help && (
                  <p className="text-xs text-muted-foreground">
                    {copy.dashboard.kpis[1].help}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {copy.dashboard.kpis[2].label}
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.averageRating > 0
                    ? `${stats.averageRating.toFixed(1)} ★`
                    : "—"}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder sections */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avis à traiter en priorité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Les avis négatifs récents apparaîtront ici.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Évolution de la note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Graphique de l&apos;évolution de votre note moyenne sur 30 jours.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Réponses suggérées</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Les suggestions d&apos;IA pour vos avis récents apparaîtront ici.
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
