"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { Image, SimpleGrid, Stack, Title } from "@mantine/core";

import foto from "../../public/foto.jpg";
import ClassCard from "./class-card";

export function AboutSection() {
  const t = useTranslations("About");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

  return (
    <Stack>
      <Title order={2} ta="center">
        {t("title")}
      </Title>
      <SimpleGrid cols={{ base: 1 }}>
        <ClassCard
          c="blue.9"
          description={keys.map((key) => t(`messages.${key}`))}
          image={
            <Image
              alt="Noelia"
              component={NextImage}
              height={450}
              src={foto}
              style={{
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          }
        />
      </SimpleGrid>
    </Stack>
  );
}
