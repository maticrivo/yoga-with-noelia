import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

const classes = [
  {
    day: "Lunes",
    time: "18:00 - 19:30",
    description: "Hatha Yoga para principiantes",
  },
  { day: "Miércoles", time: "19:00 - 20:30", description: "Vinyasa Flow" },
];

export function ClassesSection() {
  return (
    <Flex
      align="center"
      direction={{ base: "column", sm: "row" }}
      gap="xl"
      justify="space-between"
      my="lg"
    >
      <Image
        alt="Yoga pose"
        src="/placeholder.svg?height=400&width=400"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Stack align="center" style={{ marginTop: 120, marginBottom: 80 }}>
        <Title order={2}>Nuestras Clases</Title>
        <Text size="xl" style={{ maxWidth: 600 }} ta="center">
          Ofrecemos una variedad de clases para todos los niveles, desde
          principiantes hasta practicantes avanzados.
        </Text>
        <Accordion my="md" variant="contained">
          {classes.map((cls, index) => (
            <AccordionItem key={index} value={cls.day}>
              <AccordionControl
                icon={
                  <ThemeIcon>
                    <IconCalendar />
                  </ThemeIcon>
                }
              >
                <Group>
                  <Text fw={600} size="lg">
                    {cls.day}
                  </Text>
                  <Text>{cls.time}</Text>
                </Group>
              </AccordionControl>
              <AccordionPanel>
                <Text>{cls.description}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Flex>
  );
}

{
  /*  */
}
