import { DefaultMantineColor } from "@mantine/core";

export function getColor(idx: number): DefaultMantineColor {
  const colors: DefaultMantineColor[] = [
    "blue.9",
    "yellow.9",
    "orange.9",
    "teal.9",
  ];
  const index = idx % 4;
  return colors[index];
}
