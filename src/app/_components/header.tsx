"use client";

import { Fragment, useCallback } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Anchor,
  Burger,
  Button,
  ButtonProps,
  Divider,
  Drawer,
  Group,
  Menu,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

import {
  Link,
  Locale,
  localeMapping,
  routing,
  usePathname,
} from "@/i18n/routing";

import YogaLogo from "./yoga-logo";

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const params = useParams();
  const logoSize = useMatches({
    base: "calc(var(--mantine-spacing-xl) * 1.75)",
    xs: "calc(var(--mantine-spacing-xl) * 2.3)",
  });
  const titleFz = useMatches({
    base: rem(22),
    xs: rem(28),
  });
  const subtitleFz = useMatches({
    base: "xs",
    xs: "sm",
  });
  const gap = useMatches({
    base: 0,
    xs: "xs",
  });

  const locale = (params?.locale || routing.defaultLocale) as Locale;

  const renderLinks = useCallback(
    (size: ButtonProps["size"] = "compact-xs") => (
      <>
        <Button
          color="yoga-ink"
          component={Link}
          href="#adult-yoga"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.adult")}
        </Button>
        <Button
          color="yoga-ink"
          component={Link}
          href="#kid-yoga"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.kid")}
        </Button>
        <Button
          color="yoga-ink"
          component={Link}
          href="#seminars"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.seminars")}
        </Button>
        <Button
          color="yoga-ink"
          component={Link}
          href="#about"
          size={size}
          variant="subtle"
          onClick={closeDrawer}
        >
          {t("links.about")}
        </Button>
        <Button
          color="yoga-ink"
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
      <Group align="center" gap={gap} h="100%" justify="space-between">
        <Anchor component={Link} h="100%" href="#adult-yoga" underline="never">
          <Group align="center" gap="sm" h="100%">
            <YogaLogo c="yoga-sage.8" fill size={logoSize} strokeWidth={0} />
            <Stack gap={0}>
              <Title fz={titleFz} order={2}>
                {t("title")}
              </Title>
              <Text c="yoga-ink.7" fz={subtitleFz}>
                {t("slogan")}
              </Text>
            </Stack>
          </Group>
        </Anchor>
        <Group visibleFrom="md">
          {renderLinks()}
          <Menu arrowSize={10} shadow="md" trigger="hover" withArrow>
            <Menu.Target>
              <Button
                // leftSection={<Text>{localeMapping[locale].flag}</Text>}
                color="yoga-sage"
                rightSection={
                  <ThemeIcon c="yoga-sage.8" size="xs" variant="transparent">
                    <IconChevronDown strokeWidth={1.5} />
                  </ThemeIcon>
                }
                size="xs"
                variant="outline"
              >
                {localeMapping[locale].title}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {routing.locales.map((l) => (
                <Menu.Item
                  key={`menu.${l}`}
                  component={Link}
                  href={{ pathname }}
                  // leftSection={<Text>{localeMapping[l].flag}</Text>}
                  locale={l}
                >
                  {localeMapping[l].title}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Burger
          aria-label={t("menu")}
          color="var(--mantine-color-yoga-ink-8)"
          hiddenFrom="md"
          opened={drawerOpened}
          onClick={toggleDrawer}
        />
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
          content: {
            backgroundColor: "var(--mantine-color-yoga-sand-0)",
          },
        }}
        withCloseButton={false}
        zIndex="calc(var(--mantine-z-index-app) / 2)"
        onClose={closeDrawer}
      >
        <Stack align="center">
          <Group mb="xl">
            {routing.locales.map((l, idx) => (
              <Fragment key={`button.${l}`}>
                <Button
                  color="yoga-ink"
                  component={Link}
                  href={{ pathname }}
                  locale={l}
                  size="lg"
                  variant="subtle"
                  onClick={closeDrawer}
                >
                  {localeMapping[l].title}
                </Button>
                {idx % 2 === 0 ? <Divider orientation="vertical" /> : null}
              </Fragment>
            ))}
          </Group>
          {renderLinks("lg")}
        </Stack>
      </Drawer>
    </>
  );
}
