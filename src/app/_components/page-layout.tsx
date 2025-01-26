import "@mantine/core/styles.css";

import { ReactNode } from "react";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Container,
  rem,
} from "@mantine/core";

import { FooterComponent } from "../_components/footer";
import { HeaderComponent } from "../_components/header";

type Props = {
  children: ReactNode;
};

export default async function PageLayout({ children }: Props) {
  return (
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
  );
}
