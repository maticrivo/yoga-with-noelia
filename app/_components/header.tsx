"use client";

import Link from "next/link";
import { Burger, Button, Drawer, Group, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Group align="center" h="100%" justify="space-between">
        <Title order={1}>Yoga con Noelia</Title>

        <Group visibleFrom="sm">
          <Link href="/sobre-mi" passHref>
            <Button variant="subtle">Sobre Mí</Button>
          </Link>
          <Link href="/horario" passHref>
            <Button variant="subtle">Clases</Button>
          </Link>
          <Link href="/contacto" passHref>
            <Button variant="subtle">Contacto</Button>
          </Link>
        </Group>

        <Burger hiddenFrom="sm" opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      <Drawer
        hiddenFrom="sm"
        opened={drawerOpened}
        padding="md"
        size="100%"
        title="Navegación"
        zIndex={1000000}
        onClose={closeDrawer}
      >
        <Stack>
          <Link href="/" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              Inicio
            </Button>
          </Link>
          <Link href="/horario" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              Horario
            </Button>
          </Link>
          <Link href="/sobre-mi" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              Sobre Mí
            </Button>
          </Link>
          <Link href="/contacto" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              Contacto
            </Button>
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
