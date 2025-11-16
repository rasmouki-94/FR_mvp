# Indie Kit

Indie Kit is a NextJS Boilerplate for building SaaS products.

## Features

- NextJS 15
- NextAuth.js with Google OAuth
- Drizzle ORM with PostgreSQL
- Tailwind CSS + Shadcn UI
- Stripe, DodoPay, and PayPal integration
- Email authentication (magic links)
- Background jobs with Inngest
- AWS S3 storage

## Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd FR_mvp
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then configure the required environment variables:

#### Required for Google OAuth:

1. **NEXTAUTH_SECRET**: Generate with `openssl rand -base64 32`
2. **NEXTAUTH_URL**: Set to `http://localhost:3000` for development
3. **NEXT_PUBLIC_SIGNIN_ENABLED**: Set to `"true"` to enable sign-in
4. **DATABASE_URL**: Your PostgreSQL connection string
5. **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET**: See [Google OAuth Setup](#google-oauth-setup) below

### 4. Set up the database

Generate and run Drizzle migrations:

```bash
# Generate migrations from your schema
pnpm drizzle-kit generate

# Apply migrations to your database
pnpm drizzle-kit migrate
```

Alternatively, you can push the schema directly (useful for development):

```bash
pnpm drizzle-kit push
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google OAuth Setup

To enable Google authentication, you need to create OAuth credentials:

### 1. Go to Google Cloud Console

Visit [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

### 2. Create a new project (or select an existing one)

1. Click on the project dropdown at the top
2. Click "New Project"
3. Give it a name and click "Create"

### 3. Enable Google+ API

1. Go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click "Enable"

### 4. Create OAuth 2.0 Credentials

1. Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client ID"
2. Configure the OAuth consent screen if prompted:
   - User Type: External
   - App name: Your app name
   - User support email: Your email
   - Developer contact information: Your email
3. Application type: **Web application**
4. Name: "My App" (or any name you prefer)
5. **Authorized JavaScript origins**:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Click "Create"

### 5. Copy credentials to .env

After creating the credentials, you'll see your:
- **Client ID** → Copy to `GOOGLE_CLIENT_ID` in `.env`
- **Client Secret** → Copy to `GOOGLE_CLIENT_SECRET` in `.env`

### 6. Test the authentication

1. Start your dev server: `pnpm dev`
2. Navigate to [http://localhost:3000/sign-in](http://localhost:3000/sign-in)
3. Click "Continue with Google"
4. Sign in with your Google account
5. You should be redirected to `/app` (dashboard)

## Authentication Features

This boilerplate includes multiple authentication methods:

- **Google OAuth**: One-click sign-in with Google
- **Email Magic Links**: Passwordless authentication via email
- **Password Authentication**: Traditional email/password (disabled by default)

To enable password authentication, set `enablePasswordAuth: true` in `src/lib/config.ts`.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages (sign-in, sign-up)
│   ├── (in-app)/          # Protected app pages
│   └── api/               # API routes
├── components/            # React components
│   ├── auth/             # Authentication components
│   └── ui/               # Shadcn UI components
├── db/                   # Database configuration
│   └── schema/           # Drizzle schema definitions
├── lib/                  # Utility functions and configurations
└── auth.ts               # NextAuth configuration
```

## Documentation

For detailed documentation, visit [https://indiekit.pro/app/docs](https://indiekit.pro/app/docs)

## Quick Start

Check out our ["Launch in 5 Minutes" tutorial](https://indiekit.pro/app/docs/tutorials/launch-in-5-minutes) to get started quickly.

## Community

Join our [Discord community](https://indiekit.pro/app) to connect with other developers and get help.

## License

This project is licensed under the [Custom License](License.md).
