"use client";

import { Parisienne } from "next/font/google";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import {
  Burger,
  Button,
  Drawer,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "@/i18n/routing";

import logo from "../../public/logo.png";

const parisienne = Parisienne({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");

  function renderLinks() {
    return (
      <>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="/sobre-mi"
          size="compact-xs"
          variant="subtle"
        >
          Yoga para Adultos
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="/horario"
          size="compact-xs"
          variant="subtle"
        >
          Yoga para Niños
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="/contacto"
          size="compact-xs"
          variant="subtle"
        >
          Seminarios
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="/contacto"
          size="compact-xs"
          variant="subtle"
        >
          {t("about")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="/contacto"
          size="compact-xs"
          variant="subtle"
        >
          {t("contact")}
        </Button>
      </>
    );
  }

  return (
    <>
      <Group align="center" h="100%" justify="space-between">
        <Group align="center" gap="sm" h="100%">
          <Image
            alt={t("title")}
            component={NextImage}
            h="100%"
            p="calc(var(--mantine-spacing-xs) / 3)"
            src={logo}
          />
          <Stack align="flex-end" gap={0}>
            <Title order={2}>Yoga con Noelia</Title>
            <Text className={parisienne.className} fz="xl">
              Yoga para todos
            </Text>
          </Stack>
        </Group>
        <Group visibleFrom="md">{renderLinks()}</Group>
        <Burger hiddenFrom="md" opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      <Drawer
        hiddenFrom="md"
        opened={drawerOpened}
        padding="md"
        size="100%"
        zIndex={1000000}
        onClose={closeDrawer}
      >
        <Stack align="center">{renderLinks()}</Stack>
      </Drawer>
    </>
  );
}
