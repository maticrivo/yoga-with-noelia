import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["es", "he"],

  // Used when no locale matches
  defaultLocale: "es",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { getPathname, Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
