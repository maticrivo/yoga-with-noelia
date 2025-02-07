import { useMemo } from "react";
import {
  ActionIcon,
  Anchor,
  Card,
  CardProps,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";

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
    <Card bg="gray.2" padding="xl" shadow="xs" {...props}>
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
          <LotusIcon
            c="inherit"
            size="calc(var(--ti-size-xl) * 2)"
            strokeWidth={2}
          />
        ) : null}
      </Stack>
    </Card>
  );
}
