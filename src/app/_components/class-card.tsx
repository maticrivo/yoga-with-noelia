"use client";

import { ReactNode, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  Anchor,
  Paper,
  PaperProps,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { Link } from "@/i18n/routing";

interface ClassCardProps extends PaperProps {
  description?: string | string[];
  image?: ReactNode;
  title?: string;
}

export default function ClassCard({
  description,
  image,
  title,
  ...props
}: ClassCardProps) {
  const t = useTranslations("ClassCard");
  const paragraphs = useMemo(() => {
    if (typeof description === "object") {
      return description;
    }
    return [description];
  }, [description]);

  return (
    <Paper
      bg="transparent"
      p="xl"
      shadow="xs"
      styles={{ root: { borderColor: "var(--mantine-color-yoga-blue-0)" } }}
      withBorder
      {...props}
    >
      <Stack align="center" gap="md" h="100%">
        {title ? (
          <Title order={3} ta="center">
            {title}
          </Title>
        ) : null}
        <SimpleGrid cols={{ base: 1, md: image ? 2 : 1 }}>
          <Stack align="start" flex={1} gap="xs">
            {paragraphs?.map?.((p, idx) => <Text key={+idx}>{p}</Text>)}
          </Stack>
          {image}
        </SimpleGrid>
        <Space h="xl" />
        <Anchor
          c="yoga-blue"
          component={Link}
          href="#contact"
          size="sm"
          underline="always"
        >
          {t("reserve")}
        </Anchor>
      </Stack>
    </Paper>
  );
}
