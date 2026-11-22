import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import {
  ColorSchemeScript,
  createTheme,
  DirectionProvider,
  MantineProvider,
} from "@mantine/core";
import { getLangDir } from "rtl-detect";

import { Locale, routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const Alta = localFont({
  src: [
    {
      path: "../../public/Alta_regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/Alta_light.woff2",
      style: "normal",
      weight: "200",
    },
  ],
});

const Dorian = localFont({
  src: [
    {
      path: "../../public/DorianCLM.woff2",
      style: "normal",
      weight: "400",
    },
  ],
});

const openSans = Open_Sans({
  subsets: ["hebrew", "latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = (await params).locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  // get language direction
  const direction = getLangDir(locale);

  return (
    <html
      data-mantine-color-scheme="light"
      dir={direction}
      lang={locale}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <ColorSchemeScript />
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider initialDirection={direction}>
            <MantineProvider
              defaultColorScheme="light"
              theme={createTheme({
                colors: {
                  "yoga-sand": [
                    "#fdfbf7",
                    "#f8f3ea",
                    "#f0e7d9",
                    "#e7dbc8",
                    "#ddceb6",
                    "#d3c0a4",
                    "#c8b292",
                    "#bda380",
                    "#b2956e",
                    "#a7865c",
                  ],
                  "yoga-sage": [
                    "#f2f7f3",
                    "#e3efe6",
                    "#c6decc",
                    "#a6cbb1",
                    "#8aba98",
                    "#76ac87",
                    "#68a37b",
                    "#578f6b",
                    "#497e5d",
                    "#376b4c",
                  ],
                  "yoga-clay": [
                    "#fcf3ef",
                    "#f8e4db",
                    "#f0c9b8",
                    "#e8ac92",
                    "#e19272",
                    "#dc7e58",
                    "#da7048",
                    "#c15f37",
                    "#ac532d",
                    "#974424",
                  ],
                  "yoga-ink": [
                    "#f4f6f5",
                    "#e6eae8",
                    "#cbd3cf",
                    "#afbbb5",
                    "#96a59e",
                    "#81938a",
                    "#71847b",
                    "#5c6f66",
                    "#4a5b53",
                    "#2f4038",
                  ],
                },
                headings: {
                  fontFamily:
                    locale === "he"
                      ? Dorian.style.fontFamily
                      : Alta.style.fontFamily,
                  fontWeight: "normal",
                },
                fontFamily: openSans.style.fontFamily,
                primaryColor: "yoga-sage",
                primaryShade: { dark: 6, light: 8 },
                defaultRadius: "lg",
                components: {
                  Button: {
                    defaultProps: {
                      fw: "normal",
                      radius: "xl",
                    },
                  },
                  Divider: {
                    defaultProps: {
                      color: "var(--mantine-color-yoga-sand-3)",
                      size: "xs",
                    },
                  },
                  Text: {
                    defaultProps: {
                      c: "yoga-ink.8",
                      fw: "normal",
                    },
                  },
                  Title: {
                    defaultProps: {
                      c: "yoga-ink.9",
                    },
                  },
                },
              })}
            >
              {children}
            </MantineProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
