import { setRequestLocale } from "next-intl/server";
import { AppShellSection, Divider, Stack } from "@mantine/core";

import { Locale } from "@/i18n/routing";

import { AboutSection } from "../_components/about";
import { AdultYogaSection } from "../_components/adult-yoga";
import { ContactUsSection } from "../_components/contact";
import { KidYogaSection } from "../_components/kid-yoga";
import LotusIcon from "../_components/lotus-icon";
import PageLayout from "../_components/page-layout";
import { SeminariosSection } from "../_components/seminarios";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const locale = (await params).locale;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <span id="adult-yoga" />
      <PageLayout>
        <Stack gap="xl">
          <AppShellSection component="section">
            <AdultYogaSection />
          </AppShellSection>
          <Divider
            id="kid-yoga"
            label={<LotusIcon c="yoga-blue" fill size="md" strokeWidth={1} />}
            labelPosition="center"
            my="xl"
          />
          <AppShellSection component="section">
            <KidYogaSection />
          </AppShellSection>
          <Divider
            id="seminars"
            label={<LotusIcon c="yoga-blue" fill size="md" strokeWidth={1} />}
            labelPosition="center"
            my="xl"
          />
          <AppShellSection component="section">
            <SeminariosSection />
          </AppShellSection>
          <Divider
            id="about"
            label={<LotusIcon c="yoga-blue" fill size="md" strokeWidth={1} />}
            labelPosition="center"
            my="xl"
          />
          <AppShellSection component="section">
            <AboutSection />
          </AppShellSection>
          <Divider
            id="contact"
            label={<LotusIcon c="yoga-blue" fill size="md" strokeWidth={1} />}
            labelPosition="center"
            my="xl"
          />
          <AppShellSection component="section">
            <ContactUsSection />
          </AppShellSection>
        </Stack>
      </PageLayout>
    </>
  );
}
