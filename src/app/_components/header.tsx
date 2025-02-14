"use client";

import { useCallback } from "react";
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
  NavLink,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
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
  const theme = useMantineTheme();
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale || routing.defaultLocale) as Locale;

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
              c="dark-blue"
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
        {/* <Group h="100%"> */}
        <Group visibleFrom="md">
          {renderLinks()}
          <Menu arrowSize={10} shadow="md" trigger="hover" withArrow>
            <Menu.Target>
              <Button
                radius="xl"
                rightSection={
                  <ThemeIcon c="dark-blue" size="xs" variant="transparent">
                    <IconChevronDown strokeWidth={1.5} />
                  </ThemeIcon>
                }
                size="compact-xs"
                variant="outline"
              >
                {localeMapping[locale].title}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {routing.locales.map((l) => (
                <Menu.Item
                  key={l}
                  component={Link}
                  href={{ pathname }}
                  locale={l}
                >
                  {localeMapping[l].title}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
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
        <Stack align="center">
          <Group mb="xl">
            {routing.locales.map((l, idx) => (
              <>
                <Button
                  key={l}
                  color="var(--mantine-color-text)"
                  component={Link}
                  href={{ pathname }}
                  locale={l}
                  size="lg"
                  variant="subtle"
                  onClick={closeDrawer}
                >
                  {localeMapping[l].title}
                </Button>
                {idx % 2 === 0 ? (
                  <Divider key={`${l}.divider`} orientation="vertical" />
                ) : null}
              </>
            ))}
          </Group>
          {renderLinks("lg")}
        </Stack>
      </Drawer>
    </>
  );
}
