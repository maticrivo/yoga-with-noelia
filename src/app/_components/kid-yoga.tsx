import { useTranslations } from "next-intl";
import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function KidYogaSection() {
  const t = useTranslations("KidYoga");
  const keys = ["1", "2"] as const;

  return (
    <Stack>
      <Title order={2} ta="center">
        {t("title")}
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
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

{
  /*  */
}
