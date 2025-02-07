import { ReactNode } from "react";
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Alta = localFont({
  src: [
    {
      path: "../../public/Alta_regular.woff2",
      style: "normal",
      weight: "normal",
    },
    {
      path: "../../public/Alta_light.woff2",
      style: "normal",
      weight: "300",
    },
  ],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

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
      style={{ backgroundColor: "#ffffff", scrollBehavior: "smooth" }}
    >
      <head>
        <ColorSchemeScript />
      </head>

      <body style={{ backgroundColor: "#bfa6ab" }}>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider initialDirection={direction}>
            <MantineProvider
              defaultColorScheme="light"
              theme={createTheme({
                headings: {
                  fontFamily: "Alta",
                  fontWeight: "normal",
                },
                components: {
                  Button: {
                    defaultProps: {
                      c: "#002441",
                      fw: "normal",
                    },
                  },
                  Divider: {
                    defaultProps: {
                      color: "#002441",
                      size: "xs",
                    },
                  },
                  Text: {
                    defaultProps: {
                      c: "#002441",
                      fw: "lighter",
                    },
                  },
                  Title: {
                    defaultProps: {
                      c: "#002441",
                    },
                  },
                  Input: {
                    styles: {
                      input: {
                        color: "#002441",
                        fontWeight: "lighter",
                      },
                    },
                  },
                  InputWrapper: {
                    styles: {
                      label: {
                        color: "#002441",
                        fontWeight: "lighter",
                      },
                      required: {
                        color: "#002441",
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
