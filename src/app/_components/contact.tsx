"use client";

import {
  Anchor,
  Button,
  Center,
  Container,
  Stack,
  Text,
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
        <Text>
          Si quieres inscribirte, recibir más información sobre clases
          individuales, unirte a un grupo presencial o por Zoom, o conocer más
          sobre un evento específico, envíame un mensaje con tu número de
          teléfono y te contactaré a la brevedad.
        </Text>
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
              c="#002441"
              color="white"
              ff="heading"
              size="lg"
              type="submit"
              variant="light"
            >
              Enviar Mensaje
            </Button>
          </Stack>
        </form>
        <Center>
          <Anchor
            c="#002441"
            display="flex"
            href="https://www.instagram.com/yoga_with_noelia/"
            style={{ alignItems: "center" }}
            target="_blank"
            underline="hover"
          >
            <ThemeIcon c="#002441" variant="transparent">
              <IconBrandInstagram strokeWidth={0.5} />
            </ThemeIcon>{" "}
            Follow me on Instagram
          </Anchor>
        </Center>
      </Stack>
    </Container>
  );
}
