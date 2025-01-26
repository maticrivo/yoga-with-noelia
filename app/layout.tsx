import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  createTheme,
  MantineProvider,
  rem,
} from "@mantine/core";

import { FooterComponent } from "./_components/footer";
import { HeaderComponent } from "./_components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Yoga with Noelia",
  description: "Descubre la paz interior con nuestras clases de yoga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-mantine-color-scheme="light" lang="es">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
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
          <AppShell
            footer={{
              height: rem(40),
            }}
            header={{
              height: rem(80),
            }}
            padding="md"
          >
            <AppShellHeader bg="var(--mantine-primary-color-1)">
              <Container fluid h="100%">
                <HeaderComponent />
              </Container>
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter bg="var(--mantine-primary-color-1)">
              <Container fluid h="100%">
                <FooterComponent />
              </Container>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
