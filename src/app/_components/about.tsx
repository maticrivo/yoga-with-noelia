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
        <ClassCard
          c="blue.9"
          description={[
            "Practico yoga desde 2016, explorando diferentes metodologías y aprendiendo de diversos maestros. Con el tiempo, esta disciplina me ha brindado una profunda sensación de calma y conexión conmigo misma, una experiencia transformadora que me llevó a profundizar en su estudio y enseñanza.",
            "Mi objetivo es poder llevar y transmitir la practica de yoga a la mayor cantidad de gente que quiera incursionar en la practica.",
            "Formación",
            "2018 – Yoga para Niños | Kidding Around Yoga con Nieke Franken, Iafo.",
            "2020-2022 – 500 RYT Profesora de Yoga Ashtanga Vinyasa | OMYoga con Shani Sharon, Raanana.",
            "2022-2023 – Asistente en curso para maestros de yoga | OMYoga.",
            "2024 - Actualidad – Diplomado en Vinculación Corporal y Movimiento Somático | EastWest Somatics Institute con Ashley Meeder (online, México).",
            "2020 - Actualidad – Miembro de la Asociación Israelí de Yoga (ISYOGA).",
            "",
            "",
          ]}
          hideIcon
          title=""
        />
      </SimpleGrid>
    </Stack>
  );
}
