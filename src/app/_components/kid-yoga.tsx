import {
  Card,
  CardSection,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function KidYogaSection() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Yoga para niños
      </Title>
      <SimpleGrid cols={2}>
        <Card bg="blue.2" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>Metodología KAY</Title>
          </CardSection>
          <Text>...</Text>
        </Card>
        <Card bg="yellow.2" shadow="xs">
          <CardSection p="lg" ta="center">
            <Title order={2}>KAY - Aprendizaje segundo idioma</Title>
          </CardSection>
          <Text>...</Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}

{
  /*  */
}
