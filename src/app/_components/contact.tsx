"use client";

import { useTranslations } from "next-intl";
import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconAt,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function ContactUsSection() {
  const t = useTranslations("Contact");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      // phone: "",
      message: "",
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    window.open(
      `https://wa.me/+972524242400?text=${encodeURIComponent(t("whatsappMessage", values))}`,
    );
  };

  const items = [
    {
      title: t("form.email.label"),
      description: "hola@yogawithnoelia.com",
      href: "mailto:hola@yogawithnoelia.com",
      icon: IconAt,
    },
    {
      title: t("form.phone.label"),
      description: "+972-52-4242-400",
      href: "https://wa.me/+972524242400",
      icon: IconBrandWhatsapp,
    },
    {
      title: t("follow"),
      description: "yoga_with_noelia",
      href: "https://www.instagram.com/yoga_with_noelia/",
      icon: IconBrandInstagram,
    },
  ].map(({ description, href, icon: Icon, title }, index) => (
    <Group key={+index} align="center" gap="xs">
      <ThemeIcon c="yoga-pink" size="sm" variant="transparent">
        <Icon size="100%" strokeWidth={1} />
      </ThemeIcon>
      <Stack gap={0}>
        <Text c="yoga-pink" size="xs" visibleFrom="md">
          {title}
        </Text>
        <Anchor
          c="yoga-pink"
          dir="ltr"
          href={href}
          size="md"
          target="_blank"
          underline="hover"
        >
          {description}
        </Anchor>
      </Stack>
    </Group>
  ));

  return (
    <Paper
      bg="transparent"
      p={0}
      shadow="xs"
      styles={{ root: { borderColor: "var(--mantine-color-yoga-blue-0)" } }}
      withBorder
    >
      <Flex direction={{ base: "column-reverse", md: "row-reverse" }}>
        <Box bg="yoga-blue">
          <Stack h="100%" justify="center" p="xl">
            {items}
          </Stack>
        </Box>
        <Box flex={1} p="xl">
          <form
            encType="text/plain"
            method="post"
            onSubmit={form.onSubmit(handleSubmit)}
          >
            <Stack>
              <Title order={2} ta="center">
                {t("title")}
              </Title>
              <Text>{t("description")}</Text>
              <SimpleGrid cols={{ base: 1, md: 2 }}>
                <TextInput
                  label={t("form.name.label")}
                  placeholder={t("form.name.placeholder")}
                  required
                  {...form.getInputProps("name")}
                />
                <TextInput
                  label={t("form.email.label")}
                  placeholder={t("form.email.placeholder")}
                  required
                  {...form.getInputProps("email")}
                />
              </SimpleGrid>

              {/* <TextInput
                  label={t("form.phone.label")}
                  placeholder={t("form.phone.placeholder")}
                  required
                  {...form.getInputProps("phone")}
                /> */}
              <Textarea
                label={t("form.message.label")}
                placeholder={t("form.message.placeholder")}
                required
                rows={4}
                {...form.getInputProps("message")}
              />

              <Button
                c="yoga-blue"
                color="white"
                ff="heading"
                size="lg"
                type="submit"
                variant="light"
              >
                {t("form.send")}
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Paper>
  );
}
