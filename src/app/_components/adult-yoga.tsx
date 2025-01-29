import {
  Card,
  CardSection,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function AdultYogaSection() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Yoga para adultos
      </Title>
      <SimpleGrid cols={2}>
        <Card bg="red.1" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>Vinyasa Ashtanga clásica</Title>
          </CardSection>
          <Text>
            Esta clase está pensada para trabajar el método de yoga Ashtanga
            Vinyasa, para principiantes. El Ashtanga yoga es una excelente forma
            de desarrollar fuerza física y flexibilidad. La práctica implica una
            serie de posturas que trabajan todos los grupos musculares del
            cuerpo, incluidos el pecho, los brazos, las piernas y los glúteos,
            todos los movimientos son guiados a través de la respiración.
          </Text>
        </Card>
        <Card bg="indigo.1" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>Vinyasa flow</Title>
          </CardSection>
          <Text>
            Vinyasa Yoga es más dinámica, busca coordinar movimiento y
            respiración y canalizar nuestra energía tipo de yoga dinámico basado
            en la unión de movimiento y respiración a lo largo de secuencias de
            posturas (asanas) enlazadas entre sí
          </Text>
        </Card>
        <Card bg="grape.1" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>Yoga para tercera edad</Title>
          </CardSection>
          <Text>
            El yoga es bueno para los adultos mayores porque se sabe que mejora
            la movilidad . Los músculos y las articulaciones rígidos son comunes
            entre las personas mayores, pero practicar yoga puede ayudar
            suavemente a mejorar la amplitud de movimiento. El yoga puede
            relajar y fortalecer los músculos, lo que facilita el
            desplazamiento. Mejora de la respiración
          </Text>
        </Card>
        <Card bg="yellow.1" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>Movimiento Somático</Title>
          </CardSection>
          <Text>
            El yoga somático es una de las variantes que te ayudará a mover tu
            cuerpo de una manera sumamente consciente y, a la par, tendrás un
            momento para despejar la mente y sanar tus emociones. Ayuda a nivel
            cuerpo mente a sentirnos seguros, lo cual es la prioridad número uno
            para nuestro cerebro. Ayuda a reducir la tensión
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}

{
  /*  */
}
