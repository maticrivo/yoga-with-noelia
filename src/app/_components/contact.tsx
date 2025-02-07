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
        <Title order={2} ta="center">
          Contacto
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
            <TextInput
              label="Telefono"
              placeholder="123456789"
              required
              type="phone"
            />
            <Textarea
              label="Mensaje"
              minRows={4}
              placeholder="Tu mensaje aquí"
              required
            />
            <Button
              size="lg"
              type="submit"
              // variant="gradient"
            >
              Enviar Mensaje
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
