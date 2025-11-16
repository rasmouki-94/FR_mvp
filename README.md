# FixReviews

**Transformez vos avis négatifs en clients fidèles — automatiquement.**

FixReviews est un micro-SaaS qui aide les commerces locaux à gérer et répondre intelligemment aux avis Google, avec une priorité sur les avis négatifs.

## 🚀 Fonctionnalités

- **Priorisation intelligente** : Identifie automatiquement les avis urgents
- **Réponses assistées par IA** : Suggestions de réponses personnalisées via OpenAI/Claude
- **Authentification Google OAuth** : Connexion sécurisée avec Google
- **Tableau de bord** : Suivi des KPIs et métriques de satisfaction
- **Multi-langue** : Interface en français avec support anglais
- **Paiements Stripe** : Intégration simple via Checkout Links

## 🛠️ Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui + Radix UI
- **Database** : PostgreSQL (via Drizzle ORM)
- **Authentication** : NextAuth.js (Google OAuth)
- **Forms** : React Hook Form + Zod
- **Icons** : Lucide React
- **Payment** : Stripe Checkout Links

## 📦 Installation

### Prérequis

- Node.js 20+
- pnpm (ou npm/yarn)
- PostgreSQL database

### Étapes

1. **Cloner le repo**
   ```bash
   git clone <repository-url>
   cd FR_mvp
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```

   Remplissez `.env.local` avec vos valeurs :
   - `DATABASE_URL` : Votre connexion PostgreSQL
   - `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET` : Credentials OAuth Google
   - `NEXTAUTH_SECRET` : Secret pour NextAuth (générez avec `openssl rand -base64 32`)
   - `STRIPE_CHECKOUT_*_URL` : Vos liens Stripe Checkout (optionnel pour commencer)

4. **Initialiser la base de données**
   ```bash
   pnpm drizzle-kit push
   ```

5. **Lancer le serveur de développement**
   ```bash
   pnpm dev
   ```

6. **Ouvrir l'application**

   Visitez [http://localhost:3000](http://localhost:3000)

## 📝 Personnaliser les textes et le branding

Tous les textes, CTA et métadonnées du site sont centralisés dans `src/content/i18n/`.

### Modifier le contenu français

Éditez `src/content/i18n/fr.ts` :

```typescript
export const copy: Copy = {
  hero: {
    title: "Votre nouveau titre",
    subtitle: "Votre nouveau sous-titre",
    primaryCta: "Votre CTA",
    // ...
  },
  // ...
};
```

### Ajouter/modifier une langue

1. Créez ou éditez `src/content/i18n/en.ts`
2. Changez la locale par défaut dans `.env.local` :
   ```
   NEXT_PUBLIC_DEFAULT_LOCALE=en
   ```

### Modifier les plans de pricing

Les plans sont définis dans `src/content/i18n/fr.ts` sous `pricing.plans` :

```typescript
pricing: {
  plans: [
    {
      id: "pro",
      name: "Pro",
      price: "29€",
      period: "/mois",
      ctaLabel: "Passer au Pro",
      ctaHrefEnvKey: "STRIPE_CHECKOUT_PRO_URL",
      features: ["..."],
    },
    // ...
  ],
}
```

Les liens de paiement Stripe sont configurés via les variables d'environnement.

## 🗂️ Structure du projet

```
FR_mvp/
├── src/
│   ├── app/
│   │   ├── (website-layout)/     # Pages marketing (/, /pricing, /login)
│   │   ├── (in-app)/              # Pages authentifiées (/dashboard, /onboarding)
│   │   └── api/                   # API routes
│   ├── components/
│   │   ├── marketing/             # Composants marketing (Hero, Features, etc.)
│   │   └── ui/                    # Composants UI réutilisables (shadcn/ui)
│   ├── content/
│   │   └── i18n/                  # Système de contenu multilingue
│   │       ├── fr.ts              # Contenu français
│   │       ├── en.ts              # Contenu anglais
│   │       ├── types.ts           # Types TypeScript
│   │       └── index.ts           # Sélecteur de langue
│   ├── config/
│   │   └── app.ts                 # Configuration de l'application
│   ├── db/
│   │   └── schema/                # Schémas Drizzle ORM
│   │       ├── user.ts
│   │       └── organization.ts
│   └── lib/                       # Utilitaires et helpers
├── .env.example                   # Template des variables d'environnement
└── README.md
```

## 🔐 Sécurité

- **Jamais de secrets en clair** : Tous les secrets sont dans `.env.local` (gitignored)
- **Variables d'environnement** : Utilisez `.env.example` comme template
- **OAuth sécurisé** : NextAuth.js avec Google Provider
- **CORS & CSP** : Configurés pour la production

## 🚢 Déploiement

### Vercel (recommandé)

1. Push vers GitHub
2. Connectez votre repo sur [vercel.com](https://vercel.com)
3. Configurez les variables d'environnement dans Vercel
4. Déployez !

### Autres plateformes

Compatible avec toute plateforme supportant Next.js :
- Railway
- Render
- Fly.io
- AWS / GCP / Azure

N'oubliez pas de configurer :
- Les variables d'environnement
- La base de données PostgreSQL
- Les redirects OAuth (callback URLs)

## 📄 Pages clés

- **`/`** : Landing page marketing
- **`/pricing`** : Page de tarifs avec liens Stripe
- **`/login`** : Connexion Google OAuth
- **`/onboarding`** : Configuration initiale après inscription
- **`/dashboard`** : Tableau de bord principal (authentifié)

## 🧪 Tests

```bash
# Linter
pnpm lint

# Type checking
pnpm tsc --noEmit

# Build
pnpm build
```

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [NextAuth.js](https://next-auth.js.org/)

## 📝 License

This project is licensed under the [Custom License](License.md).

---

**Développé avec ❤️ pour aider les commerces locaux à briller.**
