import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function SeminariosSection() {
  return (
    <Stack>
      <Title order={2} ta="center">
        Seminarios y Eventos especiales
      </Title>
      <SimpleGrid cols={{ base: 1 }}>
        <ClassCard
          c="blue.9"
          description="Los seminarios son experiencias enriquecedoras diseñadas para profundizar un tema en particular en la práctica y filosofía del yoga. Exploramos posturas, técnicas de respiración, meditación y movimiento somatico. Estos encuentros son ideales tanto para principiantes como para practicantes avanzados que desean ampliar su conocimiento y profundizar su práctica para conectar más profundamente con su cuerpo y mente."
        />
      </SimpleGrid>
    </Stack>
  );
}
