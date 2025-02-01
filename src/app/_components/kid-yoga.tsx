import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function KidYogaSection() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Yoga para niños
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <ClassCard c="grape.9" description="..." title="Metodología KAY" />
        <ClassCard
          c="cyan.9"
          description="..."
          title="KAY - Aprendizaje segundo idioma"
        />
      </SimpleGrid>
    </Stack>
  );
}

{
  /*  */
}
