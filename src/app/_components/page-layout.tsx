import "@mantine/core/styles.css";

import { ReactNode } from "react";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  rem,
} from "@mantine/core";

import { HeaderComponent } from "../_components/header";

type Props = {
  children: ReactNode;
};

export default async function PageLayout({ children }: Props) {
  return (
    <AppShell
      header={{
        height: rem(80),
      }}
      padding="md"
    >
      <AppShellHeader
        bg="white"
        style={{ borderColor: "var(--mantine-color-yoga-blue-0)" }}
      >
        <Container h="100%" size="xl">
          <HeaderComponent />
        </Container>
      </AppShellHeader>
      <AppShellMain bg="yoga-pink">
        <Container size="xl">{children}</Container>
      </AppShellMain>
    </AppShell>
  );
}
