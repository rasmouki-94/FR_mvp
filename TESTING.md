# Testing Google Authentication

This document describes how to manually test the Google OAuth authentication flow.

## Prerequisites

Before testing, ensure you have:

1. ✅ Created Google OAuth credentials (see README.md)
2. ✅ Configured `.env` file with:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SIGNIN_ENABLED=true`
3. ✅ Set up database and run migrations
4. ✅ Started development server (`pnpm dev`)

## Test Scenarios

### Test 1: Sign In with Google

**Steps:**
1. Open browser and navigate to `http://localhost:3000/sign-in`
2. Click the "Continue with Google" button
3. Select a Google account or sign in
4. Grant permissions if prompted

**Expected Results:**
- ✅ User is redirected to Google sign-in page
- ✅ After successful authentication, user is redirected to `/app` (dashboard)
- ✅ User sees their profile information in the dashboard
- ✅ User record is created in the database (`app_user` table)
- ✅ Account record is created in the database (`account` table with `provider='google'`)

### Test 2: Session Persistence

**Steps:**
1. After signing in (Test 1), close the browser tab
2. Open a new tab and navigate to `http://localhost:3000/app`

**Expected Results:**
- ✅ User remains signed in (no redirect to sign-in page)
- ✅ Dashboard loads with user information

### Test 3: Sign Out

**Steps:**
1. While signed in, navigate to `http://localhost:3000/sign-out`
2. Click the sign-out button (if applicable)
3. Try to access `http://localhost:3000/app`

**Expected Results:**
- ✅ User is signed out successfully
- ✅ Accessing protected routes redirects to `/sign-in`
- ✅ Session is cleared from cookies

### Test 4: Direct Access to Protected Route (Unauthenticated)

**Steps:**
1. Ensure you're signed out
2. Navigate directly to `http://localhost:3000/app`

**Expected Results:**
- ✅ User is redirected to `/sign-in`
- ✅ After signing in, user is redirected back to `/app`

### Test 5: Multiple Sign-ins (Same Google Account)

**Steps:**
1. Sign in with Google account A
2. Sign out
3. Sign in again with the same Google account A

**Expected Results:**
- ✅ Sign-in works without errors
- ✅ Same user record is used (no duplicate users created)
- ✅ User sees their existing data/profile

### Test 6: Account Linking

**Steps:**
1. Sign in with Google using email `test@example.com`
2. Sign out
3. Request a magic link for the same email `test@example.com`
4. Sign in via the magic link

**Expected Results:**
- ✅ Both authentication methods work for the same user
- ✅ User has one account record for Google and optionally one for email
- ✅ Same user record is shared (configured via `allowDangerousEmailAccountLinking: true`)

## Database Verification

After testing, verify the database contains:

### Check Users Table

```sql
SELECT id, email, name, "emailVerified", "createdAt"
FROM app_user
ORDER BY "createdAt" DESC
LIMIT 5;
```

**Expected:**
- User record exists with email from Google account
- `emailVerified` is set to the timestamp of first sign-in

### Check Accounts Table

```sql
SELECT "userId", type, provider, "providerAccountId"
FROM account
WHERE provider = 'google'
ORDER BY "userId" DESC
LIMIT 5;
```

**Expected:**
- Account record exists with `provider='google'`
- `providerAccountId` matches the Google user ID
- `type='oauth'`

### Check Sessions Table (if using database sessions)

Note: This project uses JWT sessions by default, so the sessions table may be empty.

```sql
SELECT "sessionToken", "userId", expires
FROM session
ORDER BY expires DESC
LIMIT 5;
```

## Common Issues and Troubleshooting

### Issue: "Configuration error" when clicking Google button

**Cause:** Missing or incorrect environment variables

**Solution:**
- Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set in `.env`
- Ensure `NEXTAUTH_URL` is set to `http://localhost:3000`
- Restart the dev server after changing `.env`

### Issue: Redirect URI mismatch error

**Cause:** The redirect URI in Google Console doesn't match the actual callback URL

**Solution:**
- Ensure `http://localhost:3000/api/auth/callback/google` is added to "Authorized redirect URIs" in Google Console
- Check for typos or extra spaces
- Make sure the protocol is `http` (not `https`) for localhost

### Issue: "Access blocked: This app's request is invalid"

**Cause:** OAuth consent screen not configured or missing scopes

**Solution:**
- Complete the OAuth consent screen configuration in Google Console
- Ensure your app is in "Testing" mode and your test users are added
- Or publish the app for production use

### Issue: User is not redirected after sign-in

**Cause:** Callback URL configuration issue or NextAuth misconfiguration

**Solution:**
- Check browser console for errors
- Verify `NEXTAUTH_URL` matches your current URL
- Ensure `NEXT_PUBLIC_SIGNIN_ENABLED=true` in `.env`

### Issue: Database connection errors

**Cause:** Invalid `DATABASE_URL` or database not running

**Solution:**
- Verify your PostgreSQL database is running
- Check `DATABASE_URL` format: `postgresql://user:password@host:port/database`
- Ensure migrations have been run: `pnpm drizzle-kit push`

## Success Criteria

All tests pass when:

- ✅ Users can sign in with Google without errors
- ✅ Sessions persist across browser tabs
- ✅ Users can sign out successfully
- ✅ Protected routes are inaccessible when not authenticated
- ✅ Database records are created correctly
- ✅ No console errors during the authentication flow

## Automated Testing (Future)

Consider adding E2E tests using:
- Playwright or Cypress for UI testing
- Mock Google OAuth for CI/CD environments
- Test database fixtures for consistent testing
