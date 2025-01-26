import { useTranslations } from "next-intl";
import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function FooterComponent() {
  const t = useTranslations("Footer");

  return (
    <Group align="center" h="100%" justify="space-between">
      <Text size="sm">{t("copyright")}</Text>
      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" variant="subtle">
          <IconBrandInstagram
            strokeWidth={1.5}
            style={{ width: 18, height: 18 }}
          />
        </ActionIcon>
        <ActionIcon size="lg" variant="subtle">
          <IconBrandFacebook
            strokeWidth={1.5}
            style={{ width: 18, height: 18 }}
          />
        </ActionIcon>
        <ActionIcon size="lg" variant="subtle">
          <IconBrandWhatsapp
            strokeWidth={1.5}
            style={{ width: 18, height: 18 }}
          />
        </ActionIcon>
      </Group>
    </Group>
  );
}
