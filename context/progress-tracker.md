# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 03 — Auth (complete)

## Current Goal

- Feature 04 — TBD

## Completed

- **01-design-system**: shadcn/ui initialized (base-nova, Tailwind v4), components/ui installed (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, lib/utils.ts with cn(), globals.css updated with project dark theme tokens mapped to shadcn variables and Tailwind @theme utilities.
- **02-editor-chrome**: `components/editor/editor-navbar.tsx` (fixed navbar, sidebar toggle, PanelLeftOpen/Close icons, dark bg + bottom border), `components/editor/project-sidebar.tsx` (floating overlay, slides from left, isOpen/onClose props, Projects header + close button, My Projects/Shared tabs with empty states, full-width New Project button). Zero TypeScript and lint errors.
- **03-auth**: `proxy.ts` (clerkMiddleware with createRouteMatcher, protects all routes except /sign-in and /sign-up), `app/layout.tsx` (ClerkProvider with @clerk/ui dark theme, CSS variable appearance overrides), `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` (two-panel layout on large screens, form-only on small), `app/page.tsx` (server-side redirect to /editor or /sign-in based on auth), `app/editor/page.tsx` (placeholder editor page with navbar + sidebar), `UserButton` added to editor navbar right section. @clerk/ui installed. npm run build passes.

## In Progress

- None.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- shadcn/ui base-nova style selected; Tailwind v4 configuration via @theme inline in globals.css (no tailwind.config.js).
- Project dark theme is the only theme; all shadcn CSS variables in :root are set to dark values directly — no .dark class toggle required.
- Custom Tailwind tokens (bg-base, bg-surface, text-copy-primary, etc.) are defined in @theme inline and resolve via CSS custom properties in :root.
- In Next.js 16, middleware.ts is renamed proxy.ts — Clerk's clerkMiddleware is exported as `proxy` from proxy.ts.
- Clerk appearance uses `theme` (not `baseTheme`) in Clerk 7 with @clerk/ui themes.

## Session Notes

- Add context needed to resume work in the next session.
