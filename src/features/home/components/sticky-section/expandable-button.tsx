import { ArrowRightIcon } from "@/shared/components/icons";
import { Button, Box } from "@chakra-ui/react";
import Link from "next/link";

export const ExpandableButton = () => {
  return (
    <Button
      asChild
      variant="solid"
      px="6"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        "& .arrow-wrapper": {
          w: "22px",
          opacity: 1,
          ml: "0",
          transform: "translateX(0)",
        },
      }}
    >
      <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
        Explore Full Guide
        {/* Contenedor de la flecha animada */}
        <Box
          className="arrow-wrapper"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w="0"
          opacity={0}
          ml="0"
          flexShrink={0}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          overflow="hidden"
        >
          <ArrowRightIcon boxSize="12px" color="neutral.900" />
        </Box>
      </Link>
    </Button>
  );
};
