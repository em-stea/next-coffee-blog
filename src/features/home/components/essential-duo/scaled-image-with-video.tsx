"use client";

import { Box, chakra } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { StrapiMedia } from "@/shared/types/strapi-response";
import { ScaledImage } from "@/shared/components/scaled-image/scaled-image";

const ChakraVideo = chakra("video");

interface ScaledImageProps {
  cover: StrapiMedia;
  videoUrl: string;
}

export const ScaledImageWithVideo = ({ cover, videoUrl }: ScaledImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoUrl && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoUrl && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Box
      overflow="hidden"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Capa Base: Imagen */}
      <ScaledImage cover={cover} />

      {/* Capa Media: Video */}
      <ChakraVideo
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
        pointerEvents="none"
        zIndex={1}
      />

      {/* Capa Superior (Filtro): Negro con opacidad */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};
