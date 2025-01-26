import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Flex
      align="center"
      direction={{ base: "column", sm: "row" }}
      gap="xl"
      justify="space-between"
      style={{ marginTop: 80, marginBottom: 80 }}
    >
      <Stack style={{ maxWidth: 500 }}>
        <Title order={1}>Descubre la paz interior con Yoga</Title>
        <Text mt="xl" size="xl">
          Bienvenido a Yoga con Noelia, donde la tranquilidad se encuentra con
          la fortaleza. Únete a nuestras clases y comienza tu viaje hacia el
          bienestar.
        </Text>
        <Group mt="xl">
          <Button
            gradient={{
              from: "var(--mantine-primary-color-3)",
              to: "var(--mantine-primary-color-7)",
            }}
            size="lg"
            variant="gradient"
          >
            Reserva tu clase
          </Button>
          <Button size="lg" variant="outline">
            Conoce más
          </Button>
        </Group>
      </Stack>
      <Image
        alt="Yoga pose"
        src="/placeholder.svg?height=400&width=400"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Flex>
  );
}
