"use client";

import { useTranslations } from "next-intl";
import { Burger, Button, Drawer, Group, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "@/i18n/routing";

export function HeaderComponent() {
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const t = useTranslations("Header");

  return (
    <>
      <Group align="center" h="100%" justify="space-between">
        <Title order={1}>{t("title")}</Title>

        <Group visibleFrom="sm">
          <Link href="/sobre-mi" passHref>
            <Button variant="subtle">{t("about")}</Button>
          </Link>
          <Link href="/horario" passHref>
            <Button variant="subtle">{t("classes")}</Button>
          </Link>
          <Link href="/contacto" passHref>
            <Button variant="subtle">{t("contact")}</Button>
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
          <Link href="/sobre-mi" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              {t("about")}
            </Button>
          </Link>
          <Link href="/horario" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              {t("classes")}
            </Button>
          </Link>
          <Link href="/contacto" passHref>
            <Button fullWidth variant="subtle" onClick={closeDrawer}>
              {t("contact")}
            </Button>
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
