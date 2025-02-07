"use client";

import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function AboutSection() {
  return (
    <Stack>
      <Title order={2} ta="center">
        Sobre Mí
      </Title>
      <SimpleGrid cols={{ base: 1 }}>
        <ClassCard c="blue.9" description="..." title="" />
      </SimpleGrid>
    </Stack>
  );
}
