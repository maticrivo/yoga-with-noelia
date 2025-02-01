import { SimpleGrid, Stack, Title } from "@mantine/core";

import ClassCard from "./class-card";

export function AdultYogaSection() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Yoga para adultos
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <ClassCard
          c="blue.9"
          description="Esta clase está pensada para trabajar el método de yoga Ashtanga Vinyasa, para principiantes. El Ashtanga yoga es una excelente forma de desarrollar fuerza física y flexibilidad. La práctica implica una serie de posturas que trabajan todos los grupos musculares del cuerpo, incluidos el pecho, los brazos, las piernas y los glúteos, todos los movimientos son guiados a través de la respiración."
          title="Vinyasa Ashtanga clásica"
        />
        <ClassCard
          c="yellow.9"
          description="Vinyasa Yoga es más dinámica, busca coordinar movimiento y respiración y canalizar nuestra energía tipo de yoga dinámico basado en la unión de movimiento y respiración a lo largo de secuencias de posturas (asanas) enlazadas entre sí"
          title="Vinyasa flow"
        />
        <ClassCard
          c="orange.9"
          description="El yoga es bueno para los adultos mayores porque se sabe que mejora la movilidad . Los músculos y las articulaciones rígidos son comunes entre las personas mayores, pero practicar yoga puede ayudar suavemente a mejorar la amplitud de movimiento. El yoga puede relajar y fortalecer los músculos, lo que facilita el desplazamiento. Mejora de la respiración"
          title="Yoga para tercera edad"
        />
        <ClassCard
          c="teal.9"
          description="El yoga somático es una de las variantes que te ayudará a mover tu cuerpo de una manera sumamente consciente y, a la par, tendrás un momento para despejar la mente y sanar tus emociones. Ayuda a nivel cuerpo mente a sentirnos seguros, lo cual es la prioridad número uno para nuestro cerebro. Ayuda a reducir la tensión"
          title="Movimiento Somático"
        />
      </SimpleGrid>
    </Stack>
  );
}
