import { Drawer, Grid, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

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
        {/* Category */}
        <Skeleton
          w="6rem"
          h="1.75rem"
          borderRadius="full"
          mt="4"
          mb="4"
          {...skeletonProps}
        />

        {/* Title */}
        <Skeleton w="16rem" h="2.5rem" mb="3" {...skeletonProps} />

        {/* Description */}
        <SkeletonText
          noOfLines={3}
          gap="2"
          w="full"
          maxW="32rem"
          mb="4"
          {...skeletonProps}
        />

        {/* Serving size graph */}
        <Skeleton
          w="full"
          h="5rem"
          borderRadius="md"
          my="4"
          {...skeletonProps}
        />

        {/* Recipe items */}
        <Grid templateColumns="repeat(8, 1fr)" gap="4" my="4" w="full">
          <Skeleton
            gridColumn="span 4"
            h="4rem"
            borderRadius="md"
            {...skeletonProps}
          />
          <Skeleton
            gridColumn="span 4"
            h="4rem"
            borderRadius="md"
            {...skeletonProps}
          />

          <Skeleton
            gridColumn="span 4"
            h="4rem"
            borderRadius="md"
            {...skeletonProps}
          />
          <Skeleton
            gridColumn="span 4"
            h="4rem"
            borderRadius="md"
            {...skeletonProps}
          />
        </Grid>

        {/* Instructions title */}
        <Skeleton w="6rem" h="1.25rem" mt="2" mb="2" {...skeletonProps} />

        {/* Instructions */}
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
