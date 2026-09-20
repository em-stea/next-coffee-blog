import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

const ALIGNMENT_MAP = {
  row: "center",
  column: "flex-start",
} as const;

type HeaderBlockType = keyof typeof ALIGNMENT_MAP;

interface HeaderBlockProps {
  eyebrow: string;
  title: string;
  description: string;
  type?: HeaderBlockType;
}

export const HeaderBlock = ({
  eyebrow,
  title,
  description,
  type = "column",
}: HeaderBlockProps) => {
  return (
    <HStack
      justifyContent={{ base: "flex-start", desktop: "space-between" }}
      pb="10"
      pt="5"
      gap="4"
      flexDirection={{ base: "column", desktop: type }}
      alignItems={ALIGNMENT_MAP[type]}
    >
      <VStack alignItems="flex-start" gap="3">
        <Text textStyle="body.2.semibold" color="amber.500">
          {eyebrow}
        </Text>
        <Heading textStyle="title.2" w={{ base: "100%", desktop: "70%" }}>
          {title}
        </Heading>
      </VStack>
      <Text textStyle="body.2" w={{ base: "100%", desktop: "37%" }}>
        {description}
      </Text>
    </HStack>
  );
};
