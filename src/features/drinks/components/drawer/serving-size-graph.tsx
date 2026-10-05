import { ServingSize } from "@/features/home/types/coffee-drink";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { LuCoffee } from "react-icons/lu";

const ServingSizeType = {
  SMALL: {
    name: "Small",
    size: 26,
  },
  SHORT: {
    name: "Short",
    size: 33,
  },
  MEDIUM: {
    name: "Medium",
    size: 37,
  },
  LARGE: {
    name: "Large",
    size: 43,
  },
} as const;

const SERVING_SIZE_STYLES = {
  true: {
    color: "amber.500",
    bg: "neutral.900",
    borderColor: "amber.500",
    fill: "currentColor",
  },
  false: {
    color: "neutral.500",
    bg: "neutral.800",
    borderColor: "neutral.700",
    fill: "none",
  },
} as const;

const SERVING_SIZE_TYPES = Object.values(ServingSizeType);

export const ServingSizeGraph = ({
  serving_size,
}: {
  serving_size: ServingSize;
}) => {
  return (
    <VStack
      border="1px solid"
      borderColor="neutral.700"
      p="4"
      borderRadius="8px"
      w="full"
      alignItems="flex-start"
    >
      <Text textStyle="body.3.semibold" color="neutral.0">
        Serving Size:
      </Text>

      <HStack alignItems="flex-end">
        {SERVING_SIZE_TYPES.map((size) => {
          const isCurrentSize = size.name === serving_size.name;
          const styles = SERVING_SIZE_STYLES[`${isCurrentSize}`];

          return (
            <VStack
              key={size.name}
              borderRadius="8px"
              w="26"
              h="29"
              minW="26"
              justifyContent="center"
              border="1px solid"
              borderColor={styles.borderColor}
              bg={styles.bg}
            >
              <Box color={styles.color}>
                <LuCoffee
                  size={size.size}
                  color="currentColor"
                  fill={styles.fill}
                  strokeWidth={1.5}
                />
              </Box>
              <Text textStyle="body.1" color={styles.color}>
                {size.name}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    </VStack>
  );
};
