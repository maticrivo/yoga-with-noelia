# AGENTS.md - Contributing Guidelines

## Project Overview

Next.js 15 static website with React 19, TypeScript, Mantine v8 UI components, and next-intl for i18n (Spanish `es`, Hebrew `he`). Deployed to GitHub Pages.

**Runtime:** Node.js 22 (see `.nvmrc`)

## Commands

```bash
npm run dev        # Start dev server (turbopack)
npm run build      # Production build (static export to ./out)
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Run Prettier on all files
```

There are **no tests** in this project. No test framework is installed.

## Project Structure

```
src/
  app/
    [locale]/        # i18n dynamic route (es, he)
      layout.tsx     # Root locale layout (Mantine, fonts, theme)
      page.tsx       # Homepage
    _components/     # Shared components (kebab-case filenames)
    layout.tsx       # Root layout (passthrough)
    page.tsx         # Root redirect to default locale
  i18n/
    routing.ts       # next-intl routing config, Link, useRouter exports
    request.ts       # next-intl request config
messages/
  es.json            # Spanish translations
  he.json            # Hebrew translations
```

## Code Style

### Formatting

Managed by Prettier with `@ianvs/prettier-plugin-sort-imports`.

- 2-space indentation (tabs not used)
- LF line endings
- Trim trailing whitespace
- Final newline in all files
- Run `npm run format` to auto-fix

### Import Order

Auto-sorted by the Prettier plugin. The order is:

1. CSS imports (`*.css`)
2. `react`
3. `next` and `next/*`
4. `next-intl` and `next-intl/*`
5. Node built-ins
6. `@mantine/*`
7. `@mantinex/*`
8. `@tabler/*`
9. Third-party modules
10. `@/*` (project aliases)
11. Relative imports (non-CSS)
12. Relative CSS imports

### Components

- **Component files:** kebab-case (`class-card.tsx`, `page-layout.tsx`)
- **Named exports** for reusable components: `export function HeaderComponent()`
- **Default exports** for page/layout files: `export default function Page()`
- **Client components:** add `"use client"` directive at the top of the file
- Props types defined inline with `type Props = { ... }` or as `interface` when extending Mantine props

### TypeScript

- `strict: false` in `tsconfig.json` — be mindful of type safety
- Path alias `@/*` maps to `./src/*`
- Use `type` for props definitions; `interface` only when extending (e.g., `extends PaperProps`)
- Generic/inline prop types for Next.js pages: `{ params: Promise<{ locale: Locale }> }`

### Naming

- Variables/functions: `camelCase`
- Components: `PascalCase`
- Files: `kebab-case.tsx`
- Translation keys: dot-notation namespaces (`"Header.links.adult"`)
- Mantine theme colors: `yoga-blue`, `yoga-pink`

### i18n

- **Always** import `Link`, `redirect`, `useRouter`, `usePathname` from `@/i18n/routing` — never from `next/link` or `next/navigation` (enforced by ESLint `no-restricted-imports`)
- Use `useTranslations("Namespace")` for client components
- Use `getTranslations()` from `next-intl/server` for server components/layouts
- Call `setRequestLocale(locale)` in every server page/layout for static rendering
- Locale type: `Locale` from `@/i18n/routing`

### Mantine

- Mantine v8 components — import from `@mantine/core`, `@mantine/hooks`, `@mantine/form`
- Icons from `@tabler/icons-react`
- CSS imports: `@mantine/core/styles.css` (in layout)
- PostCSS preset: `postcss-preset-mantine` for CSS modules
- Theme customization lives in `[locale]/layout.tsx`

### Error Handling

- Validate locale with `routing.locales.includes(locale)` and call `notFound()` if invalid
- No explicit try/catch pattern in components — rely on Next.js error boundaries

## ESLint Rules

Key enforced rules (see `eslint.config.mjs`):

- `prettier/prettier`: error — all formatting violations are errors
- `sort-destructure-keys/sort-destructure-keys`: error — destructure keys must be sorted alphabetically
- `react/jsx-sort-props`: error — JSX props sorted alphabetically, callbacks last, reserved props first
- `no-restricted-imports`: error — block `next/link` and `next/navigation` (use `@/i18n/routing`)
- `@typescript-eslint/no-unused-vars`: warn

## Git Workflow

- Pre-commit hook via Husky runs `lint-staged` which formats staged `*.{ts,tsx,js,jsx,css,md}` files with Prettier
- CI deploys from `main` branch to GitHub Pages via `.github/workflows/nextjs.yml`
- No Cursor rules or Copilot instructions exist in this repo
