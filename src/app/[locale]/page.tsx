import { setRequestLocale } from "next-intl/server";
import { AppShellSection, Stack } from "@mantine/core";

import { Locale } from "@/i18n/routing";

import { AdultYogaSection } from "../_components/adult-yoga";
import { ClassesSection } from "../_components/classes";
import { ContactUsSection } from "../_components/contact";
import { HeroSection } from "../_components/hero";
import { KidYogaSection } from "../_components/kid-yoga";
import PageLayout from "../_components/page-layout";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const locale = (await params).locale;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <Stack gap="xl">
        <AppShellSection component="section">
          <HeroSection />
        </AppShellSection>
        <AppShellSection component="section">
          <AdultYogaSection />
        </AppShellSection>
        <AppShellSection component="section">
          <KidYogaSection />
        </AppShellSection>
      </Stack>
    </PageLayout>
  );
}
