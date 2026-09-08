"use client";

import {
  BoxProps,
  chakra,
  Image,
  Skeleton,
  type ImageProps,
} from "@chakra-ui/react";
import { useImageLoaded } from "@/shared/hooks/use-image-loaded";
import {
  StrapiMedia,
  StrapiMediaFormats,
} from "@/shared/types/strapi-response";

const Picture = chakra("picture");
const Source = chakra("source");

type StrapiFormatKey = keyof StrapiMediaFormats;

type ResponsivePictureProps = BoxProps & {
  image: StrapiMedia;
  imgProps?: ImageProps;
  alt: string;
  disableLoadingState?: boolean;
  forceSize?: {
    mobile?: StrapiFormatKey;
    desktop?: StrapiFormatKey;
  };
};

export const ResponsivePicture = ({
  image,
  imgProps,
  alt,
  disableLoadingState = false,
  forceSize,
  ...props
}: ResponsivePictureProps) => {
  const { isLoaded, imgRef, onLoad } = useImageLoaded();
  const { url, formats, alternativeText } = image;

  const resolveSrc = (
    preferredSize?: StrapiFormatKey,
    fallbackPriority: StrapiFormatKey[] = [],
  ): string => {
    if (preferredSize && formats?.[preferredSize]?.url) {
      return formats[preferredSize]!.url;
    }

    for (const key of fallbackPriority) {
      if (formats?.[key]?.url) {
        return formats[key]!.url;
      }
    }

    return url;
  };

  const mobileSrc = resolveSrc(forceSize?.mobile, ["small", "medium"]);
  const desktopSrc = resolveSrc(forceSize?.desktop, [
    "large",
    "medium",
    "small",
  ]);

  const imageAlt = alternativeText?.trim() || alt;
  const showLoading = !disableLoadingState && !isLoaded;

  return (
    <Picture
      w="full"
      h="full"
      position="relative"
      display="block"
      overflow="hidden"
      {...props}
    >
      {showLoading && (
        <Skeleton
          h="full"
          w="full"
          position="absolute"
          inset={0}
          borderRadius="8px"
          css={{
            "--start-color": "neutral-black.100",
            "--end-color": "neutral-black.200",
          }}
        />
      )}

      <Source media="(max-width: 61.999em)" srcSet={mobileSrc} />

      <Source media="(min-width: 62em)" srcSet={desktopSrc} />

      <Image
        src={desktopSrc}
        alt={imageAlt}
        loading="lazy"
        w="full"
        h="full"
        objectFit="cover"
        ref={imgRef}
        onLoad={onLoad}
        onError={onLoad}
        opacity={showLoading ? 0 : 1}
        transition={
          !disableLoadingState ? "opacity 0.3s ease-in-out" : undefined
        }
        {...imgProps}
      />
    </Picture>
  );
};
