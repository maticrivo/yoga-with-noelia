import { setRequestLocale } from "next-intl/server";
import { AppShellSection } from "@mantine/core";

import { Locale } from "@/i18n/routing";

import { ClassesSection } from "../_components/classes";
import { ContactUsSection } from "../_components/contact";
import { HeroSection } from "../_components/hero";
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
      <AppShellSection>
        <HeroSection />
      </AppShellSection>
      <AppShellSection>
        <ClassesSection />
      </AppShellSection>
      <AppShellSection>
        <ContactUsSection />
      </AppShellSection>
    </PageLayout>
  );
}
