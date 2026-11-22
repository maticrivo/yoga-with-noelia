"use client";

import { ReactNode, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  Anchor,
  Paper,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

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
    return description ? description.split(/\n{2,}/) : [];
  }, [description]);

  return (
    <Paper
      bg="white"
      className="yoga-card"
      p={{ base: "lg", md: "xl" }}
      radius="lg"
      styles={{ root: { borderColor: "var(--mantine-color-yoga-sand-3)" } }}
      withBorder
      {...props}
    >
      <Stack gap="md" h="100%" justify="space-between">
        <Stack gap="md">
          {title ? (
            <Title fz="h4" order={3}>
              {title}
            </Title>
          ) : null}
          <SimpleGrid
            cols={{ base: 1, md: image ? 2 : 1 }}
            spacing="lg"
            verticalSpacing="md"
          >
            <Stack gap="sm">
              {paragraphs?.map?.((p, idx) => (
                <Text key={+idx} c="yoga-ink.7" fz={{ base: "md", md: "sm" }}>
                  {p}
                </Text>
              ))}
            </Stack>
            {image}
          </SimpleGrid>
        </Stack>
        <Anchor c="yoga-sage.8" component={Link} href="#contact" size="sm">
          {t("reserve")}{" "}
          <IconArrowRight
            size={14}
            strokeWidth={1.5}
            style={{ verticalAlign: "middle" }}
          />
        </Anchor>
      </Stack>
    </Paper>
  );
}
