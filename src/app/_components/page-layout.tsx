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
      // footer={{
      //   height: rem(40),
      // }}
      header={{
        height: rem(80),
      }}
      id="adult-yoga"
      padding="md"
    >
      <AppShellHeader bg="white" style={{ borderBottomColor: "#002441" }}>
        <Container h="100%" size="xl">
          <HeaderComponent />
        </Container>
      </AppShellHeader>
      <AppShellMain bg="#bfa6ab">
        <Container size="xl">{children}</Container>
      </AppShellMain>
      {/* <AppShellFooter>
        <Container h="100%" size="xl">
          <FooterComponent />
        </Container>
      </AppShellFooter> */}
    </AppShell>
  );
}
