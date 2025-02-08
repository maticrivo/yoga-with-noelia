import { useTranslations } from "next-intl";
import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function SeminariosSection() {
  const t = useTranslations("Seminars");
  const keys = ["1"] as const;

  return (
    <Stack>
      <Title order={2} ta="center">
        {t("title")}
      </Title>
      <SimpleGrid cols={{ base: 1 }}>
        {keys.map((key) => (
          <ClassCard
            key={`seminars-${key}`}
            description={t(`${key}.description`)}
            title={t(`${key}.title`)}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
