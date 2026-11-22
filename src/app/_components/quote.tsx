import { useTranslations } from "next-intl";
import { Box, Stack, Text } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

export function QuoteSection() {
  const t = useTranslations("Quote");

  return (
    <Box
      bg="yoga-sage.0"
      px={{ base: "md", md: "xl" }}
      py={{ base: "lg", md: 48 }}
      style={{ borderRadius: "var(--mantine-radius-lg)" }}
    >
      <Stack align="center" gap="xs">
        <IconQuote
          color="var(--mantine-color-yoga-sage-5)"
          size={26}
          strokeWidth={1.5}
        />
        <Text
          c="yoga-ink.8"
          fz={{ base: "md", md: "lg" }}
          lh={1.6}
          maw={680}
          style={{ fontStyle: "italic" }}
          ta="center"
        >
          {t("text")}
        </Text>
        <Text c="yoga-clay.8" fw={600} size="xs">
          — {t("author")}
        </Text>
      </Stack>
    </Box>
  );
}
