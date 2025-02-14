"use client";

import { useMemo } from "react";
import { Anchor, Card, CardProps, Stack, Text, Title } from "@mantine/core";

import { Link } from "@/i18n/routing";

import LotusIcon from "./lotus-icon";

interface ClassCardProps extends CardProps {
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
  const paragraphs = useMemo(() => {
    if (typeof description === "object") {
      return description;
    }
    return [description];
  }, [description]);
  return (
    <Card
      bg="transparent"
      padding="xl"
      shadow="xs"
      style={(theme) => ({ borderColor: theme.colors["dark-blue"][0] })}
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
              c="dark-blue"
              size="calc(var(--ti-size-xl) * 2)"
              strokeWidth={1.5}
            />
            <Anchor
              c="dark-blue"
              component={Link}
              href="#contact"
              size="sm"
              underline="always"
            >
              Reserva tu lugar y comienza la práctica.
            </Anchor>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
