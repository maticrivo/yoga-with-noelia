"use client";

import {
  Button,
  Container,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

export function ContactUsSection() {
  return (
    <Container size="xs">
      <Stack>
        <Title mb="xl" order={2} ta="center">
          Contáctanos
        </Title>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack>
            <TextInput label="Nombre" placeholder="Tu nombre" required />
            <TextInput
              label="Email"
              placeholder="tu@email.com"
              required
              type="email"
            />
            <Textarea
              label="Mensaje"
              minRows={4}
              placeholder="Tu mensaje aquí"
              required
            />
            <Button
              gradient={{
                from: "var(--mantine-primary-color-3)",
                to: "var(--mantine-primary-color-7)",
              }}
              size="lg"
              type="submit"
              variant="gradient"
            >
              Enviar Mensaje
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
