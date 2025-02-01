"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { Burger, Button, Drawer, Group, Image, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "@/i18n/routing";

import logo from "../../public/logo.png";

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");

  function renderLinks() {
    return (
      <>
        <Link href="/sobre-mi" passHref>
          <Button color="var(--mantine-color-text)" variant="subtle">
            {t("about")}
          </Button>
        </Link>
        <Link href="/horario" passHref>
          <Button color="var(--mantine-color-text)" variant="subtle">
            {t("classes")}
          </Button>
        </Link>
        <Link href="/contacto" passHref>
          <Button color="var(--mantine-color-text)" variant="subtle">
            {t("contact")}
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <Group align="center" h="100%" justify="space-between">
        <Image
          alt={t("title")}
          component={NextImage}
          h="100%"
          p="calc(var(--mantine-spacing-xs) / 3)"
          src={logo}
        />
        <Group visibleFrom="sm">{renderLinks()}</Group>
        <Burger hiddenFrom="sm" opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      <Drawer
        hiddenFrom="sm"
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
