import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

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
      w="full"
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(3, 1fr)" }}
        gap="4"
      >
        <GridItem colSpan={{ base: 1, desktop: 2 }}>
          <Text textStyle="body.2.semibold" color="amber.500" pb="2">
            {eyebrow}
          </Text>
          <Heading textStyle="title.2" whiteSpace="pre-line">
            {title}
          </Heading>
        </GridItem>
        <GridItem colSpan={1} alignSelf="center">
          <Text textStyle="body.2">{description}</Text>
        </GridItem>
      </Grid>
    </HStack>
  );
};
