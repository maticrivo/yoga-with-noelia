import { setRequestLocale } from "next-intl/server";
import { AppShellSection, Divider, Stack } from "@mantine/core";

import { Locale } from "@/i18n/routing";

import { AdultYogaSection } from "../_components/adult-yoga";
import { HeroSection } from "../_components/hero";
import { KidYogaSection } from "../_components/kid-yoga";
import LotusIcon from "../_components/lotus-icon";
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
        <Divider
          label={<LotusIcon c="dimmed" fill size="md" strokeWidth={0} />}
          labelPosition="center"
          my="xl"
        />
        <AppShellSection component="section">
          <AdultYogaSection />
        </AppShellSection>
        <Divider
          label={<LotusIcon c="dimmed" fill size="md" strokeWidth={0} />}
          labelPosition="center"
          my="xl"
        />
        <AppShellSection component="section">
          <KidYogaSection />
        </AppShellSection>
      </Stack>
    </PageLayout>
  );
}
