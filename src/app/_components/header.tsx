"use client";

import { useCallback } from "react";
import { Parisienne } from "next/font/google";
import { useTranslations } from "next-intl";
import {
  Anchor,
  Burger,
  Button,
  ButtonProps,
  Drawer,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "@/i18n/routing";

import YogaLogo from "./yoga-logo";

const parisienne = Parisienne({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");

  const renderLinks = useCallback(
    (size: ButtonProps["size"] = "compact-xs") => (
      <>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#adult-yoga"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          Yoga para Adultos
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#kid-yoga"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          Yoga para Niños
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#seminars"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          Seminarios
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#about"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("about")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#contact"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("contact")}
        </Button>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <Group align="center" gap="xs" h="100%" justify="space-between">
        <Anchor href="#adult-yoga" underline="never">
          <Group align="center" gap="sm" h="100%">
            <YogaLogo
              c="#002441"
              fill
              size="calc(var(--mantine-spacing-xl) * 2.3)"
              strokeWidth={0}
            />
            <Stack align="flex-end" gap={0}>
              <Title order={2}>Yoga con Noelia</Title>
              <Text className={parisienne.className} fz="xl">
                Yoga para todos
              </Text>
            </Stack>
          </Group>
        </Anchor>
        <Group visibleFrom="md">{renderLinks()}</Group>
        <Burger hiddenFrom="md" opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      <Drawer
        hiddenFrom="md"
        opened={drawerOpened}
        padding="md"
        position="top"
        size="100%"
        styles={{
          body: {
            marginTop: rem(80),
          },
        }}
        withCloseButton={false}
        zIndex="calc(var(--mantine-z-index-app) / 2)"
        onClose={closeDrawer}
      >
        <Stack align="center">{renderLinks("lg")}</Stack>
      </Drawer>
    </>
  );
}
