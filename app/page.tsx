import { AppShellSection } from "@mantine/core";

import { ClassesSection } from "./_components/classes";
import { ContactUsSection } from "./_components/contact";
import { HeroSection } from "./_components/hero";

export default function HomePage() {
  return (
    <>
      <AppShellSection>
        <HeroSection />
      </AppShellSection>
      <AppShellSection>
        <ClassesSection />
      </AppShellSection>
      <AppShellSection>
        <ContactUsSection />
      </AppShellSection>
    </>
  );
}
