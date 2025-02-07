"use client";

import {
  ActionIcon,
  Anchor,
  Button,
  Center,
  Container,
  Group,
  Stack,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";

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
              c="black"
              color="gray.2"
              ff="heading"
              size="lg"
              type="submit"
              // variant="gradient"
            >
              Enviar Mensaje
            </Button>
          </Stack>
        </form>
        <Center>
          <Anchor
            c="black"
            href="https://instagram.com/yogawithnoelia"
            target="_blank"
            underline="hover"
          >
            <Center component="span" inline>
              <ThemeIcon c="black" variant="transparent">
                <IconBrandInstagram strokeWidth={0.5} />
              </ThemeIcon>{" "}
              Follow me on Instagram
            </Center>
          </Anchor>
        </Center>
      </Stack>
    </Container>
  );
}
