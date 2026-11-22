"use client";

import { useTranslations } from "next-intl";
import {
  Anchor,
  Button,
  Center,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconAt,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";

export function ContactUsSection() {
  const t = useTranslations("Contact");

  const items = [
    {
      title: t("form.email.label"),
      description: "hola@yogawithnoelia.com",
      href: "mailto:hola@yogawithnoelia.com",
      icon: IconAt,
      ltr: true,
    },
    {
      title: t("form.phone.label"),
      description: "+972-52-4242-400",
      href: "https://wa.me/+972524242400",
      icon: IconBrandWhatsapp,
      ltr: true,
    },
    {
      title: t("follow", { brand: "Instagram" }),
      description: "yoga_with_noelia",
      href: "https://www.instagram.com/yoga_with_noelia/",
      icon: IconBrandInstagram,
      ltr: true,
    },
    {
      title: t("follow", { brand: "YouTube" }),
      description: "yoga_with_noelia",
      href: "https://www.youtube.com/@yoga_with_noelia",
      icon: IconBrandYoutube,
      ltr: true,
    },
  ].map(({ description, href, icon: Icon, ltr, title }, index) => (
    <Group key={+index} align="center" gap="sm" wrap="nowrap">
      <ThemeIcon c="yoga-sage.8" radius="xl" size={40} variant="light">
        <Icon size="60%" strokeWidth={1.5} />
      </ThemeIcon>
      <Stack gap={0}>
        <Text c="yoga-ink.7" size="xs">
          {title}
        </Text>
        <Anchor
          c="yoga-ink.9"
          dir={ltr ? "ltr" : undefined}
          href={href}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          underline="hover"
        >
          {description}
        </Anchor>
      </Stack>
    </Group>
  ));

  return (
    <Center>
      <Paper
        bg="yoga-sage.0"
        p={{ base: "lg", md: "xl" }}
        radius="lg"
        styles={{
          root: { borderColor: "var(--mantine-color-yoga-sage-2)" },
        }}
        w={{ base: "100%", md: "75%" }}
        withBorder
      >
        <Stack gap="lg">
          <Stack align="center" gap="xs">
            <Title order={2} ta="center">
              {t("title")}
            </Title>
            <Text c="yoga-ink.7" maw={620} ta="center">
              {t("description")}
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {items}
          </SimpleGrid>
          <Center>
            <Button
              component="a"
              href="https://wa.me/+972524242400"
              leftSection={<IconBrandWhatsapp size={18} />}
              rel="noopener noreferrer"
              size="md"
              target="_blank"
            >
              {t("cta")}
            </Button>
          </Center>
        </Stack>
      </Paper>
    </Center>
  );
}
