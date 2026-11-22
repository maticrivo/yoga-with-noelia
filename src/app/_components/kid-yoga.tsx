import { useTranslations } from "next-intl";
import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function KidYogaSection() {
  const t = useTranslations("KidYoga");
  const keys = ["1", "2"] as const;

  return (
    <Stack gap="lg">
      <Stack align="center" gap="xs">
        <Title order={2} ta="center">
          {t("title")}
        </Title>
        <Text c="yoga-ink.7" maw={640} ta="center">
          {t("intro")}
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {keys.map((key) => (
          <ClassCard
            key={`kid-yoga-${key}`}
            description={t(`${key}.description`)}
            title={t(`${key}.title`)}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
