import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function KidYogaSection() {
  return (
    <Stack>
      <Title order={2} ta="center">
        Yoga para niños
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <ClassCard
          c="grape.9"
          description="Se basa en tres pilares fundamentales:
Música: Las clases incorporan canciones que acompañan los movimientos, ayudando a los niños a disfrutar de la práctica y a mejorar su concentración.
Movimiento: El yoga se presenta demanera lúdica y creativa, usando juegos y ejercicios que permiten a los niños explorar su cuerpo y emociones.
Curiosidad y Mindfulness: Se fomenta el desarrollo de la conciencia emocional,reconociendo y gestionando las emociones a través de prácticas de mindfulness adaptadas a su edad"
          title="Metodología KAY"
        />
        <ClassCard
          c="cyan.9"
          description="Las clases se pueden estructurar para realizarlas en inglés, hebreo o español de forma muy lúdica y didáctica los niños incorporan una herramienta adicional de enseñanza a través del yoga, lo que potencia tanto el desarrollo corporal como cognitivo."
          title="KAY - Aprendizaje segundo idioma"
        />
      </SimpleGrid>
    </Stack>
  );
}

{
  /*  */
}
