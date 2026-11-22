import NextImage from "next/image";
import { useTranslations } from "next-intl";
import {
  Box,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import foto from "../../public/noelia-hero.jpg";

export function AboutSection() {
  const t = useTranslations("About");
  const intro = ["1", "2", "3"] as const;
  const training = ["5", "6", "7", "8", "9"] as const;

  return (
    <Stack gap="lg">
      <Title order={2} ta="center">
        {t("title")}
      </Title>
      <Paper
        p={{ base: "lg", md: "xl" }}
        radius="lg"
        styles={{
          root: {
            backgroundColor: "var(--mantine-color-white)",
            borderColor: "var(--mantine-color-yoga-sand-3)",
          },
        }}
        withBorder
      >
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={{ base: "lg", md: "xl" }}
          verticalSpacing="lg"
        >
          <Box
            h={{ base: 320, md: 420 }}
            pos="relative"
            style={{
              borderRadius: "var(--mantine-radius-lg)",
              overflow: "hidden",
            }}
          >
            <NextImage
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 62em) 100vw, 40vw"
              src={foto}
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
          </Box>
          <Stack gap="md" justify="center">
            {intro.map((key) => (
              <Text key={key} c="yoga-ink.7">
                {t(`messages.${key}`)}
              </Text>
            ))}
          </Stack>
        </SimpleGrid>
        <Divider my="xl" />
        <Stack gap="md">
          <Title fz="h3" order={3}>
            {t("messages.4")}
          </Title>
          <Stack gap="sm">
            {training.map((key) => (
              <Group key={key} align="flex-start" gap="sm" wrap="nowrap">
                <ThemeIcon
                  c="yoga-sage.7"
                  mt={2}
                  radius="xl"
                  size={20}
                  variant="transparent"
                >
                  <IconCheck size={16} strokeWidth={2} />
                </ThemeIcon>
                <Text c="yoga-ink.7" size="sm">
                  {t(`messages.${key}`)}
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
