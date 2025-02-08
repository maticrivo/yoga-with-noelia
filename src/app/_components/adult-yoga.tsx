import { useTranslations } from "next-intl";
import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function AdultYogaSection() {
  const t = useTranslations("AdultYoga");
  const keys = ["1", "2", "3", "4"] as const;

  return (
    <Stack>
      <Title c="#002441" order={2} ta="center">
        {t("title")}
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        {keys.map((key) => (
          <ClassCard
            key={`adult-yoga-${key}`}
            description={t(`${key}.description`)}
            title={t(`${key}.title`)}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
