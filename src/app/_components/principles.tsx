import { useTranslations } from "next-intl";
import {
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconHeartHandshake,
  IconStretching,
  IconWind,
} from "@tabler/icons-react";

const items = [
  { icon: IconStretching, key: "1" },
  { icon: IconHeartHandshake, key: "2" },
  { icon: IconWind, key: "3" },
] as const;

export function PrinciplesSection() {
  const t = useTranslations("Principles");

  return (
    <Stack gap="lg" py={{ base: "md", md: "lg" }}>
      <Stack align="center" gap="xs">
        <Title order={2} ta="center">
          {t("title")}
        </Title>
        <Text c="yoga-ink.7" maw={560} ta="center">
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {items.map(({ icon: Icon, key }) => (
          <Paper
            key={key}
            className="yoga-card"
            p="xl"
            radius="lg"
            styles={{
              root: {
                backgroundColor: "var(--mantine-color-white)",
                borderColor: "var(--mantine-color-yoga-sand-3)",
              },
            }}
            withBorder
          >
            <Stack gap="sm">
              <ThemeIcon c="yoga-sage.8" radius="xl" size={48} variant="light">
                <Icon size={26} strokeWidth={1.5} />
              </ThemeIcon>
              <Title fz="h4" order={3}>
                {t(`${key}.title`)}
              </Title>
              <Text c="yoga-ink.7" size="sm">
                {t(`${key}.description`)}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
