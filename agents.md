# AGENTS.md

## Purpose
This file defines **how AI or human agents must operate in this repository**. It ensures consistency, security, and production-readiness.

## Project Summary
**Fishing Catches App**: auth-protected web app for anglers to upload and manage fishing catches.

Core capabilities:
- User authentication (registration, login, password recovery, profile)
- Upload fishing catches with metadata and photos
- Authenticated user-only access to personal data
- Production deployment on free tier

## Tech Stack
- **Frontend:** Next.js (App Router, TypeScript, Tailwind CSS)
- **Backend:** Node.js, Next.js Server Actions/API Routes, Prisma, PostgreSQL (Supabase)
- **Auth:** Supabase Auth (email/password, optional magic link)
- **Storage:** Supabase Storage (images)
- **Deployment:** Vercel, GitHub CI/CD

## Repo Structure
```
app/
components/
lib/
prisma/
public/
styles/
tests/
.env.example
.next.config.js
tailwind.config.ts
tsconfig.json
package.json
AGENTS.md
.gitignore
```

## Coding Standards
- TypeScript strict mode, no `any` unless justified
- Functional React components, server components by default
- Tailwind utilities, minimal inline styles

## Auth & Security
- All user-specific data validated server-side
- Passwords managed by Supabase only
- Recovery codes: hashed, single-use, regeneratable
- No hardcoded secrets, secure cookies, HTTPS only

## Data Handling
- Prisma is the only DB access layer
- Migrations committed, no raw SQL unless necessary
- No logging sensitive data

## File Uploads
- Authenticated, secure flows
- Public URLs read-only
- Client-side file size validation

## Feature Flags
- Environment-based flags
- Default OFF for unfinished features
- Remove after stabilization

## Logging & Observability
- Error tracking (Sentry or equivalent)
- Structured server-side logging
- No secrets in logs

## Agent Rules
- Follow this file strictly
- Identify impacted layers before coding
- Write clean, minimal code
- Ask before guessing architecture
- Do not bypass auth or security rules

## Definition of Done
- Compiles without errors
- Linting and tests pass
- Auth & security respected
- Deployable to production

