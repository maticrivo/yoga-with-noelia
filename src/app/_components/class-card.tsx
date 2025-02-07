import { useMemo } from "react";
import { Anchor, Card, CardProps, Stack, Text, Title } from "@mantine/core";

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
      style={{ borderColor: "#002441" }}
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
              c="#002441"
              size="calc(var(--ti-size-xl) * 2)"
              strokeWidth={1.5}
            />
            <Anchor
              c="#002441"
              href="https://www.instagram.com/yoga_with_noelia/"
              size="sm"
              target="_blank"
              underline="hover"
            >
              Reserva tu lugar y comienza la práctica.
            </Anchor>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
