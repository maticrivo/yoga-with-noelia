import "@mantine/core/styles.css";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {
  ColorSchemeScript,
  createTheme,
  DirectionProvider,
  MantineProvider,
} from "@mantine/core";
import { getLangDir } from "rtl-detect";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  // get language direction
  const direction = getLangDir(locale);

  return (
    <html data-mantine-color-scheme="light" dir={direction} lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider initialDirection={direction}>
            <MantineProvider
              defaultColorScheme="light"
              theme={createTheme({
                primaryColor: "grape",
                fontFamily: inter.style.fontFamily,
                headings: {
                  fontFamily: inter.style.fontFamily,
                  fontWeight: "lighter",
                },
                components: {
                  Button: {
                    defaultProps: {
                      fw: "normal",
                    },
                  },
                  Text: {
                    defaultProps: {
                      fw: "lighter",
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
