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
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "@/i18n/routing";

import YogaLogo from "./yoga-logo";

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");
  const theme = useMantineTheme();

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
          {t("links.adult")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#kid-yoga"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.kid")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#seminars"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.seminars")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#about"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.about")}
        </Button>
        <Button
          color="var(--mantine-color-text)"
          component={Link}
          href="#contact"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.contact")}
        </Button>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <Group align="center" gap="xs" h="100%" justify="space-between">
        <Anchor component={Link} href="#adult-yoga" underline="never">
          <Group align="center" gap="sm" h="100%">
            <YogaLogo
              c="#002441"
              fill
              size="calc(var(--mantine-spacing-xl) * 2.3)"
              strokeWidth={0}
            />
            <Stack align="flex-end" gap={0}>
              <Title fz={28} order={1}>
                {t("title")}
              </Title>
              <Text
                ff={theme.other.sloganFont.fontFamily}
                fw={theme.other.sloganFont.fontWeight}
                fz="xl"
              >
                {t("slogan")}
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
