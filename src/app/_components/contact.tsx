"use client";

import { useTranslations } from "next-intl";
import {
  Anchor,
  Button,
  Center,
  Container,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";

export function ContactUsSection() {
  const t = useTranslations("Contact");
  return (
    <Container size="xs">
      <Stack>
        <Title order={2} ta="center">
          {t("title")}
        </Title>
        <Text>{t("description")}</Text>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack>
            <TextInput
              label={t("form.name.label")}
              placeholder={t("form.name.placeholder")}
              required
            />
            <TextInput
              label={t("form.email.label")}
              placeholder={t("form.email.placeholder")}
              required
              type="email"
            />
            <TextInput
              label={t("form.phone.label")}
              placeholder={t("form.phone.placeholder")}
              required
              type="phone"
            />
            <Textarea
              label={t("form.message.label")}
              minRows={4}
              placeholder={t("form.message.placeholder")}
              required
            />
            <Button
              c="dark-blue"
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
        <Center>
          <Anchor
            c="dark-blue"
            display="flex"
            href="https://www.instagram.com/yoga_with_noelia/"
            style={{ alignItems: "center" }}
            target="_blank"
            underline="hover"
          >
            <ThemeIcon c="dark-blue" variant="transparent">
              <IconBrandInstagram strokeWidth={0.5} />
            </ThemeIcon>{" "}
            {t("follow")}
          </Anchor>
        </Center>
      </Stack>
    </Container>
  );
}
