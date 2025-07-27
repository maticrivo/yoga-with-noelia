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
  };
}

// const resolver: CSSVariablesResolver = (theme) => ({
//   variables: {
//     "--mantine-color-text": theme.colors["yoga-blue"][0],
//   },
//   light: {
//     "--mantine-color-text": theme.colors["yoga-blue"][0],
//   },
//   dark: {
//     "--mantine-color-text": theme.colors["yoga-pink"][0],
//   },
// });

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
      <head>
        <ColorSchemeScript />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider initialDirection={direction}>
            <MantineProvider
              // cssVariablesResolver={resolver}
              defaultColorScheme="light"
              theme={createTheme({
                colors: {
                  "yoga-blue": [
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                    "#002441",
                  ],
                  "yoga-pink": [
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
                    "#bfa6ab",
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
                primaryColor: "yoga-blue",
                components: {
                  Button: {
                    defaultProps: {
                      c: "primary",
                      color: "primary",
                      fw: "normal",
                    },
                  },
                  Divider: {
                    defaultProps: {
                      color: "var(--mantine-primary-color-filled)",
                      size: "xs",
                    },
                  },
                  Text: {
                    defaultProps: {
                      c: "yoga-blue",
                      fw: "lighter",
                    },
                  },
                  Title: {
                    defaultProps: {
                      c: "yoga-blue",
                    },
                  },
                  Input: {
                    styles: {
                      input: {
                        color: "var(--mantine-color-yoga-blue-text)",
                        fontWeight: "lighter",
                      },
                    },
                  },
                  InputWrapper: {
                    styles: {
                      label: {
                        color: "var(--mantine-color-yoga-blue-text)",
                        fontWeight: "lighter",
                      },
                      required: {
                        color: "var(--mantine-color-yoga-blue-text)",
                      },
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
