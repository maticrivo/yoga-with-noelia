"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Anchor, Paper, PaperProps, Stack, Text, Title } from "@mantine/core";

import { Link } from "@/i18n/routing";

import LotusIcon from "./lotus-icon";

interface ClassCardProps extends PaperProps {
  description: string | string[];
  hideIcon?: boolean;
  title?: string;
}

export default function ClassCard({
  description,
  hideIcon,
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
        <Stack align="start" flex={1} gap="xs">
          {paragraphs.map((p, idx) => (
            <Text key={+idx} ta="justify">
              {p}
            </Text>
          ))}
        </Stack>
        {!hideIcon ? (
          <>
            <LotusIcon
              c="yoga-blue"
              size="calc(var(--ti-size-xl) * 2)"
              strokeWidth={1.5}
            />
            <Anchor
              c="yoga-blue"
              component={Link}
              href="#contact"
              size="sm"
              underline="always"
            >
              {t("reserve")}
            </Anchor>
          </>
        ) : null}
      </Stack>
    </Paper>
  );
}
