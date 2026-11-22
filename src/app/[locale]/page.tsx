import { setRequestLocale } from "next-intl/server";
import { AppShellSection, Divider, Stack } from "@mantine/core";

import { Locale } from "@/i18n/routing";

import { AboutSection } from "../_components/about";
import { AdultYogaSection } from "../_components/adult-yoga";
import { ContactUsSection } from "../_components/contact";
import { HeroSection } from "../_components/hero";
import { KidYogaSection } from "../_components/kid-yoga";
import LotusIcon from "../_components/lotus-icon";
import PageLayout from "../_components/page-layout";
import { PrinciplesSection } from "../_components/principles";
import { QuoteSection } from "../_components/quote";
import { SeminariosSection } from "../_components/seminarios";

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
        <HeroSection />
        <PrinciplesSection />
        <QuoteSection />
        <Divider
          label={<LotusIcon c="yoga-sage.6" fill size="md" strokeWidth={1} />}
          labelPosition="center"
          my="md"
        />
        <AppShellSection component="section" id="adult-yoga">
          <AdultYogaSection />
        </AppShellSection>
        <Divider
          label={<LotusIcon c="yoga-sage.6" fill size="md" strokeWidth={1} />}
          labelPosition="center"
          my="md"
        />
        <AppShellSection component="section" id="kid-yoga">
          <KidYogaSection />
        </AppShellSection>
        <Divider
          label={<LotusIcon c="yoga-sage.6" fill size="md" strokeWidth={1} />}
          labelPosition="center"
          my="md"
        />
        <AppShellSection component="section" id="seminars">
          <SeminariosSection />
        </AppShellSection>
        <Divider
          label={<LotusIcon c="yoga-sage.6" fill size="md" strokeWidth={1} />}
          labelPosition="center"
          my="md"
        />
        <AppShellSection component="section" id="about">
          <AboutSection />
        </AppShellSection>
        <Divider
          label={<LotusIcon c="yoga-sage.6" fill size="md" strokeWidth={1} />}
          labelPosition="center"
          my="md"
        />
        <AppShellSection component="section" id="contact">
          <ContactUsSection />
        </AppShellSection>
      </Stack>
    </PageLayout>
  );
}
