import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const CursorImage = ({
  cursorPos,
}: {
  cursorPos: { x: number; y: number };
}) => {
  if (cursorPos.x === 0 && cursorPos.y === 0) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      transform={`translate3d(${cursorPos.x - 120}px, ${cursorPos.y - 50}px, 0)`}
      pointerEvents="none"
      zIndex={9999}
      color="neutral.0"
      p="2"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/cursor-image.png" alt="Coffee" width={300} height={300} />
    </Box>
  );
};
