"use client";

import { useTranslations } from "next-intl";
import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function AboutSection() {
  const t = useTranslations("About");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

  return (
    <Stack>
      <Title order={2} ta="center">
        {t("title")}
      </Title>
      <SimpleGrid cols={{ base: 1 }}>
        <ClassCard
          c="blue.9"
          description={keys.map((key) => t(`messages.${key}`))}
          hideIcon
        />
      </SimpleGrid>
    </Stack>
  );
}
