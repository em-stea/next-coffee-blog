import { Box } from "@chakra-ui/react";
import { ResponsivePicture } from "../responsive-picture/responsive-picture";
import { StrapiMedia } from "@/shared/types/strapi-response";

export const ScaledImage = ({ cover }: { cover: StrapiMedia }) => {
  return (
    <Box overflow="hidden" position="relative">
      <ResponsivePicture
        image={cover}
        alt={cover.alternativeText || ""}
        forceSize={{ mobile: "small", desktop: "large" }}
        transform="scale(1)"
        transition="transform"
        transitionTimingFunction="ease-in-out"
        transitionDuration="fast"
        _groupHover={{
          transform: "scale(1.05)",
        }}
      />
    </Box>
  );
};
