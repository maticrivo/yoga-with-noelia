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
      padding="md"
    >
      <AppShellHeader>
        <Container h="100%" size="lg">
          <HeaderComponent />
        </Container>
      </AppShellHeader>
      <AppShellMain>
        <Container size="lg">{children}</Container>
      </AppShellMain>
      {/* <AppShellFooter>
        <Container h="100%" size="lg">
          <FooterComponent />
        </Container>
      </AppShellFooter> */}
    </AppShell>
  );
}
