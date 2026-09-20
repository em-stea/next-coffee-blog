import { Text, VStack } from "@chakra-ui/react";

interface SpecDetailProps {
  label: string;
  value: string;
  detail: string;
}

export const SpecDetail = ({ label, value, detail }: SpecDetailProps) => {
  return (
    <VStack
      align={{ base: "center", desktop: "flex-start" }}
      gap={{ base: "2", desktop: "1" }}
      borderRadius="8px"
      py={{ base: "4", desktop: "2" }}
      px="3"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "8px",
        padding: "1px", // Grosor del borde
        background:
          "linear-gradient(135deg, var(--chakra-colors-amber-400), var(--chakra-colors-coffee-400))",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      }}
    >
      <Text textStyle="tag.1" color="neutral.400">
        {label}
      </Text>
      <Text textStyle="subtitle.3" color="neutral.0">
        {value}
      </Text>
      <Text textStyle="body.1" color="neutral.0">
        {detail}
      </Text>
    </VStack>
  );
};
