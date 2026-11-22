import "@mantine/core/styles.css";
import "../globals.css";

import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Container,
  rem,
  Text,
} from "@mantine/core";

import { HeaderComponent } from "../_components/header";

type Props = {
  children: ReactNode;
};

export default async function PageLayout({ children }: Props) {
  const t = await getTranslations("Footer");

  return (
    <AppShell
      header={{
        height: rem(80),
      }}
      padding="md"
    >
      <AppShellHeader
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(253, 251, 247, 0.92)",
          borderColor: "var(--mantine-color-yoga-sand-2)",
        }}
      >
        <Container h="100%" size="xl">
          <HeaderComponent />
        </Container>
      </AppShellHeader>
      <AppShellMain bg="yoga-sand.0">
        <Container size="xl">{children}</Container>
        <Box
          component="footer"
          mt="xl"
          py="xl"
          style={{ borderTop: "1px solid var(--mantine-color-yoga-sand-2)" }}
        >
          <Container size="xl">
            <Text c="yoga-ink.7" size="xs" ta="center">
              {t("copyright")}
            </Text>
          </Container>
        </Box>
      </AppShellMain>
    </AppShell>
  );
}
