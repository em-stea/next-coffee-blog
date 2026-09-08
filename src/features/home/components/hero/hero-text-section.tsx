import { ROUTES } from "@/shared/lib/route";
import { Box, Button, Circle, Heading, HStack, Tag } from "@chakra-ui/react";
import Link from "next/link";

type HeroTextSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type ButtonProps = {
  label: string;
  href: string;
  variant: "solid" | "outline";
  isInverted?: boolean;
};

const BUTTONS: ButtonProps[] = [
  {
    label: "Explore Methods",
    href: ROUTES.brewMethods,
    variant: "solid",
    isInverted: true,
  },
  {
    label: "View Drinks",
    href: ROUTES.coffeeDrinks,
    variant: "outline",
  },
];

export const HeroTextSection = ({
  eyebrow,
  title,
  subtitle,
}: HeroTextSectionProps) => {
  return (
    <Box py={{ base: "10", lg: "0" }}>
      <Tag.Root>
        <Circle bg="amber.500" size="2" />
        <Tag.Label>{eyebrow}</Tag.Label>
      </Tag.Root>
      <Heading textStyle="title.1" color="neutral.0" mt="2" mb="4">
        {title}
      </Heading>
      <Heading
        textStyle="subtitle.1"
        color="neutral.0"
        maxW={{ base: "80%", lg: "full" }}
      >
        {subtitle}
      </Heading>
      <HStack mt="6" gap="3">
        {BUTTONS.map((button) => (
          <Button
            key={button.label}
            variant={button.variant}
            isInverted={button.isInverted}
            asChild
            size="lg"
          >
            <Link href={button.href}>{button.label}</Link>
          </Button>
        ))}
      </HStack>
    </Box>
  );
};
