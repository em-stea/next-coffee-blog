import {
  Drawer,
  Separator,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const skeletonProps = {
  bg: "neutral.700",
};

export default function DrinkDrawerLoading() {
  return (
    <Drawer.Body>
      <Skeleton
        w="25rem"
        h="30rem"
        borderRadius="8px"
        flexShrink={0}
        {...skeletonProps}
      />
      <VStack align="flex-start" gap="0" w="full">
        <Skeleton
          w="6rem"
          h="1.75rem"
          borderRadius="full"
          mb="6"
          {...skeletonProps}
        />
        <Skeleton w="16rem" h="2.5rem" mb="3" {...skeletonProps} />
        <SkeletonText
          noOfLines={3}
          gap="2"
          w="full"
          maxW="32rem"
          {...skeletonProps}
        />
        <Separator w="full" color="neutral.700" border=".5px solid" mt="6" />
        <Skeleton w="7rem" h="1.25rem" mt="2" mb="2" {...skeletonProps} />
        <SkeletonText
          noOfLines={4}
          gap="2"
          w="full"
          maxW="32rem"
          {...skeletonProps}
        />
      </VStack>
    </Drawer.Body>
  );
}
