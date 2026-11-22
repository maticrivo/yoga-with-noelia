"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
import {
  Box,
  Button,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

import { Link } from "@/i18n/routing";

import foto from "../../public/new-hero-sepia.jpg";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <Box component="section" py={{ base: "md", md: "xl" }}>
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: "xl", md: rem(64) }}
        verticalSpacing="xl"
      >
        <Stack gap="lg" justify="center">
          <Group gap="xs">
            <IconSparkles
              color="var(--mantine-color-yoga-clay-7)"
              size={18}
              strokeWidth={1.5}
            />
            <Text
              c="yoga-clay.8"
              fw={600}
              size="sm"
              style={{ letterSpacing: "0.08em" }}
              tt="uppercase"
            >
              {t("eyebrow")}
            </Text>
          </Group>
          <Title fz={{ base: 40, md: 60 }} lh={1.05} order={1}>
            {t("title")}
          </Title>
          <Text c="yoga-ink.7" fz={{ base: "md", md: "lg" }} lh={1.65}>
            {t("description")}
          </Text>
          <Group gap="sm">
            <Button
              component={Link}
              href="#contact"
              rightSection={<IconArrowRight size={18} />}
              size="md"
            >
              {t("primaryCta")}
            </Button>
            <Button
              component={Link}
              href="#adult-yoga"
              size="md"
              variant="light"
            >
              {t("secondaryCta")}
            </Button>
          </Group>
          <Text c="yoga-ink.7" size="sm">
            {t("trust")}
          </Text>
        </Stack>
        <Box pos="relative">
          <Box
            bg="yoga-sage.1"
            pos="absolute"
            style={{
              borderRadius: rem(40),
              inset: 0,
              transform: "translate(14px, 14px)",
            }}
          />
          <Box
            h={{ base: 300, sm: 420, md: 520 }}
            pos="relative"
            style={{
              borderRadius: rem(40),
              boxShadow: "var(--mantine-shadow-sm)",
              overflow: "hidden",
            }}
          >
            <NextImage
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 62em) 100vw, 50vw"
              src={foto}
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
