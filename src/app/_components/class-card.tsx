import { Card, CardProps, Stack, Text, Title } from "@mantine/core";

import LotusIcon from "./lotus-icon";

interface ClassCardProps extends CardProps {
  description: string;
  title: string;
}

export default function ClassCard({
  description,
  title,
  ...props
}: ClassCardProps) {
  return (
    <Card bg="gray.2" padding="xl" shadow="xs" {...props}>
      <Stack align="center" gap="md" h="100%">
        <Title order={2} ta="center">
          {title}
        </Title>
        <Text flex={1}>{description}</Text>
        <LotusIcon
          c="inherit"
          size="calc(var(--ti-size-xl) * 2)"
          strokeWidth={2}
        />
      </Stack>
    </Card>
  );
}
