import NextImage from "next/image";
import { Flex, Image, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Flex
      align="center"
      direction={{ base: "column", sm: "row" }}
      gap="xl"
      justify="space-between"
      style={{ marginTop: 80, marginBottom: 80 }}
    >
      <Stack style={{ maxWidth: 500 }}>
        <Title order={1}>Yoga con Noelia</Title>
        <Text mt="xl" size="xl">
          Yoga para todos
        </Text>
      </Stack>
      <Image
        alt="Yoga pose"
        component={NextImage}
        fallbackSrc="https://placehold.co/600x400?text=Yoga image"
        height="400"
        radius="md"
        src={null}
        width="600"
      />
    </Flex>
  );
}
